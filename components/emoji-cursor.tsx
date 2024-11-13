import React from "react";

interface EmojiCursor {
  children: React.ReactNode;
  emoji: string;
}

export default function EmojiCursor({ children, emoji }: EmojiCursor) {
  const cursorStyle: React.CSSProperties = {
    cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='68' viewport='0 0 100 100' style='fill:black;font-size:40px;'><text y='50%'>${emoji}</text></svg>") 16 0, auto`,
  };
  return (
    <span
      style={cursorStyle}
      className="pt-3 hover:text-foreground transition-all duration-200 ease-out"
    >
      {children}
    </span>
  );
}
