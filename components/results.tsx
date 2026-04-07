import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionHeading from "./section-heading";
import type { SupportedLocale } from "@/lib/site-content-schema";

type ResultsProps = {
  locale: SupportedLocale;
  imageSrc: string;
};

export default async function Results({ locale, imageSrc }: ResultsProps) {
  const t = await getTranslations({ locale, namespace: "results" });
  const results = Object.values(t.raw("benefits")) as string[];

  return (
    <section id="results" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-primary/10 rounded-full -z-10 transform -translate-x-4 translate-y-4" />
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={imageSrc}
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1024px) 32rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ul className="space-y-4">
            {results.map((result, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 bg-primary/5 rounded-xl p-6 md:p-8 border border-primary/20 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-medium text-center italic">
            {t("quote")}
          </p>
        </div>
      </div>
    </section>
  );
}
