"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { CosmicButton } from "./CosmicButton";

export function DownloadCTA() {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="relative flex flex-col sm:flex-row items-center gap-4">
      {/* Primary CTA */}
      <div className="relative">
        <CosmicButton
          onClick={() => setShowQR(!showQR)}
          icon={<ArrowUpRight size={14} weight="bold" />}
        >
          Download for Android
        </CosmicButton>

        {/* QR Code Tooltip/Popover */}
        <AnimatePresence>
          {showQR && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute z-10 bottom-14 left-1/2 -translate-x-1/2 p-4 bg-surface-1 border border-hairline-neutral rounded-2xl shadow-2xl flex flex-col items-center gap-2 min-w-[200px]"
            >
              <div className="w-32 h-32 bg-white flex items-center justify-center rounded-lg">
                <div className="w-28 h-28 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjcwIiB5PSIxMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMDAwIi8+PHJlY3QgeD0iMTAiIHk9IjcwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMwMDAiLz48cmVjdCB4PSI0MCIgeT0iNDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==')] bg-cover" />
              </div>
              <span className="text-[10px] text-text-quiet text-center font-mono">
                Scan to download Android App
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
 
      {/* Secondary iOS Waitlist CTA */}
      <CosmicButton
        href="#ios-waitlist"
        variant="secondary"
        badge={
          <span className="text-[10px] font-medium text-text-quiet tracking-tight px-1.5 py-0.5 rounded bg-surface-2 border border-hairline-neutral/50 group-hover:bg-surface-1 transition-colors">
            Waitlist
          </span>
        }
      >
        iOS coming soon
      </CosmicButton>
    </div>
  );
}
