"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Phone, PhoneDisconnect, User } from "@phosphor-icons/react";
import { Scenario, DialogueLine } from "@/data/call-scenarios";

interface DeviceFrameProps {
  scenario: Scenario;
  isPlaying: boolean;
  callDuration?: number;
  onAccept?: () => void;
  onDecline?: () => void;
  layout?: "hero" | "demo";
}

export function DeviceFrame({
  scenario,
  isPlaying,
  callDuration = 0,
  onAccept = () => {},
  onDecline = () => {},
  layout = "demo",
}: DeviceFrameProps) {
  const isHero = layout === "hero";
  
  // States for the typing screening simulation in the hero section
  const [typedLines, setTypedLines] = useState<DialogueLine[]>([]);
  const [currentTypingText, setCurrentTypingText] = useState("");
  const [typingLineIndex, setTypingLineIndex] = useState(0);

  // State for 3D mouse parallax tilt
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse coordinates relative to screen center (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Format elapsed call duration as mm:ss
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  // Screening typing logic
  useEffect(() => {
    if (!isHero) return;

    let active = true;
    let startTimeout: NodeJS.Timeout;

    const frameId = requestAnimationFrame(() => {
      if (!active) return;
      setTypedLines([]);
      setCurrentTypingText("");
      setTypingLineIndex(0);

      const lines = scenario.dialogue;
      let lineIdx = 0;
      let charIdx = 0;
      let currentText = "";

      const typeNextChar = () => {
        if (!active) return;
        if (lineIdx >= lines.length || lineIdx >= 3) return; // limit to 3 lines to fit frame nicely

        const line = lines[lineIdx];
        if (charIdx < line.text.length) {
          currentText += line.text[charIdx];
          setCurrentTypingText(currentText);
          charIdx++;
          // Speed up typing slightly
          setTimeout(typeNextChar, 15);
        } else {
          // Line complete
          setTypedLines((prev) => [...prev, { speaker: line.speaker, text: line.text }]);
          setCurrentTypingText("");
          currentText = "";
          charIdx = 0;
          lineIdx++;
          setTypingLineIndex(lineIdx);
          // Wait 1 second before starting next line
          setTimeout(typeNextChar, 1000);
        }
      };

      startTimeout = setTimeout(typeNextChar, 400);
    });

    return () => {
      active = false;
      cancelAnimationFrame(frameId);
      if (startTimeout) clearTimeout(startTimeout);
    };
  }, [scenario.id, isHero]);

  // Voxel stack layers (depth index from -5 to +4)
  const voxelLayers = Array.from({ length: 10 }, (_, i) => i - 5);

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d] relative flex items-center justify-center select-none">
      {/* 3D Rotating Chassis container */}
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          width: "245px",
          height: "490px",
        }}
        animate={{
          rotateX: -mousePos.y * 8,
          rotateY: mousePos.x * 8,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 22 }}
        className="relative"
      >
        {/* Back Plate (Z = -6px) */}
        <div
          className={`absolute inset-0 rounded-[3rem] transition-colors duration-500 ${
            isHero ? "bg-[var(--device-back-hero)] border border-[var(--device-back-border-hero)]" : "bg-gradient-to-br from-[var(--device-back-grad-start)] to-[var(--device-back-grad-end)] border border-[var(--device-back-border)]"
          }`}
          style={{
            transform: "translateZ(-6px) rotateY(180deg)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Lenses / Camera Module */}
          <div
            className={`absolute top-9 left-9 w-18 h-18 bg-[var(--surface-2)]/80 rounded-[1.25rem] border border-hairline-neutral shadow-inner flex flex-wrap p-2 gap-1.5 justify-center items-center transition-opacity duration-500 ${
              isHero ? "opacity-30" : "opacity-100"
            }`}
          >
            <div className="w-6 h-6 bg-black rounded-full border border-white/10 flex items-center justify-center shadow-md">
              <div className="w-2.5 h-2.5 bg-zinc-900 rounded-full" />
            </div>
            <div className="w-6 h-6 bg-black rounded-full border border-white/10 flex items-center justify-center shadow-md">
              <div className="w-2.5 h-2.5 bg-zinc-900 rounded-full" />
            </div>
          </div>
          {/* Logo symbol centered on back */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 w-8 h-8 rounded-full border border-hairline flex items-center justify-center">
            <div className="w-3.5 h-3.5 bg-accent-color rounded-full" />
          </div>
        </div>

        {/* Voxel Bezel Layers (Z = -5px to +4px) */}
        {voxelLayers.map((zOffset) => (
          <div
            key={zOffset}
            className="absolute inset-0 rounded-[3rem] border border-hairline/5 pointer-events-none transition-all duration-500"
            style={{
              transform: `translateZ(${zOffset}px)`,
              background: isHero ? "var(--device-bezel-bg-hero)" : "linear-gradient(135deg, var(--device-bezel-grad-start), var(--device-bezel-grad-end))",
              opacity: isHero ? 0.6 : 0.88,
            }}
          />
        ))}

        {/* Physical buttons placed on side edges */}
        {/* Left Side: Volume Buttons */}
        <div
          className={`absolute left-[-2.5px] top-28 w-[3px] h-11 rounded-l-sm border-l shadow-sm animate-pulse transition-all duration-500 bg-[var(--device-button-bg-hero)] border-[var(--device-button-border-hero)]`}
          style={{ transform: "translateZ(0px)" }}
        />
        <div
          className={`absolute left-[-2.5px] top-42 w-[3px] h-11 rounded-l-sm border-l shadow-sm transition-all duration-500 bg-[var(--device-button-bg)] border-[var(--device-button-border)]`}
          style={{ transform: "translateZ(0px)" }}
        />
        {/* Right Side: Power Button */}
        <div
          className={`absolute right-[-2.5px] top-34 w-[3px] h-16 rounded-r-sm border-r shadow-sm transition-all duration-500 bg-[var(--device-button-bg)] border-[var(--device-button-border)]`}
          style={{ transform: "translateZ(1px)" }}
        />

        {/* Front Face - Screen Glass (Z = 5px) */}
        <div
          className={`absolute inset-0 rounded-[3rem] p-[7px] border flex flex-col justify-between items-center overflow-hidden transition-all duration-500 ${
            isHero
              ? "bg-[var(--device-screen-bg-hero)] border-[var(--device-screen-border-hero)] backdrop-blur-md"
              : "bg-[var(--device-screen-bg)] border-[var(--device-screen-border)]"
          }`}
          style={{
            transform: "translateZ(5px)",
            transformStyle: "preserve-3d",
            boxShadow: isHero ? "var(--device-screen-shadow-hero)" : "var(--device-screen-shadow)",
          }}
        >
          {/* Interactive glare reflection overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-30 bg-gradient-to-tr from-transparent via-white to-transparent transition-transform duration-300"
            style={{
              transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px) rotate(45deg) scale(1.6)`,
              opacity: "var(--device-glare-opacity)",
            }}
          />

          {/* Screen Content Container (Inner Bezel) */}
          <div
            className={`w-full h-full p-4 rounded-[calc(3rem-7px)] flex flex-col justify-between items-center relative overflow-hidden transition-all duration-500 ${
              isHero ? "bg-transparent border-none" : "bg-[var(--device-screen-inner-bg)] border border-hairline-neutral"
            }`}
          >
            {/* Dynamic Island Capsule */}
            <div className="w-18 h-4.5 bg-black rounded-full border border-hairline-neutral absolute top-2.5 left-1/2 -translate-x-1/2 flex items-center justify-between px-3 z-30">
              <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full shadow-inner" />
              <div className="w-1 h-1 bg-zinc-950 rounded-full" />
            </div>

            {/* Top Indicator bar */}
            <div className="w-full flex justify-between items-center text-[8.5px] font-mono text-text-quiet mt-1.5 px-1.5">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-1.5 border border-hairline-neutral rounded-sm relative block">
                  <span className="absolute top-[1px] left-[1px] bottom-[1px] right-[2px] bg-accent-color rounded-2xs" />
                </span>
              </div>
            </div>

            {/* Active Call UI */}
            <div className="flex-1 flex flex-col justify-between items-center w-full mt-6 pb-2">
              {/* Caller Profile and Status */}
              <div className="flex flex-col items-center text-center gap-1.5">
                <span
                  className={`text-[8.5px] font-mono uppercase tracking-widest font-semibold transition-colors duration-300 ${
                    isHero || isPlaying ? "text-accent-color" : "text-text-quiet"
                  }`}
                >
                  {isHero ? "Automated Screening" : isPlaying ? "Call in progress" : scenario.callerLabel}
                </span>
                {!isHero && isPlaying && (
                  <span className="text-[9.5px] font-mono text-text-quiet tabular-nums">
                    {formatDuration(callDuration)}
                  </span>
                )}
                <span className="text-sm font-semibold text-text-primary mt-1 tracking-tight leading-none">
                  {scenario.callerName}
                </span>
              </div>

              {/* Middle Screen area: Typing Transcript for Hero OR Avatar for Demo */}
              {isHero ? (
                <div className="flex-1 w-full my-3.5 px-1 py-1 flex flex-col justify-end gap-1.5 overflow-hidden text-[9px] text-left min-h-[175px] max-h-[195px] relative">
                  <div className="flex flex-col gap-2.5 overflow-y-auto max-h-[175px] pr-0.5 scrollbar-none scroll-smooth">
                    {typedLines.map((line, idx) => (
                      <div key={idx} className="flex flex-col gap-0.5 leading-snug">
                        <span className="text-[7.5px] font-mono uppercase tracking-wider text-text-quiet">
                          {line.speaker === "equal" ? "Equal AI" : scenario.callerName}
                        </span>
                        <p className={line.speaker === "equal" ? "text-accent-color font-medium font-sans" : "text-text-secondary font-sans"}>
                          &ldquo;{line.text}&rdquo;
                        </p>
                      </div>
                    ))}
                    {currentTypingText && (
                      <div className="flex flex-col gap-0.5 leading-snug">
                        <span className="text-[7.5px] font-mono uppercase tracking-wider text-text-quiet">
                          {typingLineIndex < scenario.dialogue.length && scenario.dialogue[typingLineIndex].speaker === "equal"
                            ? "Equal AI"
                            : scenario.callerName}
                        </span>
                        <p
                          className={
                            typingLineIndex < scenario.dialogue.length && scenario.dialogue[typingLineIndex].speaker === "equal"
                              ? "text-accent-color font-medium font-sans"
                              : "text-text-secondary font-sans"
                          }
                        >
                          &ldquo;{currentTypingText}
                          <span className="inline-block w-0.5 h-2.5 ml-0.5 bg-accent-color animate-pulse align-middle" />&rdquo;
                        </p>
                      </div>
                    )}
                    {typedLines.length === 0 && !currentTypingText && (
                      <div className="flex-1 flex items-center justify-center text-text-quiet text-[8px] italic text-center py-10">
                        Answering call...
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Pulsing Voice Waveform / Avatar */
                <div className="relative my-4 flex items-center justify-center">
                  {/* Pulsing rings when call is active */}
                  {isPlaying && (
                    <>
                      <div className="absolute w-28 h-28 rounded-full border border-accent-color/30 animate-ping" />
                      <div className="absolute w-20 h-20 rounded-full border border-accent-color/20 animate-pulse" />
                    </>
                  )}

                  <div
                    className={`w-18 h-18 rounded-full flex items-center justify-center border transition-all duration-500 bg-surface-1 ${
                      isPlaying ? "border-accent-color shadow-[0_0_20px_var(--accent-glow)]" : "border-hairline-neutral"
                    }`}
                  >
                    <User size={30} className={isPlaying ? "text-accent-color" : "text-text-secondary"} />
                  </div>
                </div>
              )}

              {/* Bottom area: Waveform visualizer for Hero OR Control Buttons for Demo */}
              {isHero ? (
                <div className="w-full flex items-center justify-center gap-1.5 h-5 px-2 mt-1">
                  <span className="w-1 h-2.5 bg-accent-color/50 rounded-full animate-[pulse_0.6s_infinite_100ms]" />
                  <span className="w-1 h-4 bg-accent-color/70 rounded-full animate-[pulse_0.8s_infinite_200ms]" />
                  <span className="w-1.5 h-5.5 bg-accent-color rounded-full animate-[pulse_0.5s_infinite_300ms]" />
                  <span className="w-1 h-3.5 bg-accent-color/60 rounded-full animate-[pulse_0.7s_infinite_400ms]" />
                  <span className="w-1 h-2 bg-accent-color/40 rounded-full animate-[pulse_0.9s_infinite_500ms]" />
                </div>
              ) : (
                /* Call Actions (Decline / Accept buttons) */
                <div className="flex items-center justify-center gap-8 w-full px-2">
                  {/* Decline Button */}
                  <button
                    onClick={onDecline}
                    disabled={!isPlaying}
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-danger text-text-primary shadow-lg shadow-danger/30 transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-30 disabled:scale-90 disabled:cursor-not-allowed"
                    aria-label="Decline Call"
                  >
                    <PhoneDisconnect size={20} weight="fill" />
                  </button>

                  {/* Accept Button */}
                  <button
                    onClick={onAccept}
                    disabled={isPlaying}
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-success text-black shadow-lg shadow-success/30 transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-30 disabled:scale-90 disabled:cursor-not-allowed"
                    aria-label="Accept Call"
                  >
                    <Phone size={20} weight="fill" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
