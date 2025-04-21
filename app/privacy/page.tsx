import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Політика конфіденційності | Регресивна терапія",
  description:
    "Політика конфіденційності сайту регресивної терапії. Дізнайтеся, як ми збираємо, використовуємо та захищаємо ваші персональні дані.",
}

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              На головну
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Політика конфіденційності</h1>
          <p className="text-muted-foreground">Останнє оновлення: 21 квітня 2024 р.</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <p className="text-muted-foreground">
              Ця Політика конфіденційності описує, як збирається, використовується та захищається інформація, яку ви
              надаєте під час використання нашого веб-сайту та послуг регресивної терапії.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Збір інформації</h2>
            <p className="text-muted-foreground mb-4">Ми збираємо інформацію, яку ви добровільно надаєте нам, коли:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Заповнюєте контактну форму на нашому сайті</li>
              <li>Записуєтесь на сеанс регресивної терапії</li>
              <li>Підписуєтесь на нашу розсилку</li>
              <li>Спілкуєтесь з нами через електронну пошту або месенджери</li>
            </ul>
            <p className="text-muted-foreground">
              Інформація, яку ми збираємо, може включати ваше ім'я, електронну адресу, номер телефону та зміст
              повідомлень, які ви нам надсилаєте.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Використання інформації</h2>
            <p className="text-muted-foreground mb-4">Ми використовуємо зібрану інформацію для:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Надання послуг регресивної терапії</li>
              <li>Відповіді на ваші запити та питання</li>
              <li>Покращення нашого веб-сайту та послуг</li>
              <li>Надсилання інформаційних матеріалів, якщо ви дали на це згоду</li>
              <li>Адміністративних цілей, пов'язаних з нашими послугами</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Захист інформації</h2>
            <p className="text-muted-foreground mb-4">
              Ми впроваджуємо відповідні заходи безпеки для захисту вашої особистої інформації від несанкціонованого
              доступу, зміни, розкриття або знищення. Ми зобов'язуємось:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Зберігати вашу інформацію в безпечному середовищі</li>
              <li>Обмежувати доступ до вашої особистої інформації</li>
              <li>Регулярно переглядати та вдосконалювати наші методи збору, зберігання та обробки даних</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Конфіденційність сеансів</h2>
            <p className="text-muted-foreground mb-4">
              Вся інформація, яка обговорюється під час сеансів регресивної терапії, є суворо конфіденційною. Ми не
              розкриваємо зміст сеансів третім особам без вашої явної згоди, за винятком випадків, передбачених
              законодавством України.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Файли cookie</h2>
            <p className="text-muted-foreground mb-4">
              Наш веб-сайт може використовувати файли cookie для покращення вашого досвіду користування. Файли cookie —
              це невеликі файли, які зберігаються на вашому пристрої. Ви можете налаштувати свій браузер для відмови від
              усіх або деяких файлів cookie, або для сповіщення, коли веб-сайти встановлюють або отримують доступ до
              файлів cookie.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Сторонні посилання</h2>
            <p className="text-muted-foreground mb-4">
              Наш веб-сайт може містити посилання на інші веб-сайти. Ми не несемо відповідальності за практики
              конфіденційності або вміст цих сторонніх сайтів.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Зміни до політики конфіденційності</h2>
            <p className="text-muted-foreground mb-4">
              Ми можемо оновлювати нашу Політику конфіденційності час від часу. Ми повідомимо вас про будь-які зміни,
              розмістивши нову Політику конфіденційності на цій сторінці. Рекомендуємо періодично переглядати цю
              Політику конфіденційності.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Ваші права</h2>
            <p className="text-muted-foreground mb-4">Ви маєте право:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Отримати доступ до своїх персональних даних</li>
              <li>Виправити неточності у своїх персонал��них даних</li>
              <li>Видалити свої персональні дані</li>
              <li>Заперечити проти обробки ваших персональних даних</li>
              <li>Обмежити обробку ваших персональних даних</li>
              <li>Отримати свої персональні дані в структурованому, загальновживаному форматі</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Контактна інформація</h2>
            <p className="text-muted-foreground mb-4">
              Якщо у вас виникли запитання щодо цієї Політики конфіденційності, будь ласка, зв'яжіться з нами:
            </p>
            <ul className="list-none space-y-2 text-muted-foreground">
              <li>
                Email:{" "}
                <a href="mailto:265840@gmail.com" className="text-primary hover:underline">
                  265840@gmail.com
                </a>
              </li>
              <li>
                Телефон:{" "}
                <a href="tel:+380971768196" className="text-primary hover:underline">
                  +380 97 176 81 96
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
