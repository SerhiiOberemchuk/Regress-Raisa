"use client"

import type React from "react"

import { usePathname, useRouter } from "next/navigation"
import { useState, useCallback, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

export default function LanguageSwitcher() {
  const t = useTranslations("common")
  const pathname = usePathname()
  const router = useRouter()
  const currentLocale = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Закриваємо випадаюче меню при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Закриваємо випадаюче меню при натисканні Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  // Функція для зміни мови
  const switchLanguage = useCallback(
    (locale: string) => {
      // Отримуємо поточний шлях без префіксу локалі
      const pathWithoutLocale = pathname.replace(/^\/[^/]+/, "") || "/"

      // Формуємо новий шлях з новою локаллю
      const newPath = locale === "uk" ? pathWithoutLocale : `/${locale}${pathWithoutLocale}`

      // Переходимо на новий шлях
      router.push(newPath)
      setIsOpen(false)
    },
    [pathname, router],
  )

  const languages = {
    uk: { code: "uk", name: t("language", { locale: "uk" }) },
    en: { code: "en", name: t("language", { locale: "en" }) },
    it: { code: "it", name: t("language", { locale: "it" }) },
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-md"
        aria-label="Змінити мову"
        aria-expanded={isOpen}
        aria-controls="language-menu"
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{currentLocale}</span>
      </button>

      <AnimatedDropdown isOpen={isOpen}>
        <div
          id="language-menu"
          className="absolute top-full right-0 mt-1 bg-white rounded-md shadow-md overflow-hidden min-w-[120px] z-50"
          role="menu"
        >
          {Object.values(languages).map((language) => (
            <button
              key={language.code}
              className={`w-full text-left px-4 py-2 text-sm ${
                currentLocale === language.code ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50"
              }`}
              onClick={() => switchLanguage(language.code)}
              role="menuitem"
              aria-current={currentLocale === language.code ? "true" : "false"}
            >
              {language.name}
            </button>
          ))}
        </div>
      </AnimatedDropdown>
    </div>
  )
}

function AnimatedDropdown({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { opacity: 1, height: "auto", visibility: "visible" },
        closed: { opacity: 0, height: 0, visibility: "hidden", transitionEnd: { visibility: "hidden" } },
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}
