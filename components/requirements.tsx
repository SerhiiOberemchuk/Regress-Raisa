import { Clock, Headphones, Bed, Wifi } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { arrayKeys } from "@/lib/array-keys-nextintl";
import type { SupportedLocale } from "@/lib/site-content-schema";

type RequirementsProps = {
  locale: SupportedLocale;
};

export default async function Requirements({ locale }: RequirementsProps) {
  const t = await getTranslations({ locale, namespace: "requirements" });

  const requirements = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: t("items.time.title"),
      description: t("items.time.description"),
    },
    {
      icon: <Headphones className="h-10 w-10 text-primary" />,
      title: t("items.headphones.title"),
      description: t("items.headphones.description"),
    },
    {
      icon: <Bed className="h-10 w-10 text-primary" />,
      title: t("items.place.title"),
      description: t("items.place.description"),
    },
    {
      icon: <Wifi className="h-10 w-10 text-primary" />,
      title: t("items.internet.title"),
      description: t("items.internet.description"),
    },
  ];

  const additionalList = arrayKeys(t.raw("additional.list"));

  return (
    <section id="requirements" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {requirements.map((requirement, index) => (
            <div key={index}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex gap-4">
                  <div className="p-3 rounded-full bg-primary/10 h-fit">
                    {requirement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {requirement.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {requirement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-6 md:p-8 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">
            {t("additional.title")}
          </h3>
          <ul className="space-y-2">
            {additionalList.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
