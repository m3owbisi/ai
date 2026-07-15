"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  Package,
  CreditCard,
  User,
  WarningOctagon,
  PhoneCall,
  Chats,
  CheckCircle,
} from "@phosphor-icons/react";

// Orbit nodes definitions
const NODES = [
  { id: "family", label: "Family", icon: Heart, delay: 0 },
  { id: "courier", label: "Courier", icon: Package, delay: 1.5 },
  { id: "pitch", label: "Promo Call", icon: CreditCard, delay: 3 },
  { id: "client", label: "Client", icon: User, delay: 4.5 },
  { id: "stranger", label: "Stranger", icon: WarningOctagon, delay: 6 },
];

export function HeroCallStage() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % NODES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[500px] h-[550px] flex items-center justify-center select-none z-10">
      {/* Glow effect background */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-accent-glow blur-[80px] pointer-events-none" />

      {/* Orbit Rings (Layered CSS 3D perspective effect) */}
      <div className="absolute inset-0 flex items-center justify-center [perspective:1000px] pointer-events-none">
        <div className="w-[380px] h-[380px] rounded-full border border-white/5 border-dashed [transform:rotateX(65deg)_rotateY(-10deg)] absolute" />
        <div className="w-[280px] h-[280px] rounded-full border border-white/5 [transform:rotateX(65deg)_rotateY(-10deg)] absolute animate-spin" style={{ animationDuration: "20s" }} />
      </div>

      {/* Orbiting Nodes */}
      {NODES.map((node, i) => {
        const angle = (i * (360 / NODES.length) * Math.PI) / 180;
        const radius = 170; // Orbit radius
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * (radius * 0.45); // Squash Y for perspective tilt

        const isActive = activeNode === i;
        const Icon = node.icon;

        return (
          <motion.div
            key={node.id}
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{
              x,
              y,
              scale: isActive ? 1.15 : 0.9,
              opacity: isActive ? 1 : 0.6,
              zIndex: y > 0 ? 30 : 10, // Depth sorting
            }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            className="absolute flex flex-col items-center gap-1.5 cursor-pointer"
          >
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-500 ${
                isActive
                  ? "bg-accent-color border-accent-color text-black shadow-[0_0_16px_var(--accent-glow)]"
                  : "bg-surface-1 border-white/10 text-text-secondary hover:border-white/20 hover:bg-surface-2"
              }`}
            >
              <Icon size={20} weight={isActive ? "fill" : "light"} />
            </div>
            <span className={`text-[9px] font-mono uppercase tracking-widest transition-colors ${isActive ? "text-accent-color font-semibold" : "text-text-quiet"}`}>
              {node.label}
            </span>
          </motion.div>
        );
      })}

      {/* Tilted Glass Phone Mockup (Double-Bezel Architecture) */}
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateX: [12, 14, 12],
          rotateY: [-15, -12, -15],
          y: [-6, 6, -6],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="w-[200px] h-[340px] p-2 bg-black/40 backdrop-blur-md rounded-[2.2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-25 select-none relative"
      >
        {/* Inner core bezel highlights */}
        <div className="w-full h-full p-4 rounded-[calc(2.2rem-0.5rem)] bg-surface-1 border border-white/5 flex flex-col justify-between items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] relative">
          {/* Dynamic Speaker Island */}
          <div className="w-16 h-3 bg-black rounded-full border border-white/5" />

          {/* Incoming Active Scenario UI */}
          <div className="flex flex-col items-center gap-2 mt-4 text-center">
            <div className="w-12 h-12 rounded-full bg-surface-2 border border-white/5 flex items-center justify-center relative">
              <PhoneCall size={20} className="text-text-secondary animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-accent-color animate-ping opacity-30" />
            </div>
            <span className="text-[10px] text-text-quiet font-mono tracking-wider uppercase">
              Equal Screening
            </span>
            <span className="text-sm font-semibold tracking-tight text-text-primary">
              {NODES[activeNode].label}
            </span>
          </div>

          {/* Micro transcript representation within phone */}
          <div className="w-full bg-black/30 border border-white/5 rounded-xl p-2.5 flex flex-col gap-1.5 max-h-[120px] overflow-hidden text-[9px] text-left">
            <div className="text-text-quiet font-mono text-[7px] uppercase tracking-wider">
              Live conversation
            </div>
            <p className="text-text-secondary italic">
              "Hi, calling for Keshav..."
            </p>
            <p className="text-accent-color font-medium">
              "Equal AI: Keshav is busy, screening call..."
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating Transcript Ribbon overlay (Bottom right corner overlapping) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-2 -right-4 p-3 bg-surface-2/95 backdrop-blur border border-white/10 rounded-2xl shadow-[0_12px_24px_rgba(0,0,0,0.5)] z-40 max-w-[220px] flex flex-col gap-2"
      >
        <div className="flex items-center gap-1.5 text-[8.5px] font-mono text-accent-color uppercase tracking-wider">
          <Chats size={10} />
          <span>AI Action Verdict</span>
        </div>
        <p className="text-[11px] leading-snug text-text-secondary font-medium">
          Courier call approved: "Delivery driver is outside with your package"
        </p>
        <div className="pt-1.5 border-t border-white/5 flex items-center gap-1.5 text-[9px] text-success font-semibold uppercase">
          <CheckCircle size={10} weight="fill" />
          <span>Allowed through</span>
        </div>
      </motion.div>
    </div>
  );
}
