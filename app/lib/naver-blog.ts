const RSS_URL = "https://rss.blog.naver.com/harangmarketing.xml";

export interface NaverBlogPost {
  title: string;
  link: string;
  thumbnail: string | null;
  pubDate: string;
  category: string;
  excerpt: string;
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
  // description에서 HTML 태그 제거 후 앞 120자
  return description
    .replace(/<img[^>]*>/g, "")
    .replace(/<[^>]*>/g, "")
    .trim()
    .slice(0, 120)
    .replace(/\.{3,}$/, "")
    .trimEnd() + "...";
}

function formatDate(pubDate: string): string {
  try {
    const d = new Date(pubDate);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  } catch {
    return pubDate.slice(0, 10);
  }
}

export async function getNaverBlogPosts(limit = 20): Promise<NaverBlogPost[]> {
  try {
    const res = await fetch(RSS_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();

    const items = xml.split("<item>").slice(1);
    return items.slice(0, limit).map((raw) => {
      const itemXml = raw.split("</item>")[0];
      const description = extractTag(itemXml, "description");
      return {
        title: extractTag(itemXml, "title"),
        link: extractTag(itemXml, "link").replace(/\?fromRss=true&trackingCode=rss$/, ""),
        thumbnail: extractThumbnail(description),
        pubDate: formatDate(extractTag(itemXml, "pubDate")),
        category: extractTag(itemXml, "category") || "마케팅",
        excerpt: extractExcerpt(description),
      };
    });
  } catch {
    return [];
  }
}
