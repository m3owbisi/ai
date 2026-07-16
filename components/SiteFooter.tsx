"use client";
import React from "react";
import { EqualLogo } from "./EqualLogo";

export function SiteFooter() {
  return (
    <footer id="press" className="w-full bg-background border-t border-white/5 relative z-10 select-none py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col gap-12 w-full">
        {/* Banner callout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold text-text-primary tracking-tight">
              Let <span className="text-accent-color">Equal</span> handle it.
            </h2>
            <p className="text-text-secondary text-sm">
              Download Equal AI. Coming to iOS soon.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="h-10 px-5 rounded-full bg-text-primary text-background font-semibold text-xs tracking-tight hover:bg-accent-color transition-colors active:scale-95 cursor-pointer">
              Download Equal
            </button>
            <a
              href="#ios-waitlist"
              className="h-10 px-5 rounded-full border border-white/10 hover:bg-surface-2 hover:border-white/20 flex items-center justify-center text-text-primary font-semibold text-xs tracking-tight active:scale-95 transition-all duration-300"
            >
              Join the waitlist
            </a>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/5" />

        {/* Brand alignment & copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-3">
            <EqualLogo variant="white" />
            <span className="inline-flex items-center gap-2 text-[10px] font-mono text-text-quiet uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-color shadow-[0_0_8px_var(--accent-glow)] animate-pulse" />
              Built in India
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-text-secondary">
            <a href="#" className="hover:text-text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              Press
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              Careers
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="text-[10px] font-mono text-text-quiet mt-4">
          © 2026 Equal AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
