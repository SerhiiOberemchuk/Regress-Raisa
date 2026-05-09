import type { Metadata } from "next";

export const siteUrl = "https://raisaregres.online";

export const metadataBaseUrl = new URL(siteUrl);
export const defaultSocialImagePath = "/og-image.jpg";

export const sitemapEntries = [
  { path: "/", changeFrequency: "yearly", priority: 1 },
  {
    path: "/regression-hypnosis-online",
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    path: "/regression-therapy-price",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/regression-therapy-safety",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.5 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.5 },
] as const;

export type SupportedSeoLocale = "uk";

export function getLocaleTag(locale: SupportedSeoLocale): string {
  return "uk-UA";
}

export function getLocalizedPath(
  locale: SupportedSeoLocale,
  path = "",
): string {
  return path ? `/${path}` : "/";
}

export function getAbsoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (path.startsWith("/")) {
    return `${siteUrl}${path}`;
  }

  return `${siteUrl}/${path}`;
}

export function getDefaultSocialImageUrl(): string {
  return getAbsoluteUrl(defaultSocialImagePath);
}

export function getLanguageAlternates(path = ""): Metadata["alternates"] {
  const normalizedPath = path.replace(/^\/+/, "");

  return {
    languages: {
      "uk-UA": getLocalizedPath("uk", normalizedPath),
      "x-default": getLocalizedPath("uk", normalizedPath),
    },
  };
}
