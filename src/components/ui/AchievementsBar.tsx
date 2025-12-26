"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Package } from "lucide-react";

interface CounterProps {
  value: number;
  label: string;
  suffix: string;
  icon: React.ReactNode;
}

const Counter: React.FC<CounterProps> = ({ value, label, suffix, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / 50;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center h-full flex flex-col items-center justify-center"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
        {icon}
      </div>
      <motion.div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {count}{suffix}
      </motion.div>
      <p className="text-base text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
};

interface AchievementsProps {
  data: { label: string; value: string }[];
}

export const AchievementsBar: React.FC<AchievementsProps> = ({ data }) => {
  const icons = [
    <Award className="w-8 h-8 text-white" key="award" />,
    <Package className="w-8 h-8 text-white" key="package" />,
    <Users className="w-8 h-8 text-white" key="users" />
  ];

  return (
    <div className="w-full py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {data.map((item, index) => {
            const numValue = parseInt(item.value.replace(/[^0-9]/g, ""));
            const suffix = item.value.replace(/[0-9]/g, "").trim();

            return (
              <Counter
                key={index}
                value={numValue}
                label={item.label}
                suffix={suffix}
                icon={icons[index]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
