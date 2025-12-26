import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Distributor, Delhi',
    text: 'Partnering with Kambar Groups has been a game-changer for our business. Quality products and excellent support.',
  },
  {
    name: 'Priya Sharma',
    role: 'Retail Owner, Mumbai',
    text: 'Their product range is impressive and our customers love the quality. Highly recommend.',
  },
  {
    name: 'Amit Patel',
    role: 'Wholesaler, Gujarat',
    text: 'Professional service and timely deliveries. A trustworthy partner for long-term growth.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="space-y-3">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              What Our Partners Say
            </h2>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 space-y-6 hover:shadow-xl transition-all duration-300 border border-gray-100 relative">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <Quote className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>
              <div className="pt-4 border-t border-gray-100">
                <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                <div className="text-sm text-emerald-600 font-medium">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
