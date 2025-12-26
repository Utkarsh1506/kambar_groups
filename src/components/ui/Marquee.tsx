"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({ items, speed = 50 }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const marqueeContent = marquee.querySelector(".marquee-content") as HTMLElement;

    if (!marqueeContent) return;

    const contentWidth = marqueeContent.offsetWidth;
    const containerWidth = marquee.offsetWidth;

    // Clone content for infinite scroll
    const clone = marqueeContent.cloneNode(true);
    marquee.appendChild(clone);

    gsap.to(".marquee-content", {
      x: -contentWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
    });

    return () => {
      gsap.killTweensOf(".marquee-content");
    };
  }, [speed]);

  return (
    <div
      ref={marqueeRef}
      className="relative w-full overflow-hidden py-8 md:py-12 bg-white dark:bg-slate-950"
    >
      <div className="flex gap-8 md:gap-16 whitespace-nowrap marquee-content">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base flex-shrink-0"
          >
            <div className="w-2 h-2 rounded-full bg-green-500" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
