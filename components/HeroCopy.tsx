"use client";
import React, { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { AnnouncementChip } from "./AnnouncementChip";
import { DownloadCTA } from "./DownloadCTA";
import { TrustSignals } from "./TrustSignals";
import { KineticText } from "@/components/ui/kinetic-text";

const DESCRIPTION =
  "Equal AI answers your calls, filters spam, takes messages, coordinates deliveries, shares updates and makes sure important callers still reach you.";

function FlowingDescription() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <p className="text-text-secondary text-base leading-relaxed md:text-lg">{DESCRIPTION}</p>;
  }

  return (
    <motion.p
      className="text-text-secondary text-base leading-relaxed md:text-lg"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.75 }}
      variants={{
        hidden: { opacity: 1 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.012, delayChildren: 0.12 },
        },
      }}
      aria-label={DESCRIPTION}
    >
      {DESCRIPTION.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          aria-hidden="true"
          className="hero-description-char"
          variants={{
            hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}

function HeroHeadline() {
  return (
    <div className="relative justify-center">
      <KineticText
        text="Not all calls deserve your attention."
        className="text-[clamp(3.4rem,7.3vw,7.4rem)] font-light leading-[0.9] tracking-normal text-text-primary sm:text-[clamp(4.4rem,11vw,7.4rem)] lg:text-[clamp(5.2rem,7.3vw,7.4rem)]"
      />
    </div>
  );
}

export function HeroCopy() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative z-10 flex max-w-2xl flex-col gap-6 text-left max-lg:mx-auto max-lg:text-center lg:max-w-none">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-lg:flex max-lg:justify-center"
      >
        <AnnouncementChip />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-lg:flex max-lg:justify-center"
      >
        <HeroHeadline />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[55ch] max-lg:mx-auto"
      >
        <FlowingDescription />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="mt-2 max-lg:flex max-lg:justify-center"
      >
        <DownloadCTA />
      </motion.div>

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
