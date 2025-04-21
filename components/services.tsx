"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: "ПОВНОЦІННИЙ СЕАНС РЕГРЕСІЇ",
      price: "3600 грн",
      features: [
        "Повноцінний сеанс регресії тривалістю від 1,5 до 3,5 годин",
        "Перегляд та подорож потрібними вам просторами для вирішення запиту (минуле життя, дитинство, світ душ, життя між життями, світ ангелів, рід тощо)",
        "Повноцінне, глибоке опрацювання 1 запиту",
        "Чищення від блоків та сутностей",
        "Чищення кореневої проблеми",
        "Чищення непрямих проблем (необмежена кількість)",
        "Мова сеансу: українська, російська",
      ],
    },
    {
      title: "ПРОГРЕСІЯ",
      price: "3600 грн",
      features: [
        "Повноцінний сеанс прогресії тривалістю від 1,5 до 3,5 годин",
        "Робота з майбутніми відрізками життя, допомагає з'ясувати потенційні сценарії та можливості для вашого розвитку в майбутньому",
        "Пошук альтернативних варіантів розвитку людини",
        "Опрацювання проблем минулого в регресії (якщо необхідно) для покращення майбутнього",
        "Мова сеансу: українська, російська",
      ],
    },
    {
      title: "ТЕРАПІЯ СВІДОМОСТІ",
      price: "9800 грн",
      features: [
        "3 повноцінних сеанси, які дають можливість більш глибоко опрацювати кілька ключових моментів вашого життя тривалістю від 1,5 до 3,5 годин",
        "Індивідуальне обговорення і планування сеансів та їх тем відповідно до побажань клієнта, моя консультація, відповіді на запитання",
        "3 місяці роботи - занурення 1 раз на місяць + супровід клієнта між сеансами",
        "Повноцінне, глибоке опрацювання 3 запитів",
        "Чищення від блоків та сутностей",
        "Чищення кореневої проблеми",
        "Чищення непрямих проблем (необмежена кількість)",
        "Мова сеансу: українська, російська",
      ],
    },
    {
      title: "КОНСУЛЬТАЦІЯ",
      price: "800 грн",
      features: [
        "Предсеанс тривалістю 30 хв",
        "Перевірка на гіпнабельність",
        "Обговорення і розбір запиту для пропрацювання",
        "Постановка цілей для сеансу",
        "Відповіді на запитання",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="ПОСЛУГИ І ЦІНИ"
          subtitle="Оберіть оптимальний варіант роботи для вирішення ваших запитів"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-primary">{service.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4 font-medium">Сюди входить:</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="#contact">Записатися</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-primary/5 rounded-xl p-6 md:p-8 border border-primary/20 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Індивідуальний підхід</h3>
          <p className="text-muted-foreground">
            Кожен клієнт унікальний, тому я пропоную індивідуальний підхід до вирішення ваших запитів. Якщо вам потрібна
            спеціальна програма або у вас є особливі потреби, зв'яжіться зі мною для обговорення індивідуальних умов
            співпраці.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
