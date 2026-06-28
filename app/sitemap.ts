import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://harangmarketing.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/cases`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/estimate`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/process`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/naver-place-algorithm`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/cafe-blog-keywords`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/review-vs-experience`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/instagram-reels-beauty`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/delivery-review-formula`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/small-budget-place-top`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/free-check`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/refund`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
