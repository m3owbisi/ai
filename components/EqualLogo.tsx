"use client";
import React from "react";

interface EqualLogoProps {
  className?: string;
  variant?: "green" | "white" | "theme-aware";
}

export function EqualLogo({ className = "", variant = "theme-aware" }: EqualLogoProps) {
  if (variant === "white") {
    return (
      <img
        src="/logo/EQUAL AI LOGO_White.png"
        className={`h-7 w-auto select-none ${className}`}
        alt="Equal AI Logo"
      />
    );
  }

  if (variant === "green") {
    return (
      <img
        src="/logo/EQUAL AI LOGO.svg"
        className={`h-7 w-auto select-none ${className}`}
        alt="Equal AI Logo"
      />
    );
  }

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Dark mode: White PNG logo */}
      <img
        src="/logo/EQUAL AI LOGO_White.png"
        className="h-7 w-auto select-none dark-logo-img"
        alt="Equal AI Logo"
      />
      {/* Light mode: Green Brand SVG logo */}
      <img
        src="/logo/EQUAL AI LOGO.svg"
        className="h-7 w-auto select-none light-logo-img"
        alt="Equal AI Logo"
      />
    </div>
  );
}
