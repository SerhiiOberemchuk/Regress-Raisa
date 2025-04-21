import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutMethod from "@/components/about-method"
import Results from "@/components/results"
import Examples from "@/components/examples"
import Requirements from "@/components/requirements"
import Faq from "@/components/faq"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "RaisaRegress | Регресивний гіпноз онлайн з Раїсою Оберемчук",
  description:
    "Професійні сеанси регресивного гіпнозу онлайн з Раїсою Оберемчук. Зцілення минулого для гармонійного життя сьогодні. Вирішення психологічних проблем через повернення до минулого досвіду.",
  keywords:
    "регресивний гіпноз, регресивна терапія, регресологія, Раїса Оберемчук, онлайн сеанси, регресія, психотерапія, гіпноз, минулі життя, психологічна допомога, підсвідомість",
  openGraph: {
    title: "RaisaRegress | Регресивний гіпноз онлайн з Раїсою Оберемчук",
    description:
      "Професійні сеанси регресивного гіпнозу онлайн. Зцілення минулого для гармонійного життя сьогодні. Ваш провідник до глибин підсвідомості.",
    url: "https://raisaregress.com",
    siteName: "RaisaRegress",
    locale: "uk_UA",
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
    title: "RaisaRegress | Регресивний гіпноз онлайн з Раїсою Оберемчук",
    description: "Професійні сеанси регресивного гіпнозу онлайн. Зцілення минулого для гармонійного життя сьогодні.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://raisaregress.com",
  },
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
  )
}
