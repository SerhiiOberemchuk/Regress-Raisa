import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/lib/site-content-schema";

type HeroProps = {
  locale: SupportedLocale;
  imageSrc: string;
};

export default async function Hero({ locale, imageSrc }: HeroProps) {
  const t = await getTranslations({ locale, namespace: "hero" });

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/4 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              {t("title.part1")} <br />
              {t("title.part2")} <br />
              <span className="text-primary">{t("title.part3")}</span>
            </h1>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold md:text-3xl">
                {t("heroname")}
              </h2>
              <p className="text-lg font-medium text-primary">{t("position")}</p>
            </div>
            <p className="text-lg text-muted-foreground">{t("description")}</p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/#contact">{t("buttonsbs")}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/#about">{t("btnmore")}</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-square max-w-md">
              <Image
                src={imageSrc}
                alt="Regression specialist portrait"
                width={600}
                height={600}
                className="rounded-2xl object-cover shadow-xl"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 ring-inset" />
            </div>

            <div className="absolute -top-6 -right-6 z-10 rounded-lg bg-white p-4 shadow-lg">
              <p className="font-medium">95% {t("clients")}</p>
              <p className="text-sm text-muted-foreground">{t("changes")}</p>
            </div>

            <div className="absolute -bottom-6 -left-6 z-10 rounded-lg bg-white p-4 shadow-lg">
              <p className="font-medium">10+ {t("years")}</p>
              <p className="text-sm text-muted-foreground">{t("exsp")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
