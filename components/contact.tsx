"use client";

import type React from "react";
import { useState } from "react";
import { Clock, Mail, Phone } from "lucide-react";
import SectionHeading from "./section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
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
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError(null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Щось пішло не так. Спробуйте ще раз.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Помилка відправки форми:", error);
      setFormError(
        error instanceof Error
          ? error.message
          : "Виникла помилка при відправці форми",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Телефон",
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
      title: "Години роботи",
      details: "Пн-Пт: 10:00 - 19:00",
      link: null,
    },
  ] as const;

  return (
    <section id="contact" className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Записатися на сеанс"
          subtitle="Залиште свої контактні дані, і я зв'яжуся з вами для узгодження деталей."
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="rounded-[1.75rem] bg-white p-6 shadow-lg">
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
                  <h3 className="font-display text-3xl font-semibold text-green-600">
                    Дякую за звернення
                  </h3>
                  <p className="mb-6 mt-2 text-muted-foreground">
                    Повідомлення отримано. Я зв'яжуся з вами найближчим часом.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full">
                    Надіслати ще одне повідомлення
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="mb-6 font-display text-3xl font-semibold">Заповніть форму</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="mb-1 block text-sm font-medium">
                        Ваше ім'я *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Введіть ваше ім'я"
                        className="rounded-2xl"
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
                        placeholder="Введіть ваш email"
                        className="rounded-2xl"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                        Телефон *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Введіть ваш телефон"
                        className="rounded-2xl"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1 block text-sm font-medium">
                        Повідомлення
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Опишіть ваш запит або поставте питання"
                        rows={4}
                        className="rounded-2xl"
                      />
                    </div>
                    {formError ? <p className="text-sm text-red-500">{formError}</p> : null}
                    <Button
                      type="submit"
                      className="w-full rounded-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Надсилання..." : "Надіслати"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-6 font-display text-3xl font-semibold">
                Контактна інформація
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="h-fit rounded-full bg-primary/10 p-2">{item.icon}</div>
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

            <div className="mt-12 rounded-[1.75rem] bg-white p-6 shadow-lg">
              <h3 className="mb-4 font-display text-3xl font-semibold">
                Або зв'яжіться через месенджери
              </h3>
              <div className="mt-4 flex gap-4">
                <Button asChild variant="outline" className="flex-1 rounded-full">
                  <a href="https://t.me/raisa_orb" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1 rounded-full">
                  <a href="viber://add?number=380971768196" target="_blank" rel="noopener noreferrer">
                    Viber
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1 rounded-full">
                  <a href="https://wa.me/393515179190" target="_blank" rel="noopener noreferrer">
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
