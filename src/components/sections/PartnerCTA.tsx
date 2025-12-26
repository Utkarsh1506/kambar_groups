"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Download, Mail, Phone, ArrowRight } from "lucide-react";

export const PartnerCTA: React.FC = () => {
  const benefits = [
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Guaranteed profit margins" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Timely deliveries" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Marketing support" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Dedicated account manager" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Easy return policy" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Volume discounts" },
  ];

  return (
    <section id="partner" className="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50/30 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 space-y-12">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Partner With <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Kambar</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Join our network of <span className="font-semibold text-emerald-600">5000+ retailers</span> and <span className="font-semibold text-emerald-600">distributors</span> who trust Kambar Groups for quality products, competitive pricing, and exceptional support.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto"
          >
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-200"
              >
                <div className="text-emerald-600 flex-shrink-0">
                  {benefit.icon}
                </div>
                <span className="text-gray-700 font-medium">{benefit.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <a
              href="#contact"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Start Partnership Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#brochure"
              className="group w-full sm:w-auto px-8 py-4 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-8 border-t border-gray-200 text-center space-y-3"
          >
            <p className="text-gray-600 font-medium">Questions? Contact us at</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-gray-700">
              <a
                href="mailto:partnership@kambargroups.com"
                className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">partnership@kambargroups.com</span>
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">+91 XXXX XXX XXX</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
