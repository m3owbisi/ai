"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";

type CosmicButtonProps = {
  children: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  external?: boolean;
};

const textWaveVariants = {
  hidden: {
    opacity: 0,
    y: 5,
    rotate: 4,
    filter: "blur(2px)",
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.018,
      duration: 0.24,
      y: {
        type: "spring",
        damping: 16,
        stiffness: 220,
        mass: 0.7,
      },
      rotate: {
        type: "spring",
        damping: 14,
        stiffness: 160,
      },
      filter: {
        duration: 0.18,
      },
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -4,
    rotate: -3,
    filter: "blur(2px)",
    transition: {
      delay: i * 0.01,
      duration: 0.16,
    },
  }),
};

function CosmicButtonText({ children }: { children: string }) {
  const [waveKey, setWaveKey] = useState(0);

  return (
    <span
      className="relative inline-flex min-w-0 items-center overflow-visible py-1"
      onMouseEnter={() => setWaveKey((key) => key + 1)}
      onFocus={() => setWaveKey((key) => key + 1)}
    >
      <TextAnimate
        key={waveKey}
        as="span"
        by="character"
        startOnView={false}
        variants={textWaveVariants}
        className="inline-flex whitespace-nowrap leading-[1.15]"
        segmentClassName="leading-[1.15]"
      >
        {children}
      </TextAnimate>
    </span>
  );
}

export function CosmicButton({
  children,
  href,
  onClick,
  className,
  icon,
  badge,
  variant = "primary",
  size = "md",
  external = false,
}: CosmicButtonProps) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      type={href ? undefined : "button"}
      target={href && external ? "_blank" : undefined}
      rel={href && external ? "noreferrer" : undefined}
      whileHover={{ y: -1.5, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "group relative isolate inline-flex shrink-0 items-center justify-center rounded-full text-sm font-bold tracking-tight outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent-color/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "md" ? "h-14" : "h-12",
        className,
      )}
    >
      <span
        className={cn(
          "relative z-10 flex h-full w-full items-center justify-center gap-2.5 rounded-full border px-6 transition-all duration-300",
          variant === "primary"
            ? "border-accent-color bg-accent-color text-black shadow-[0_4px_0_0_#007a2c,0_0_24px_var(--accent-glow),inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_2px_0_0_#007a2c,0_0_32px_var(--accent-glow),inset_0_1px_0_rgba(255,255,255,0.5)] hover:translate-y-[2px] light:text-white"
            : "border-hairline-neutral bg-background/88 text-text-primary backdrop-blur-md hover:border-accent-color hover:bg-surface-2/95 shadow-[0_4px_0_0_var(--hairline-neutral)] hover:shadow-[0_2px_0_0_var(--hairline-neutral)] hover:translate-y-[2px]",
        )}
      >
        {icon && (
          <span className="flex shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
            {icon}
          </span>
        )}
        <CosmicButtonText>{children}</CosmicButtonText>
        {badge}
      </span>
    </Component>
  );
}
