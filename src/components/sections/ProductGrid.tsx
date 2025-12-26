"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInUpVariants,
  containerVariants,
  itemVariants,
} from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { QuickViewModal } from "@/components/ui/QuickViewModal";
import { Product } from "@/data";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | "All">("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ["All", "Food", "Personal Care", "Home Care"];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full">
            <span className="text-sm font-semibold text-emerald-700">Our Products</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            Premium Product Range
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Carefully curated FMCG products that meet the highest quality standards
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`inline-flex items-center justify-center h-12 px-8 rounded-full text-base font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 hover:scale-[1.02]"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-[1.02]"
              } active:scale-95`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl shadow-xl flex items-center justify-center">
                    <span className="text-white text-2xl font-black">{product.name.charAt(0)}</span>
                  </div>
                </div>
                {product.featured && (
                  <div className="absolute top-4 right-4 px-4 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold rounded-full shadow-lg">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Product Details */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-lg mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-2 mb-4">
                  {product.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(product);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
