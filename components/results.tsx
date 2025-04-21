"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"
import { CheckCircle } from "lucide-react"

export default function Results() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const results = [
    "Звільнення від тривоги, страхів та фобій",
    "Вирішення внутрішніх конфліктів та протиріч",
    "Покращення стосунків з оточуючими",
    "Підвищення самооцінки та ����певненості в собі",
    "Розуміння причин повторюваних життєвих сценаріїв",
    "Звільнення від обмежуючих переконань",
    "Відкриття нових можливостей та перспектив",
    "Зцілення психосоматичних захворювань",
    "Розкриття творчого потенціалу",
    "Знаходження відповідей на важливі життєві питання",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="results" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="ЯКИЙ РЕЗУЛЬТАТ ВИ ОТРИМАЄТЕ ПІСЛЯ СЕАНСУ РЕГРЕСІЇ?"
          subtitle="Регресивна терапія допомагає досягти глибинних трансформацій та покращити якість життя у різних сферах"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full -z-10 transform -translate-x-4 translate-y-4" />
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/serene-meditation.png"
                alt="Результати регресивної терапії"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.ul
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {results.map((result, index) => (
              <motion.li key={index} variants={itemVariants} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">{result}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-primary/5 rounded-xl p-6 md:p-8 border border-primary/20 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl font-medium text-center italic">
            "Регресивна терапія — це не просто подорож у минуле, це шлях до кращого майбутнього через зцілення
            теперішнього."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
