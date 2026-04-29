import { Brain, Compass, Heart, Lightbulb, Users, Zap } from "lucide-react";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";

const examples = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Стосунки",
    items: [
      "Чому я постійно притягую токсичні стосунки?",
      "Як подолати страх близькості та довіри?",
      "Чому я не можу знайти партнера для серйозних стосунків?",
    ],
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Емоційний стан",
    items: [
      "Звідки беруться мої панічні атаки?",
      "Як позбутися хронічної тривоги?",
      "Чому я відчуваю постійну втому та виснаження?",
    ],
  },
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "Самопізнання",
    items: [
      "Яке моє справжнє призначення?",
      "Чому я не можу реалізувати свій потенціал?",
      "Які мої приховані таланти та здібності?",
    ],
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Кар'єра",
    items: [
      "Чому я не можу знайти роботу, яка приносить задоволення?",
      "Звідки береться мій страх успіху?",
      "Як подолати синдром самозванця?",
    ],
  },
  {
    icon: <Compass className="h-8 w-8 text-primary" />,
    title: "Життєвий шлях",
    items: [
      "Чому я постійно наступаю на ті самі граблі?",
      "Як знайти свій шлях у житті?",
      "Чому я відчуваю, що застряг на одному місці?",
    ],
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Здоров'я",
    items: [
      "Яка психологічна причина моїх хронічних захворювань?",
      "Як зцілити психосоматичні симптоми?",
      "Чому моє тіло реагує стресом на певні ситуації?",
    ],
  },
] as const;

export default function Examples() {
  return (
    <section id="examples" className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Приклади запитів, з якими приходять клієнти"
          subtitle="Регресивна терапія допомагає знайти відповіді на різноманітні життєві питання."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {examples.map((category) => (
            <Card
              key={category.title}
              className="h-full rounded-[1.75rem] border-none shadow-md transition-shadow hover:shadow-xl"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">{category.icon}</div>
                  <h3 className="font-display text-2xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="text-muted-foreground leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Це лише частина прикладів. Регресивна терапія може допомогти і з
            багатьма іншими запитами.
          </p>
        </div>
      </div>
    </section>
  );
}
