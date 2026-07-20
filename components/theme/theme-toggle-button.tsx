"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import type { ThemeAnimationOptions } from "@/components/theme/theme-config";
import { useThemeToggle } from "@/components/theme/use-theme-toggle";

type ThemeToggleButtonProps = ThemeAnimationOptions & { className?: string };

export function ThemeToggleButton({ className, variant = "circle", start = "center", blur = false, gifUrl }: ThemeToggleButtonProps) {
  const { isDark, mounted, toggleTheme } = useThemeToggle({ variant, start, blur, gifUrl });

  useEffect(() => {
    if (!gifUrl) return;
    const image = new Image();
    image.decoding = "async";
    image.src = gifUrl;
  }, [gifUrl]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative flex size-10 shrink-0 items-center justify-center rounded-full border border-hairline-neutral text-text-primary transition-colors duration-300 hover:bg-surface-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-color active:scale-95",
        className,
      )}
      aria-label="Toggle theme"
      aria-pressed={mounted ? isDark : undefined}
      data-cursor-disabled
    >
      <span className="sr-only">Toggle theme</span>
      <motion.span
        aria-hidden="true"
        className="absolute"
        initial={false}
        animate={{ rotate: isDark ? 0 : 90, scale: isDark ? 1 : 0.35, opacity: isDark ? 1 : 0 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
      >
        <Moon className="size-[18px]" strokeWidth={2.2} />
      </motion.span>
      <motion.span
        aria-hidden="true"
        className="absolute"
        initial={false}
        animate={{ rotate: isDark ? -90 : 0, scale: isDark ? 0.35 : 1, opacity: isDark ? 0 : 1 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
      >
        <Sun className="size-[18px]" strokeWidth={2.2} />
      </motion.span>
    </button>
  );
}
