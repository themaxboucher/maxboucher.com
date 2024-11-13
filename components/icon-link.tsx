import React from "react";

interface IconLink {
  href: string;
  icon: React.ReactElement;
}

export default function IconLink({ href, icon }: IconLink) {
  return (
    <a href={href} target="_blank">
      {React.cloneElement(icon, {
        className:
          "size-6 hover:scale-110 transition-all duration-200 ease-out text-foreground opacity-80 hover:opacity-100",
      })}
    </a>
  );
}
