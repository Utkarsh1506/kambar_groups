"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUpVariants } from "@/lib/animations";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "font-bold rounded-xl transition-all duration-300 cursor-pointer inline-flex items-center justify-center whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]",
      secondary:
        "bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]",
      outline:
        "border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-slate-900 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-3.5 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        variants={fadeInUpVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
