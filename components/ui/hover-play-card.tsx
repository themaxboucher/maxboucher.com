"use client";

import * as React from "react";

import { Card } from "./card";

export const HoverPlayContext = React.createContext<boolean | null>(null);

export function HoverPlayCard({
  children,
  ...props
}: React.ComponentProps<typeof Card>) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Card
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      {...props}
    >
      <HoverPlayContext value={hovered}>{children}</HoverPlayContext>
    </Card>
  );
}
