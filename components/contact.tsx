"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Повідомлення надіслано!",
      description: "Дякуємо за ваше звернення. Ми зв'яжемося з вами найближчим часом.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })

    setIsSubmitting(false)
  }

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
  ]

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="ЗАПИСАТИСЯ НА СЕАНС"
          subtitle="Залиште свої контактні дані, і я зв'яжуся з вами для узгодження деталей"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Заповніть форму</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Ваше ім'я *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Введіть ваше ім'я"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
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
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Введіть ваш телефон"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Повідомлення
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишіть ваш запит або задайте питання"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Надсилання..." : "Надіслати"}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">Контактна інформація</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="p-2 rounded-full bg-primary/10 h-fit">{item.icon}</div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
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
              <h3 className="text-xl font-semibold mb-4">Або зв'яжіться через месенджери</h3>
              <div className="flex gap-4 mt-4">
                <Button asChild variant="outline" className="flex-1">
                  <a href="https://t.me/raisa_orb" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a href="viber://chat?number=%2B380971768196" target="_blank" rel="noopener noreferrer">
                    Viber
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a href="https://wa.me/380971768196" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
