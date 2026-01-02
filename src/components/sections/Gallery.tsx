'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

const galleryImages = [
  { id: 1, src: '/WhatsApp Image 2025-12-26 at 5.20.24 PM.jpeg', alt: 'Company inauguration event' },
  { id: 2, src: '/WhatsApp Image 2025-12-26 at 5.20.25 PM.jpeg', alt: 'Company inauguration event' },
  { id: 3, src: '/WhatsApp Image 2025-12-26 at 5.20.26 PM.jpeg', alt: 'Company inauguration event' },
  { id: 4, src: '/WhatsApp Image 2025-12-26 at 5.20.27 PM.jpeg', alt: 'Company inauguration event' },
  { id: 5, src: '/WhatsApp Image 2025-12-26 at 5.20.28 PM.jpeg', alt: 'Company inauguration event' },
  { id: 6, src: '/WhatsApp Image 2025-12-26 at 5.20.29 PM.jpeg', alt: 'Company inauguration event' },
  { id: 7, src: '/WhatsApp Image 2025-12-26 at 5.20.30 PM.jpeg', alt: 'Company inauguration event' },
  { id: 8, src: '/WhatsApp Image 2025-12-26 at 5.20.31 PM.jpeg', alt: 'Company inauguration event' },
  { id: 9, src: '/WhatsApp Image 2025-12-26 at 5.20.32 PM.jpeg', alt: 'Company inauguration event' },
  { id: 10, src: '/WhatsApp Image 2025-12-26 at 5.20.33 PM.jpeg', alt: 'Company inauguration event' },
  { id: 11, src: '/WhatsApp Image 2025-12-26 at 5.20.34 PM.jpeg', alt: 'Company inauguration event' },
  { id: 12, src: '/WhatsApp Image 2025-12-26 at 5.20.35 PM.jpeg', alt: 'Company inauguration event' },
  { id: 13, src: '/WhatsApp Image 2025-12-26 at 5.20.36 PM.jpeg', alt: 'Company inauguration event' },
  { id: 14, src: '/WhatsApp Image 2025-12-26 at 5.20.38 PM.jpeg', alt: 'Company inauguration event' },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="space-y-3">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              OUR JOURNEY
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Company Inauguration & Events
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating our growth and success with our partners and team members
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={imageVariants}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-square group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
