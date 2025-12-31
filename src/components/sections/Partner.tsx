import { CheckCircle } from 'lucide-react'

const benefits = [
  'Exclusive territory rights',
  'Marketing support and materials',
  'Competitive profit margins',
  'Regular product training',
  'Dedicated account manager',
  'Fast order processing',
]

export default function Partner() {
  return (
    <section id="partner" className="py-24 md:py-32 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="space-y-3">
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                PARTNER WITH US
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                Become a Distribution Partner
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Join a growing network of successful partners across Goa
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="#contact" 
              className="inline-flex h-14 px-12 rounded-full bg-emerald-600 text-white font-bold text-lg items-center justify-center hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg shadow-emerald-600/30"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
