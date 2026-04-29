import Link from "next/link";
import { Check } from "lucide-react";
import SectionHeading from "./section-heading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { SiteContent } from "@/lib/site-content-schema";

type ServicesProps = {
  siteContent: SiteContent;
};

const services = [
  {
    key: "regression",
    name: "Повноцінний сеанс регресії",
    features: [
      "Сеанс тривалістю від 1,5 до 3,5 години.",
      "Робота з потрібними просторами: дитинство, минулі життя, світ душ, рід та інше.",
      "Глибоке опрацювання одного основного запиту.",
      "Очищення від блоків, сутностей і кореневих причин проблеми.",
    ],
  },
  {
    key: "progression",
    name: "Прогресія",
    features: [
      "Повноцінний сеанс тривалістю від 1,5 до 3,5 години.",
      "Робота з майбутніми відрізками життя та потенційними сценаріями розвитку.",
      "Пошук альтернативних варіантів руху вперед.",
      "За потреби — опрацювання проблем минулого для покращення майбутнього.",
    ],
  },
  {
    key: "consciousness",
    name: "Терапія свідомості",
    features: [
      "Три повноцінні сеанси для глибокої роботи з кількома ключовими темами.",
      "Індивідуальне планування тем і супровід між зустрічами.",
      "Поетапне опрацювання трьох запитів протягом трьох місяців.",
      "Глибоке очищення причин і непрямих наслідків проблем.",
    ],
  },
  {
    key: "consultation",
    name: "Консультація",
    features: [
      "Передсеанс тривалістю 30 хвилин.",
      "Перевірка на гіпнабельність.",
      "Розбір запиту та постановка цілей для майбутнього сеансу.",
      "Відповіді на ваші питання.",
    ],
  },
] as const;

export default function Services({ siteContent }: ServicesProps) {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Послуги і ціни"
          subtitle="Оберіть оптимальний варіант роботи для вирішення вашого запиту."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.key}
              className="flex h-full flex-col rounded-[1.75rem] border-none shadow-md transition-shadow hover:shadow-xl"
            >
              <CardHeader className="pb-4">
                <CardTitle className="font-display text-3xl font-semibold">
                  {service.name}
                </CardTitle>
                <div className="mt-3">
                  <span className="font-display text-4xl font-semibold text-primary">
                    {siteContent.prices[service.key]}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary/75">
                  У вартість входить
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full rounded-full bg-primary hover:bg-primary/90 shadow-[0_14px_28px_rgba(124,58,237,0.18)]"
                >
                  <Link href="/#contact">Записатися</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-[1.75rem] border border-primary/20 bg-primary/5 p-6 text-center md:p-8">
          <h3 className="mb-4 font-display text-3xl font-semibold">
            Індивідуальний підхід
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            Кожен клієнт унікальний. Якщо вам потрібна особлива програма або
            інший формат роботи, напишіть мені, і ми підберемо найкраще рішення
            саме під ваш запит.
          </p>
        </div>
      </div>
    </section>
  );
}
