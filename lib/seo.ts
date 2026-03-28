import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://www.raisaregress.online";

function normalizeSiteUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
);

export const metadataBaseUrl = new URL(siteUrl);
export const defaultSocialImagePath = "/og-image.jpg";

export type SupportedSeoLocale = "uk" | "en" | "it";

export function getLocaleTag(locale: SupportedSeoLocale): string {
  if (locale === "uk") return "uk-UA";
  if (locale === "en") return "en-US";
  return "it-IT";
}

export function getLocalizedPath(
  locale: SupportedSeoLocale,
  path = "",
): string {
  if (locale === "uk") {
    return path ? `/${path}` : "/";
  }

  if (!path) return `/${locale}`;
  return `/${locale}/${path}`;
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
      "en-US": getLocalizedPath("en", normalizedPath),
      "it-IT": getLocalizedPath("it", normalizedPath),
      "x-default": getLocalizedPath("uk", normalizedPath),
    },
  };
}
