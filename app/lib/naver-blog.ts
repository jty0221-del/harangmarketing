const RSS_URL = "https://rss.blog.naver.com/harangmarketing.xml";

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

function extractTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}>\\s*(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?\\s*</${tag}>`));
  return match?.[1]?.trim() ?? "";
}

function extractThumbnail(description: string): string | null {
  const match = description.match(/<img[^>]+src=["']([^"']+)["']/);
  return match?.[1] ?? null;
}

function extractExcerpt(description: string): string {
  const text = description
    .replace(/<img[^>]*>/g, "")
    .replace(/<[^>]*>/g, "")
    .trim();
  const sliced = text.slice(0, 110).trimEnd();
  return sliced.length < text.length ? sliced + "..." : sliced;
}

function formatDate(pubDate: string): string {
  try {
    const d = new Date(pubDate);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  } catch {
    return pubDate.slice(0, 10);
  }
}

function resolveGroup(category: string, title: string, tags: string): BlogGroup {
  const t = (tags + " " + title).toLowerCase();
  if (category === "칼럼") return "칼럼";
  if (category === "블로그") return "블로그";
  if (category === "플레이스") return "플레이스";
  if (
    t.includes("인스타") ||
    t.includes("릴스") ||
    t.includes("instagram") ||
    t.includes("reels") ||
    t.includes("sns")
  )
    return "인스타";
  if (t.includes("플레이스")) return "플레이스";
  if (t.includes("블로그")) return "블로그";
  return "그외";
}

export async function getNaverBlogPosts(limit = 30): Promise<NaverBlogPost[]> {
  try {
    const res = await fetch(RSS_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();

    const items = xml.split("<item>").slice(1);
    return items.slice(0, limit).map((raw) => {
      const itemXml = raw.split("</item>")[0];
      const description = extractTag(itemXml, "description");
      const category = extractTag(itemXml, "category");
      const title = extractTag(itemXml, "title");
      const tags = extractTag(itemXml, "tag");
      return {
        title,
        link: extractTag(itemXml, "link").replace(/\?fromRss=true&trackingCode=rss$/, ""),
        thumbnail: extractThumbnail(description),
        pubDate: formatDate(extractTag(itemXml, "pubDate")),
        category,
        excerpt: extractExcerpt(description),
        group: resolveGroup(category, title, tags),
      };
    });
  } catch {
    return [];
  }
}
