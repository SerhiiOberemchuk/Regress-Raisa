import { Brain, Compass, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./section-heading";

const features = [
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "Доступ до підсвідомого",
    description:
      "Робота з глибокими спогадами, прихованими реакціями та внутрішніми причинами станів, які складно побачити лише раціонально.",
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Емоційне зцілення",
    description:
      "М'яке пропрацювання переживань, образ, страхів і накопиченої напруги з поверненням відчуття внутрішнього спокою.",
  },
  {
    icon: <Compass className="h-10 w-10 text-primary" />,
    title: "Самопізнання",
    description:
      "Глибше розуміння власних реакцій, життєвих сценаріїв, моделей поведінки та того, як вони впливають на сьогодення.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: "Розкриття ресурсу",
    description:
      "Відновлення контакту з внутрішньою опорою, ясністю, довірою до себе та відчуттям напрямку в житті.",
  },
] as const;

const explorationAreas = [
  "дитячі спогади та ранні емоційні події",
  "переломні епізоди, які досі впливають на теперішні рішення",
  "повторювані сценарії у стосунках, кар'єрі та самосприйнятті",
  "внутрішні образи, символи та глибинні асоціації підсвідомості",
  "ресурсні стани, які допомагають знайти нову точку опори",
];

export default function AboutMethod() {
  return (
    <section id="about" className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title="Про метод регресивної терапії" />

        <div className="mx-auto mb-12 max-w-4xl rounded-[1.75rem] bg-white p-6 shadow-lg md:p-8">
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Регресивна терапія допомагає зануритися в глибший контакт із собою,
            побачити джерело повторюваних станів і дати психіці можливість завершити
            те, що колись лишилося незавершеним.
          </p>

          <ul className="mb-6 space-y-2">
            {explorationAreas.map((area) => (
              <li key={area} className="flex items-start gap-2">
                <span className="font-bold text-primary">•</span>
                <span className="text-muted-foreground">{area}</span>
              </li>
            ))}
          </ul>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            У фокусі не просто спогад, а причина, через яку тривога, напруга,
            невпевненість або внутрішній конфлікт продовжують проявлятися в житті.
          </p>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Метод підходить людям, які хочуть глибше зрозуміти себе, вийти з
            виснажливих сценаріїв та відчути більше внутрішньої свободи.
          </p>
          <p className="font-medium text-muted-foreground">
            Це уважна, делікатна робота, спрямована не на драматизацію минулого, а
            на більш цілісний і спокійний стан у теперішньому.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="h-full border-none shadow-md transition-shadow hover:shadow-lg"
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">{feature.icon}</div>
                <h3 className="mb-2 font-display text-2xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-[1.75rem] bg-white p-6 shadow-lg md:p-8">
          <h3 className="mb-4 font-display text-3xl font-semibold">
            Як проходить регресивна терапія?
          </h3>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Сеанс починається з уточнення запиту та створення безпечного простору для
            роботи. Далі ви входите у глибоко розслаблений стан, у якому легше
            спостерігати внутрішні образи, відчуття та спогади.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Терапевт супроводжує процес, ставить точні запитання та допомагає пройти
            через важливі епізоди так, щоб це привело не до повторної травматизації,
            а до розуміння, розвантаження та інтеграції досвіду.
          </p>
        </div>
      </div>
    </section>
  );
}
