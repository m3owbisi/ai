"use client";
import React from "react";
import {  FlagBanner,
  Star,
  UsersThree,
} from "@phosphor-icons/react";

const SIGNALS = [
  { label: "Built in India", icon: FlagBanner },
  { label: "40L+ USERS", icon: UsersThree },
  { label: "4.5 Rating", icon: Star },
];

export function TrustSignals() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 md:justify-start select-none">
      {SIGNALS.map(({ label, icon: Icon }) => (
        <span
          key={label}
          className="group inline-flex h-8 items-center gap-2 rounded-full border border-hairline-neutral/80 bg-background/48 px-2.5 pr-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-text-secondary shadow-[0_1px_10px_rgba(0,0,0,0.14)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-hairline hover:bg-surface-1/80 hover:text-text-primary hover:shadow-[0_0_18px_var(--accent-glow)]"
        >
          <span className="grid size-5 place-items-center rounded-full border border-accent-color/30 bg-accent-color/12 text-accent-color shadow-[inset_0_0_10px_rgba(229,254,64,0.08),0_0_10px_var(--accent-glow)] transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
            <Icon size={12} weight="fill" />
          </span>
          {label}
        </span>
      ))}
    </div>
  );
}
