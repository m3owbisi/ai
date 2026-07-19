import { useMemo, useEffect, useLayoutEffect, useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useTransform, animate, MotionValue } from "motion/react";

type OrbitLayer = "front" | "back";

interface SplitOrbitProps {
  items: ReactNode[];
  baseWidth?: number;
  radiusX?: number;
  radiusY?: number;
  rotation?: number;
  duration?: number;
  itemSize?: number;
  className?: string;
  showPath?: boolean;
  pathColor?: string;
  pathWidth?: number;
  frontOnly?: boolean;
  /** Rendered between the back and front orbit layers (the 3D phone). */
  phoneContent?: ReactNode;
  /** Rendered above everything (verdict card). */
  verdictContent?: ReactNode;
}

interface OrbitNodeProps {
  item: ReactNode;
  index: number;
  totalItems: number;
  itemSize: number;
  rotation: number;
  progress: MotionValue<number>;
  radiusX: number;
  radiusY: number;
  center: number;
  layer: OrbitLayer;
}

function generateRotatedEllipsePath(cx: number, cy: number, rx: number, ry: number, rotation: number): string {
  const phi = (rotation * Math.PI) / 180;
  const points = Array.from({ length: 161 }, (_, i) => {
    const theta = (i / 160) * 2 * Math.PI;
    const xLocal = -rx * Math.cos(theta);
    const yLocal = -ry * Math.sin(theta);
    const x = cx + xLocal * Math.cos(phi) - yLocal * Math.sin(phi);
    const y = cy + xLocal * Math.sin(phi) + yLocal * Math.cos(phi);
    return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
  });
  return `${points.join(" ")} Z`;
}

/**
 * A single orbit node. Position is computed manually from the parametric
 * rotated-ellipse equation (no CSS offset-path) so the node can live in a
 * specific DOM layer relative to the phone.
 *
 * Every node is mounted twice — once in the back layer, once in the front —
 * and each copy hides itself while the node is on the other half of the arc.
 * That is cheaper and far less janky than moving DOM nodes between layers.
 */
function OrbitNode({
  item,
  index,
  totalItems,
  itemSize,
  rotation,
  progress,
  radiusX,
  radiusY,
  center,
  layer,
}: OrbitNodeProps) {
  const itemOffset = (index / totalItems) * 100;
  const phi = (rotation * Math.PI) / 180;

  const position = useTransform(progress, (p: number) => {
    const op = (((p + itemOffset) % 100) + 100) % 100;
    const theta = (op / 100) * 2 * Math.PI;
    const xLocal = -radiusX * Math.cos(theta);
    const yLocal = -radiusY * Math.sin(theta);
    return {
      x: xLocal * Math.cos(phi) - yLocal * Math.sin(phi),
      y: xLocal * Math.sin(phi) + yLocal * Math.cos(phi),
    };
  });

  const x = useTransform(position, (p) => center + p.x - itemSize / 2);
  const y = useTransform(position, (p) => center + p.y - itemSize / 2);

  // Normalised depth: -1 = deepest back, +1 = nearest front.
  const depth = useTransform(position, (p) => Math.max(-1, Math.min(1, p.y / radiusY)));

  const scale = useTransform(depth, (d) => 0.72 + ((d + 1) / 2) * 0.46);

  const opacity = useTransform(depth, (d) => {
    const inLayer = layer === "front" ? d >= 0 : d < 0;
    if (!inLayer) return 0;
    return 0.35 + ((d + 1) / 2) * 0.65;
  });

  return (
    <motion.div
      className="absolute left-0 top-0 will-change-transform select-none"
      style={{ width: itemSize, height: itemSize, x, y, scale, opacity }}
    >
      <div>{item}</div>
    </motion.div>
  );
}

export default function SplitOrbit({
  items,
  baseWidth = 720,
  radiusX = 340,
  radiusY = 120,
  rotation = -22,
  duration = 30,
  itemSize = 80,
  className = "",
  showPath = true,
  pathColor = "rgba(0,0,0,0.1)",
  pathWidth = 1,
  frontOnly = false,
  phoneContent,
  verdictContent,
}: SplitOrbitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);
  const progress = useMotionValue(0);
  const center = baseWidth / 2;

  const path = useMemo(
    () => generateRotatedEllipsePath(center, center, radiusX, radiusY, rotation),
    [center, radiusX, radiusY, rotation]
  );

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const updateScale = () => {
      if (!containerRef.current) return;
      setScale(containerRef.current.clientWidth / baseWidth);
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [baseWidth]);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const controls = animate(progress, 100, {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
    return () => controls.stop();
  }, [progress, duration]);

  // The scaled stage that holds one half of the orbit nodes.
  const renderLayer = (layer: OrbitLayer, zIndex: number, withPath: boolean) => (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex }} aria-hidden="true">
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: baseWidth,
          height: baseWidth,
          transform: scale !== null ? `translate(-50%, -50%) scale(${scale})` : undefined,
          visibility: scale === null ? "hidden" : undefined,
          transformOrigin: "center center",
        }}
      >
        <div className="relative h-full w-full">
          {withPath && showPath && (
            <svg
              width="100%"
              height="100%"
              viewBox={`0 0 ${baseWidth} ${baseWidth}`}
              className="absolute inset-0 pointer-events-none"
            >
              <path d={path} fill="none" stroke={pathColor} strokeWidth={pathWidth / (scale ?? 1)} />
            </svg>
          )}

          {items.map((item, index) => (
            <OrbitNode
              key={index}
              item={item}
              index={index}
              totalItems={items.length}
              itemSize={itemSize}
              rotation={rotation}
              progress={progress}
              radiusX={radiusX}
              radiusY={radiusY}
              center={center}
              layer={layer}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className={`relative mx-auto aspect-square ${className}`}>
      {/* Back arc — behind the phone */}
      {!frontOnly && renderLayer("back", 10, true)}

      {/* The 3D phone model */}
      {phoneContent && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 40 }}>
          <div className="relative pointer-events-auto">{phoneContent}</div>
        </div>
      )}

      {/* Front arc — in front of the phone */}
      {renderLayer("front", 60, false)}

      {/* Verdict card above everything */}
      {verdictContent && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 70 }}>
          <div className="relative pointer-events-auto">{verdictContent}</div>
        </div>
      )}
    </div>
  );
}
