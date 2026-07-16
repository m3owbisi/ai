"use client";
import React from "react";
import { Star } from "@phosphor-icons/react";

export function TrustSignals() {
  return (
    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 text-[11px] font-mono uppercase tracking-[0.2em] text-text-quiet select-none">
      <span className="inline-flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-color opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-color shadow-[0_0_8px_var(--accent-glow)]"></span>
        </span>
        Built in India
      </span>
      <span className="w-1 h-1 rounded-full bg-white/20" />
      <span>40 Lakh+ Users</span>
      <span className="w-1 h-1 rounded-full bg-white/20" />
      <span className="inline-flex items-center gap-1">
        <Star size={12} weight="fill" className="text-accent-color drop-shadow-[0_0_6px_var(--accent-glow)]" />
        4.5 Rating
      </span>
    </div>
  );
}
