'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import { upcomingProducts } from '@/data'

export default function UpcomingCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const displayCount = 4
  const items = upcomingProducts

  const next = () => {
    setCurrent((prev) => (prev + 1) % items.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length)
    setAutoPlay(false)
  }

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoPlay, items.length])

  const getVisibleItems = () => {
    const visible = []
    for (let i = 0; i < displayCount; i++) {
      visible.push(items[(current + i) % items.length])
    }
    return visible
  }

  return (
    <div className="relative w-full py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-orange-500" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Coming Soon
            </h3>
          </div>
          <div className="text-sm text-gray-600">
            {current + 1} / {items.length} products
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getVisibleItems().map((product) => (
              <div
                key={product.id}
                className="relative group/card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
              >
                {/* Image Container */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover/card:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Coming Soon Badge */}
                  <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Soon
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-4 space-y-2">
                  <div className="text-xs font-semibold text-orange-600 uppercase tracking-wider bg-orange-50 inline-block px-2 py-1 rounded">
                    {product.category}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 line-clamp-2">
                    {product.name}
                  </h4>
                  <p className="text-sm text-orange-600 font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {product.comingSoon}
                  </p>
                  <button className="w-full mt-3 py-2 px-4 bg-orange-100 text-orange-600 rounded-lg font-semibold hover:bg-orange-200 transition-colors text-sm">
                    Notify Me
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-orange-500 text-gray-900 hover:text-white p-2 rounded-full shadow-lg hover:shadow-2xl transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-orange-500 text-gray-900 hover:text-white p-2 rounded-full shadow-lg hover:shadow-2xl transition-all opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrent(idx)
                setAutoPlay(false)
              }}
              className={`h-2 rounded-full transition-all ${
                idx === current
                  ? 'bg-orange-500 w-8'
                  : 'bg-gray-300 w-2 hover:bg-orange-300'
              }`}
              aria-label={`Go to product ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
