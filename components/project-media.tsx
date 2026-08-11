import { Link2Fill } from "@mingcute/react";
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
          className="absolute inset-0 z-1 md:pointer-events-none"
        >
          <span className="absolute top-2 right-2 p-1 bg-zinc-900 text-white rounded-sm shadow flex justify-center items-center transition-all duration-200 ease-out hover:shadow-lg hover:scale-105 md:pointer-events-auto">
            <Link2Fill className="size-3" />
          </span>
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
