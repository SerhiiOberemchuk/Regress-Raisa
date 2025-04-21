"use client"

import Link from "next/link"
import { Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary">
              RaisaRegress
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Професійні сеанси регресивної терапії для зцілення минулого, трансформації теперішнього та створення
              кращого майбутнього.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навігація</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Про метод
                </Link>
              </li>
              <li>
                <Link href="#results" className="text-muted-foreground hover:text-primary transition-colors">
                  Результати
                </Link>
              </li>
              <li>
                <Link href="#examples" className="text-muted-foreground hover:text-primary transition-colors">
                  Приклади запитів
                </Link>
              </li>
              <li>
                <Link href="#requirements" className="text-muted-foreground hover:text-primary transition-colors">
                  Вимоги до сеансу
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Питання і відповіді
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Послуги і ціни
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакти</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">Телефон:</span>
                <br />
                <a href="tel:+380971768196" className="hover:text-primary transition-colors">
                  +380 97 176 81 96
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">Email:</span>
                <br />
                <a href="mailto:265840@gmail.com" className="hover:text-primary transition-colors">
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

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <p className="text-sm text-muted-foreground">© {currentYear} RaisaRegress. Усі права захищені.</p>
            <div className="flex items-center gap-1">
              <span className="text-sm text-muted-foreground">Сайт створено:</span>
              <a
                href="https://www.linkedin.com/in/serhii-oberemchuk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-primary hover:underline"
              >
                Сергій Оберемчук
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Політика конфіденційності
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Умови використання
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
