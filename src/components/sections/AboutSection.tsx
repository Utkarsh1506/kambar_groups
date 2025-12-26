"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUpVariants,
  containerVariants,
  itemVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from "@/lib/animations";

export const AboutSection: React.FC = () => {
  const timeline = [
    {
      year: "2009",
      title: "Founded",
      description: "Started as a small family business with a vision for quality",
    },
    {
      year: "2015",
      title: "Pan-India Expansion",
      description: "Expanded operations across all major Indian states",
    },
    {
      year: "2021",
      title: "5000+ Partners",
      description:
        "Reached milestone of serving 5000+ retail partners nationwide",
    },
    {
      year: "2024",
      title: "Leading Brand",
      description:
        "Recognized as a trusted FMCG leader in quality and reliability",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Text Content */}
          <motion.div variants={slideInLeftVariants} className="space-y-6 lg:space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Our Story</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kambar Groups started with a simple vision: deliver quality FMCG
                products that retailers can trust and consumers love. Over the past
                15 years, we've built a reputation for excellence, consistency, and
                customer-centricity.
              </p>
            </div>

            {/* Timeline */}
            <motion.div variants={containerVariants} className="space-y-6 pt-8">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-cyan-600 text-white font-bold text-lg shadow-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div variants={slideInRightVariants} className="relative">
            <div className="relative h-96 md:h-[500px]">
              {/* Main illustration placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 via-blue-400/30 to-orange-400/30 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">Factory</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Modern Manufacturing Facility
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 glass rounded-2xl p-6 max-w-xs shadow-xl"
              >
                <p className="font-bold text-gray-900 dark:text-white">
                  ISO 9001 Certified
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Quality Management Systems
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
