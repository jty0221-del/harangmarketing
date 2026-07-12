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

const BLOG_ID    = "harangmarketing";
const NAVER_BASE = "https://blog.naver.com";
const RSS_URL    = "https://rss.blog.naver.com/harangmarketing.xml";
const RSS2JSON   = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}&count=100`;

// 카테고리 번호 → 탭 그룹
const CAT_GROUP: Record<number, { name: string; group: BlogGroup }> = {
  11: { name: "칼럼",          group: "칼럼"    },
  12: { name: "블로그",        group: "블로그"  },
  13: { name: "플레이스",      group: "플레이스"},
  14: { name: "인스타/쓰레드", group: "인스타"  },
   8: { name: "포트폴리오",    group: "그외"    },
};

const BROWSER_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  Referer:      `${NAVER_BASE}/${BLOG_ID}`,
  Accept:       "application/json, text/javascript, */*; q=0.01",
  "Accept-Language": "ko-KR,ko;q=0.9",
  "X-Requested-With": "XMLHttpRequest",
};

// ─── 유틸 ────────────────────────────────────────────────────────────────────

function fmtDate(raw: string): string {
  const s = String(raw ?? "").replace(/\D/g, "");
  if (s.length >= 8) return `${s.slice(0,4)}.${s.slice(4,6)}.${s.slice(6,8)}`;
  try {
    const d = new Date(raw);
    return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,"0")}.${String(d.getDate()).padStart(2,"0")}`;
  } catch { return raw.slice(0,10); }
}

function stripHtml(html: string): string {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g," ").replace(/&amp;/g,"&")
    .replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"')
    .replace(/\s+/g," ").trim();
}

function logNoFromUrl(url: string): string {
  return String(url ?? "").match(/\/(\d{8,})(?:\?|$)/)?.[1] ?? "";
}

function groupFromCategory(cat: string, catNo: number, title: string): BlogGroup {
  if (CAT_GROUP[catNo]) return CAT_GROUP[catNo].group;
  const c = cat.toLowerCase(), t = title.toLowerCase();
  if (c.includes("칼럼")) return "칼럼";
  if (c.includes("플레이스") || t.includes("플레이스")) return "플레이스";
  if (c.includes("블로그") || t.includes("블로그")) return "블로그";
  if (c.includes("인스타") || c.includes("쓰레드") || c.includes("sns") || t.includes("인스타")) return "인스타";
  return "그외";
}

// ─── STEP 1: rss2json으로 최신 100개 가져오기 (항상 먼저, 반드시 성공) ──────

async function fetchRss2Json(): Promise<NaverBlogPost[]> {
  const res = await fetch(RSS2JSON, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`rss2json ${res.status}`);
  const data = await res.json();
  if (data.status !== "ok" || !Array.isArray(data.items)) throw new Error("bad response");

  return (data.items as {
    title?: string; link?: string; thumbnail?: string;
    pubDate?: string; categories?: string[]; description?: string; content?: string;
  }[]).map((item) => {
    const cat  = (item.categories ?? [])[0] ?? "";
    const title = item.title ?? "";
    const logNo = logNoFromUrl(item.link ?? "");

    let thumbnail: string | null = (item.thumbnail ?? "").startsWith("http") ? item.thumbnail! : null;
    if (!thumbnail && item.content) {
      const m = item.content.match(/<img[^>]+src=["']([^"']+)["']/i);
      if (m) thumbnail = m[1];
    }
    const raw = stripHtml(item.description ?? item.content ?? "");
    return {
      title,
      link: item.link ?? "",
      thumbnail,
      pubDate: fmtDate(item.pubDate ?? ""),
      category: cat,
      excerpt: raw.length > 120 ? raw.slice(0,120).trimEnd()+"..." : raw,
      group: groupFromCategory(cat, 0, title),
      _logNo: logNo,
    } as NaverBlogPost & { _logNo: string };
  });
}

// ─── STEP 2: PostTitleListAsync로 카테고리별 전체 글 (실패해도 무시) ─────────

interface RawPost { logNo?: string|number; title?: string; addDate?: string; thumbnailUrl?: string; }

async function fetchCategoryAll(catNo: number): Promise<(RawPost & { catNo: number })[]> {
  const posts: (RawPost & { catNo: number })[] = [];
  let page = 1, total = Infinity;
  const PER = 30;

  while (posts.length < Math.min(total, 500)) {
    const url = `${NAVER_BASE}/PostTitleListAsync.naver`
      + `?blogId=${BLOG_ID}&viewdate=&currentPage=${page}`
      + `&categoryNo=${catNo}&parentCategoryNo=${catNo}&countPerPage=${PER}`;

    const res = await fetch(url, { headers: BROWSER_HEADERS, next: { revalidate: 3600 } });
    if (!res.ok) break;
    const text = await res.text();
    let data: { totalCount?: number; postList?: RawPost[] };
    try { data = JSON.parse(text); } catch { break; }

    if (page === 1) total = data.totalCount ?? 0;
    if (!data.postList?.length) break;
    posts.push(...data.postList.map(p => ({ ...p, catNo })));
    if (data.postList.length < PER) break;
    page++;
  }
  return posts;
}

// ─── 메인 export ─────────────────────────────────────────────────────────────

export async function getNaverBlogPosts(): Promise<NaverBlogPost[]> {
  // STEP 1: rss2json (반드시 먼저, 단독으로 실행)
  let rssItems: (NaverBlogPost & { _logNo?: string })[] = [];
  try {
    rssItems = await fetchRss2Json() as (NaverBlogPost & { _logNo?: string })[];
  } catch {
    // rss2json도 실패하면 빈 배열로 계속 (나중에 PostTitleListAsync로 시도)
  }

  const seen = new Set(rssItems.map(p => (p as { _logNo?: string })._logNo ?? logNoFromUrl(p.link)));

  // STEP 2: PostTitleListAsync (카테고리별, rss2json 이후 순차 실행)
  const olderPosts: NaverBlogPost[] = [];
  const catNos = Object.keys(CAT_GROUP).map(Number);

  for (const catNo of catNos) {
    try {
      const raw = await fetchCategoryAll(catNo);
      for (const p of raw) {
        const logNo = String(p.logNo ?? "");
        if (!logNo || seen.has(logNo)) continue;
        seen.add(logNo);

        const { name, group } = CAT_GROUP[catNo];
        const rawThumb = p.thumbnailUrl?.startsWith("http") ? p.thumbnailUrl : null;
        olderPosts.push({
          title:     p.title ?? "",
          link:      `${NAVER_BASE}/${BLOG_ID}/${logNo}`,
          thumbnail: rawThumb,
          pubDate:   fmtDate(p.addDate ?? ""),
          category:  name,
          excerpt:   "",
          group,
        });
      }
    } catch { /* 해당 카테고리 차단되면 무시 */ }
  }

  // rss의 _logNo 임시 필드 제거
  const cleanRss: NaverBlogPost[] = rssItems.map(({ _logNo: _, ...rest }) => rest as NaverBlogPost);

  const merged = [...cleanRss, ...olderPosts];

  // 날짜 내림차순
  merged.sort((a, b) => b.pubDate.localeCompare(a.pubDate));

  // 둘 다 0이면 — Naver RSS 직접 파싱 최후 폴백
  if (merged.length === 0) return directXmlFallback();

  return merged;
}

// ─── 최후 폴백: RSS XML 직접 파싱 ────────────────────────────────────────────

async function directXmlFallback(): Promise<NaverBlogPost[]> {
  try {
    const res = await fetch(RSS_URL, {
      headers: { "User-Agent": BROWSER_HEADERS["User-Agent"], Referer: NAVER_BASE },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    return xml.split("<item>").slice(1, 51).map(raw => {
      const b = raw.split("</item>")[0];
      const get = (tag: string) => {
        const m = b.match(new RegExp(`<${tag}[^>]*>\\s*(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?\\s*</${tag}>`));
        return m?.[1]?.trim() ?? "";
      };
      const desc  = get("description");
      const title = get("title");
      const cat   = get("category");
      const img   = desc.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1] ?? null;
      const link  = (b.match(/<link>\s*([^\s<]+)\s*<\/link>/)?.[1] ?? get("link")).replace(/\?fromRss=true.*$/,"");
      const text  = stripHtml(desc);
      return {
        title, link,
        thumbnail: img,
        pubDate:   fmtDate(get("pubDate")),
        category:  cat,
        excerpt:   text.length > 120 ? text.slice(0,120).trimEnd()+"..." : text,
        group:     groupFromCategory(cat, 0, title),
      };
    });
  } catch { return []; }
}
