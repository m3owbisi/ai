"use client";
import React, { useRef } from "react";
import { motion } from "motion/react";
import { AnnouncementChip } from "./AnnouncementChip";
import { DownloadCTA } from "./DownloadCTA";
import { TrustSignals } from "./TrustSignals";
import { KineticText } from "@/components/ui/kinetic-text";

export function HeroCopy() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="flex flex-col gap-6 text-left max-w-2xl z-10 relative">
      {/* Announcement Chip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnnouncementChip />
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <KineticText
          as="h1"
          text="Not all calls deserve your attention."
          className="max-w-[11ch] text-[clamp(5.2rem,7.3vw,7.4rem)] leading-[0.88] tracking-normal text-text-primary [font-optical-sizing:auto] [&>span:nth-child(n+23)]:text-accent-color [&>span:nth-child(n+23)]:drop-shadow-[0_0_12px_var(--accent-glow)]"
          style={{
            "--hover-padding": "calc(1em / 22)",
            "--text-stroke-width": "calc(1em * 90 / 6000)",
          } as React.CSSProperties}
        />
      </motion.div>

      {/* Explanatory Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-text-secondary text-base md:text-lg leading-relaxed max-w-[55ch]"
      >
        Equal AI answers your calls, filters spam, takes messages, coordinates
        deliveries, shares updates and makes sure important callers still reach
        you.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="mt-2"
      >
        <DownloadCTA />
      </motion.div>

      {/* Trust Signals */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4"
      >
        <TrustSignals />
      </motion.div>
    </div>
  );
}

