"use client";
import React from "react";
import RotatingText from "./RotatingText";

const LABELS = [
  "screens unknown calls",
  "speaks your language",
  "sends clean summaries",
  "keeps interruptions out",
];

export function AnnouncementChip() {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-1 border border-hairline shadow-[0_2px_12px_rgba(0,0,0,0.5)] select-none">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-color shadow-[0_0_6px_var(--accent-glow)] animate-pulse" />
      <div className="flex items-center min-w-[160px] text-left">
        <RotatingText
          texts={LABELS}
          mainClassName="text-[11px] font-medium text-text-secondary tracking-tight"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.02}
          splitLevelClassName="overflow-hidden pb-0.5"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={3000}
          splitBy="characters"
          auto
          loop
        />
      </div>
    </div>
  );
}
