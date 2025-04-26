"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { memo } from "react"
import { useTranslations } from "next-intl"

interface SectionHeadingProps {
  titleKey: string
  subtitleKey?: string
  namespace: string
  centered?: boolean
}

function SectionHeading({ titleKey, subtitleKey, namespace, centered = true }: SectionHeadingProps) {
  const t = useTranslations(namespace)
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
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t(titleKey)}</h2>
      {subtitleKey && <p className="text-lg text-muted-foreground">{t(subtitleKey)}</p>}
    </motion.div>
  )
}

export default memo(SectionHeading)
