"use client";

import { motion, useReducedMotion } from "motion/react";

interface FlyInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  perspective?: number;
  blur?: string;
}

export default function FlyIn({
  children,
  className,
  delay = 0,
  duration = 0.9,
  distance = 400,
  perspective = 1000,
  blur = "12px",
}: FlyInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div style={{ perspective }} className={className}>
      <motion.div
        className="h-full"
        initial={
          shouldReduceMotion
            ? { opacity: 0 }
            : { opacity: 0, z: distance, filter: `blur(${blur})` }
        }
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 1, z: 0, filter: "blur(0px)" }
        }
        transition={{
          delay,
          duration: shouldReduceMotion ? 0.3 : duration,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
