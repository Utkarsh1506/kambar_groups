'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
            <a href="#products" className="text-gray-600 hover:text-gray-900 transition">Products</a>
            <a href="#why-us" className="text-gray-600 hover:text-gray-900 transition">Why Us</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#partner" 
              className="h-12 px-8 rounded-full bg-emerald-600 text-white font-medium inline-flex items-center justify-center hover:bg-emerald-700 transition"
            >
              Become a Partner
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#about" className="block text-gray-600 hover:text-gray-900 transition">About</a>
            <a href="#products" className="block text-gray-600 hover:text-gray-900 transition">Products</a>
            <a href="#why-us" className="block text-gray-600 hover:text-gray-900 transition">Why Us</a>
            <a href="#testimonials" className="block text-gray-600 hover:text-gray-900 transition">Testimonials</a>
            <a href="#contact" className="block text-gray-600 hover:text-gray-900 transition">Contact</a>
            <a 
              href="#partner" 
              className="block w-full h-12 px-8 rounded-full bg-emerald-600 text-white font-medium text-center leading-[3rem] hover:bg-emerald-700 transition"
            >
              Become a Partner
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
