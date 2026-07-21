"use client";
import React from "react";
import { EqualLogo } from "./EqualLogo";
import { CosmicButton } from "./CosmicButton";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=in.equal.ai.assistant&pli=1";
const IOS_WAITLIST_URL = "https://docs.google.com/forms/d/e/1FAIpQLSePfRNNCeK_FBNrjoQMZiWSCRZCfYJLgQQ1G2_OjtAbqttesg/viewform";

export function SiteFooter() {
  return (
    <footer id="press" className="relative z-10 w-full select-none border-t-2 border-hairline-neutral bg-background py-16 transition-colors duration-500">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary">
              Let <span className="text-accent-color">Equal</span> handle it.
            </h2>
            <p className="text-sm text-text-secondary">
              Download Equal AI on Android. iOS waitlist is open.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <CosmicButton href={PLAY_STORE_URL} external icon={<img src="https://cdn.prod.website-files.com/67e36aa2068f30979d6c5e1f/68ba60758094c8a92ad7566e_7db42ca6494f3a8a8f88cb1bbc4e9d3c_android.svg" alt="Android" className="size-[18px] object-contain" />} size="sm" className="text-xs">
              Download for Android
            </CosmicButton>
            <CosmicButton href={IOS_WAITLIST_URL} external icon={<img src="https://cdn.prod.website-files.com/67e36aa2068f30979d6c5e1f/68ba6075b6f5660be18bbbdf_f37bfbd98fdd5d913fc34a92c43dc6ec_apple.svg" alt="Apple" className="size-[17px] object-contain" />} variant="secondary" size="sm" className="text-xs" badge={
              <span className="rounded border-2 border-hairline-neutral/70 bg-surface-2 px-1.5 py-0.5 text-[10px] font-medium tracking-tight text-text-quiet transition-colors group-hover:bg-surface-1">
                Waitlist
              </span>
            }>
              iOS coming soon
            </CosmicButton>
          </div>
        </div>

        <div className="h-[1px] w-full bg-hairline-neutral" />

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-3">
            <EqualLogo />
            <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-text-quiet">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-color shadow-[0_0_8px_var(--accent-glow)]" />
              Built in India
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-text-secondary">
            <a href="#" className="transition-colors hover:text-text-primary">Privacy</a>
            <a href="#" className="transition-colors hover:text-text-primary">Terms</a>
            <a href="#press" className="transition-colors hover:text-text-primary">Press</a>
            <a href="#" className="transition-colors hover:text-text-primary">Careers</a>
            <a href="#contact" className="transition-colors hover:text-text-primary">Contact</a>
          </div>
        </div>

        <div className="mt-4 text-[10px] font-mono text-text-quiet">
          &copy; 2026 Equal AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
