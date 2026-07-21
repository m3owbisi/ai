"use client";
import React from "react";
import { CosmicButton } from "./CosmicButton";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=in.equal.ai.assistant&pli=1";
const IOS_WAITLIST_URL = "https://docs.google.com/forms/d/e/1FAIpQLSePfRNNCeK_FBNrjoQMZiWSCRZCfYJLgQQ1G2_OjtAbqttesg/viewform";

export function DownloadCTA() {
  return (
    <div className="relative flex flex-col items-center gap-4 sm:flex-row">
      <CosmicButton
        href={PLAY_STORE_URL}
        icon={<img src="https://cdn.prod.website-files.com/67e36aa2068f30979d6c5e1f/68ba60758094c8a92ad7566e_7db42ca6494f3a8a8f88cb1bbc4e9d3c_android.svg" alt="Android" className="size-[26px] object-contain" />}
        external
      >
        Download for Android
      </CosmicButton>

      <CosmicButton
        href={IOS_WAITLIST_URL}
        variant="secondary"
        icon={<img src="https://cdn.prod.website-files.com/67e36aa2068f30979d6c5e1f/68ba6075b6f5660be18bbbdf_f37bfbd98fdd5d913fc34a92c43dc6ec_apple.svg" alt="Apple" className="size-[24px] object-contain" />}
        external
        badge={
          <span className="rounded border-2 border-hairline-neutral/70 bg-surface-2 px-1.5 py-0.5 text-[10px] font-medium tracking-tight text-text-quiet transition-colors group-hover:bg-surface-1">
            Waitlist
          </span>
        }
      >
        iOS coming soon
      </CosmicButton>
    </div>
  );
}
