"use client";

import { motion, useReducedMotion } from "motion/react";

interface FlyInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  perspective?: number;
  bounce?: number;
}

export default function FlyIn({
  children,
  className,
  delay = 0,
  duration = 0.9,
  distance = 400,
  perspective = 1000,
  bounce = 0.3,
}: FlyInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div style={{ perspective }} className={className}>
      <motion.div
        className="h-full"
        initial={
          shouldReduceMotion ? { opacity: 0 } : { opacity: 0, z: distance }
        }
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, z: 0 }}
        transition={
          shouldReduceMotion
            ? { delay, duration: 0.3, ease: "easeOut" }
            : {
                default: { type: "spring", bounce, duration, delay },
                opacity: { duration: duration * 0.5, ease: "easeOut", delay },
              }
        }
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
