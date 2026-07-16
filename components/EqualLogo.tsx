"use client";
import React from "react";

interface EqualLogoProps {
  className?: string;
  variant?: "green" | "white";
}

export function EqualLogo({ className = "", variant = "green" }: EqualLogoProps) {
  if (variant === "white") {
    return (
      <img
        src="/logo_white.png"
        className={`h-7 w-auto select-none ${className}`}
        alt="Equal AI Logo"
      />
    );
  }

  return (
    <img
      src="/logo.svg"
      className={`h-7 w-auto select-none ${className}`}
      alt="Equal AI Logo"
    />
  );
}
