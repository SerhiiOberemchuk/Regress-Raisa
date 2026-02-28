import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AboutMethod from "@/components/about-method";
import Contact from "@/components/contact";
import Examples from "@/components/examples";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Requirements from "@/components/requirements";
import Results from "@/components/results";
import ScrollToTop from "@/components/scroll-to-top";
import Services from "@/components/services";
import { SiteContentProvider } from "@/components/site-content-provider";
import { getCachedSiteContent } from "@/lib/site-content-cache";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocaleTag,
  getLocalizedPath,
  type SupportedSeoLocale,
} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedSeoLocale }>;
}): Promise<Metadata> {
  "use cache";

  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const siteContent = await getCachedSiteContent();
  const heroImageUrl = getAbsoluteUrl(siteContent.images.hero);
  const canonicalPath = getLocalizedPath(locale);
  const canonicalUrl = getAbsoluteUrl(canonicalPath);
  const localeTag = getLocaleTag(locale);

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.keywords"),
    openGraph: {
      title: t("meta.openGraphTitle"),
      description: t("meta.openGraphDescription"),
      url: canonicalUrl,
      siteName: "RaisaRegress",
      locale: localeTag.replace("-", "_"),
      type: "website",
      images: [
        {
          url: heroImageUrl,
          width: 1200,
          height: 630,
          alt: "Raisa Oberemchuk - Regression hypnosis online",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("meta.twitterTitle"),
      description: t("meta.twitterDescription"),
      images: [heroImageUrl],
    },
    alternates: {
      canonical: canonicalPath,
      ...getLanguageAlternates(),
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: SupportedSeoLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const siteContent = await getCachedSiteContent();
  const canonicalPath = getLocalizedPath(locale);
  const canonicalUrl = getAbsoluteUrl(canonicalPath);
  const heroImageUrl = getAbsoluteUrl(siteContent.images.hero);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "RaisaRegress",
      url: getAbsoluteUrl("/"),
      inLanguage: ["uk-UA", "en-US", "it-IT"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Raisa Oberemchuk",
      jobTitle: "Regression therapist",
      url: canonicalUrl,
      image: heroImageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "RaisaRegress",
      url: canonicalUrl,
      image: heroImageUrl,
      description: t("meta.description"),
      serviceType: "Regression hypnosis sessions online",
      telephone: "+380971768196",
      email: "265840@gmail.com",
      areaServed: "Worldwide",
      availableLanguage: ["Ukrainian", "English", "Italian", "Russian"],
      provider: {
        "@type": "Person",
        name: "Raisa Oberemchuk",
      },
    },
  ];

  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteContentProvider initialContent={siteContent}>
        <Header />
        <Hero />
        <AboutMethod />
        <Results />
        <Examples />
        <Requirements />
        <Faq />
        <Services />
        <Contact />
        <Footer />
        <ScrollToTop />
      </SiteContentProvider>
    </main>
  );
}
