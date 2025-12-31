'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'
import { products as allProducts } from '@/data'

const categories = ['All', 'Food', 'Personal Care', 'Home Care', 'Snacks']

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="space-y-3">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              WHAT WE OFFER
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Our Product Range
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Premium quality products across multiple categories, trusted by families and retailers nationwide
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`h-12 px-8 rounded-full font-semibold transition-all shadow-sm ${
                activeCategory === category
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-56 bg-white overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300 p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={product.featured}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-colors duration-300"></div>
                
                {/* Quick View Badge */}
                <button className="absolute top-4 right-4 bg-white/95 hover:bg-white text-emerald-600 p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 hover:scale-125">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  {product.featured && (
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">★ Featured</span>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Benefits Preview */}
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500 font-semibold mb-2">Key Benefits:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.benefits.slice(0, 2).map((benefit, idx) => (
                      <span key={idx} className="text-xs bg-gray-50 text-gray-700 px-2 py-1 rounded">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Packaging */}
                <div className="pt-2">
                  <p className="text-xs text-gray-500 font-semibold mb-2">Available in:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.packaging.map((pack, idx) => (
                      <span key={idx} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded font-medium">
                        {pack}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
