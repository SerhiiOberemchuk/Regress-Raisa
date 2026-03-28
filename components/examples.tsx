import { Users, Heart, Brain, Lightbulb, Compass, Zap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";
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
    <section id="examples" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {examples.map((category, index) => (
            <div key={index}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
}
