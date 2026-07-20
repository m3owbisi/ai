"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { EqualLogo } from "./EqualLogo";
import { AnimatedBackground } from "@/components/core/animated-background";
import { THEME_GIF_PRESETS, ThemeToggleButton } from "@/components/theme";
import { CosmicButton } from "./CosmicButton";

const NAV_ITEMS = [
  { label: "Product", href: "#what" },
  { label: "Vision", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Press", href: "#press" },
];

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        isScrolled ? "mt-4" : "mt-0"
      }`}
    >
      <motion.div
        layout
        className={`flex items-center justify-between w-full transition-all duration-500 ${
          isScrolled
            ? "max-w-2xl px-6 py-2.5 bg-surface-1/80 backdrop-blur-md rounded-full border border-hairline-neutral shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
            : "max-w-7xl px-8 py-6 bg-transparent border-b border-hairline-neutral"
        }`}
      >
        <EqualLogo />

        <nav className="hidden md:flex items-center text-[13px] font-medium tracking-tight">
          <AnimatedBackground
            defaultValue={NAV_ITEMS[0].label}
            className="rounded-full border border-accent-color/20 bg-accent-color/12 shadow-[0_0_22px_var(--accent-glow)]"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.3,
            }}
            enableHover
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-id={item.label}
                className={`rounded-full outline-none transition-colors hover:text-text-primary focus-visible:text-text-primary focus-visible:ring-2 focus-visible:ring-accent-color/40 ${isScrolled ? "px-3.5 py-1.5" : "px-4 py-2"} text-text-secondary`}
              >
                {item.label}
              </a>
            ))}
          </AnimatedBackground>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggleButton variant="gif" start="center" gifUrl={THEME_GIF_PRESETS.one} />
          
          <CosmicButton size="sm" className="text-[13px]">
            Download
          </CosmicButton>
        </div>
      </motion.div>
    </motion.header>
  );
}


