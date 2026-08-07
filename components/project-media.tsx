import { ArrowRightUpFill, ExternalLinkFill } from "@mingcute/react";
import * as React from "react";

interface ProjectMediaProps {
  media: React.ReactElement;
  link?: string;
  inProgress?: boolean;
}

export default function ProjectMedia({
  media,
  link,
  inProgress = false,
}: ProjectMediaProps) {
  return (
    <div className="relative size-full">
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-1.5 py-0.5 bg-zinc-900 text-white font-semibold text-xs rounded-sm absolute top-2 right-2 z-1 shadow hover:shadow-lg hover:scale-105 transition-all duration-200 ease-out flex justify-center items-center gap-1"
        >
          <span>Visit</span>
          <ExternalLinkFill className="size-3" />
        </a>
      )}
      <div className="absolute inset-0">{media}</div>
    </div>
  );
}
