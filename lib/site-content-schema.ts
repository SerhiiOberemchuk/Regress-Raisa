export const SUPPORTED_LOCALES = ["uk", "en", "it"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const SERVICE_KEYS = [
  "regression",
  "progression",
  "consciousness",
  "consultation",
] as const;
export type ServiceKey = (typeof SERVICE_KEYS)[number];

export type SiteContent = {
  updatedAt: string;
  images: {
    hero: string;
    results: string;
    footerBackground: string;
  };
  prices: Record<ServiceKey, Record<SupportedLocale, string>>;
};

export const defaultSiteContent: SiteContent = {
  updatedAt: "2026-02-27T00:00:00.000Z",
  images: {
    hero: "/og-image.jpg",
    results: "/serene-meditation.png",
    footerBackground: "/footer-background.jpg",
  },
  prices: {
    regression: {
      uk: "3600 UAH",
      en: "3600 UAH",
      it: "3600 UAH",
    },
    progression: {
      uk: "3600 UAH",
      en: "3600 UAH",
      it: "3600 UAH",
    },
    consciousness: {
      uk: "9800 UAH",
      en: "9800 UAH",
      it: "9800 UAH",
    },
    consultation: {
      uk: "800 UAH",
      en: "800 UAH",
      it: "800 UAH",
    },
  },
};
