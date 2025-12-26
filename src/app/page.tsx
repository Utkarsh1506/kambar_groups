import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/sections/Hero'
import Trust from '@/components/sections/Trust'
import About from '@/components/sections/About'
import Products from '@/components/sections/Products'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Partner from '@/components/sections/Partner'
import Testimonials from '@/components/sections/Testimonials'
import CompanyInfo from '@/components/sections/CompanyInfo'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <About />
        <CompanyInfo />
        <Products />
        <WhyChooseUs />
        <Partner />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
