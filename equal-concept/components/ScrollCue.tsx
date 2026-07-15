"use client";
import React from "react";
import { motion } from "motion/react";

export function ScrollCue() {
  return (
    <div className="flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.24em] text-text-quiet select-none">
      <span>Scroll to explore</span>
      <div className="w-[1px] h-8 bg-white/10 relative overflow-hidden">
        <motion.div
          animate={{
            y: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-0 w-full h-4 bg-accent-color shadow-[0_0_8px_var(--accent-glow)]"
        />
      </div>
    </div>
  );
}
