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
    <section id="results" className="py-18 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="motion-safe:animate-soft-fade-up relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -left-6 top-10 h-36 w-36 rounded-full bg-[rgba(126,154,140,0.14)] blur-3xl" />
            <div className="absolute -right-6 bottom-10 h-40 w-40 rounded-full bg-[rgba(113,74,50,0.1)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.4rem] border border-white/60 bg-[rgba(255,250,244,0.58)] p-3 shadow-[0_44px_110px_-64px_rgba(54,36,25,0.62)]">
              <div className="relative aspect-[0.92] overflow-hidden rounded-[1.9rem]">
                <Image
                  src={imageSrc}
                  alt={t("imageAlt")}
                  fill
                  sizes="(min-width: 1024px) 32rem, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(40,27,19,0.02),rgba(40,27,19,0.14))]" />
              </div>
            </div>
          </div>

          <div className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-150">
            <div className="mb-6">
              <p className="text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-primary/65">
                {t("eyebrow")}
              </p>
            </div>
            <ul className="grid gap-4">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="motion-safe:animate-soft-fade-up flex items-start gap-4 rounded-[1.65rem] border border-white/65 bg-[linear-gradient(150deg,rgba(255,252,248,0.88),rgba(246,238,229,0.72))] px-5 py-5 shadow-[0_20px_48px_-36px_rgba(54,36,25,0.44)]"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg leading-relaxed">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-300 mx-auto mt-16 max-w-4xl rounded-[2.2rem] border border-primary/20 bg-[linear-gradient(145deg,rgba(113,74,50,0.06),rgba(126,154,140,0.09))] p-8 shadow-[0_30px_74px_-56px_rgba(54,36,25,0.38)] md:p-10">
          <p className="mx-auto max-w-3xl text-center font-serif text-2xl italic leading-relaxed md:text-[2.1rem]">
            {t("quote")}
          </p>
        </div>
      </div>
    </section>
  );
}
