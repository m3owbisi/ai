"use client";
import React, { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { EqualLogo } from "./EqualLogo";
import { THEME_GIF_PRESETS, ThemeToggleButton } from "@/components/theme";
import { TextRoll } from "@/components/ui/skiper-ui/skiper58";
import { ArrowIcon, MenuIcon } from "@/components/ui/skiper-ui/skiper99";

const MENU_ITEMS = [
  { label: "Product", href: "#what" },
  { label: "Founder's Vision", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Press", href: "#press" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
];

function MenuTrigger({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex size-11 items-center justify-center rounded-full border-2 border-hairline-neutral bg-background/74 text-text-primary backdrop-blur-md transition-colors hover:border-accent-color/45 hover:bg-surface-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-color"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      data-cursor-disabled
    >
      <span className="hidden size-full md:block" aria-hidden="true">
        <MenuIcon className="text-current" />
      </span>
      <motion.span
        className="block size-full md:hidden"
        aria-hidden="true"
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        <ArrowIcon className="text-current" />
      </motion.span>
    </button>
  );
}

function FullscreenMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-40 overflow-hidden bg-background/96 text-text-primary backdrop-blur-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,var(--accent-glow),transparent_32%),radial-gradient(circle_at_18%_78%,rgba(0,177,64,0.18),transparent_30%)] light:bg-[radial-gradient(circle_at_78%_22%,rgba(0,177,64,0.18),transparent_32%),radial-gradient(circle_at_18%_78%,rgba(229,254,64,0.14),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(var(--accent)_1px,transparent_1px),linear-gradient(90deg,var(--accent)_1px,transparent_1px)] bg-[size:54px_54px]" />
      <div className="relative mx-auto flex min-h-dvh w-full max-w-7xl flex-col justify-center px-6 pb-8 pt-28 sm:px-10 lg:px-14">
        <div className="mb-4 flex items-center justify-between border-b-2 border-hairline-neutral pb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-text-quiet sm:mb-6">
          <span>Equal AI Menu</span>
          <span>{MENU_ITEMS.length.toString().padStart(2, "0")} paths</span>
        </div>
        <nav aria-label="Fullscreen navigation" className="flex flex-col items-start gap-0">
          {MENU_ITEMS.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={onClose}
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 + index * 0.045, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="group flex w-full items-center justify-between border-b-2 border-hairline-neutral py-1.5 text-text-primary outline-none transition-colors hover:border-accent-color focus-visible:border-accent-color sm:py-2"
            >
              <TextRoll
                center={index % 2 === 0}
                className="text-[clamp(2.5rem,8.7vw,7.2rem)] font-black uppercase leading-none tracking-normal text-text-primary transition-colors group-hover:text-accent-color"
              >
                {item.label}
              </TextRoll>
              <span className="ml-4 hidden rounded-full border-2 border-hairline-neutral px-3 py-1 text-xs font-semibold text-text-quiet transition-colors group-hover:border-accent-color group-hover:text-accent-color sm:inline-flex">
                0{index + 1}
              </span>
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 z-50 flex justify-center px-4 transition-all duration-500 ${
          isScrolled ? "mt-4" : "mt-0"
        }`}
      >
        <motion.div
          layout
          className={`relative flex w-full items-center justify-between transition-all duration-500 ${
            isScrolled
              ? "max-w-2xl rounded-full border-2 border-hairline-neutral bg-surface-1/80 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-md sm:px-6"
              : "max-w-7xl border-b-2 border-hairline-neutral bg-transparent px-2 py-5 sm:px-4 md:px-8 md:py-6"
          }`}
        >
          <EqualLogo />
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggleButton variant="gif" start="center" gifUrl={THEME_GIF_PRESETS.one} />
            <MenuTrigger open={menuOpen} onClick={() => setMenuOpen((open) => !open)} />
          </div>
        </motion.div>
      </motion.header>
      <AnimatePresence>{menuOpen && <FullscreenMenu onClose={() => setMenuOpen(false)} />}</AnimatePresence>
    </>
  );
}
