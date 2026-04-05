"use client";

import type React from "react";

import { useState } from "react";
import SectionHeading from "./section-heading";
import { Button, Input, Textarea } from "@/components/design-system";
import { Clock, Mail, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function Contact() {
  const locale = useLocale();
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formError) setFormError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-locale": locale,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t("errorCustom"));
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Помилка відправки форми:", error);
      setFormError(error instanceof Error ? error.message : t("errorDefault"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: t("phoneLabel"),
      details: "+380 97 176 81 96",
      link: "tel:+380971768196",
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      details: "265840@gmail.com",
      link: "mailto:265840@gmail.com",
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: t("workingHoursLabel"),
      details: t("workHoursText"),
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-18 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="motion-safe:animate-soft-fade-up">
            <div className="rounded-[2rem] border border-border/70 bg-[rgba(255,251,246,0.84)] p-6 shadow-[0_36px_90px_-58px_rgba(54,36,25,0.52)] md:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-semibold text-green-700">
                    {t("successTitle")}
                  </h3>
                  <p className="mb-6 text-muted-foreground">{t("successText")}</p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    {t("submitAnother")}
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="mb-6 text-3xl font-semibold">{t("formTitle")}</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="mb-1 block text-sm font-medium">
                        {t("name")}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t("namePlaceholder")}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1 block text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t("emailPlaceholder")}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                        {t("phone")}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder={t("phonePlaceholder")}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1 block text-sm font-medium">
                        {t("message")}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("messagePlaceholder")}
                        rows={4}
                      />
                    </div>
                    {formError && <p className="text-sm text-red-500">{formError}</p>}
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? t("submitting") : t("submit")}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>

          <div className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-150 flex flex-col justify-between">
            <div>
              <h3 className="mb-6 text-3xl font-semibold">{t("contactInfoTitle")}</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group flex gap-4 rounded-[1.5rem] border border-border/70 bg-[rgba(255,251,246,0.76)] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_40px_-32px_rgba(54,36,25,0.4)]"
                  >
                    <div className="h-fit rounded-2xl bg-primary/10 p-3 transition-transform duration-300 group-hover:scale-105">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-muted-foreground transition-colors hover:text-primary"
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-[2rem] border border-primary/15 bg-[linear-gradient(145deg,rgba(126,154,140,0.12),rgba(255,250,245,0.86))] p-6 md:p-7">
              <h3 className="mb-4 text-3xl font-semibold">{t("messengersTitle")}</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <Button asChild variant="outline" className="w-full">
                  <a
                    href="https://t.me/raisa_orb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href="viber://add?number=380971768196"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Viber
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href="https://wa.me/393515179190"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
