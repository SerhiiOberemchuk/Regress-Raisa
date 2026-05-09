import type { MetadataRoute } from "next";
import { getAbsoluteUrl, sitemapEntries } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitemapEntries.map((entry) => ({
    url: getAbsoluteUrl(entry.path),
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
