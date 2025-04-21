"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Brain, Lightbulb, Compass, Zap } from "lucide-react"

export default function Examples() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const examples = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Стосунки",
      items: [
        "Чому я постійно притягую токсичні стосунки?",
        "Як подолати страх близькості та довіри?",
        "Чому я не можу знайти партнера для серйозних стосунків?",
      ],
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Емоційний стан",
      items: [
        "Звідки беруться мої панічні атаки?",
        "Як позбутися хронічної тривоги?",
        "Чому я відчуваю постійну втому та виснаження?",
      ],
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Самопізнання",
      items: [
        "Яке моє справжнє призначення?",
        "Чому я не можу реалізувати свій потенціал?",
        "Які мої приховані таланти та здібності?",
      ],
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Кар'єра",
      items: [
        "Чому я не можу знайти роботу, яка приносить задоволення?",
        "Звідки береться мій страх успіху?",
        "Як подолати синдром самозванця?",
      ],
    },
    {
      icon: <Compass className="h-8 w-8 text-primary" />,
      title: "Життєвий шлях",
      items: [
        "Чому я постійно наступаю на ті самі граблі?",
        "Як знайти свій шлях у житті?",
        "Чому я відчуваю, що застряг на одному місці?",
      ],
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Здоров'я",
      items: [
        "Яка психологічна причина моїх хронічних захворювань?",
        "Як зцілити психосоматичні симптоми?",
        "Чому моє тіло реагує стресом на певні ситуації?",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="examples" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="ПРИКЛАДИ ЗАПИТІВ, З ЯКИМИ ПРИХОДЯТЬ КЛІЄНТИ"
          subtitle="Регресивна терапія допомагає знайти відповіді на різноманітні життєві питання та вирішити глибинні проблеми"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {examples.map((example, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">{example.icon}</div>
                    <h3 className="text-xl font-semibold">{example.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {example.items.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Це лише деякі приклади запитів. Регресивна терапія може допомогти з багатьма іншими питаннями та проблемами.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
