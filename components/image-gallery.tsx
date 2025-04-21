"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function ImageGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  // Функція для створення плавної хвилеподібної анімації
  const waveAnimation = (index: number) => {
    return {
      y: [0, -15, 0, 15, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror" as const,
        delay: index * 1.2, // Зміщення фази для ефекту хвилі
      },
    }
  }

  const images = [
    {
      src: "/cosmic-meditation.jpg",
      alt: "Космічна медитація",
    },
    {
      src: "/spiritual-woman.jpg",
      alt: "Духовна жінка",
    },
    {
      src: "/lotus-meditation.jpg",
      alt: "Медитація лотоса",
    },
  ]

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              initial="hidden"
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: [0, -15, 0, 15, 0],
                      rotate: [0, index % 2 === 0 ? 1.5 : -1.5, 0, index % 2 === 0 ? -1.5 : 1.5, 0],
                      transition: {
                        y: {
                          duration: 6,
                          ease: "easeInOut",
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "mirror",
                          delay: index * 1.2,
                        },
                        rotate: {
                          duration: 8,
                          ease: "easeInOut",
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "mirror",
                          delay: index * 0.8,
                        },
                        opacity: { duration: 0.8 },
                      },
                    }
                  : "hidden"
              }
              className="relative aspect-square overflow-hidden rounded-2xl shadow-xl"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
