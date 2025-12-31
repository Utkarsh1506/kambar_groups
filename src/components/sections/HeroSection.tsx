"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.08),transparent_50%)]" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">
                India's Trusted FMCG Brand
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
              Premium Quality
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                FMCG Products
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Trusted by <span className="font-semibold text-emerald-600">5000+ retailers</span> across India. 
              Delivering excellence in every product since 2018.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto pt-4">
              <a
                href="#products"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#partner"
                className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                Partner With Us
              </a>
            </div>

            {/* Stats */}
            <div className="w-full grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {[
                { value: '6+', label: 'Years Experience' },
                { value: '5000+', label: 'Retailers & Distributors' },
                { value: '50+', label: 'Products' }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Card */}
            <div className="relative w-full max-w-md h-full">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96 bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center"
              >
                <div className="w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg flex items-center justify-center mb-6">
                  <span className="text-white text-4xl font-bold">K</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Premium Products</h3>
                <p className="text-gray-600 text-center text-sm">Quality You Can Trust</p>
              </motion.div>

              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:block absolute top-8 right-0 bg-white rounded-xl shadow-xl px-4 py-3 border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Certified</div>
                    <div className="text-sm font-semibold text-gray-900">ISO 9001</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="hidden lg:block absolute bottom-8 left-0 bg-white rounded-xl shadow-xl px-4 py-3 border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Delivery</div>
                    <div className="text-sm font-semibold text-gray-900">Pan India</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
