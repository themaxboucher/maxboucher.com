import {  Link2Fill } from "@mingcute/react";
import * as React from "react";

import { cn } from "@/lib/utils";

interface ProjectMediaProps {
  media: React.ReactElement;
  link?: string;
  inProgress?: boolean;
  className?: string;
}

export default function ProjectMedia({
  media,
  link,
  inProgress = false,
  className,
}: ProjectMediaProps) {
  return (
    <div className={cn("relative w-full", className)}>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open project link"
          className="absolute inset-0 z-1 flex justify-center items-center gap-1 md:inset-auto md:top-2 md:right-2 md:p-1 md:bg-zinc-900 md:text-white md:font-semibold md:text-xs md:rounded-sm md:shadow md:transition-all md:duration-200 md:ease-out md:hover:shadow-lg md:hover:scale-105"
        >
          <Link2Fill className="hidden size-3 md:block" />
        </a>
      )}
      {inProgress && (
        <div className="px-1.5 py-0.5 bg-zinc-900 text-white font-semibold text-xs rounded-sm absolute top-2 right-2 z-1 shadow flex justify-center items-center gap-1">
          <span>WIP</span>
        </div>
      )}
      {media}
    </div>
  );
}
