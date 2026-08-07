"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { HoverPlayContext } from "./hover-play-card";
import { CloseFill } from "@mingcute/react";

type Orientation = "header-first" | "media-first";

interface ExpandableCardProps {
  id: string;
  header: React.ReactNode;
  media: React.ReactNode;
  details: React.ReactNode;
  orientation?: Orientation;
  className?: string;
  mediaClassName?: string;
  dialogMediaClassName?: string;
}

const HOVER_SCALE = 1.02;
// Springy enough to overshoot slightly before settling.
const HOVER_TRANSITION = {
  type: "spring",
  stiffness: 500,
  damping: 15,
  mass: 0.8,
} as const;

// Shared-layout morph from card to dialog, overshooting slightly on arrival.
const OPEN_TRANSITION = { type: "spring", bounce: 0.3, duration: 0.55 } as const;

export function ExpandableCard({
  id,
  header,
  media,
  details,
  orientation = "header-first",
  className,
  mediaClassName,
  dialogMediaClassName,
}: ExpandableCardProps) {
  const [open, setOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const reduceMotion = useReducedMotion();

  const scale = hovered && !reduceMotion && !open ? HOVER_SCALE : 1;

  React.useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const mediaBlock = (
    <motion.div
      layoutId={`${id}-media`}
      transition={OPEN_TRANSITION}
      className={mediaClassName}
    >
      {media}
    </motion.div>
  );

  const headerBlock = (
    <motion.div
      layoutId={`${id}-header`}
      transition={OPEN_TRANSITION}
      className="px-(--card-spacing)"
    >
      {header}
    </motion.div>
  );

  const face =
    orientation === "media-first" ? (
      <>
        <div className="flex flex-1 flex-col px-(--card-spacing)">
          {mediaBlock}
        </div>
        {headerBlock}
      </>
    ) : (
      <>
        {headerBlock}
        <div className="flex flex-1 flex-col px-(--card-spacing)">
          {mediaBlock}
        </div>
      </>
    );

  const dialogMedia = (
    <motion.div
      layoutId={`${id}-media`}
      transition={OPEN_TRANSITION}
      className={dialogMediaClassName}
    >
      {media}
    </motion.div>
  );

  const dialogDetails = (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      className="text-sm leading-relaxed text-muted-foreground"
    >
      {details}
    </motion.div>
  );

  return (
    <>
      <motion.div
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a, button")) return;
          setOpened(true);
          setOpen(true);
        }}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        animate={{ scale }}
        transition={HOVER_TRANSITION}
        className={cn(
          "relative cursor-pointer select-none",
          hovered && !open && "z-10",
          className,
        )}
      >
        <motion.div
          layoutId={`${id}-card`}
          // Hidden while the dialog stands in for it — via opacity, not
          // `visibility`, which would stop motion morphing it back on close.
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ ...OPEN_TRANSITION, opacity: { duration: 0 } }}
          className="h-full group/card flex flex-col gap-(--card-gap) shadow hover:shadow-lg transition-[box-shadow,--tw-gradient-from,--tw-gradient-to] duration-300 ease-out shadow-zinc-900/5 ring-1 ring-border/70 hover:ring-border rounded-3xl overflow-hidden bg-linear-to-br from-card/70 hover:from-card to-card/60 hover:to-card/70 backdrop-blur-sm py-(--card-spacing) text-sm text-card-foreground [--card-gap:--spacing(5)] [--card-spacing:--spacing(5)]"
        >
          <div className="flex flex-1 flex-col gap-(--card-spacing)">
            <HoverPlayContext value={hovered}>{face}</HoverPlayContext>
          </div>
        </motion.div>
      </motion.div>

      {opened &&
        createPortal(
          <>
            {/* Only the backdrop lingers to fade out. The dialog unmounts at once
                so motion morphs the card itself back out of the dialog's box,
                instead of crossfading two elements. */}
            <AnimatePresence onExitComplete={() => setOpened(false)}>
              {open && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                  className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                />
              )}
            </AnimatePresence>

            {open && (
              <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                <motion.div
                  layoutId={`${id}-card`}
                  transition={OPEN_TRANSITION}
                  role="dialog"
                  aria-modal
                  className="pointer-events-auto group/card flex flex-col gap-(--card-gap) shadow-lg shadow-zinc-900/5 ring-1 ring-border rounded-3xl overflow-hidden bg-linear-to-br from-card to-card/90 backdrop-blur-sm py-(--card-spacing) text-sm text-card-foreground relative max-h-[86vh] w-full max-w-5xl overflow-y-auto no-scrollbar [--card-gap:--spacing(6)] [--card-spacing:--spacing(10)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="cursor-pointer absolute top-5 right-5 z-10 flex size-8 items-center justify-center rounded-full bg-foreground/5 text-muted-foreground ring-1 ring-foreground/10 backdrop-blur transition-colors hover:bg-foreground/10 hover:text-foreground"
                  >
                    <CloseFill />
                  </button>
                  <HoverPlayContext value={true}>
                    <motion.div
                      layoutId={`${id}-header`}
                      transition={OPEN_TRANSITION}
                      className="px-(--card-spacing) pr-12 **:data-[slot=card-description]:hidden"
                    >
                      {header}
                    </motion.div>

                    <div className="grid gap-(--card-gap) px-(--card-spacing) sm:grid-cols-2 sm:items-start sm:gap-(--card-spacing)">
                      {dialogDetails}
                      {dialogMedia}
                    </div>
                  </HoverPlayContext>
                </motion.div>
              </div>
            )}
          </>,
          document.body,
        )}
    </>
  );
}
