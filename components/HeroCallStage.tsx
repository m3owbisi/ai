"use client";

export function HeroCallStage() {
  return (
    <div className="relative z-10 flex h-[620px] w-full max-w-[760px] select-none items-center justify-center hero-orbit-stage pointer-events-none">
      <div className="absolute z-0 h-[350px] w-[350px] rounded-full bg-accent-glow blur-[80px] pointer-events-none" />
      <div className="relative flex h-[490px] w-[245px] items-center justify-center">
        <div id="hero-phone-placeholder" className="h-[490px] w-[245px] rounded-[3rem] opacity-0" />
      </div>
    </div>
  );
}