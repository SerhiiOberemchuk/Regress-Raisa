import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Умови використання | Регресивна терапія",
  description:
    "Умови використання сайту регресивної терапії. Ознайомтеся з правилами та умовами користування нашими послугами.",
}

export default function TermsOfUse() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Умови використання</h1>
          <p className="text-muted-foreground">Останнє оновлення: 21 квітня 2024 р.</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <p className="text-muted-foreground">
              Ласкаво просимо на веб-сайт регресивної терапії. Використовуючи цей веб-сайт та послуги, ви погоджуєтесь з
              цими Умовами використання. Будь ласка, уважно прочитайте їх.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Прийняття умов</h2>
            <p className="text-muted-foreground mb-4">
              Використовуючи наш веб-сайт та послуги, ви погоджуєтесь з цими Умовами використання. Якщо ви не згодні з
              будь-якою частиною цих умов, будь ласка, не використовуйте наш веб-сайт або послуги.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Опис послуг</h2>
            <p className="text-muted-foreground mb-4">
              Ми надаємо послуги регресивної терапії, які включають, але не обмежуються:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Сеанси регресивної терапії</li>
              <li>Сеанси прогресії</li>
              <li>Терапію свідомості</li>
              <li>Консультації</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Наші послуги не замінюють професійну медичну допомогу, психіатричне лікування або психотерапію. Якщо у вас
              є серйозні психічні або фізичні проблеми зі здоров'ям, ми рекомендуємо проконсультуватися з відповідним
              медичним фахівцем.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Запис на сеанси та оплата</h2>
            <p className="text-muted-foreground mb-4">
              Запис на сеанси здійснюється через контактну форму на нашому веб-сайті, по телефону або через месенджери,
              вказані на сайті.
            </p>
            <p className="text-muted-foreground mb-4">
              Оплата послуг здійснюється згідно з тарифами, вказаними на сайті. Ми залишаємо за собою право змінювати
              тарифи, попередньо повідомивши про це на нашому веб-сайті.
            </p>
            <p className="text-muted-foreground mb-4">
              У разі скасування запису на сеанс, будь ласка, повідомте нас не пізніше ніж за 24 години до запланованого
              часу. В іншому випадку може бути застосована плата за скасування.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Конфіденційність</h2>
            <p className="text-muted-foreground mb-4">
              Ми поважаємо вашу конфіденційність і зобов'язуємось захищати ваші персональні дані. Детальну інформацію
              про те, як ми збираємо, використовуємо та захищаємо вашу інформацію, можна знайти в нашій{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Політиці конфіденційності
              </Link>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Інтелектуальна власність</h2>
            <p className="text-muted-foreground mb-4">
              Весь вміст на цьому веб-сайті, включаючи, але не обмежуючись текстом, графікою, логотипами, зображеннями,
              аудіо та відео кліпами, є власністю нашої компанії або наших ліцензіарів і захищений законами про
              авторське право.
            </p>
            <p className="text-muted-foreground mb-4">
              Ви можете переглядати та завантажувати матеріали з нашого веб-сайту для особистого, некомерційного
              використання, за умови збереження всіх повідомлень про авторські права та інші повідомлення про власність.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Обмеження відповідальності</h2>
            <p className="text-muted-foreground mb-4">
              Ми докладаємо всіх зусиль, щоб інформація на нашому веб-сайті була точною та актуальною, але не гарантуємо
              її повноту або точність. Ми не несемо відповідальності за будь-які прямі, непрямі, випадкові, спеціальні
              або наслідкові збитки, що виникають внаслідок використання або неможливості використання нашого веб-сайту
              або послуг.
            </p>
            <p className="text-muted-foreground mb-4">
              Результати сеансів регресивної терапії можуть відрізнятися для різних людей. Ми не гарантуємо конкретних
              результатів від наших послуг.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Протипоказання</h2>
            <p className="text-muted-foreground mb-4">
              Регресивна терапія має певні протипоказання. Наші послуги не рекомендуються для осіб з:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Важкими психічними розладами (шизофренія, біполярний розлад у гострій фазі)</li>
              <li>Епілепсією</li>
              <li>Станом алкогольного або наркотичного сп'яніння</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Якщо у вас є сумніви щодо можливості проходження регресивної терапії, будь ласка, проконсультуйтеся з
              вашим лікарем або зв'яжіться з нами для обговорення вашої ситуації.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Зміни до умов використання</h2>
            <p className="text-muted-foreground mb-4">
              Ми залишаємо за собою право змінювати ці Умови використання в будь-який час. Зміни набувають чинності
              після публікації на цій сторінці. Рекомендуємо періодично переглядати ці Умови використання, щоб бути в
              курсі будь-яких змін.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Контактна інформація</h2>
            <p className="text-muted-foreground mb-4">
              Якщо у вас виникли запитання щодо цих Умов використання, будь ласка, зв'яжіться з нами:
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
