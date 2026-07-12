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

function formatDate(raw: string): string {
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
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function resolveGroup(categories: string[], title: string): BlogGroup {
  const cat = categories.join(" ").toLowerCase();
  const t = title.toLowerCase();
  if (cat.includes("칼럼")) return "칼럼";
  if (cat.includes("플레이스") || t.includes("플레이스")) return "플레이스";
  if (cat.includes("블로그") || t.includes("블로그")) return "블로그";
  if (
    cat.includes("인스타") ||
    cat.includes("릴스") ||
    cat.includes("instagram") ||
    t.includes("인스타") ||
    t.includes("릴스") ||
    t.includes("sns")
  )
    return "인스타";
  if (t.includes("블로그")) return "블로그";
  if (t.includes("플레이스")) return "플레이스";
  return "그외";
}

// rss2json.com — reliable Naver RSS proxy with thumbnail extraction
const RSS_URL = "https://rss.blog.naver.com/harangmarketing.xml";
const RSS2JSON = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}&count=40`;

export async function getNaverBlogPosts(limit = 30): Promise<NaverBlogPost[]> {
  try {
    const res = await fetch(RSS2JSON, { next: { revalidate: 3600 } });
    if (!res.ok) return await fallbackDirectFetch(limit);

    const data = await res.json();
    if (data.status !== "ok" || !Array.isArray(data.items)) {
      return await fallbackDirectFetch(limit);
    }

    return data.items.slice(0, limit).map((item: {
      title?: string;
      link?: string;
      thumbnail?: string;
      pubDate?: string;
      categories?: string[];
      description?: string;
      content?: string;
    }) => {
      const categories: string[] = item.categories ?? [];
      const title = item.title ?? "";
      const excerpt = stripHtml(item.description ?? item.content ?? "").slice(0, 120).trimEnd();

      // rss2json provides thumbnail; fallback: extract from content
      let rawThumb: string | null = item.thumbnail && item.thumbnail.startsWith("http") ? item.thumbnail : null;
      if (!rawThumb && item.content) {
        const m = item.content.match(/<img[^>]+src=["']([^"']+)["']/i);
        if (m) rawThumb = m[1];
      }
      // Proxy through our API to bypass Naver CDN Referer blocking
      const thumbnail = rawThumb ? `/api/img-proxy?url=${encodeURIComponent(rawThumb)}` : null;

      return {
        title,
        link: item.link ?? "",
        thumbnail,
        pubDate: formatDate(item.pubDate ?? ""),
        category: categories[0] ?? "",
        excerpt: excerpt.length < (item.description?.replace(/<[^>]+>/g, "").trim().length ?? 0) ? excerpt + "..." : excerpt,
        group: resolveGroup(categories, title),
      };
    });
  } catch {
    return fallbackDirectFetch(limit);
  }
}

// Direct RSS fetch as fallback (for environments where rss2json is unavailable)
async function fallbackDirectFetch(limit: number): Promise<NaverBlogPost[]> {
  try {
    const res = await fetch(RSS_URL, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "application/rss+xml, application/xml, text/xml, */*",
        "Accept-Language": "ko-KR,ko;q=0.9",
        Referer: "https://blog.naver.com/",
      },
    });
    if (!res.ok) return [];
    const xml = await res.text();

    const items = xml.split("<item>").slice(1);
    return items.slice(0, limit).map((raw) => {
      const block = raw.split("</item>")[0];

      const extractCDATA = (tag: string): string => {
        const m = block.match(new RegExp(`<${tag}[^>]*>\\s*(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?\\s*</${tag}>`));
        return m?.[1]?.trim() ?? "";
      };
      const extractAttr = (tag: string, attr: string): string => {
        const m = block.match(new RegExp(`<${tag}[^>]+${attr}=["']([^"']+)["']`));
        return m?.[1] ?? "";
      };

      const description = extractCDATA("description");
      const title = extractCDATA("title");
      const category = extractCDATA("category");

      // thumbnail: try enclosure, media:thumbnail, media:content, then first img in description
      let rawThumb: string | null =
        extractAttr("enclosure", "url") ||
        extractAttr("media:thumbnail", "url") ||
        extractAttr("media:content", "url") ||
        null;
      if (!rawThumb) {
        const m = description.match(/<img[^>]+src=["']([^"']+)["']/i);
        if (m) rawThumb = m[1];
      }
      const thumbnail = rawThumb ? `/api/img-proxy?url=${encodeURIComponent(rawThumb)}` : null;

      const text = stripHtml(description);
      const excerpt = text.length > 120 ? text.slice(0, 120).trimEnd() + "..." : text;

      // link: try plain <link>URL</link> (no CDATA in standard RSS)
      const linkPlain = block.match(/<link>\s*([^\s<]+)\s*<\/link>/)?.[1] ?? "";
      const linkCdata = extractCDATA("link");
      const link = (linkPlain || linkCdata).replace(/\?fromRss=true.*$/, "");

      return {
        title,
        link,
        thumbnail,
        pubDate: formatDate(extractCDATA("pubDate")),
        category,
        excerpt,
        group: resolveGroup([category], title),
      };
    });
  } catch {
    return [];
  }
}
