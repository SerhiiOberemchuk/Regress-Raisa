"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useTranslations } from "next-intl"
import { useLocale } from "next-intl"

export default function PrivacyPolicyClient() {
  const t = useTranslations("privacy")
  const locale = useLocale()

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/" locale={locale} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t("backToHome")}
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h1>
          <p className="text-muted-foreground">{t("lastUpdated")}</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <p className="text-muted-foreground">{t("intro")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("sections.collection.title")}</h2>
            <p className="text-muted-foreground mb-4">{t("sections.collection.intro")}</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              {Object.keys(t.raw("sections.collection.items")).map((key) => (
                <li key={key}>{t(`sections.collection.items.${key}`)}</li>
              ))}
            </ul>
            <p className="text-muted-foreground">{t("sections.collection.outro")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("sections.usage.title")}</h2>
            <p className="text-muted-foreground mb-4">{t("sections.usage.intro")}</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              {Object.keys(t.raw("sections.usage.items")).map((key) => (
                <li key={key}>{t(`sections.usage.items.${key}`)}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("sections.protection.title")}</h2>
            <p className="text-muted-foreground mb-4">{t("sections.protection.intro")}</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              {Object.keys(t.raw("sections.protection.items")).map((key) => (
                <li key={key}>{t(`sections.protection.items.${key}`)}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("sections.confidentiality.title")}</h2>
            <p className="text-muted-foreground mb-4">{t("sections.confidentiality.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("sections.cookies.title")}</h2>
            <p className="text-muted-foreground mb-4">{t("sections.cookies.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("sections.thirdParty.title")}</h2>
            <p className="text-muted-foreground mb-4">{t("sections.thirdParty.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("sections.changes.title")}</h2>
            <p className="text-muted-foreground mb-4">{t("sections.changes.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("sections.rights.title")}</h2>
            <p className="text-muted-foreground mb-4">{t("sections.rights.intro")}</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              {Object.keys(t.raw("sections.rights.items")).map((key) => (
                <li key={key}>{t(`sections.rights.items.${key}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("sections.contact.title")}</h2>
            <p className="text-muted-foreground mb-4">{t("sections.contact.intro")}</p>
            <ul className="list-none space-y-2 text-muted-foreground">
              <li>
                {t("sections.contact.email")}{" "}
                <a href="mailto:265840@gmail.com" className="text-primary hover:underline">
                  {t("sections.contact.emailValue")}
                </a>
              </li>
              <li>
                {t("sections.contact.phone")}{" "}
                <a href="tel:+380971768196" className="text-primary hover:underline">
                  {t("sections.contact.phoneValue")}
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
