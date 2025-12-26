import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Kambar Groups</h3>
            <p className="text-gray-400 leading-relaxed">
              Premium FMCG manufacturer and distributor trusted across India
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition">About Us</a>
              <a href="#products" className="block text-gray-400 hover:text-white transition">Products</a>
              <a href="#why-us" className="block text-gray-400 hover:text-white transition">Why Us</a>
              <a href="#partner" className="block text-gray-400 hover:text-white transition">Partner</a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <div className="space-y-2">
              <div className="text-gray-400">Food Products</div>
              <div className="text-gray-400">Personal Care</div>
              <div className="text-gray-400">Home Care</div>
              <div className="text-gray-400">Snacks</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <span>info@kambargroups.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Kambar Groups. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
