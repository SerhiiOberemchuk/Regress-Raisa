"use client";

import type React from "react";

import { useState } from "react";
import SectionHeading from "./section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock } from "lucide-react";
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

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
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
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
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
                  <h3 className="text-2xl font-semibold text-green-600 mb-2">
                    {t("successTitle")}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t("successText")}
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    {t("submitAnother")}
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-6">
                    {t("formTitle")}
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
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
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
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
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1"
                      >
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
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1"
                      >
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
                    {formError && (
                      <p className="text-red-500 text-sm">{formError}</p>
                    )}
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t("submitting") : t("submit")}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                {t("contactInfoTitle")}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="p-2 rounded-full bg-primary/10 h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
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

            <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                {t("messengersTitle")}
              </h3>
              <div className="flex gap-4 mt-4">
                <Button asChild variant="outline" className="flex-1">
                  <a
                    href="https://t.me/raisa_orb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a
                    href="viber://add?number=380971768196"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Viber
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
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
