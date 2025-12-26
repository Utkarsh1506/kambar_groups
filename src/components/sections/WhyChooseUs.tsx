import { Shield, TrendingUp, Users, Award, Zap, Globe } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Every product undergoes rigorous testing to meet the highest standards',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: '6+ years of consistent growth and customer satisfaction',
  },
  {
    icon: Users,
    title: 'Strong Network',
    description: '5000+ retail partners and distributors across India',
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Certified and awarded for excellence in manufacturing',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Efficient logistics ensuring timely product availability',
  },
  {
    icon: Globe,
    title: 'Pan-India Reach',
    description: 'Coverage across 12 states with expanding footprint',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="space-y-3">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              WHY KAMBAR
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Why Choose Us
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built on trust, driven by excellence
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 space-y-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/30">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
