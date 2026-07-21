"use client";

import { useEffect, useState } from "react";
import Ballpit from "./Ballpit";
import FaultyTerminal from "./FaultyTerminal";
import { useTheme } from "@/components/theme/theme-provider";

function supportsWebGL() {
  if (typeof document === "undefined") return false;
  const canvas = document.createElement("canvas");
  try {
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

function LightFallbackBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-background" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,177,64,0.22),transparent_34%),radial-gradient(circle_at_18%_22%,rgba(186,255,41,0.18),transparent_28%),linear-gradient(135deg,rgba(0,177,64,0.10),transparent_44%,rgba(0,177,64,0.08))]" />
      <div className="light-ballpit-fallback" />
      <div className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(rgba(0,177,64,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(0,177,64,0.24)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute left-0 top-0 h-full w-[68%] bg-gradient-to-r from-background via-background/82 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

function LightBallpitBackground() {
  const [canRenderBallpit, setCanRenderBallpit] = useState(false);

  useEffect(() => {
    setCanRenderBallpit(supportsWebGL());
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-background" aria-hidden="true">
      <LightFallbackBackground />
      {canRenderBallpit ? (
        <div className="absolute left-1/2 top-1/2 h-[1080px] w-[1080px] -translate-x-1/2 -translate-y-1/2 opacity-90 mix-blend-multiply">
          <Ballpit
            count={130}
            gravity={0}
            friction={0.967}
            wallBounce={0.77}
            followCursor
            colors={["#00B140", "#BAFF29"]}
          />
        </div>
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,transparent_0%,transparent_36%,var(--background)_76%),linear-gradient(90deg,var(--background)_0%,rgba(252,255,253,0.70)_40%,transparent_82%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

function DarkTerminalBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 opacity-70">
        <FaultyTerminal
          scale={2.85}
          gridMul={[2, 1]}
          digitSize={1.18}
          timeScale={1.35}
          scanlineIntensity={0.32}
          glitchAmount={0.72}
          flickerAmount={0.36}
          noiseAmp={0.58}
          curvature={0.08}
          tint="#E5FE40"
          mouseReact
          mouseStrength={0.16}
          pageLoadAnimation
          brightness={0.24}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,transparent_0%,var(--background)_70%),linear-gradient(90deg,var(--background)_0%,transparent_55%,var(--background)_100%)] opacity-85" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

export function HeroShaderBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {!mounted ? <LightFallbackBackground /> : resolvedTheme === "light" ? <LightBallpitBackground /> : <DarkTerminalBackground />}
    </div>
  );
}
