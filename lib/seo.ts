import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://raisaregres.online";

function normalizeSiteUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
);

export const metadataBaseUrl = new URL(siteUrl);
export const defaultSocialImagePath = "/og-image.jpg";

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
