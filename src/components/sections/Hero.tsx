'use client'

import UpcomingCarousel from '@/components/ui/UpcomingCarousel'

export default function Hero() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-emerald-50 via-white to-gray-50 py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            {/* Main Content */}
            <div className="text-center space-y-8 mb-12">
              <div className="inline-block">
                <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
                  Trusted Since 2018
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                Premium FMCG Products
                <span className="block text-emerald-600 mt-2">for Modern India</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Trusted manufacturer and distributor delivering quality across the nation. 
                Partner with a brand built on reliability and growth.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a 
                href="#products" 
                className="w-full sm:w-auto h-14 px-10 rounded-full bg-emerald-600 text-white font-semibold text-lg inline-flex items-center justify-center hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg shadow-emerald-600/30"
              >
                View Products
              </a>
              <a 
                href="#partner" 
                className="w-full sm:w-auto h-14 px-10 rounded-full border-2 border-emerald-600 text-emerald-700 font-semibold text-lg inline-flex items-center justify-center hover:bg-emerald-50 hover:scale-105 transition-all"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Products Carousel */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 border-t border-gray-200">
        <UpcomingCarousel />
      </section>
    </>
  )
}
