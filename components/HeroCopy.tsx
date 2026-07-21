"use client";
import React, { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { AnnouncementChip } from "./AnnouncementChip";
import { DownloadCTA } from "./DownloadCTA";
import { TrustSignals } from "./TrustSignals";

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

function AnimatedHeadlineWord({ word, accent = false, delayBase = 0 }: { word: string; accent?: boolean; delayBase?: number }) {
  return (
    <motion.span
      className={accent ? "hero-word hero-headline-word text-accent-color drop-shadow-[0_0_12px_var(--accent-glow)]" : "hero-word hero-headline-word"}
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      tabIndex={0}
    >
      {word.split("").map((char, index) => (
        <motion.span
          key={`${word}-${char}-${index}`}
          className="hero-headline-char"
          variants={{
            rest: { y: 0, rotate: 0, scale: 1, opacity: 1 },
            hover: {
              y: index % 2 === 0 ? -14 : -8,
              rotate: index % 2 === 0 ? -2.5 : 2.5,
              scale: accent ? 1.045 : 1.028,
              opacity: 1,
              transition: {
                delay: delayBase + index * 0.018,
                duration: 0.42,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

function HeroHeadline() {
  const words = [
    { word: "Not", accent: false },
    { word: "all", accent: false },
    { word: "calls", accent: false },
    { word: "deserve", accent: false },
    { word: "your", accent: true },
    { word: "attention.", accent: true },
  ];

  return (
    <h1 className="group max-w-[11ch] text-[clamp(3.35rem,16vw,7.4rem)] font-light leading-[0.9] tracking-normal text-text-primary sm:text-[clamp(4.4rem,11vw,7.4rem)] lg:text-[clamp(5.2rem,7.3vw,7.4rem)]">
      {words.map((item, index) => (
        <React.Fragment key={item.word}>
          <AnimatedHeadlineWord word={item.word} accent={item.accent} delayBase={index * 0.012} />
          {index < words.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </h1>
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
