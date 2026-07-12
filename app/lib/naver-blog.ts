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

// ─── 카테고리 정의 (사장님 블로그 실제 카테고리 번호) ─────────────────────
const BLOG_ID = "harangmarketing";
const NAVER_BASE = "https://blog.naver.com";
const RSS_URL = "https://rss.blog.naver.com/harangmarketing.xml";
const RSS2JSON_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}&count=100`;

const CATEGORY_MAP: { no: number; parentNo: number; name: string; group: BlogGroup }[] = [
  { no: 11, parentNo: 11, name: "칼럼",         group: "칼럼"    },
  { no: 12, parentNo: 12, name: "블로그",       group: "블로그"  },
  { no: 13, parentNo: 13, name: "플레이스",     group: "플레이스"},
  { no: 14, parentNo: 14, name: "인스타/쓰레드", group: "인스타"  },
  { no:  8, parentNo:  8, name: "포트폴리오",   group: "그외"    },
];

const FETCH_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  Referer: `${NAVER_BASE}/${BLOG_ID}`,
  Accept: "application/json, text/javascript, */*; q=0.01",
  "Accept-Language": "ko-KR,ko;q=0.9",
  "X-Requested-With": "XMLHttpRequest",
};

// ─── 유틸 ────────────────────────────────────────────────────────────────────

function formatDate(raw: string): string {
  const s = String(raw ?? "").replace(/\D/g, "");
  if (s.length >= 8)
    return `${s.slice(0, 4)}.${s.slice(4, 6)}.${s.slice(6, 8)}`;
  try {
    const d = new Date(raw);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  } catch { return raw.slice(0, 10); }
}

function stripHtml(html: string): string {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
    .replace(/\s+/g, " ").trim();
}

function extractLogNo(url: string): string {
  return String(url ?? "").match(/\/(\d{8,})(?:\?|$)/)?.[1] ?? "";
}

// ─── rss2json: 최신 100개 썸네일 + excerpt 맵 ────────────────────────────────

interface RssExtra { thumbnail: string | null; excerpt: string }

async function fetchRssExtras(): Promise<Map<string, RssExtra>> {
  const map = new Map<string, RssExtra>();
  try {
    const res = await fetch(RSS2JSON_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return map;
    const data = await res.json();
    if (data.status !== "ok") return map;

    for (const item of (data.items ?? []) as {
      link?: string; thumbnail?: string; description?: string; content?: string;
    }[]) {
      const logNo = extractLogNo(item.link ?? "");
      if (!logNo) continue;

      let thumb: string | null = (item.thumbnail ?? "").startsWith("http") ? item.thumbnail! : null;
      if (!thumb && item.content) {
        const m = item.content.match(/<img[^>]+src=["']([^"']+)["']/i);
        if (m) thumb = m[1];
      }
      const raw = stripHtml(item.description ?? item.content ?? "");
      map.set(logNo, {
        thumbnail: thumb,
        excerpt: raw.length > 120 ? raw.slice(0, 120).trimEnd() + "..." : raw,
      });
    }
  } catch { /* ignore */ }
  return map;
}

// ─── 카테고리별 PostTitleListAsync 전체 페이지네이션 ────────────────────────

interface RawPost {
  logNo?: string | number;
  title?: string;
  addDate?: string;
  thumbnailUrl?: string;
}

async function fetchCategoryAll(catNo: number, parentNo: number): Promise<RawPost[]> {
  const posts: RawPost[] = [];
  let page = 1;
  let total = Infinity;
  const PER_PAGE = 30;

  while (posts.length < Math.min(total, 1000)) {
    const url =
      `${NAVER_BASE}/PostTitleListAsync.naver` +
      `?blogId=${BLOG_ID}&viewdate=&currentPage=${page}` +
      `&categoryNo=${catNo}&parentCategoryNo=${parentNo}&countPerPage=${PER_PAGE}`;

    try {
      const res = await fetch(url, { headers: FETCH_HEADERS, next: { revalidate: 3600 } });
      if (!res.ok) break;
      const text = await res.text();
      let data: { totalCount?: number; postList?: RawPost[] };
      try { data = JSON.parse(text); } catch { break; }

      if (page === 1) total = data.totalCount ?? 0;
      if (!data.postList?.length) break;
      posts.push(...data.postList);
      if (data.postList.length < PER_PAGE) break;
      page++;
    } catch { break; }
  }
  return posts;
}

// ─── 메인 export ─────────────────────────────────────────────────────────────

export async function getNaverBlogPosts(limit = 1000): Promise<NaverBlogPost[]> {
  // rss2json (썸네일/excerpt) + 카테고리별 전체 목록 — 병렬 실행
  const [rssExtras, ...categoryResults] = await Promise.all([
    fetchRssExtras(),
    ...CATEGORY_MAP.map((cat) => fetchCategoryAll(cat.no, cat.parentNo)),
  ]);

  // 카테고리 결과 합산 및 중복 제거
  const seen = new Set<string>();
  const all: NaverBlogPost[] = [];

  categoryResults.forEach((posts, idx) => {
    const { name: catName, group } = CATEGORY_MAP[idx];
    for (const p of posts) {
      const logNo = String(p.logNo ?? "");
      if (!logNo || seen.has(logNo)) continue;
      seen.add(logNo);

      const rss = rssExtras.get(logNo);
      const rawThumb = p.thumbnailUrl?.startsWith("http") ? p.thumbnailUrl : null;

      all.push({
        title: p.title ?? "",
        link: `${NAVER_BASE}/${BLOG_ID}/${logNo}`,
        thumbnail: rawThumb ?? rss?.thumbnail ?? null,
        pubDate: formatDate(p.addDate ?? ""),
        category: catName,
        excerpt: rss?.excerpt ?? "",
        group,
      });
    }
  });

  // 날짜 내림차순 정렬
  all.sort((a, b) => b.pubDate.localeCompare(a.pubDate));

  // API가 완전히 실패하면 rss2json으로 폴백
  if (all.length === 0) return rssFallback(limit);

  return all.slice(0, limit);
}

// ─── 폴백: rss2json 단독 사용 ────────────────────────────────────────────────

async function rssFallback(limit: number): Promise<NaverBlogPost[]> {
  try {
    const res = await fetch(RSS2JSON_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    if (data.status !== "ok" || !Array.isArray(data.items)) return [];

    return (data.items as {
      title?: string; link?: string; thumbnail?: string;
      pubDate?: string; categories?: string[]; description?: string; content?: string;
    }[]).slice(0, limit).map((item) => {
      const cat = (item.categories ?? [])[0] ?? "";
      const title = item.title ?? "";
      let thumbnail: string | null = (item.thumbnail ?? "").startsWith("http") ? item.thumbnail! : null;
      if (!thumbnail && item.content) {
        const m = item.content.match(/<img[^>]+src=["']([^"']+)["']/i);
        if (m) thumbnail = m[1];
      }
      const raw = stripHtml(item.description ?? item.content ?? "");

      // 카테고리 이름으로 group 결정
      const group: BlogGroup =
        cat.includes("칼럼") ? "칼럼" :
        cat.includes("플레이스") ? "플레이스" :
        cat.includes("블로그") ? "블로그" :
        cat.includes("인스타") || cat.includes("쓰레드") ? "인스타" :
        "그외";

      return {
        title,
        link: item.link ?? "",
        thumbnail,
        pubDate: formatDate(item.pubDate ?? ""),
        category: cat,
        excerpt: raw.length > 120 ? raw.slice(0, 120).trimEnd() + "..." : raw,
        group,
      };
    });
  } catch { return []; }
}
