import { Brain, Compass, Heart, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/design-system";
import type { SupportedLocale } from "@/lib/site-content-schema";

type AboutMethodProps = {
  locale: SupportedLocale;
};

export default async function AboutMethod({ locale }: AboutMethodProps) {
  const t = await getTranslations({ locale, namespace: "about" });

  const features = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: t("benefits.access.title"),
      description: t("benefits.access.description"),
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: t("benefits.healing.title"),
      description: t("benefits.healing.description"),
    },
    {
      icon: <Compass className="h-10 w-10 text-primary" />,
      title: t("benefits.awareness.title"),
      description: t("benefits.awareness.description"),
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: t("benefits.potential.title"),
      description: t("benefits.potential.description"),
    },
  ];

  const explorationAreas = Object.values(t.raw("list")) as string[];

  return (
    <section id="about" className="py-18 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("title")} />

        <div className="relative mx-auto mb-16 max-w-6xl overflow-hidden rounded-[2.4rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,251,246,0.88),rgba(245,236,225,0.76))] p-8 shadow-[0_46px_120px_-72px_rgba(52,35,24,0.6)] md:p-12">
          <div className="absolute -left-14 top-12 h-40 w-40 rounded-full bg-[rgba(126,154,140,0.12)] blur-3xl" />
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[rgba(113,74,50,0.08)] blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.28em] text-primary/65">
                  {t("sectionLabels.method")}
                </p>
                <p className="mt-5 max-w-xl text-lg text-muted-foreground md:text-[1.08rem]">
                  {t("intro")}
                </p>
              </div>

              <div className="mt-8 border-l border-primary/20 pl-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
                  {t("sectionLabels.note")}
                </p>
                <p className="mt-3 max-w-lg text-muted-foreground">{t("conclusion")}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {explorationAreas.map((area, index) => (
                <div
                  key={index}
                  className="rounded-[1.6rem] border border-white/70 bg-[rgba(255,255,255,0.58)] px-5 py-5 shadow-[0_18px_40px_-34px_rgba(59,39,27,0.38)] backdrop-blur-sm"
                >
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary/55">
                    0{index + 1}
                  </span>
                  <p className="mt-3 text-[0.98rem] text-muted-foreground">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="rounded-[2rem] border border-border/70 bg-[rgba(255,252,248,0.72)] p-7 shadow-[0_28px_70px_-58px_rgba(54,36,25,0.48)] md:p-8">
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-primary/65">
              {t("sectionLabels.depth")}
            </p>
            <p className="mt-5 text-muted-foreground">{t("deepWork")}</p>
            <p className="mt-5 text-muted-foreground">{t("suitableFor")}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index}>
                <Card className="group h-full overflow-hidden border-white/70 bg-[linear-gradient(155deg,rgba(255,252,248,0.88),rgba(247,239,231,0.76))] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_34px_80px_-58px_rgba(54,36,25,0.55)]">
                  <CardContent className="flex h-full flex-col p-7">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-105">
                        {feature.icon}
                      </div>
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary/45">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mb-3 text-[1.7rem] leading-tight font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-[2.2rem] border border-primary/15 bg-[linear-gradient(140deg,rgba(126,154,140,0.11),rgba(255,251,246,0.9))] p-8 shadow-[0_30px_80px_-58px_rgba(54,36,25,0.42)] md:p-10">
          <h3 className="mb-4 max-w-[16ch] text-3xl leading-tight font-semibold md:text-[2.3rem]">
            {t("questionTitle")}
          </h3>
          <div className="grid gap-5 md:grid-cols-2">
            <p className="text-muted-foreground">{t("questionAnswer1")}</p>
            <p className="text-muted-foreground">{t("questionAnswer2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
