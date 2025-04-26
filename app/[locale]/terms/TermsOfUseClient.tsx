"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useTranslations } from "next-intl"
import { useLocale } from "next-intl"

export default function TermsOfUseClient() {
  const t = useTranslations("terms")
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
            <p className="text-muted-foreground">{t("welcomeMessage")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("acceptanceTitle")}</h2>
            <p className="text-muted-foreground mb-4">{t("acceptanceText")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("servicesTitle")}</h2>
            <p className="text-muted-foreground mb-4">{t("servicesDescription")}</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>{t("sessionRegression")}</li>
              <li>{t("sessionProgression")}</li>
              <li>{t("therapyConsciousness")}</li>
              <li>{t("consultations")}</li>
            </ul>
            <p className="text-muted-foreground mb-4">{t("servicesDisclaimer")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("appointmentTitle")}</h2>
            <p className="text-muted-foreground mb-4">{t("appointmentText")}</p>
            <p className="text-muted-foreground mb-4">{t("paymentText")}</p>
            <p className="text-muted-foreground mb-4">{t("cancellationText")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("confidentialityTitle")}</h2>
            <p className="text-muted-foreground mb-4">
              {t("confidentialityText")}
              <Link href="/privacy" locale={locale} className="text-primary hover:underline">
                {t("privacyPolicyLink")}
              </Link>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("intellectualPropertyTitle")}</h2>
            <p className="text-muted-foreground mb-4">{t("intellectualPropertyText")}</p>
            <p className="text-muted-foreground mb-4">{t("intellectualPropertyUsage")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("liabilityTitle")}</h2>
            <p className="text-muted-foreground mb-4">{t("liabilityText")}</p>
            <p className="text-muted-foreground mb-4">{t("resultsDisclaimer")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("contraindicationsTitle")}</h2>
            <p className="text-muted-foreground mb-4">{t("contraindicationsText")}</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>{t("contraindication1")}</li>
              <li>{t("contraindication2")}</li>
              <li>{t("contraindication3")}</li>
            </ul>
            <p className="text-muted-foreground mb-4">{t("contraindicationsDisclaimer")}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("changesTitle")}</h2>
            <p className="text-muted-foreground mb-4">{t("changesText")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("contactTitle")}</h2>
            <p className="text-muted-foreground mb-4">{t("contactText")}</p>
            <ul className="list-none space-y-2 text-muted-foreground">
              <li>
                Email:{" "}
                <a href="mailto:265840@gmail.com" className="text-primary hover:underline">
                  265840@gmail.com
                </a>
              </li>
              <li>
                Телефон:{" "}
                <a href="tel:+380971768196" className="text-primary hover:underline">
                  +380 97 176 81 96
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
