import React from "react";

interface SkillBadge {
  icon: React.ReactElement;
  name: string;
  color: string;
}

export default function SkillBadge({ icon, name, color }: SkillBadge) {
  return (
    <div className="py-2 pl-2 pr-4 rounded-lg bg-muted/30 flex justify-start items-center gap-3 text-sm border border-border/50 group relative">
      <div
        className="absolute -z-20 inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-out rounded-lg"
        style={{
          boxShadow: `0 0 10px 10px ${color}1A`,
        }}
      ></div>
      <div
        style={{ backgroundColor: color + "1A" }}
        className={`p-[0.35rem] rounded-lg flex justify-center items-center opacity-95`}
      >
        {React.cloneElement(icon, {
          className: `size-6`,
        })}
      </div>
      <span className="text-foreground">{name}</span>
    </div>
  );
}
