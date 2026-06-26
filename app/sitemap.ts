import type { MetadataRoute } from "next";
import { getAbsoluteUrl, sitemapEntries } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries.map((entry) => ({
    url: getAbsoluteUrl(entry.path),
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
