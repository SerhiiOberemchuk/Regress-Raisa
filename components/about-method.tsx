"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Heart, Compass, Sparkles } from "lucide-react"

export default function AboutMethod() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Доступ до підсвідомості",
      description: "Регресивна терапія дозволяє отримати доступ до прихованих спогадів та підсвідомих блоків.",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Емоційне зцілення",
      description: "Звільнення від емоційних травм минулого та трансформація негативних патернів поведінки.",
    },
    {
      icon: <Compass className="h-10 w-10 text-primary" />,
      title: "Самопізнання",
      description: "Глибоке розуміння власної особистості, мотивів та життєвих цілей через дослідження минулого.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Розкриття потенціалу",
      description: "Виявлення та активація прихованих талантів, здібностей та ресурсів особистості.",
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

  const explorationAreas = [
    "дитячі спогади",
    "травматичні ситуації або навіть моменти з минулих життів (використовується для вирішення всіх запитів, універсально)",
    "життя між життями (можна дивитися контракти з спорідненими душами, які втілюються у ваших коханих або навіть ворогів, часто знаходиться розуміння у взаєминах з людьми)",
    "світ ангелів (простір повного пропрацювання, підвищення вібрацій, усвідомленості)",
    "простір роду (для складних запитів, пропрацювання родових сценаріїв, що на вас негативно впливають)",
    "позаземні втілення (де, на яких планетах і коли жила ваша душа до того, як прийшла на Землю, найчастіше в цих просторах все стає на свої місця – призначення, завдання душі та інші важливі запити)",
    "майбутнє – ваше чи наступне життя душі",
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="ПРО МЕТОД РЕГРЕСИВНОЇ ТЕРАПІЇ"
          subtitle="Регресивна терапія — це терапевтичний підхід, який дозволяє повернутися до минулих подій життя для зцілення психологічних травм та вирішення актуальних проблем."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-6 md:p-8 shadow-lg max-w-4xl mx-auto mb-12"
        >
          <p className="text-muted-foreground mb-4">
            Регресивний гіпноз — це метод терапії, який дозволяє занурити підопічного в глибокий стан розслаблення і
            підсвідомого сприйняття. У цьому стані регресолог допомагає людині пригадати та опрацювати події з минулого,
            які можуть мати вплив на її поточний стан або поведінку. Ці події можуть включати:
          </p>

          <ul className="space-y-2 mb-6">
            {explorationAreas.map((area, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">{area}</span>
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground mb-4">
            Метою регресивного гіпнозу є виявлення і розв'язання прихованих психологічних блоків, які заважають людині
            досягати гармонії в житті. Під час сеансу регресолог допомагає пацієнту не тільки переглянути ці події, але
            й переосмислити їх, що дозволяє досягти емоційного зцілення та зниження стресу.
          </p>

          <p className="text-muted-foreground mb-4">
            Ця методика підходить для людей, які прагнуть краще зрозуміти себе, звільнитися від негативних переживань і
            поліпшити якість свого життя. Регресивний гіпноз є безпечним і комфортним процесом, під час якого клієнт
            завжди зберігає контроль над своїми відчуттями.
          </p>

          <p className="text-muted-foreground font-medium">
            Якщо вас цікавить глибше самопізнання та емоційне зцілення, регресивний гіпноз може стати першим кроком до
            нової якості життя.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-white rounded-xl p-6 md:p-8 shadow-lg max-w-3xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Як працює регресивна терапія?</h3>
          <p className="text-muted-foreground mb-4">
            Під час сеансу регресивної терапії ви входите в змінений стан свідомості, подібний до глибокої релаксації. У
            цьому стані ви можете отримати доступ до спогадів та інформації, які зазвичай недоступні у звичайному стані
            свідомості.
          </p>
          <p className="text-muted-foreground">
            Терапевт супроводжує вас у цій подорожі, допомагаючи дослідити значущі події, зрозуміти їх вплив на ваше
            теперішнє життя та трансформувати негативні переживання в ресурсний досвід.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
