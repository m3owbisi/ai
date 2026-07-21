"use client";

import { DeviceFrame } from "./DeviceFrame";
import SplitOrbit from "./HeroOrbitImages";
import { scenarios } from "@/data/call-scenarios";

const HERO_ORBIT_NODES = [
  { id: "family", label: "Family", image: "/orbit-nodes/home.png" },
  { id: "courier", label: "Courier", image: "/orbit-nodes/package.png" },
  { id: "pitcher", label: "Promo Call", image: "/orbit-nodes/sparkle.png" },
  { id: "client", label: "Client", image: "/orbit-nodes/briefcase.png" },
  { id: "stranger", label: "Stranger", image: "/orbit-nodes/phone.png" },
  { id: "auto", label: "Auto", image: "/orbit-nodes/auto.png" },
];

function OrbitIcon({ node }: { node: (typeof HERO_ORBIT_NODES)[number] }) {
  return (
    <div className="grid size-[72px] shrink-0 place-items-center rounded-full">
      <div className="grid size-[62px] shrink-0 place-items-center overflow-hidden rounded-full border-2 border-hairline-neutral bg-surface-1/90 shadow-[0_0_16px_var(--accent-glow)]">
        <img
          src={node.image}
          alt={node.label}
          draggable={false}
          className="block aspect-square size-full rounded-full object-cover"
        />
      </div>
    </div>
  );
}

function ResponsiveHeroPhone() {
  const scenario = scenarios.pitcher;
  const orbitItems = HERO_ORBIT_NODES.map((node) => <OrbitIcon key={node.id} node={node} />);

  return (
    <div className="relative flex h-[620px] w-full items-center justify-center lg:hidden">
      <SplitOrbit
        items={orbitItems}
        baseWidth={620}
        radiusX={224}
        radiusY={88}
        rotation={-22}
        duration={24}
        itemSize={72}
        showPath
        pathColor="var(--orbit-path)"
        pathWidth={2.25}
        className="h-[620px] w-[min(118vw,620px)]"
        phoneContent={
          <div className="relative scale-[0.9] pointer-events-auto sm:scale-100" style={{ transformStyle: "preserve-3d" }}>
            <DeviceFrame
              layout="hero"
              scenario={scenario}
              isPlaying={false}
              callDuration={0}
              onAccept={() => {}}
              onDecline={() => {}}
            />
          </div>
        }
      />
    </div>
  );
}

export function HeroCallStage() {
  return (
    <div className="relative z-10 flex h-[620px] min-h-[620px] w-full max-w-[760px] select-none items-center justify-center hero-orbit-stage pointer-events-none">
      <div className="absolute z-0 h-[min(74vw,350px)] w-[min(74vw,350px)] rounded-full bg-accent-glow blur-[64px] pointer-events-none md:blur-[80px]" />
      <ResponsiveHeroPhone />
      <div className="relative hidden h-[min(104vw,490px)] max-h-[490px] w-[min(52vw,245px)] max-w-[245px] items-center justify-center lg:flex">
        <div id="hero-phone-placeholder" className="h-full w-full rounded-[3rem] opacity-0" />
      </div>
    </div>
  );
}
