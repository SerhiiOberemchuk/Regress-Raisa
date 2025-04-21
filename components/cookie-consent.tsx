"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    // Save consent to localStorage
    localStorage.setItem("cookieConsent", "true")
    localStorage.setItem("cookieConsentDate", new Date().toISOString())
    setShowConsent(false)
  }

  const declineCookies = () => {
    // Save decline to localStorage
    localStorage.setItem("cookieConsent", "false")
    localStorage.setItem("cookieConsentDate", new Date().toISOString())
    setShowConsent(false)
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 border border-border relative">
              <button
                onClick={declineCookies}
                className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                aria-label="Закрити повідомлення про cookies"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">Ми використовуємо cookies</h3>
                  <p className="text-muted-foreground">
                    Цей сайт використовує cookies для покращення вашого досвіду користування. Cookies допомагають нам
                    аналізувати використання сайту та персоналізувати контент. Натискаючи "Прийняти", ви погоджуєтесь з
                    використанням cookies відповідно до нашої{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      Політики конфіденційності
                    </a>
                    .
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-2 md:mt-0">
                  <Button variant="outline" onClick={declineCookies}>
                    Відхилити
                  </Button>
                  <Button onClick={acceptCookies}>Прийняти</Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
