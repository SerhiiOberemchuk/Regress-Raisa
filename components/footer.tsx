import { Suspense } from "react";
import Link from "next/link";
import { FooterYear } from "@/components/footer-year";

type FooterProps = {
  footerBackgroundImage: string;
};

export default function Footer({ footerBackgroundImage }: FooterProps) {
  return (
    <footer className="relative overflow-hidden py-14">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url("${footerBackgroundImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.12,
        }}
      />
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="font-display text-3xl font-semibold text-primary">
              RaisaRegress
            </Link>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Професійні онлайн-сеанси регресивної терапії для глибшого самопізнання,
              емоційного розвантаження та м'якої внутрішньої трансформації.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-2xl font-semibold">Навігація</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-muted-foreground transition-colors hover:text-primary">
                  Про метод
                </Link>
              </li>
              <li>
                <Link href="/#results" className="text-muted-foreground transition-colors hover:text-primary">
                  Результати
                </Link>
              </li>
              <li>
                <Link href="/#examples" className="text-muted-foreground transition-colors hover:text-primary">
                  Приклади запитів
                </Link>
              </li>
              <li>
                <Link href="/#requirements" className="text-muted-foreground transition-colors hover:text-primary">
                  Вимоги до сеансу
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-muted-foreground transition-colors hover:text-primary">
                  Питання та відповіді
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground transition-colors hover:text-primary">
                  Послуги і ціни
                </Link>
              </li>
              <li>
                <Link href="/regression-hypnosis-online" className="text-muted-foreground transition-colors hover:text-primary">
                  Регресивний гіпноз онлайн
                </Link>
              </li>
              <li>
                <Link href="/regression-therapy-price" className="text-muted-foreground transition-colors hover:text-primary">
                  Ціни на терапію
                </Link>
              </li>
              <li>
                <Link href="/regression-therapy-safety" className="text-muted-foreground transition-colors hover:text-primary">
                  Безпека і протипоказання
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-2xl font-semibold">Контакти</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">Телефон:</span>
                <br />
                <a href="tel:+380971768196" className="transition-colors hover:text-primary">
                  +380 97 176 81 96
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">Email:</span>
                <br />
                <a href="mailto:265840@gmail.com" className="transition-colors hover:text-primary">
                  265840@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">Години роботи:</span>
                <br />
                Пн-Пт: 10:00 - 19:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <p className="text-sm text-muted-foreground">
              &copy;{" "}
              <Suspense fallback={null}>
                <FooterYear />
              </Suspense>{" "}
              RaisaRegress. Усі права захищені.
            </p>
            <div className="flex items-center gap-1">
              <span className="text-sm text-muted-foreground">Сайт створено:</span>
              <a
                href="https://www.linkedin.com/in/serhii-oberemchuk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                Serhii Oberemchuk
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Політика конфіденційності
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Умови використання
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
