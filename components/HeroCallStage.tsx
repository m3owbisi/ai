"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Heart,
  Package,
  CreditCard,
  User,
  WarningOctagon,
  Chats,
  CheckCircle,
} from "@phosphor-icons/react";
import OrbitImages from "./OrbitImages";
import { scenarios } from "@/data/call-scenarios";

// Orbit nodes definitions
const NODES = [
  { id: "family", label: "Family", icon: Heart },
  { id: "courier", label: "Courier", icon: Package },
  { id: "pitch", label: "Promo Call", icon: CreditCard },
  { id: "client", label: "Client", icon: User },
  { id: "stranger", label: "Stranger", icon: WarningOctagon },
];

export function HeroCallStage() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % NODES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const activeNodeId = NODES[activeNode].id;
  const scenarioId = activeNodeId === "pitch" ? "pitcher" : activeNodeId;
  const activeScenario = scenarios[scenarioId];

  const orbitItems = NODES.map((node, i) => {
    const isActive = activeNode === i;
    const Icon = node.icon;

    return (
      <div
        key={node.id}
        onClick={() => setActiveNode(i)}
        className="flex flex-col items-center gap-1.5 cursor-pointer relative"
      >
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-500 ${
            isActive
              ? "bg-accent-color border-accent-color text-black shadow-[0_0_16px_var(--accent-glow)]"
              : "bg-surface-1 border-hairline-neutral text-text-secondary hover:border-hairline hover:bg-surface-2"
          }`}
        >
          <Icon size={20} weight={isActive ? "fill" : "light"} />
        </div>
        <span className={`text-[9px] font-mono uppercase tracking-widest transition-colors ${isActive ? "text-accent-color font-semibold" : "text-text-quiet"}`}>
          {node.label}
        </span>
      </div>
    );
  });

  return (
    <div className="relative w-full max-w-[500px] h-[550px] flex items-center justify-center select-none z-10 hero-orbit-stage">
      {/* Glow effect background */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-accent-glow blur-[80px] pointer-events-none z-0" />

      <OrbitImages
        items={orbitItems}
        shape="ellipse"
        baseWidth={500}
        radiusX={180}
        radiusY={90}
        rotation={-8}
        duration={35}
        itemSize={80}
        responsive={true}
        showPath={true}
        pathColor="var(--orbit-path)"
        pathWidth={1}
        className="w-full h-full z-10"
        centerContent={
          <div className="relative flex items-center justify-center w-[245px] h-[490px]">
            {/* The stable placeholder container for the 3D phone model */}
            <div id="hero-phone-placeholder" className="w-[245px] h-[490px] rounded-[3rem] border border-dashed border-hairline-neutral/40 bg-surface-1/5" />
          </div>
        }
      />
    </div>
  );
}
