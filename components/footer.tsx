"use client"

import Link from "next/link"
import { Linkedin } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

export default function Footer() {
  const locale = useLocale()
  const t = useTranslations("footer")
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url("/footer-background.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.15,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" locale={locale} className="text-2xl font-bold text-primary">
              RaisaRegress
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">{t("description")}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("navigation.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("navigation.about")}
                </Link>
              </li>
              <li>
                <Link href="#results" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("navigation.results")}
                </Link>
              </li>
              <li>
                <Link href="#examples" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("navigation.examples")}
                </Link>
              </li>
              <li>
                <Link href="#requirements" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("navigation.requirements")}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("navigation.faq")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("navigation.services")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("navigation.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("contacts.title")}</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">{t("contacts.phone")}</span>
                <br />
                <a href="tel:+380971768196" className="hover:text-primary transition-colors">
                  +380 97 176 81 96
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">{t("contacts.email")}</span>
                <br />
                <a href="mailto:265840@gmail.com" className="hover:text-primary transition-colors">
                  265840@gmail.com
                </a>
              </li>

              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">{t("contacts.workingHours")}</span>
                <br />
                Пн-Пт: 10:00 - 19:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <p className="text-sm text-muted-foreground">{t("copyright", { year: currentYear })}</p>
            <div className="flex items-center gap-1">
              <span className="text-sm text-muted-foreground">{t("createdBy")}</span>
              <a
                href="https://www.linkedin.com/in/serhii-oberemchuk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-primary hover:underline"
              >
                {t("creatorName")}
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              locale={locale}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms"
              locale={locale}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
