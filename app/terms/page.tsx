import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getAbsoluteUrl,
  getDefaultSocialImage,
  getDefaultSocialImageUrl,
  getLanguageAlternates,
} from "@/lib/seo";

const sections = [
  {
    title: "1. Прийняття умов",
    text:
      "Використовуючи сайт і послуги RaisaRegress, ви погоджуєтесь із цими умовами використання.",
  },
  {
    title: "2. Опис послуг",
    text:
      "Ми надаємо консультації, сеанси регресії, прогресії та терапії свідомості. Послуги не замінюють медичну або психіатричну допомогу.",
  },
  {
    title: "3. Запис і оплата",
    text:
      "Запис відбувається через форму на сайті або месенджери. Вартість визначається за актуальними цінами на сайті.",
  },
  {
    title: "4. Протипоказання",
    text:
      "Сеанси не проводяться у випадках тяжких психічних розладів, епілепсії та в стані алкогольного або наркотичного сп'яніння.",
  },
  {
    title: "5. Обмеження відповідальності",
    text:
      "Результати роботи індивідуальні. Ми не гарантуємо однакового ефекту для кожної людини.",
  },
  {
    title: "6. Контакти",
    text: "З питань щодо умов використання пишіть на 265840@gmail.com.",
  },
] as const;

export const metadata: Metadata = {
  title: "Умови використання | RaisaRegress",
  description: "Умови використання сайту і послуг RaisaRegress.",
  openGraph: {
    title: "Умови використання | RaisaRegress",
    description: "Умови використання сайту і послуг RaisaRegress.",
    url: getAbsoluteUrl("/terms"),
    type: "website",
    images: [getDefaultSocialImage("Умови використання — RaisaRegress")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Умови використання | RaisaRegress",
    description: "Умови використання сайту і послуг RaisaRegress.",
    images: [getDefaultSocialImageUrl()],
  },
  alternates: {
    canonical: "/terms",
    ...getLanguageAlternates("terms"),
  },
};

export default function TermsPage() {
  return (
    <main className="container mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              На головну
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Умови використання
          </h1>
          <p className="text-muted-foreground">
            Останнє оновлення: 29 квітня 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground">
            Нижче наведені базові умови користування сайтом і послугами
            RaisaRegress.
          </p>
          {sections.map((section) => (
            <section key={section.title} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
