import React from "react";

interface IconLink {
  href: string;
  name: string;
  icon: React.ReactElement<{ className?: string }>;
}

export default function IconLink({ href, name, icon }: IconLink) {
  return (
    <a
      href={href}
      title={name}
      aria-label={name}
      target="_blank"
      className="block text-foreground opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-200 ease-out"
    >
      {React.cloneElement(icon, { className: "size-6" })}
    </a>
  );
}
