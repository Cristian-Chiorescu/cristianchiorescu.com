"use client";

import { motion, Variants } from "motion/react";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// Define the animation variants
const fadeInVariants: Variants = {
  // The state before the animation starts
  hidden: { opacity: 0, y: 10 },
  // The state the animation ends in
  visible: { opacity: 1, y: 0 },
};

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      // viewport config makes the animation trigger once, when the element is 50px into view
      viewport={{ once: true, margin: "-50px" }}
      // transition config sets the duration and allows for a staggered delay
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
