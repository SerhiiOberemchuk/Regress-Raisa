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

export const IMAGE_KEYS = ["hero", "results", "footerBackground"] as const;
export type ImageKey = (typeof IMAGE_KEYS)[number];

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

const sanitizePath = (value: unknown, fallback: string): string => {
  if (typeof value !== "string") {
    return fallback;
  }

  const trimmed = value.trim();
  if (!trimmed.startsWith("/")) {
    return fallback;
  }

  return trimmed;
};

const sanitizeText = (value: unknown, fallback: string): string => {
  if (typeof value !== "string") {
    return fallback;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : fallback;
};

export const normalizeSiteContent = (input: unknown): SiteContent => {
  const payload =
    input && typeof input === "object" ? (input as Partial<SiteContent>) : {};
  const payloadImages = (payload.images ?? {}) as Partial<SiteContent["images"]>;
  const payloadPrices = (payload.prices ?? {}) as Partial<SiteContent["prices"]>;

  return {
    updatedAt:
      typeof payload.updatedAt === "string"
        ? payload.updatedAt
        : defaultSiteContent.updatedAt,
    images: {
      hero: sanitizePath(payloadImages.hero, defaultSiteContent.images.hero),
      results: sanitizePath(
        payloadImages.results,
        defaultSiteContent.images.results
      ),
      footerBackground: sanitizePath(
        payloadImages.footerBackground,
        defaultSiteContent.images.footerBackground
      ),
    },
    prices: {
      regression: {
        uk: sanitizeText(
          payloadPrices.regression?.uk,
          defaultSiteContent.prices.regression.uk
        ),
        en: sanitizeText(
          payloadPrices.regression?.en,
          defaultSiteContent.prices.regression.en
        ),
        it: sanitizeText(
          payloadPrices.regression?.it,
          defaultSiteContent.prices.regression.it
        ),
      },
      progression: {
        uk: sanitizeText(
          payloadPrices.progression?.uk,
          defaultSiteContent.prices.progression.uk
        ),
        en: sanitizeText(
          payloadPrices.progression?.en,
          defaultSiteContent.prices.progression.en
        ),
        it: sanitizeText(
          payloadPrices.progression?.it,
          defaultSiteContent.prices.progression.it
        ),
      },
      consciousness: {
        uk: sanitizeText(
          payloadPrices.consciousness?.uk,
          defaultSiteContent.prices.consciousness.uk
        ),
        en: sanitizeText(
          payloadPrices.consciousness?.en,
          defaultSiteContent.prices.consciousness.en
        ),
        it: sanitizeText(
          payloadPrices.consciousness?.it,
          defaultSiteContent.prices.consciousness.it
        ),
      },
      consultation: {
        uk: sanitizeText(
          payloadPrices.consultation?.uk,
          defaultSiteContent.prices.consultation.uk
        ),
        en: sanitizeText(
          payloadPrices.consultation?.en,
          defaultSiteContent.prices.consultation.en
        ),
        it: sanitizeText(
          payloadPrices.consultation?.it,
          defaultSiteContent.prices.consultation.it
        ),
      },
    },
  };
};
