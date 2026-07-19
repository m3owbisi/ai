"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { createThemeAnimation, injectThemeTransitionStyles } from "@/components/theme/theme-animations";
import type { ThemeAnimationOptions } from "@/components/theme/theme-config";


export function useThemeToggle({ variant = "circle", start = "center", blur = false, gifUrl = "" }: ThemeAnimationOptions = {}) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frameId);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const animation = useMemo(() => createThemeAnimation(variant, start, blur, gifUrl), [blur, gifUrl, start, variant]);

  const setAnimatedTheme = useCallback((nextTheme: "light" | "dark" | "system") => {
    if (typeof document === "undefined") return;
    injectThemeTransitionStyles(animation.css);
    const switchTheme = () => setTheme(nextTheme);

    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [animation.css, setTheme]);

  const toggleTheme = useCallback(() => {
    setAnimatedTheme(isDark ? "light" : "dark");
  }, [isDark, setAnimatedTheme]);

  return {
    isDark,
    mounted,
    animationName: animation.name,
    toggleTheme,
    setLightTheme: () => setAnimatedTheme("light"),
    setDarkTheme: () => setAnimatedTheme("dark"),
    setSystemTheme: () => setAnimatedTheme("system"),
  };
}
