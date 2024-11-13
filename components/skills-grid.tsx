import React from "react";

interface SkillsGrid {
  children: React.ReactNode;
}
export default function SkillsGrid({ children }: SkillsGrid) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 list-none">
      {children}
    </ul>
  );
}
