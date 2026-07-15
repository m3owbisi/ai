"use client";
import React from "react";
import { Phone, PhoneDisconnect, User } from "@phosphor-icons/react";
import { Scenario } from "@/data/call-scenarios";

interface DeviceFrameProps {
  scenario: Scenario;
  isPlaying: boolean;
  callDuration: number;
  onAccept: () => void;
  onDecline: () => void;
}

export function DeviceFrame({
  scenario,
  isPlaying,
  callDuration,
  onAccept,
  onDecline,
}: DeviceFrameProps) {
  // Format elapsed call duration as mm:ss
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="w-[230px] h-[380px] p-2 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[2.5rem] border border-white/10 shadow-[0_25px_60px_-18px_rgba(0,0,0,0.75),_inset_0_1px_0_rgba(255,255,255,0.08)] select-none relative">
      {/* Inner Screen Bezel Highlights (Double-Bezel) */}
      <div className="w-full h-full p-4 rounded-[calc(2.5rem-0.5rem)] bg-black border border-white/5 flex flex-col justify-between items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] relative overflow-hidden">
        {/* Dynamic Island Speaker */}
        <div className="w-16 h-3.5 bg-black rounded-full border border-white/5 absolute top-2 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <div className="w-8 h-1 bg-zinc-900 rounded-full" />
        </div>

        {/* Top bar indicators */}
        <div className="w-full flex justify-between items-center text-[8px] font-mono text-text-quiet mt-1.5 px-1.5">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-1.5 border border-white/20 rounded-sm relative block">
              <span className="absolute top-[1px] left-[1px] bottom-[1px] right-[2px] bg-accent-color rounded-2xs" />
            </span>
          </div>
        </div>

        {/* Active Call UI */}
        <div className="flex-1 flex flex-col justify-between items-center w-full mt-6 pb-2">
          {/* Caller Profile and Status */}
          <div className="flex flex-col items-center text-center gap-1.5">
            <span className={`text-[9px] font-mono uppercase tracking-widest font-semibold transition-colors duration-300 ${isPlaying ? "text-accent-color" : "text-text-quiet"}`}>
              {isPlaying ? "Call in progress" : scenario.callerLabel}
            </span>
            {isPlaying && (
              <span className="text-[9.5px] font-mono text-text-quiet tabular-nums">
                {formatDuration(callDuration)}
              </span>
            )}
            <span className="text-base font-semibold text-text-primary mt-1 tracking-tight leading-none">
              {scenario.callerName}
            </span>
          </div>

          {/* Pulsing Voice Waveform / Avatar */}
          <div className="relative my-4 flex items-center justify-center">
            {/* Pulsing rings when call is active */}
            {isPlaying && (
              <>
                <div className="absolute w-24 h-24 rounded-full border border-accent-color/30 animate-ping" />
                <div className="absolute w-18 h-18 rounded-full border border-accent-color/20 animate-pulse" />
              </>
            )}

            <div className={`w-16 h-16 rounded-full flex items-center justify-center border transition-all duration-500 bg-surface-1 ${isPlaying ? "border-accent-color shadow-[0_0_16px_var(--accent-glow)]" : "border-white/10"}`}>
              <User size={28} className={isPlaying ? "text-accent-color" : "text-text-secondary"} />
            </div>
          </div>

          {/* Call Actions (Decline / Accept buttons) */}
          <div className="flex items-center justify-center gap-8 w-full px-2">
            {/* Decline Button */}
            <button
              onClick={onDecline}
              disabled={!isPlaying}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-danger text-text-primary shadow-[0_4px_12px_rgba(255,93,93,0.3)] transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-30 disabled:scale-90 disabled:cursor-not-allowed"
              aria-label="Decline Call"
            >
              <PhoneDisconnect size={18} weight="fill" />
            </button>

            {/* Accept Button */}
            <button
              onClick={onAccept}
              disabled={isPlaying}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-success text-black shadow-[0_4px_16px_rgba(102,242,154,0.4)] transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-30 disabled:scale-90 disabled:cursor-not-allowed"
              aria-label="Accept Call"
            >
              <Phone size={18} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
