'use client'

import Image from 'next/image'

export default function About() {
  // Array of inauguration images
  const inaugurationImages = [
    '/WhatsApp Image 2025-12-26 at 5.20.24 PM.jpeg',
    '/WhatsApp Image 2025-12-26 at 5.20.25 PM.jpeg',
    '/WhatsApp Image 2025-12-26 at 5.20.26 PM.jpeg',
    '/WhatsApp Image 2025-12-26 at 5.20.27 PM.jpeg',
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                OUR STORY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Building Trust Since 2018
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Kambar Groups started with a simple vision: deliver premium FMCG products that Indian families can trust.
              </p>
              <p>
                Today, we manufacture and distribute a wide range of products across multiple categories, serving thousands of retailers and millions of consumers nationwide.
              </p>
              <p className="font-medium text-gray-900">
                Our commitment to quality, transparency, and growth has made us a preferred partner for distributors and retailers across India.
              </p>
            </div>
          </div>

          {/* Inauguration Photo Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {inaugurationImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative w-full aspect-square">
                    <Image
                      src={image}
                      alt={`Vayupro Enterprises Inauguration ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-4 right-6 bg-emerald-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold">
              Vayupro Inauguration
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
