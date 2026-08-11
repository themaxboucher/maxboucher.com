"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

interface FlyInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  perspective?: number;
  bounce?: number;
  amount?: number;
  once?: boolean;
}

export default function FlyIn({
  children,
  className,
  delay = 0,
  duration = 0.9,
  distance = 400,
  perspective = 1000,
  bounce = 0.3,
  amount = 0.3,
  once = true,
}: FlyInProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  const hidden = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, z: distance };
  const visible = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, z: 0 };

  return (
    <div ref={ref} style={{ perspective }} className={className}>
      <motion.div
        className="h-full"
        initial={hidden}
        animate={inView ? visible : hidden}
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
