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

const BLOG_ID = "harangmarketing";
const NAVER_BASE = "https://blog.naver.com";
const RSS_URL = "https://rss.blog.naver.com/harangmarketing.xml";

// rss2json — count 최대 100 (free tier)
const RSS2JSON = (count: number) =>
  `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}&count=${count}`;

// ─── 유틸 ────────────────────────────────────────────────────────────────────

function formatDate(raw: string): string {
  const s = String(raw ?? "").replace(/\D/g, "");
  if (s.length >= 8)
    return `${s.slice(0, 4)}.${s.slice(4, 6)}.${s.slice(6, 8)}`;
  try {
    const d = new Date(raw);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  } catch {
    return raw.slice(0, 10);
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
    .replace(/\s+/g, " ").trim();
}

function resolveGroup(categoryName: string, title: string): BlogGroup {
  const c = categoryName.toLowerCase();
  const t = title.toLowerCase();
  if (c.includes("칼럼")) return "칼럼";
  if (c.includes("플레이스") || t.includes("플레이스") || t.includes("스마트플레이스")) return "플레이스";
  if (c.includes("블로그") || t.includes("블로그")) return "블로그";
  if (c.includes("인스타") || c.includes("sns") || c.includes("릴스") ||
      t.includes("인스타") || t.includes("릴스"))
    return "인스타";
  if (t.includes("플레이스") || t.includes("스마트플레이스")) return "플레이스";
  if (t.includes("블로그")) return "블로그";
  return "그외";
}

function extractLogNo(url: string): string {
  return String(url ?? "").match(/\/(\d{8,})/)?.[1] ?? "";
}

// ─── 1순위: rss2json (확실히 작동, 썸네일 포함) ─────────────────────────────

interface Rss2JsonItem {
  title?: string;
  link?: string;
  thumbnail?: string;
  pubDate?: string;
  categories?: string[];
  description?: string;
  content?: string;
}

async function fetchViaRss2Json(count: number): Promise<NaverBlogPost[]> {
  const res = await fetch(RSS2JSON(count), { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`rss2json ${res.status}`);
  const data = await res.json();
  if (data.status !== "ok" || !Array.isArray(data.items)) throw new Error("rss2json bad response");

  return (data.items as Rss2JsonItem[]).map((item) => {
    const cat = (item.categories ?? [])[0] ?? "";
    const title = item.title ?? "";

    let thumbnail: string | null = (item.thumbnail ?? "").startsWith("http") ? item.thumbnail! : null;
    if (!thumbnail && item.content) {
      const m = item.content.match(/<img[^>]+src=["']([^"']+)["']/i);
      if (m) thumbnail = m[1];
    }

    const raw = stripHtml(item.description ?? item.content ?? "");
    const excerpt = raw.length > 120 ? raw.slice(0, 120).trimEnd() + "..." : raw;

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
}

// ─── 2순위: PostTitleListAsync 전체 목록 (구글 차단 시 빈배열 반환) ───────────

interface RawPost {
  logNo?: string | number;
  title?: string;
  addDate?: string;
  categoryName?: string;
  thumbnailUrl?: string;
}

async function fetchAllPostsViaApi(): Promise<RawPost[]> {
  const PER_PAGE = 30;
  const posts: RawPost[] = [];
  let page = 1;
  let total = Infinity;

  while (posts.length < Math.min(total, 1000)) {
    const url =
      `${NAVER_BASE}/PostTitleListAsync.naver` +
      `?blogId=${BLOG_ID}&viewdate=&currentPage=${page}` +
      `&categoryNo=0&parentCategoryNo=0&countPerPage=${PER_PAGE}`;

    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36",
        Referer: `${NAVER_BASE}/${BLOG_ID}`,
        Accept: "application/json, */*",
        "X-Requested-With": "XMLHttpRequest",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) break;
    const text = await res.text();
    let data: { totalCount?: number; postList?: RawPost[] };
    try { data = JSON.parse(text); } catch { break; }

    if (page === 1) total = data.totalCount ?? 0;
    if (!data.postList?.length) break;
    posts.push(...data.postList);
    if (data.postList.length < PER_PAGE) break;
    page++;
  }

  return posts;
}

// ─── 메인 export ─────────────────────────────────────────────────────────────

export async function getNaverBlogPosts(limit = 500): Promise<NaverBlogPost[]> {
  // 1. rss2json으로 최신 100개 가져오기 (썸네일+excerpt 포함, 확실한 방법)
  let rssItems: NaverBlogPost[] = [];
  try {
    rssItems = await fetchViaRss2Json(100);
  } catch {
    // rss2json 실패 → 빈 배열로 계속
  }

  // rssItems의 logNo 집합 (중복 제거용)
  const rssLogNos = new Set(rssItems.map((p) => extractLogNo(p.link)));

  // 2. PostTitleListAsync로 전체 목록 시도 (차단 시 빈 배열)
  let apiPosts: RawPost[] = [];
  try {
    apiPosts = await fetchAllPostsViaApi();
  } catch {
    // 차단 시 무시
  }

  // 3. API에서 rss에 없는 구 글만 추가
  const olderPosts: NaverBlogPost[] = apiPosts
    .filter((p) => {
      const logNo = String(p.logNo ?? "");
      return logNo && !rssLogNos.has(logNo);
    })
    .map((p) => {
      const logNo = String(p.logNo ?? "");
      const cat = p.categoryName ?? "";
      const title = p.title ?? "";
      const rawThumb = p.thumbnailUrl?.startsWith("http") ? p.thumbnailUrl : null;
      return {
        title,
        link: `${NAVER_BASE}/${BLOG_ID}/${logNo}`,
        thumbnail: rawThumb,
        pubDate: formatDate(p.addDate ?? ""),
        category: cat,
        excerpt: "",
        group: resolveGroup(cat, title),
      };
    });

  const merged = [...rssItems, ...olderPosts].slice(0, limit);

  // rss2json도 API도 모두 실패한 경우 → 직접 RSS XML 파싱
  if (merged.length === 0) {
    return directRssFallback(limit);
  }

  return merged;
}

// ─── 최후 폴백: Naver RSS XML 직접 파싱 ────────────────────────────────────

async function directRssFallback(limit: number): Promise<NaverBlogPost[]> {
  try {
    const res = await fetch(RSS_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36",
        Referer: NAVER_BASE,
        Accept: "application/rss+xml, application/xml, text/xml, */*",
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const xml = await res.text();

    return xml.split("<item>").slice(1, limit + 1).map((raw) => {
      const block = raw.split("</item>")[0];
      const get = (tag: string) => {
        const m = block.match(new RegExp(`<${tag}[^>]*>\\s*(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?\\s*</${tag}>`));
        return m?.[1]?.trim() ?? "";
      };
      const description = get("description");
      const title = get("title");
      const cat = get("category");
      const imgM = description.match(/<img[^>]+src=["']([^"']+)["']/i);
      const link = (block.match(/<link>\s*([^\s<]+)\s*<\/link>/)?.[1] ?? get("link"))
        .replace(/\?fromRss=true.*$/, "");
      const text = stripHtml(description);
      return {
        title,
        link,
        thumbnail: imgM?.[1] ?? null,
        pubDate: formatDate(get("pubDate")),
        category: cat,
        excerpt: text.length > 120 ? text.slice(0, 120).trimEnd() + "..." : text,
        group: resolveGroup(cat, title),
      };
    });
  } catch {
    return [];
  }
}
