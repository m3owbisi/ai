"use client";
import React from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroCopy } from "@/components/HeroCopy";
import { HeroCallStage } from "@/components/HeroCallStage";
import { ScrollCue } from "@/components/ScrollCue";
import { StickyCallStory } from "@/components/StickyCallStory";
import { ValueScenes } from "@/components/ValueScenes";
import { Reviews } from "@/components/Reviews";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroShaderBackground } from "@/components/HeroShaderBackground";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden transition-colors duration-500">
      {/* Subtle fine film grain or dither layer */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMTUiLz48L3N2Zz4=')] pointer-events-none z-10" />

      {/* Global Navigation Header */}
      <SiteHeader />

      {/* Hero Viewport Container with theme-aware gradient background */}
      <div className="w-full bg-gradient-to-b from-surface-2 to-background transition-colors duration-500 relative z-0 overflow-hidden">
        <HeroShaderBackground />
        <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 pb-14 pt-24 sm:px-8 md:pb-24 md:pt-32">
          <div className="mt-6 grid w-full grid-cols-1 items-center gap-8 md:mt-12 lg:grid-cols-12 lg:gap-12">
            {/* Headline and Copy */}
            <div className="flex flex-col justify-center lg:col-span-7">
              <HeroCopy />
            </div>

            {/* Interactive Call Orbit Stage */}
            <div className="flex items-center justify-center lg:col-span-5">
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
