export default function Trust() {
  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '5000+', label: 'Retail Partners' },
    { number: '50+', label: 'Premium Products' },
    { number: '12', label: 'States Covered' },
  ]

  return (
    <section className="py-20 md:py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3 p-6">
              <div className="text-5xl md:text-6xl font-bold text-emerald-600">
                {stat.number}
              </div>
              <div className="text-base md:text-lg text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
