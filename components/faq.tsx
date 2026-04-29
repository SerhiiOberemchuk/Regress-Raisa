"use client";

import SectionHeading from "./section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Чи безпечна регресивна терапія?",
    answer:
      "Так, за умови роботи з кваліфікованим спеціалістом. Під час сеансу ви зберігаєте контроль над процесом і можете зупинитися в будь-який момент.",
  },
  {
    question: "Чи можна не згадати нічого під час сеансу?",
    answer:
      "Таке трапляється, але це не означає, що робота була неефективною. Іноді результат проявляється пізніше у вигляді інсайтів, снів або змін стану.",
  },
  {
    question: "Скільки сеансів потрібно?",
    answer:
      "Це залежить від запиту. Деякі теми вирішуються за 1-2 сеанси, інші потребують довшої роботи. Після першої зустрічі можна точніше оцінити обсяг.",
  },
  {
    question: "Чи проводяться сеанси онлайн?",
    answer:
      "Так. Для цього достатньо стабільного інтернету, якісного звуку та спокійного місця, де вас ніхто не турбуватиме.",
  },
  {
    question: "Чи є протипоказання?",
    answer:
      "Так. Регресивна терапія не рекомендується при важких психічних розладах, епілепсії та в стані алкогольного або наркотичного сп'яніння.",
  },
] as const;

export default function Faq() {
  return (
    <section id="faq" className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Поширені питання і відповіді"
          subtitle="Відповіді на найчастіші запитання про регресивну терапію."
        />

        <div className="mx-auto mt-12 max-w-3xl rounded-[1.75rem] bg-white p-3 shadow-lg md:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="px-4 text-left font-display text-2xl font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Маєте інші питання? Напишіть мені, і ми все обговоримо до початку роботи.
          </p>
        </div>
      </div>
    </section>
  );
}
