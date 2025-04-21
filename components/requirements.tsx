"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Headphones, Bed, Wifi } from "lucide-react"

export default function Requirements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const requirements = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Час",
      description:
        "Виділіть 2-3 години для повноцінного сеансу. Це дозволить не поспішати та глибоко опрацювати ваш запит.",
    },
    {
      icon: <Headphones className="h-10 w-10 text-primary" />,
      title: "Навушники",
      description: "Для онлайн-сеансів підготуйте зручні навушники з мікрофоном для якісного звуку та комунікації.",
    },
    {
      icon: <Bed className="h-10 w-10 text-primary" />,
      title: "Комфортне місце",
      description:
        "Знайдіть тихе місце, де вас ніхто не потурбує. Підготуйте зручне крісло або ліжко для розслаблення.",
    },
    {
      icon: <Wifi className="h-10 w-10 text-primary" />,
      title: "Стабільний інтернет",
      description:
        "Для онлайн-сеансів забезпечте стабільне інтернет-з'єднання, щоб уникнути переривань під час сеансу.",
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
    <section id="requirements" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="ЩО ПОТРІБНО ДЛЯ СЕАНСУ РЕГРЕСІЇ?"
          subtitle="Для ефективного сеансу регресивної терапії важливо забезпечити комфортні умови та підготуватися належним чином"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {requirements.map((requirement, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex gap-4">
                  <div className="p-3 rounded-full bg-primary/10 h-fit">{requirement.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{requirement.title}</h3>
                    <p className="text-muted-foreground">{requirement.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-white rounded-xl p-6 md:p-8 shadow-lg max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Додаткові рекомендації</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>За 2-3 години до сеансу утримайтеся від вживання алкоголю, кофеїну та важкої їжі</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Одягніть зручний одяг, який не обмежує рухи та дихання</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Перед сеансом сформулюйте свій запит або питання, на яке хочете отримати відповідь</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Будьте відкриті до процесу та довіряйте своєму внутрішньому досвіду</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
