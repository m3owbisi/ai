import type { Metadata } from "next";
import { CursorProvider } from "@/components/core/cursor";
import { ThemeProvider } from "@/components/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Equal AI - India's Call AI Assistant",
  description: "Equal AI answers your calls, filters spam, takes messages, coordinates deliveries, shares updates and makes sure important callers still reach you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <CursorProvider>{children}</CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
