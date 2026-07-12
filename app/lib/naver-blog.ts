export type BlogGroup = "칼럼" | "블로그" | "플레이스" | "인스타" | "그외";

export interface NaverBlogPost {
  title: string;
  link: string;
  thumbnail: string | null;
  pubDate: string;
  category: string;
  excerpt: string;
  group: BlogGroup;
}

// ─── 상수 ────────────────────────────────────────────────────────────────────
const BLOG_ID = "harangmarketing";
const NAVER_BASE = "https://blog.naver.com";
const RSS_URL = "https://rss.blog.naver.com/harangmarketing.xml";
const RSS2JSON = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}&count=40`;
const PER_PAGE = 30;

const NAVER_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  Referer: `${NAVER_BASE}/${BLOG_ID}`,
  Accept: "application/json, text/javascript, */*; q=0.01",
  "Accept-Language": "ko-KR,ko;q=0.9",
  "X-Requested-With": "XMLHttpRequest",
};

// ─── 날짜 포맷 ───────────────────────────────────────────────────────────────
function formatDate(raw: string): string {
  // addDate: YYYYMMDDHHmmss 또는 YYYYMMDD 또는 ISO
  const s = String(raw).replace(/\D/g, "");
  if (s.length >= 8) {
    return `${s.slice(0, 4)}.${s.slice(4, 6)}.${s.slice(6, 8)}`;
  }
  try {
    const d = new Date(raw);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  } catch {
    return raw.slice(0, 10);
  }
}

// ─── 카테고리 → 탭 그룹 매핑 ────────────────────────────────────────────────
function resolveGroup(categoryName: string, title: string): BlogGroup {
  const c = categoryName.toLowerCase();
  const t = title.toLowerCase();
  if (c.includes("칼럼")) return "칼럼";
  if (c.includes("플레이스") || t.includes("플레이스") || t.includes("스마트플레이스")) return "플레이스";
  if (c.includes("블로그") || t.includes("블로그")) return "블로그";
  if (
    c.includes("인스타") || c.includes("sns") || c.includes("릴스") ||
    t.includes("인스타") || t.includes("릴스") || t.includes("reels")
  ) return "인스타";
  if (t.includes("플레이스") || t.includes("스마트플레이스")) return "플레이스";
  if (t.includes("블로그")) return "블로그";
  return "그외";
}

// ─── HTML 텍스트 추출 ────────────────────────────────────────────────────────
function stripHtml(html: string): string {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
    .replace(/\s+/g, " ").trim();
}

// ─── 1단계: PostTitleListAsync로 전체 글 목록 수집 ──────────────────────────
interface RawPost {
  logNo: string | number;
  title: string;
  addDate?: string;
  categoryNo?: string | number;
  categoryName?: string;
  thumbnailUrl?: string;
}

async function fetchAllPostList(): Promise<RawPost[]> {
  const posts: RawPost[] = [];
  let page = 1;
  let total = Infinity;

  while (posts.length < Math.min(total, 1000)) {
    const url =
      `${NAVER_BASE}/PostTitleListAsync.naver` +
      `?blogId=${BLOG_ID}&viewdate=&currentPage=${page}` +
      `&categoryNo=0&parentCategoryNo=0&countPerPage=${PER_PAGE}`;

    try {
      const res = await fetch(url, {
        headers: NAVER_HEADERS,
        next: { revalidate: 3600 },
      });
      if (!res.ok) break;

      const text = await res.text();
      // Naver sometimes returns euc-kr encoded JSON as utf-8 — parse carefully
      let data: { totalCount?: number; postList?: RawPost[] };
      try { data = JSON.parse(text); } catch { break; }

      if (page === 1) total = data.totalCount ?? 0;
      if (!data.postList?.length) break;

      posts.push(...data.postList);
      if (data.postList.length < PER_PAGE) break;
      page++;
    } catch {
      break;
    }
  }

  return posts;
}

// ─── 2단계: RSS2JSON으로 최신 글 썸네일 + excerpt 맵 구축 ───────────────────
interface RssInfo {
  thumbnail: string | null;
  excerpt: string;
  category: string;
}

async function fetchRssInfoMap(): Promise<Map<string, RssInfo>> {
  const map = new Map<string, RssInfo>();
  try {
    const res = await fetch(RSS2JSON, { next: { revalidate: 3600 } });
    if (!res.ok) return map;
    const data = await res.json();
    if (data.status !== "ok") return map;

    for (const item of (data.items ?? []) as {
      link?: string; thumbnail?: string; description?: string;
      content?: string; categories?: string[];
    }[]) {
      // logNo = 마지막 숫자 경로
      const m = String(item.link ?? "").match(/\/(\d{10,})(?:\?|$)/);
      if (!m) continue;
      const logNo = m[1];

      let thumb: string | null = item.thumbnail?.startsWith("http") ? item.thumbnail : null;
      if (!thumb && item.content) {
        const im = item.content.match(/<img[^>]+src=["']([^"']+)["']/i);
        if (im) thumb = im[1];
      }

      const rawText = stripHtml(item.description ?? item.content ?? "");
      const excerpt = rawText.length > 120 ? rawText.slice(0, 120).trimEnd() + "..." : rawText;

      map.set(logNo, {
        thumbnail: thumb,
        excerpt,
        category: (item.categories ?? [])[0] ?? "",
      });
    }
  } catch { /* ignore */ }
  return map;
}

// ─── 메인 export ─────────────────────────────────────────────────────────────
export async function getNaverBlogPosts(limit = 500): Promise<NaverBlogPost[]> {
  try {
    // 병렬로 전체 목록 + RSS 썸네일 수집
    const [rawPosts, rssMap] = await Promise.all([
      fetchAllPostList(),
      fetchRssInfoMap(),
    ]);

    if (rawPosts.length === 0) return await rssFallback(limit);

    return rawPosts.slice(0, limit).map((p) => {
      const logNo = String(p.logNo);
      const rss = rssMap.get(logNo);

      const categoryName = p.categoryName ?? rss?.category ?? "";
      const title = p.title ?? "";

      // 썸네일: PostTitleListAsync → RSS → null
      const thumbnail =
        (p.thumbnailUrl?.startsWith("http") ? p.thumbnailUrl : null) ??
        rss?.thumbnail ??
        null;

      return {
        title,
        link: `${NAVER_BASE}/${BLOG_ID}/${logNo}`,
        thumbnail,
        pubDate: formatDate(p.addDate ?? ""),
        category: categoryName,
        excerpt: rss?.excerpt ?? "",
        group: resolveGroup(categoryName, title),
      };
    });
  } catch {
    return rssFallback(limit);
  }
}

// ─── RSS 폴백 (PostTitleListAsync 실패 시) ───────────────────────────────────
async function rssFallback(limit: number): Promise<NaverBlogPost[]> {
  try {
    const res = await fetch(RSS2JSON, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    if (data.status !== "ok" || !Array.isArray(data.items)) return [];

    return (data.items as {
      title?: string; link?: string; thumbnail?: string;
      pubDate?: string; categories?: string[]; description?: string; content?: string;
    }[]).slice(0, limit).map((item) => {
      const categories: string[] = item.categories ?? [];
      const title = item.title ?? "";
      const cat = categories[0] ?? "";

      let thumbnail: string | null = item.thumbnail?.startsWith("http") ? item.thumbnail : null;
      if (!thumbnail && item.content) {
        const m = item.content.match(/<img[^>]+src=["']([^"']+)["']/i);
        if (m) thumbnail = m[1];
      }

      const rawText = stripHtml(item.description ?? item.content ?? "");
      const excerpt = rawText.length > 120 ? rawText.slice(0, 120).trimEnd() + "..." : rawText;

      return {
        title,
        link: item.link ?? "",
        thumbnail,
        pubDate: formatDate(item.pubDate ?? ""),
        category: cat,
        excerpt,
        group: resolveGroup(cat, title),
      };
    });
  } catch {
    return [];
  }
}
