"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Brain, Lightbulb, Compass, Zap } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Examples() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const t = useTranslations("examples")

  const categories = Object.values(t.raw("categories")).map((category: any, index) => ({
    icon: [
      <Users key={0} className="h-8 w-8 text-primary" />,
      <Heart key={1} className="h-8 w-8 text-primary" />,
      <Brain key={2} className="h-8 w-8 text-primary" />,
      <Lightbulb key={3} className="h-8 w-8 text-primary" />,
      <Compass key={4} className="h-8 w-8 text-primary" />,
      <Zap key={5} className="h-8 w-8 text-primary" />,
    ][index],
    title: category.title,
    items: Object.values(category.items),
  }))

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
        <SectionHeading titleKey="title" subtitleKey="subtitle" namespace="examples" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("footer")}</p>
        </motion.div>
      </div>
    </section>
  )
}
