import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy.privacy" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  const sections = [
    "collection",
    "usage",
    "protection",
    "confidentiality",
    "cookies",
    "externalLinks",
    "policyChanges",
    "yourRights",
    "contactInfo",
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

          {sections.map((key) => (
            <section key={key} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {t(`sections.${key}.title`)}
              </h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {t(`sections.${key}.text`)}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
