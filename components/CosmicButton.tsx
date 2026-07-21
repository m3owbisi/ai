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
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative isolate inline-flex shrink-0 items-center justify-center rounded-full text-sm font-semibold tracking-tight outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent-color/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "md" ? "h-13" : "h-11",
        variant === "primary"
          ? "shadow-[0_0_0_4px_var(--accent-glow),0_18px_36px_rgba(0,0,0,0.18)] hover:shadow-[0_0_0_5px_var(--accent-glow),0_22px_42px_rgba(0,0,0,0.24)]"
          : "shadow-[0_0_0_2px_rgba(0,0,0,0.06)] hover:shadow-[0_0_0_4px_var(--accent-glow)]",
        className,
      )}
    >
      <span
        className={cn(
          "relative z-10 flex h-full w-full items-center justify-center gap-2 rounded-full border-[3px] px-5 transition-colors duration-300",
          variant === "primary"
            ? "border-accent-color bg-accent-color text-black shadow-[inset_0_0_0_2px_rgba(255,255,255,0.34)] light:border-accent-color light:text-white"
            : "border-hairline-neutral bg-background/82 text-text-primary backdrop-blur-md group-hover:border-accent-color/70 group-hover:bg-surface-2/92",
        )}
      >
        <CosmicButtonText>{children}</CosmicButtonText>
        {badge}
        {icon && (
          <span className="flex size-6 items-center justify-center rounded-full bg-black/12 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-[.cosmic-secondary]:bg-surface-2">
            {icon}
          </span>
        )}
      </span>
    </Component>
  );
}
