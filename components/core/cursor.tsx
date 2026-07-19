"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

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
    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={31} fill="none" className="h-6 w-6">
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
  const x = useSpring(pointerX, { stiffness: 700, damping: 42, mass: 0.18 });
  const y = useSpring(pointerY, { stiffness: 700, damping: 42, mass: 0.18 });
  const frameRef = useRef<number | null>(null);
  const lastPointRef = useRef({ x: -80, y: -80 });
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

    const updatePointer = () => {
      pointerX.set(lastPointRef.current.x);
      pointerY.set(lastPointRef.current.y);
      frameRef.current = null;
    };

    const handlePointerMove = (event: PointerEvent) => {
      lastPointRef.current = { x: event.clientX, y: event.clientY };
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(updatePointer);
      }

      const target = event.target instanceof HTMLElement ? event.target : null;
      const disabled = target?.closest("[data-cursor-disabled]");
      if (disabled) {
        setIsVisible(false);
        setLabel("");
        return;
      }

      const cursorTarget = target?.closest("img, [data-cursor-target]") as CursorTarget | null;
      setIsVisible(true);
      setLabel(cursorTarget?.dataset.cursorLabel ?? cursorTarget?.getAttribute("alt") ?? "");
    };

    const handleLeave = () => {
      setIsVisible(false);
      setLabel("");
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", handleLeave);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handleLeave);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.classList.remove("has-custom-cursor");
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [isEnabled, pointerX, pointerY]);

  return (
    <>
      {children}
      {isEnabled ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
          style={{
            x,
            y,
            color: "var(--cursor-color)",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div className="translate-x-2 translate-y-2">
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
