"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Product } from "@/data";
import { scaleInVariants } from "@/lib/animations";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            variants={scaleInVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          >
            <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-neutral-800">
              {/* Header */}
              <div className="sticky top-0 flex items-center justify-between p-6 md:p-8 border-b border-gray-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {product.name}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl transition-all duration-300 hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Category & Description */}
                <div>
                  <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl text-sm font-bold mb-4">
                    {product.category}
                  </span>
                  <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Ingredients */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Key Ingredients
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.ingredients.map((ingredient, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    Benefits
                  </h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-green-500 font-bold mt-1">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Packaging */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    Available Packaging
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.packaging.map((size, idx) => (
                      <button
                        key={idx}
                        className="px-4 py-2 border-2 border-gray-300 dark:border-neutral-600 rounded-lg text-gray-700 dark:text-gray-300 hover:border-green-500 hover:text-green-500 transition-colors font-medium"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors"
                >
                  Enquire Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
