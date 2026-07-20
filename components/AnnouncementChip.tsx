"use client";
import React, { useEffect, useMemo, useState } from "react";
import { TextRoll } from "@/components/motion-primitives/text-roll";

const LABELS = [
  "screens unknown calls",
  "speaks your language",
  "sends clean summaries",
  "keeps interruptions out",
];

export function AnnouncementChip() {
  const [currentLabelIndex, setCurrentLabelIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentLabelIndex((index) => (index + 1) % LABELS.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  const longestLabel = useMemo(
    () =>
      LABELS.reduce((longest, label) =>
        label.length > longest.length ? label : longest,
      ),
    [],
  );
  const currentLabel = LABELS[currentLabelIndex];

  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-hairline-neutral/70 bg-background/55 px-3 py-1.5 shadow-[0_1px_10px_rgba(0,0,0,0.16)] backdrop-blur-md select-none">
      <span className="relative flex size-3 items-center justify-center">
        <span className="absolute size-3 rounded-full bg-accent-color/20 blur-[3px]" />
        <span className="relative size-2 rounded-full bg-accent-color shadow-[0_0_14px_var(--accent-glow)] animate-pulse" />
      </span>
      <div className="relative flex items-center overflow-hidden text-left text-[11px] font-medium leading-none tracking-normal text-text-secondary">
        <span className="invisible whitespace-nowrap">{longestLabel}</span>
        <TextRoll
          key={currentLabel}
          className="absolute inset-y-0 left-0 flex items-center whitespace-nowrap"
          duration={0.34}
          getEnterDelay={(index) => index * 0.012}
          getExitDelay={(index) => index * 0.012 + 0.04}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
          variants={{
            enter: {
              initial: { rotateX: 0, filter: "blur(0px)", opacity: 1 },
              animate: { rotateX: 90, filter: "blur(2px)", opacity: 0 },
            },
            exit: {
              initial: { rotateX: 90, filter: "blur(2px)", opacity: 0 },
              animate: { rotateX: 0, filter: "blur(0px)", opacity: 1 },
            },
          }}
        >
          {currentLabel}
        </TextRoll>
      </div>
    </div>
  );
}

