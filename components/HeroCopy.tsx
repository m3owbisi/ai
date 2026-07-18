"use client";
import React, { useRef } from "react";
import { motion } from "motion/react";
import { AnnouncementChip } from "./AnnouncementChip";
import { DownloadCTA } from "./DownloadCTA";
import { TrustSignals } from "./TrustSignals";
import VariableProximity from "./VariableProximity";

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
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.05] text-text-primary">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="block"
        >
          <VariableProximity
            label="Not all calls deserve"
            containerRef={containerRef}
            radius={120}
            falloff="linear"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 900, 'opsz' 40"
          />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block text-accent-color drop-shadow-[0_0_12px_var(--accent-glow)] group overflow-hidden"
        >
          <VariableProximity
            label="your attention."
            containerRef={containerRef}
            radius={120}
            falloff="linear"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 900, 'opsz' 40"
          />
        </motion.span>
      </h1>

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
