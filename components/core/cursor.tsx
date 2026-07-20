"use client";

import React, { useEffect, useState, type ReactNode } from "react";
import { motion, useMotionValue } from "motion/react";

type CursorProviderProps = {
  children: ReactNode;
};

type CursorTarget = HTMLElement & {
  dataset: DOMStringMap & {
    cursorLabel?: string;
    cursorDisabled?: string;
    cursorTarget?: string;
  };
};

const DESKTOP_QUERY = "(hover: hover) and (pointer: fine)";

function MouseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={31} height={37} fill="none" className="h-7 w-7">
      <g clipPath="url(#global-cursor-clip)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          stroke="#fff"
          strokeLinecap="square"
          strokeWidth={2}
          d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="global-cursor-clip">
          <path fill="currentColor" d="M0 0h26v31H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CursorProvider({ children }: CursorProviderProps) {
  const pointerX = useMotionValue(-80);
  const pointerY = useMotionValue(-80);
  const scale = useMotionValue(1);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const syncEnabled = () => setIsEnabled(query.matches);

    syncEnabled();
    query.addEventListener("change", syncEnabled);

    return () => query.removeEventListener("change", syncEnabled);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("has-custom-cursor", isEnabled);

    if (!isEnabled) {
      return () => document.documentElement.classList.remove("has-custom-cursor");
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);

      const target = event.target instanceof HTMLElement ? event.target : null;
      const disabled = target?.closest("[data-cursor-disabled]");
      if (disabled) {
        setIsVisible(false);
        setLabel("");
        scale.set(1);
        return;
      }

      const cursorTarget = target?.closest("img, [data-cursor-target]") as CursorTarget | null;
      setIsVisible(true);
      setLabel(cursorTarget?.dataset.cursorLabel ?? cursorTarget?.getAttribute("alt") ?? "");
      scale.set(cursorTarget ? 1.08 : 1);
    };

    const handleLeave = () => {
      setIsVisible(false);
      setLabel("");
      scale.set(1);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", handleLeave);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handleLeave);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [isEnabled, pointerX, pointerY, scale]);

  return (
    <>
      {children}
      {isEnabled ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[9999] hidden origin-top-left md:block"
          style={{
            x: pointerX,
            y: pointerY,
            scale,
            color: "var(--cursor-color)",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div className="translate-x-1 translate-y-1">
            <MouseIcon />
            {label ? (
              <div className="ml-4 mt-1 whitespace-nowrap rounded-[4px] bg-[var(--cursor-color)] px-2 py-0.5 text-xs font-medium text-background shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                {label}
              </div>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </>
  );
}