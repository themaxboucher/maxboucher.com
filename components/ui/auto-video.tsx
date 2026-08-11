"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { HoverPlayContext } from "./hover-play-card";

export function AutoVideo({
  className,
  src,
  ...props
}: React.ComponentProps<"video"> & { src: string }) {
  const ref = React.useRef<HTMLVideoElement>(null);
  // null outside a HoverPlayCard: nothing gates playback, so the video runs.
  const hovered = React.useContext(HoverPlayContext);

  React.useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // React does not always reflect `muted` into the server-rendered markup,
    // and an unmuted video is not allowed to autoplay.
    video.muted = true;

    const still =
      hovered === false ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // pause() leaves currentTime where it is, so hovering back on picks the
    // clip up mid-frame rather than restarting it.
    if (still) video.pause();
    // Rejects when a later pause interrupts the play — nothing to recover from.
    else void video.play().catch(() => {});
  }, [hovered]);

  return (
    <video
      ref={ref}
      autoPlay={hovered === null}
      src={src}
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden
      tabIndex={-1}
      className={cn("size-full bg-muted object-cover border shadow shadow-zinc-900/5", className)}
      {...props}
    />
  );
}
