"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`space-y-4 max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}
    >
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </motion.div>
  )
}
