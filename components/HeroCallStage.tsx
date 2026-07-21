"use client";

import type { CSSProperties } from "react";
import { DeviceFrame } from "./DeviceFrame";
import { scenarios } from "@/data/call-scenarios";

const HERO_ORBIT_NODES = [
  { id: "family", label: "Family", image: "/orbit-nodes/home.png" },
  { id: "courier", label: "Courier", image: "/orbit-nodes/package.png" },
  { id: "pitcher", label: "Promo Call", image: "/orbit-nodes/sparkle.png" },
  { id: "client", label: "Client", image: "/orbit-nodes/briefcase.png" },
  { id: "stranger", label: "Stranger", image: "/orbit-nodes/phone.png" },
  { id: "auto", label: "Auto", image: "/orbit-nodes/auto.png" },
];

function MobileHeroPhone() {
  const scenario = scenarios.pitcher;

  return (
    <div className="relative flex h-[520px] w-full items-center justify-center lg:hidden">
      <div className="mobile-call-orbit" aria-hidden="true">
        {HERO_ORBIT_NODES.map((node, index) => (
          <div
            key={node.id}
            className="mobile-call-orbit-node"
            style={{ "--orbit-index": index, "--orbit-total": HERO_ORBIT_NODES.length } as CSSProperties}
          >
            <div className="mobile-call-orbit-icon">
              <img src={node.image} alt="" draggable={false} />
            </div>
          </div>
        ))}
      </div>
      <div className="relative z-10 scale-[0.88] pointer-events-auto" style={{ transformStyle: "preserve-3d" }}>
        <DeviceFrame
          layout="hero"
          scenario={scenario}
          isPlaying={false}
          callDuration={0}
          onAccept={() => {}}
          onDecline={() => {}}
        />
      </div>
    </div>
  );
}

export function HeroCallStage() {
  return (
    <div className="relative z-10 flex h-[520px] min-h-[520px] w-full max-w-[760px] select-none items-center justify-center hero-orbit-stage pointer-events-none md:h-[620px] md:min-h-[620px]">
      <div className="absolute z-0 h-[min(74vw,350px)] w-[min(74vw,350px)] rounded-full bg-accent-glow blur-[64px] pointer-events-none md:blur-[80px]" />
      <MobileHeroPhone />
      <div className="relative hidden h-[min(104vw,490px)] max-h-[490px] w-[min(52vw,245px)] max-w-[245px] items-center justify-center lg:flex">
        <div id="hero-phone-placeholder" className="h-full w-full rounded-[3rem] opacity-0" />
      </div>
    </div>
  );
}
