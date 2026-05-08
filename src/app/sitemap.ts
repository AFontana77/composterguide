import type { MetadataRoute } from "next";

const BASE = "https://www.composterguide.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/lomi-review`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/best-compost-bin`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/best-worm-composter`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/lomi-vs-vitamix-foodcycler`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/lomi-vs-mill`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/best-tumbler-composter`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/composting-basics`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/how-to-compost`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/composting-mistakes`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.4 },
  ];
}
