"use client";
import React, { useState, useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroCopy } from "@/components/HeroCopy";
import { HeroCallStage } from "@/components/HeroCallStage";
import { ScrollCue } from "@/components/ScrollCue";
import { StickyCallStory } from "@/components/StickyCallStory";
import { ValueScenes } from "@/components/ValueScenes";
import { Reviews } from "@/components/Reviews";
import { SiteFooter } from "@/components/SiteFooter";
import FloatingLines from "@/components/FloatingLines";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Read stored user preference or respect system defaults
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setTheme("light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  useEffect(() => {
    const handleToggle = () => {
      const nextTheme = theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      localStorage.setItem("theme", nextTheme);
      if (nextTheme === "light") {
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
      }
    };

    window.addEventListener("theme-toggle", handleToggle);
    return () => window.removeEventListener("theme-toggle", handleToggle);
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden transition-colors duration-500">
      {/* Background radial atmosphere gradients */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--accent-glow),_transparent_70%)] pointer-events-none z-0" />
      
      {/* Floating lines background waves */}
      <div
        id="bg-waves-wrapper"
        className={`absolute top-0 left-0 right-0 h-[750px] pointer-events-none z-0 overflow-hidden transition-opacity duration-500 ${
          theme === "light" ? "opacity-0" : "opacity-65"
        }`}
      >
        {theme === "dark" && (
          <FloatingLines
            enabledWaves={["top","middle","bottom"]}
            lineCount={7}
            lineDistance={100}
            bendRadius={1}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
            animationSpeed={5}
            gradientStart="#E5FE40"
            gradientMid="#131913"
            gradientEnd="#050605"
            mixBlendMode="screen"
          />
        )}
      </div>

      {/* Subtle fine film grain or dither layer */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMTUiLz48L3N2Zz4=')] pointer-events-none z-10" />

      {/* Global Navigation Header */}
      <SiteHeader />

      {/* Hero Viewport Container with theme-aware gradient background */}
      <div className="w-full bg-gradient-to-b from-surface-2 to-background transition-colors duration-500 relative z-0">
        <main className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-6 sm:px-8 pt-24 md:pt-32 pb-16 md:pb-24 relative z-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full mt-8 md:mt-12">
            {/* Headline and Copy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <HeroCopy />
            </div>

            {/* Interactive Call Orbit Stage */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <HeroCallStage />
            </div>
          </div>

          {/* Scroll indicator */}
          <div id="hero-scroll-cue" className="mt-12 hidden md:block">
            <ScrollCue />
          </div>
        </main>
      </div>

      {/* Scroll 2 Call Showcase Story Section (Continually hosts and coordinates the 3D Phone model) */}
      <StickyCallStory />

      {/* Value Scenes reasons Section */}
      <ValueScenes />

      {/* Reviews testimonials Section */}
      <Reviews />

      {/* Global Footer */}
      <SiteFooter />
    </div>
  );
}
