export default function About() {
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
                Building Trust Since 2009
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

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl h-[450px] shadow-2xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 rounded-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <div className="text-6xl font-bold">15+</div>
                  <div className="text-xl font-semibold">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
