"use client";

import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { motion, type Transition } from "motion/react";
import { cn } from "@/lib/utils";

type AnimatedChild = ReactElement<{
  "data-id"?: string;
  className?: string;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
}>;

type AnimatedBackgroundProps = {
  children: ReactNode;
  className?: string;
  defaultValue?: string;
  enableHover?: boolean;
  transition?: Transition;
};

export function AnimatedBackground({
  children,
  className,
  defaultValue,
  enableHover = false,
  transition,
}: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(defaultValue);
  const [highlight, setHighlight] = useState({ left: 0, top: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!activeId || !containerRef.current) return;

    const node = containerRef.current.querySelector<HTMLElement>(`[data-id="${CSS.escape(activeId)}"]`);
    if (!node) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();

    setHighlight({
      left: nodeRect.left - parentRect.left,
      top: nodeRect.top - parentRect.top,
      width: nodeRect.width,
      height: nodeRect.height,
    });
  }, [activeId, children]);

  return (
    <div ref={containerRef} className="relative inline-flex items-center">
      {activeId && highlight.width > 0 ? (
        <motion.div
          aria-hidden="true"
          className={cn("absolute z-0", className)}
          animate={highlight}
          transition={transition}
        />
      ) : null}
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;

        const typedChild = child as AnimatedChild;
        const childId = typedChild.props["data-id"];

        return cloneElement(typedChild, {
          className: cn("relative z-10", typedChild.props.className),
          onFocus: (event) => {
            if (childId) setActiveId(childId);
            typedChild.props.onFocus?.(event);
          },
          onMouseEnter: (event) => {
            if (enableHover && childId) setActiveId(childId);
            typedChild.props.onMouseEnter?.(event);
          },
        });
      })}
    </div>
  );
}
