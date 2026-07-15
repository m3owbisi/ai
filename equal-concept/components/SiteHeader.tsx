"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { EqualLogo } from "./EqualLogo";

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
            ? "max-w-2xl px-6 py-2.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "max-w-7xl px-8 py-6 bg-transparent border-b border-white/5"
        }`}
      >
        <EqualLogo />

        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-tight">
          <a href="#what" className="text-text-secondary hover:text-text-primary transition-colors">
            Product
          </a>
          <a href="#why" className="text-text-secondary hover:text-text-primary transition-colors">
            Vision
          </a>
          <a href="#reviews" className="text-text-secondary hover:text-text-primary transition-colors">
            Reviews
          </a>
          <a href="#press" className="text-text-secondary hover:text-text-primary transition-colors">
            Press
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative overflow-hidden px-5 py-2 rounded-full bg-text-primary text-background font-semibold text-[13px] tracking-tight hover:bg-accent-color transition-all duration-300 active:scale-95 group">
            Download
          </button>
        </div>
      </motion.div>
    </motion.header>
  );
}
