"use client";
import React from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroCopy } from "@/components/HeroCopy";
import { HeroCallStage } from "@/components/HeroCallStage";
import { ScrollCue } from "@/components/ScrollCue";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden">
      {/* Background radial atmosphere gradients */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--accent-glow),_transparent_70%)] pointer-events-none z-0" />
      
      {/* Subtle fine film grain or dither layer */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMTUiLz48L3N2Zz4=')] pointer-events-none z-10" />

      {/* Global Navigation Header */}
      <SiteHeader />

      {/* Hero Viewport Container */}
      <main className="flex-1 flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-6 sm:px-8 py-24 md:py-32 relative z-10">
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

        {/* Floating Scroll indicator at bottom center */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <ScrollCue />
        </div>
      </main>
    </div>
  );
}
