import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import {
  getLanguageAlternates,
  getLocalizedPath,
  type SupportedSeoLocale,
} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedSeoLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  const canonicalPath = getLocalizedPath(locale, "terms");

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      canonical: canonicalPath,
      ...getLanguageAlternates("terms"),
    },
  };
}

export default async function TermsOfUsePage({
  params,
}: {
  params: Promise<{ locale: SupportedSeoLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });

  const sections = [
    "acceptance",
    "services",
    "booking",
    "privacy",
    "intellectual",
    "liability",
    "contraindications",
    "changes",
    "contact",
  ];

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t("backToHome")}
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h1>
          <p className="text-muted-foreground">{t("updated")}</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <p className="text-muted-foreground">{t("intro")}</p>
          </section>

          {sections.map((sectionKey) => {
            const section = t.raw(`sections.${sectionKey}`);
            if (!section) return null;

            return (
              <section key={sectionKey} className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>

                {section.text1 && (
                  <p className="text-muted-foreground mb-4">{section.text1}</p>
                )}
                {section.text && (
                  <p className="text-muted-foreground mb-4">{section.text}</p>
                )}

                {Array.isArray(section.list) && (
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    {section.list.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.text2 && (
                  <p className="text-muted-foreground mb-4">{section.text2}</p>
                )}
                {section.text3 && (
                  <p className="text-muted-foreground mb-4">{section.text3}</p>
                )}

                {sectionKey === "contact" && (
                  <ul className="list-none space-y-2 text-muted-foreground">
                    <li>
                      Email:{" "}
                      <a
                        href={`mailto:${section.email}`}
                        className="text-primary hover:underline"
                      >
                        {section.email}
                      </a>
                    </li>
                    <li>
                      Телефон:{" "}
                      <a
                        href={`tel:${section.phone}`}
                        className="text-primary hover:underline"
                      >
                        {section.phone}
                      </a>
                    </li>
                  </ul>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
