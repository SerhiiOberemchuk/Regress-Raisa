export type SupportedLocale = "uk";

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
  prices: Record<ServiceKey, string>;
};

export const defaultSiteContent: SiteContent = {
  updatedAt: "2026-02-27T00:00:00.000Z",
  images: {
    hero: "/og-image.jpeg",
    results: "/serene-blue-meditation.png",
    footerBackground: "/footer-background.jpg",
  },
  prices: {
    regression: "3600 UAH",
    progression: "3600 UAH",
    consciousness: "9800 UAH",
    consultation: "800 UAH",
  },
};
