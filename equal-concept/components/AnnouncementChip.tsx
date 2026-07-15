"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const LABELS = [
  "screens unknown calls",
  "speaks your language",
  "sends clean summaries",
  "keeps interruptions out",
];

export function AnnouncementChip() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!document.hidden) {
        setIndex((prev) => (prev + 1) % LABELS.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-1 border border-hairline shadow-[0_2px_12px_rgba(0,0,0,0.5)] select-none">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-color shadow-[0_0_6px_var(--accent-glow)] animate-pulse" />
      <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-text-quiet">
        Equal AI
      </span>
      <span className="text-[11px] text-text-quiet font-medium">|</span>
      <div className="relative h-4 overflow-hidden min-w-[160px] text-left">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute text-[11px] font-medium text-text-secondary tracking-tight"
          >
            {LABELS[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
