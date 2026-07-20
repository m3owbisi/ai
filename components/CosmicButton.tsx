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
};

const textWaveVariants = {
  hidden: {
    opacity: 0,
    y: 8,
    rotate: 8,
    filter: "blur(3px)",
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.018,
      duration: 0.22,
      y: {
        type: "spring",
        damping: 13,
        stiffness: 240,
        mass: 0.7,
      },
      rotate: {
        type: "spring",
        damping: 10,
        stiffness: 180,
      },
      filter: {
        duration: 0.18,
      },
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -6,
    rotate: -6,
    filter: "blur(3px)",
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
      className="relative inline-flex min-w-0 items-center overflow-hidden"
      onMouseEnter={() => setWaveKey((key) => key + 1)}
      onFocus={() => setWaveKey((key) => key + 1)}
    >
      <TextAnimate
        key={waveKey}
        as="span"
        by="character"
        startOnView={false}
        variants={textWaveVariants}
        className="inline-flex whitespace-nowrap leading-none"
        segmentClassName="leading-none"
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
}: CosmicButtonProps) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      type={href ? undefined : "button"}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative isolate inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full p-[1px] text-sm font-semibold tracking-tight outline-none transition-shadow duration-300 focus-visible:ring-2 focus-visible:ring-accent-color/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "md" ? "h-12" : "h-10",
        variant === "primary"
          ? "shadow-[0_0_24px_rgba(229,254,64,0.12)] hover:shadow-[0_0_30px_var(--accent-glow)]"
          : "shadow-[0_0_18px_rgba(255,255,255,0.04)] hover:shadow-[0_0_22px_var(--accent-glow)]",
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-[-140%] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,var(--accent)_70deg,rgba(255,255,255,0.68)_118deg,transparent_175deg,var(--accent)_260deg,transparent_360deg)] opacity-70 blur-[1px] animate-cosmic-spin transition-opacity duration-500 group-hover:opacity-100" />
      <span
        className={cn(
          "relative z-10 flex h-full w-full items-center justify-center gap-2 rounded-full border px-5 transition-colors duration-300",
          variant === "primary"
            ? "border-white/10 bg-[linear-gradient(135deg,var(--accent)_0%,#f4ff9a_52%,var(--accent)_100%)] text-black light:bg-[linear-gradient(135deg,#00B140_0%,#6EEB8F_56%,#00B140_100%)] light:text-white"
            : "border-hairline-neutral bg-background/78 text-text-primary backdrop-blur-md group-hover:bg-surface-2/92",
        )}
      >
        <CosmicButtonText>{children}</CosmicButtonText>
        {badge}
        {icon && (
          <span className="flex size-6 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-[.cosmic-secondary]:bg-surface-2">
            {icon}
          </span>
        )}
      </span>
    </Component>
  );
}
