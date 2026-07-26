"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export function AutoVideo({
  className,
  src,
  ...props
}: React.ComponentProps<"video"> & { src: string }) {
  const ref = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // React does not always reflect `muted` into the server-rendered markup,
    // and an unmuted video is not allowed to autoplay.
    video.muted = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden
      tabIndex={-1}
      className={cn("size-full bg-muted object-cover", className)}
      {...props}
    />
  );
}
