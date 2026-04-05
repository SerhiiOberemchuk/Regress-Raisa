import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/design-system";
import type { SupportedLocale } from "@/lib/site-content-schema";

type HeroProps = {
  locale: SupportedLocale;
  imageSrc: string;
};

export default async function Hero({ locale, imageSrc }: HeroProps) {
  const t = await getTranslations({ locale, namespace: "hero" });

  return (
    <section className="relative overflow-hidden px-4 pt-28 pb-18 md:px-0 md:pt-36 md:pb-28">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="motion-safe:animate-ambient-float absolute left-[8%] top-16 h-64 w-64 rounded-full bg-[rgba(113,74,50,0.10)] blur-3xl" />
        <div className="motion-safe:animate-ambient-drift absolute right-[6%] top-8 h-72 w-72 rounded-full bg-[rgba(126,154,140,0.12)] blur-3xl" />
        <div className="motion-safe:animate-soft-fade-in absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[rgba(227,216,202,0.45)]" />
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 rounded-[2rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,252,247,0.85),rgba(247,239,230,0.72))] px-6 py-8 shadow-[0_40px_90px_-60px_rgba(64,43,29,0.65)] backdrop-blur-sm md:grid-cols-[1.08fr_0.92fr] md:px-10 md:py-12 lg:px-14 lg:py-14">
          <div className="motion-safe:animate-soft-fade-up flex flex-col space-y-7">
            <div className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-150 space-y-4">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.3em] text-primary/65">
                {t("eyebrow")}
              </p>
              <h1 className="max-w-[12ch] text-5xl leading-[0.92] font-semibold md:text-6xl lg:text-7xl">
                {t("title.part1")} <span className="text-primary/80">{t("title.part2")}</span>{" "}
                <span className="text-primary">{t("title.part3")}</span>
              </h1>
            </div>

            <div className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-300 space-y-3 border-l border-primary/20 pl-5">
              <h2 className="text-[1.6rem] font-semibold md:text-[2rem]">
                {t("heroname")}
              </h2>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">
                {t("position")}
              </p>
            </div>

            <p className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-450 max-w-2xl text-lg text-muted-foreground md:text-[1.1rem]">
              {t("description")}
            </p>

            <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              <div className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-300 rounded-2xl border border-border/70 bg-white/60 px-4 py-3">
                {t("highlights.format")}
              </div>
              <div className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-450 rounded-2xl border border-border/70 bg-white/60 px-4 py-3">
                {t("highlights.preparation")}
              </div>
              <div className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-600 rounded-2xl border border-border/70 bg-white/60 px-4 py-3">
                {t("highlights.emotions")}
              </div>
            </div>

            <div className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-600 flex flex-col gap-4 pt-2 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/#contact">{t("buttonsbs")}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/#about">{t("btnmore")}</Link>
              </Button>
            </div>
          </div>

          <div className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-300 relative">
            <div className="motion-safe:animate-ambient-drift absolute -left-4 top-10 hidden h-28 w-28 rounded-full border border-primary/15 lg:block" />
            <div className="motion-safe:animate-ambient-float absolute -right-3 bottom-12 hidden h-36 w-36 rounded-full border border-accent/30 lg:block" />
            <div className="relative mx-auto aspect-[0.9] max-w-[30rem]">
              <div className="motion-safe:animate-soft-fade-in absolute -inset-5 rounded-[2.4rem] bg-[linear-gradient(180deg,rgba(126,154,140,0.14),rgba(113,74,50,0.06))] blur-2xl" />
              <Image
                src={imageSrc}
                alt="Regression specialist portrait"
                width={600}
                height={600}
                className="relative h-full w-full rounded-[2rem] object-cover shadow-[0_36px_80px_-45px_rgba(55,35,24,0.8)]"
                priority
              />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/40 ring-inset" />
            </div>

            <div className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-450 absolute -top-4 right-0 z-10 rounded-[1.4rem] border border-white/70 bg-[rgba(255,251,246,0.88)] px-5 py-4 shadow-[0_18px_40px_-28px_rgba(54,36,25,0.6)] backdrop-blur-sm">
              <p className="font-serif text-2xl font-semibold text-primary">95%</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t("clients")} / {t("changes")}
              </p>
            </div>

            <div className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-600 absolute -bottom-4 left-0 z-10 rounded-[1.4rem] border border-white/70 bg-[rgba(251,246,239,0.9)] px-5 py-4 shadow-[0_18px_40px_-28px_rgba(54,36,25,0.6)] backdrop-blur-sm">
              <p className="font-serif text-2xl font-semibold text-primary">10+</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t("years")} / {t("exsp")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
