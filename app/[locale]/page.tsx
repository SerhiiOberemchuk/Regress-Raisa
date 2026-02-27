import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Header from "@/components/header";
import Hero from "@/components/hero";
import AboutMethod from "@/components/about-method";
import Results from "@/components/results";
import Examples from "@/components/examples";
import Requirements from "@/components/requirements";
import Faq from "@/components/faq";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import { SiteContentProvider } from "@/components/site-content-provider";
import { readSiteContent } from "@/lib/site-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  "use cache";
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const siteContent = await readSiteContent();
  const heroImageUrl = siteContent.images.hero.startsWith("http")
    ? siteContent.images.hero
    : `https://raisaregress.online${siteContent.images.hero}`;

  return {
    applicationName: "RaisaRegress",
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.keywords"),
    openGraph: {
      title: t("meta.openGraphTitle"),
      description: t("meta.openGraphDescription"),
      url: "https://raisaregress.online",
      siteName: "RaisaRegress",
      locale: locale === "uk" ? "uk_UA" : locale === "en" ? "en_US" : "it_IT",
      type: "website",
      images: [
        {
          url: heroImageUrl,
          width: 1200,
          height: 630,
          alt: "Раїса Оберемчук - Регресивний гіпноз онлайн",
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
      canonical: "https://raisaregress.online",
      languages: {
        "uk-UA": "/uk",
        "en-US": "/en",
        "it-IT": "/it",
      },
    },
  };
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <SiteContentProvider>
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
