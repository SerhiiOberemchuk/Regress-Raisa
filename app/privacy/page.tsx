import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getAbsoluteUrl,
  getDefaultSocialImageUrl,
  getLanguageAlternates,
} from "@/lib/seo";

const sections = [
  {
    title: "1. Збір інформації",
    text:
      "Ми збираємо лише ту інформацію, яку ви добровільно залишаєте через форму зворотного зв'язку або під час комунікації з нами: ім'я, email, телефон і зміст повідомлення.",
  },
  {
    title: "2. Використання інформації",
    text:
      "Дані використовуються для відповіді на ваші запити, організації консультацій, запису на сеанси та покращення якості сервісу.",
  },
  {
    title: "3. Захист інформації",
    text:
      "Ми вживаємо організаційних і технічних заходів, щоб захистити ваші персональні дані від несанкціонованого доступу, зміни або втрати.",
  },
  {
    title: "4. Конфіденційність сеансів",
    text:
      "Уся інформація, обговорена під час сеансів, залишається конфіденційною і не передається третім особам без вашої згоди, окрім випадків, передбачених законом.",
  },
  {
    title: "5. Cookies",
    text:
      "Сайт може використовувати cookies для покращення роботи та аналітики. Ви можете змінити ці налаштування у своєму браузері.",
  },
  {
    title: "6. Контакти",
    text:
      "Якщо у вас є питання щодо обробки персональних даних, напишіть на 265840@gmail.com.",
  },
] as const;

export const metadata: Metadata = {
  title: "Політика конфіденційності | RaisaRegress",
  description: "Політика конфіденційності сайту RaisaRegress.",
  openGraph: {
    title: "Політика конфіденційності | RaisaRegress",
    description: "Політика конфіденційності сайту RaisaRegress.",
    url: getAbsoluteUrl("/privacy"),
    type: "website",
    images: [{ url: getDefaultSocialImageUrl() }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Політика конфіденційності | RaisaRegress",
    description: "Політика конфіденційності сайту RaisaRegress.",
    images: [getDefaultSocialImageUrl()],
  },
  alternates: {
    canonical: "/privacy",
    ...getLanguageAlternates("privacy"),
  },
};

export default function PrivacyPage() {
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
            Політика конфіденційності
          </h1>
          <p className="text-muted-foreground">
            Останнє оновлення: 29 квітня 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground">
            Ця політика описує, як обробляються дані, які ви залишаєте на сайті
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
