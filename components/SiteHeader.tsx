"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Sun, Moon } from "@phosphor-icons/react";
import { EqualLogo } from "./EqualLogo";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const handleThemeChange = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };

    const frameId = requestAnimationFrame(() => {
      handleThemeChange();
    });

    window.addEventListener("theme-toggle", handleThemeChange);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("theme-toggle", handleThemeChange);
    };
  }, []);

  const handleToggle = () => {
    window.dispatchEvent(new Event("theme-toggle"));
  };

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

        <div className="flex items-center gap-3">
          <button
            onClick={handleToggle}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-hairline-neutral text-text-primary hover:bg-surface-2 transition-all duration-300 cursor-pointer active:scale-90"
            aria-label="Toggle Theme"
          >
            {isLight ? <Moon size={18} weight="bold" /> : <Sun size={18} weight="bold" />}
          </button>
          
          <button className="relative overflow-hidden px-5 py-2 rounded-full bg-text-primary text-background font-semibold text-[13px] tracking-tight hover:bg-accent-color transition-all duration-300 active:scale-95 group cursor-pointer">
            Download
          </button>
        </div>
      </motion.div>
    </motion.header>
  );
}
