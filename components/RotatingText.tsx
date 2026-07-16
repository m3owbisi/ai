"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, Transition, TargetAndTransition, VariantLabels } from "motion/react";

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  splitLevelClassName?: string;
  staggerFrom?: "first" | "last" | "center" | "random";
  initial?: TargetAndTransition | VariantLabels | boolean;
  animate?: TargetAndTransition | VariantLabels;
  exit?: TargetAndTransition | VariantLabels;
  staggerDuration?: number;
  transition?: Transition;
  rotationInterval?: number;
  splitBy?: "characters" | "words";
  auto?: boolean;
  loop?: boolean;
}

export default function RotatingText({
  texts,
  mainClassName = "",
  splitLevelClassName = "",
  staggerFrom = "first",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-120%" },
  staggerDuration = 0.025,
  transition = { type: "spring", damping: 30, stiffness: 400 },
  rotationInterval = 2000,
  splitBy = "characters",
  auto = true,
  loop = true,
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!auto) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === texts.length - 1) {
          return loop ? 0 : prev;
        }
        return prev + 1;
      });
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [auto, loop, rotationInterval, texts.length]);

  const currentText = texts[currentIndex];

  const elements = useMemo(() => {
    if (splitBy === "words") {
      return currentText.split(" ");
    }
    // characters: split by characters, but preserve spaces nicely as non-breaking spaces
    return currentText.split("").map((char) => (char === " " ? "\u00A0" : char));
  }, [currentText, splitBy]);

  const getStaggerDelay = (index: number, total: number) => {
    if (staggerFrom === "first") {
      return index * staggerDuration;
    }
    if (staggerFrom === "last") {
      return (total - 1 - index) * staggerDuration;
    }
    if (staggerFrom === "center") {
      const center = (total - 1) / 2;
      return Math.abs(index - center) * staggerDuration;
    }
    if (staggerFrom === "random") {
      return Math.random() * total * staggerDuration;
    }
    return index * staggerDuration;
  };

  return (
    <span className={`inline-flex flex-wrap ${mainClassName}`}>
      <span className="sr-only">{currentText}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="inline-flex flex-wrap"
          aria-hidden="true"
        >
          {elements.map((el, i) => {
            const delay = getStaggerDelay(i, elements.length);
            return (
              <span
                key={i}
                className={`inline-block overflow-hidden ${splitLevelClassName}`}
              >
                <motion.span
                  initial={initial}
                  animate={animate}
                  exit={exit}
                  transition={{
                    ...transition,
                    delay: delay,
                  }}
                  className="inline-block"
                >
                  {el}
                </motion.span>
                {/* Add a space between words if splitting by words */}
                {splitBy === "words" && i < elements.length - 1 && (
                  <span className="inline-block">&nbsp;</span>
                )}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
