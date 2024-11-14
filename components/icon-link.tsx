import React from "react";

interface IconLink {
  href: string;
  name: string;
  icon: React.ReactElement;
}

export default function IconLink({ href, name, icon }: IconLink) {
  return (
    <a href={href} aria-label={name} target="_blank">
      {React.cloneElement(icon, {
        className:
          "size-6 hover:scale-110 transition-all duration-200 ease-out text-foreground opacity-80 hover:opacity-100",
      })}
    </a>
  );
}
