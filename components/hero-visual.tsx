"use client";

import Image from "next/image";
import maxBoucher from "@/public/images/max-boucher.webp";
import coding from "@/public/images/coding.webp";
import fishing from "@/public/images/fishing.webp";
import { useState, useEffect } from "react";

export default function HeroVisual() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Only run this effect on the client

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      setPosition((prev) => {
        if (prev.x !== x || prev.y !== y) {
          return { x, y };
        }
        return prev;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isClient) {
    return null; // Prevents rendering on the server
  }

  return (
    <div className="relative">
      <div
        className="relative overflow-hidden aspect-square w-48 min-w-48 rounded-lg shadow-2xl"
        style={{
          transform: `translate(${
            (position.x - window.innerWidth / 2) / 50
          }px, ${(position.y - window.innerHeight / 2) / 100}px) rotate(-2deg)`,
          transition: "transform 0.2s ease-out",
          willChange: "transform",
        }}
      >
        <Image
          src={maxBoucher}
          alt="Max Boucher"
          className="object-cover absolute inset-0 size-full"
          width={192}
          height={192}
          quality={100}
          placeholder="blur"
          priority
        />
      </div>
      <Image
        src={fishing}
        alt="Fly Fishing at a the Highwood River in Alberta"
        className="absolute top-4 -left-9 object-cover w-24 h-16 rounded-md shadow-2xl"
        style={{
          transform: `translate(${
            (position.x - window.innerWidth / 2) / 80
          }px, ${(position.y - window.innerHeight / 2) / 120}px) rotate(-1deg)`,
          transition: "transform 0.2s ease-out",
          willChange: "transform",
        }}
        width={96}
        height={64}
        quality={100}
        placeholder="blur"
        priority
      />
      <Image
        src={coding}
        alt="Coding HTML on a MacBook Pro"
        className="absolute -bottom-4 -right-7 object-cover w-20 h-28 rounded-md shadow-2xl"
        style={{
          transform: `translate(${
            (position.x - window.innerWidth / 2) / 100
          }px, ${(position.y - window.innerHeight / 2) / 180}px) rotate(3deg)`,
          transition: "transform 0.2s ease-out",
          willChange: "transform",
        }}
        width={80}
        height={112}
        quality={100}
        placeholder="blur"
        priority
      />
    </div>
  );
}
