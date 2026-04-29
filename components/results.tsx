import Image from "next/image";
import { CheckCircle } from "lucide-react";
import SectionHeading from "./section-heading";

type ResultsProps = {
  imageSrc: string;
};

const results = [
  "Зменшення тривоги, внутрішньої напруги та емоційного виснаження",
  "Розуміння причин повторюваних життєвих сценаріїв",
  "Послаблення глибинних страхів, внутрішніх заборон і блоків",
  "Покращення стосунків із собою та з близькими людьми",
  "Більше ясності у власних рішеннях і відчуття внутрішньої опори",
  "Звільнення від обмежувальних переконань і старих ролей",
  "Кращий контакт із власними потребами, межами та ресурсом",
  "Відчуття цілісності та спокійнішого проживання теперішнього",
];

export default function Results({ imageSrc }: ResultsProps) {
  return (
    <section id="results" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Який результат ви можете відчути після сеансу?"
          subtitle="Регресивна терапія працює не лише з симптомом, а з його глибинною причиною, тому зміни часто відчуваються і на емоційному, і на поведінковому рівні."
        />

        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square max-w-md lg:mx-0">
            <div className="absolute inset-0 -z-10 -translate-x-4 translate-y-4 rounded-full bg-primary/10" />
            <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src={imageSrc}
                alt="Результати регресивної терапії"
                fill
                sizes="(min-width: 1024px) 32rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ul className="space-y-4">
            {results.map((result) => (
              <li key={result} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <span className="text-lg leading-relaxed">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-[1.75rem] border border-primary/20 bg-primary/5 p-6 md:p-8">
          <p className="text-center font-display text-2xl font-medium italic md:text-3xl">
            Регресивна терапія не повертає вас у минуле заради минулого. Вона
            допомагає змінити те, як минуле продовжує впливати на ваше сьогодення.
          </p>
        </div>
      </div>
    </section>
  );
}
