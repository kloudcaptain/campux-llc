"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden [--duration:40s] [--gap:1rem]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max",
          vertical
            ? "flex-col animate-marquee-vertical"
            : reverse
            ? "flex-row animate-marquee-reverse"
            : "flex-row animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ gap: "var(--gap)" }}
      >
        {/* Original set */}
        <div
          className={cn("flex shrink-0", vertical ? "flex-col" : "flex-row")}
          style={{ gap: "var(--gap)" }}
        >
          {children}
        </div>
        {/* Duplicate for seamless loop */}
        <div
          className={cn("flex shrink-0", vertical ? "flex-col" : "flex-row")}
          style={{ gap: "var(--gap)" }}
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  )
}
