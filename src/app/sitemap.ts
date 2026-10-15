import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();
  return ["ar", "en"].map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1
  }));
}
