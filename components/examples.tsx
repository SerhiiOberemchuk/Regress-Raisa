import {
  Brain,
  Compass,
  Heart,
  Lightbulb,
  Users,
  Zap,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/design-system";
import { arrayKeys } from "@/lib/array-keys-nextintl";
import type { SupportedLocale } from "@/lib/site-content-schema";

type ExamplesProps = {
  locale: SupportedLocale;
};

export default async function Examples({ locale }: ExamplesProps) {
  const t = await getTranslations({ locale, namespace: "examples" });

  const examples = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t("categories.relationships.title"),
      items: arrayKeys(t.raw("categories.relationships.questions")),
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: t("categories.emotions.title"),
      items: arrayKeys(t.raw("categories.emotions.questions")),
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: t("categories.self.title"),
      items: arrayKeys(t.raw("categories.self.questions")),
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: t("categories.career.title"),
      items: arrayKeys(t.raw("categories.career.questions")),
    },
    {
      icon: <Compass className="h-8 w-8 text-primary" />,
      title: t("categories.lifePath.title"),
      items: arrayKeys(t.raw("categories.lifePath.questions")),
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: t("categories.health.title"),
      items: arrayKeys(t.raw("categories.health.questions")),
    },
  ];

  return (
    <section id="examples" className="bg-[linear-gradient(180deg,rgba(244,238,230,0.36),rgba(255,252,248,0))] py-18 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {examples.map((category, index) => (
            <div
              key={index}
              className="motion-safe:animate-soft-fade-up"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <Card className="group h-full overflow-hidden border-white/70 bg-[linear-gradient(155deg,rgba(255,252,248,0.9),rgba(246,239,231,0.76))] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_34px_80px_-58px_rgba(54,36,25,0.52)]">
                <CardContent className="p-7">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-105">
                        {category.icon}
                      </div>
                      <h3 className="text-[1.45rem] leading-tight font-semibold">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary/45">
                      0{index + 1}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/55" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-300 mx-auto mt-14 max-w-3xl">
          <p className="text-center text-lg text-muted-foreground">{t("disclaimer")}</p>
        </div>
      </div>
    </section>
  );
}
