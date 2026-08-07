"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  icon: React.ReactElement<{ className?: string }>;
  color: string;
  name: string;
}

const spring = { stiffness: 150, damping: 14 };

export default function SkillBadge({ icon, color, name }: SkillBadgeProps) {
  const [hovered, setHovered] = React.useState(false);

  // -0.5 (left edge) to 0.5 (right edge) of the badge
  const position = useMotionValue(0);
  const rotate = useSpring(useTransform(position, [-0.5, 0.5], [-10, 10]), spring);
  const translateX = useSpring(
    useTransform(position, [-0.5, 0.5], [-10, 10]),
    spring,
  );

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    position.set((event.clientX - bounds.left) / bounds.width - 0.5);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2">
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.85 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 300, damping: 18 },
              }}
              exit={{ opacity: 0, y: 6, scale: 0.85 }}
              style={{ rotate, translateX, borderColor: `${color}2A`  }}
              className="rounded-sm border bg-zinc-900 text-white px-2 py-0.5 text-xs font-medium whitespace-nowrap  shadow-md"
            >
              {name}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        style={{ backgroundColor: `${color}1A` }}
        className="flex items-center justify-center rounded-lg p-[0.35rem] opacity-95 transition-all duration-200 ease-out hover:scale-110"
      >
        {React.cloneElement(icon, {
          className: cn("size-6", icon.props.className),
        })}
      </div>
    </div>
  );
}
