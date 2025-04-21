"use client"

import Image from "next/image"

export default function ImageGallery() {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
