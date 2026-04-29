"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      const timer = setTimeout(() => setShowConsent(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowConsent(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 transition-all duration-400 ${
        showConsent
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-24 pointer-events-none"
      }`}
    >
      <div className="container mx-auto">
        <div className="relative rounded-lg border border-border bg-white p-4 shadow-lg md:p-6">
          <button
            onClick={declineCookies}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            aria-label="Закрити повідомлення про cookies"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <div className="flex-grow">
              <h3 className="mb-2 text-lg font-semibold">Ми використовуємо cookies</h3>
              <p className="text-muted-foreground">
                Цей сайт використовує cookies для покращення вашого досвіду користування.
                Натискаючи «Прийняти», ви погоджуєтесь з використанням cookies
                відповідно до нашої{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Політики конфіденційності
                </Link>
                .
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row md:mt-0">
              <Button variant="outline" onClick={declineCookies}>
                Відхилити
              </Button>
              <Button onClick={acceptCookies}>Прийняти</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
