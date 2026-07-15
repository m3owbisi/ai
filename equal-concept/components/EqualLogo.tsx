"use client";
import React from "react";

export function EqualLogo() {
  return (
    <div className="flex items-center gap-1.5 font-sans font-semibold text-lg tracking-tight select-none">
      <span className="text-text-primary">equal</span>
      <span className="text-accent-color">ai</span>
      <span className="w-1.5 h-1.5 rounded-full bg-accent-color shadow-[0_0_8px_var(--accent-glow)] animate-pulse" />
    </div>
  );
}
