import { getTranslations, getLocale } from "next-intl/server";
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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    metadataBase: new URL("https://raisaregress.online"),
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
          url: "/og-image.jpg",
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
      images: ["/og-image.jpg"],
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
    </main>
  );
}
