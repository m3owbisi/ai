"use client";
import React from "react";
import { scenarios } from "@/data/call-scenarios";
import { Heart, Package, CreditCard, User, WarningOctagon } from "@phosphor-icons/react";

interface CallerSelectorProps {
  activeId: string;
  onSelect: (id: string) => void;
  disabled: boolean;
}

const iconsMap: Record<string, any> = {
  family: Heart,
  courier: Package,
  pitcher: CreditCard,
  client: User,
  stranger: WarningOctagon,
};

export function CallerSelector({ activeId, onSelect, disabled }: CallerSelectorProps) {
  return (
    <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-none w-full lg:w-auto">
      {Object.values(scenarios).map((sc) => {
        const Icon = iconsMap[sc.id] || User;
        const isActive = activeId === sc.id;
        return (
          <button
            key={sc.id}
            onClick={() => !disabled && onSelect(sc.id)}
            disabled={disabled}
            className={`flex items-center gap-3 px-4 py-3 rounded-full lg:rounded-2xl border text-left transition-all duration-300 whitespace-nowrap cursor-pointer select-none group active:scale-98 ${
              isActive
                ? "bg-accent-color border-accent-color text-black shadow-[0_4px_16px_var(--accent-glow)]"
                : "bg-surface-1 border-hairline-neutral text-text-secondary hover:border-hairline hover:bg-surface-2 disabled:opacity-50"
            }`}
          >
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                isActive ? "bg-black/10 text-black" : "bg-surface-2 text-text-secondary group-hover:text-text-primary"
              }`}
            >
              <Icon size={16} weight={isActive ? "fill" : "light"} />
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-tight leading-none">
                {sc.callerName}
              </span>
              <span className={`text-[9px] font-mono uppercase tracking-wider mt-0.5 ${isActive ? "text-black/60" : "text-text-quiet"}`}>
                {sc.id}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
