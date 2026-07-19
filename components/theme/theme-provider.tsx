"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";
import { THEME_STORAGE_KEY } from "@/components/theme/theme-config";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      storageKey={THEME_STORAGE_KEY}
      value={{ light: "light", dark: "dark" }}
    >
      {children}
    </NextThemesProvider>
  );
}
