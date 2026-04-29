import { Bed, Clock, Headphones, Wifi } from "lucide-react";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";

const requirements = [
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Час",
    description:
      "Виділіть 2-3 години для повноцінного сеансу, щоб не поспішати та глибоко опрацювати ваш запит.",
  },
  {
    icon: <Headphones className="h-10 w-10 text-primary" />,
    title: "Навушники",
    description:
      "Для онлайн-сеансу підготуйте зручні навушники з мікрофоном для якісного звуку та комунікації.",
  },
  {
    icon: <Bed className="h-10 w-10 text-primary" />,
    title: "Комфортне місце",
    description:
      "Знайдіть тихе місце, де вас ніхто не потурбує. Підійде крісло або ліжко для повного розслаблення.",
  },
  {
    icon: <Wifi className="h-10 w-10 text-primary" />,
    title: "Стабільний інтернет",
    description:
      "Подбайте про надійне інтернет-з'єднання, щоб уникнути переривань під час роботи.",
  },
] as const;

const additionalList = [
  "За 2-3 години до сеансу утримайтеся від алкоголю, кофеїну та важкої їжі.",
  "Одягніть зручний одяг, який не обмежує рухи та дихання.",
  "Сформулюйте свій запит або питання, з яким хочете працювати.",
  "Будьте відкриті до процесу та довіряйте своєму внутрішньому досвіду.",
];

export default function Requirements() {
  return (
    <section id="requirements" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Що потрібно для сеансу регресії?"
          subtitle="Для ефективного сеансу важливо забезпечити комфортні умови та підготуватися належним чином."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {requirements.map((requirement) => (
            <Card
              key={requirement.title}
              className="h-full rounded-[1.75rem] border-none shadow-md transition-shadow hover:shadow-xl"
            >
              <CardContent className="flex gap-4 p-6">
                <div className="h-fit rounded-full bg-primary/10 p-3">{requirement.icon}</div>
                <div>
                  <h3 className="mb-2 font-display text-2xl font-semibold">
                    {requirement.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {requirement.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-[1.75rem] bg-white p-6 shadow-lg md:p-8">
          <h3 className="mb-4 text-center font-display text-3xl font-semibold">
            Додаткові рекомендації
          </h3>
          <ul className="space-y-3">
            {additionalList.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="font-bold text-primary">•</span>
                <span className="leading-relaxed text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
