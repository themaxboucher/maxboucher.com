"use client";

import * as React from "react";

import { Card } from "./card";

export const HoverPlayContext = React.createContext<boolean | null>(null);

const BELOW_MD = "(width < 48rem)"; // Tailwind's `md`

function subscribe(onChange: () => void) {
  const query = window.matchMedia(BELOW_MD);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export function useHoverPlaying() {
  const hovered = React.useContext(HoverPlayContext);
  const small = React.useSyncExternalStore(
    subscribe,
    () => window.matchMedia(BELOW_MD).matches,
    () => false,
  );

  return small ? true : hovered; // On phones and tablets there is no pointer to hover with
}

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
