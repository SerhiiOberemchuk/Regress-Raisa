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
  title: "Регресивна терапія | Повернення до минулого для зцілення сьогодення",
  description:
    "Професійні сеанси регресивної терапії. Вирішення психологічних проблем через повернення до минулого досвіду. Запишіться на консультацію вже сьогодні.",
  keywords: "регресивна терапія, регресологія, регресія, психотерапія, гіпноз, минулі життя, психологічна допомога",
  openGraph: {
    title: "Регресивна терапія | Повернення до минулого для зцілення сьогодення",
    description:
      "Професійні сеанси регресивної терапії. Вирішення психологічних проблем через повернення до минулого досвіду.",
    url: "https://regression-therapy.ua",
    siteName: "Регресивна терапія",
    locale: "uk_UA",
    type: "website",
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
