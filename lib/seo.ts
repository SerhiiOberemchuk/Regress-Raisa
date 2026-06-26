import type { Metadata } from "next";

export const siteUrl = "https://raisaregres.online";

export const metadataBaseUrl = new URL(siteUrl);
export const defaultSocialImagePath = "/og-image.jpg";

export const siteName = "RaisaRegress";

export const defaultTitle = "RaisaRegress | Регресивний гіпноз онлайн";
export const defaultDescription =
  "Регресивний гіпноз онлайн з Раїсою Оберемчук: індивідуальні сеанси регресивної терапії для роботи з тривогою, емоційними блоками та життєвими сценаріями.";

// Контактні дані (використовуються в Schema.org). TODO: підтвердити коректний email.
export const contactEmail = "265840@gmail.com";
export const contactPhone = "+380971768196";

// Посилання на соцмережі / зовнішні профілі для sameAs у Schema.org.
// TODO: додати реальні URL (Instagram, Facebook, Telegram, YouTube тощо).
export const socialLinks: string[] = [];

// Дата останнього змістовного оновлення сайту. Оновлюйте вручну при зміні контенту,
// щоб lastmod у sitemap відображав реальні зміни, а не дату кожного білду.
export const lastContentUpdate = "2026-06-26";

export const sitemapEntries = [
  { path: "/", changeFrequency: "yearly", priority: 1, lastModified: lastContentUpdate },
  {
    path: "/regression-hypnosis-online",
    changeFrequency: "yearly",
    priority: 0.8,
    lastModified: lastContentUpdate,
  },
  {
    path: "/regression-therapy-price",
    changeFrequency: "yearly",
    priority: 0.7,
    lastModified: lastContentUpdate,
  },
  {
    path: "/regression-therapy-safety",
    changeFrequency: "yearly",
    priority: 0.7,
    lastModified: lastContentUpdate,
  },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.5, lastModified: "2026-04-29" },
  { path: "/terms", changeFrequency: "yearly", priority: 0.5, lastModified: "2026-04-29" },
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

export function getDefaultSocialImage(
  alt = "RaisaRegress — регресивний гіпноз онлайн",
) {
  return {
    url: getDefaultSocialImageUrl(),
    width: 1200,
    height: 630,
    alt,
  };
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
