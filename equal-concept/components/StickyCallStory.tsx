"use client";
import React, { useState, useEffect, useRef } from "react";
import { scenarios } from "@/data/call-scenarios";
import { CallerSelector } from "./CallerSelector";
import { DeviceFrame } from "./DeviceFrame";
import { LiveTranscript } from "./LiveTranscript";

export function StickyCallStory() {
  const [activeId, setActiveId] = useState<string>("pitcher");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [transcriptLines, setTranscriptLines] = useState<any[]>([]);
  const [showSummary, setShowSummary] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(true); // Muted by default per guidelines

  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRefs = useRef<NodeJS.Timeout[]>([]);
  const durationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scenario = scenarios[activeId];

  // Initialize Web Audio API safely on first user gesture
  const initAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  };

  // Synthesize custom sound wave tones
  const playSynthTone = (freq: number, duration: number, type: OscillatorType = "sine") => {
    if (isMuted) return;
    try {
      initAudio();
      const ctx = audioCtxRef.current;
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = type;
      osc.frequency.value = freq;

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.05, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    } catch (e) {
      console.warn("Audio Context error:", e);
    }
  };

  const playSummarySweep = () => {
    if (isMuted) return;
    try {
      initAudio();
      const ctx = audioCtxRef.current;
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = "sine";
      osc.frequency.setValueAtTime(660, now);
      osc.frequency.linearRampToValueAtTime(880, now + 0.15);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

      osc.start(now);
      osc.stop(now + 0.5);
    } catch (e) {}
  };

  // Stop script playback and clear all timers
  const stopPlayback = () => {
    timerRefs.current.forEach((t) => clearTimeout(t));
    timerRefs.current = [];
    if (durationIntervalRef.current) {
      clearInterval(durationIntervalRef.current);
      durationIntervalRef.current = null;
    }
    setIsPlaying(false);
    setIsTyping(false);
  };

  // Reset script state to baseline
  const resetPlayback = () => {
    stopPlayback();
    setTranscriptLines([]);
    setShowSummary(false);
    setCallDuration(0);
  };

  // Playback choreography
  const startPlayback = () => {
    resetPlayback();
    initAudio();
    setIsPlaying(true);

    // Start counter interval
    durationIntervalRef.current = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    let accumDelay = 400;

    scenario.dialogue.forEach((line, idx) => {
      // Step 1: Trigger Typing Animation
      const typeTimer = setTimeout(() => {
        setIsTyping(true);
      }, accumDelay);
      timerRefs.current.push(typeTimer);

      // Step 2: Show dialogue bubble and play synth sound
      const bubbleTimer = setTimeout(() => {
        setIsTyping(false);
        setTranscriptLines((prev) => [...prev, line]);
        if (line.speaker === "equal") {
          playSynthTone(580, 0.25, "sine");
        } else {
          playSynthTone(340, 0.35, "triangle");
        }
      }, accumDelay + 850);
      timerRefs.current.push(bubbleTimer);

      accumDelay += 1050 + line.text.length * 20;
    });

    // Step 3: Trigger Final Summary
    const summaryTimer = setTimeout(() => {
      if (durationIntervalRef.current) {
        clearInterval(durationIntervalRef.current);
        durationIntervalRef.current = null;
      }
      playSummarySweep();
      setShowSummary(true);
      setIsPlaying(false);
    }, accumDelay + 500);
    timerRefs.current.push(summaryTimer);
  };

  const handlePlayToggle = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  const handleMuteToggle = () => {
    initAudio();
    setIsMuted((prev) => !prev);
  };

  const handleSelectScenario = (id: string) => {
    resetPlayback();
    setActiveId(id);
  };

  useEffect(() => {
    return () => stopPlayback();
  }, []);

  return (
    <section id="what" className="w-full py-20 bg-canvas-elevated border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center gap-10 w-full">
        {/* Scenario copy section */}
        <div className="text-center max-w-2xl select-none">
          <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-accent-color">
            Cinematic Demo
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mt-2">
            {scenario.header}
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed mt-3">
            {scenario.subline}
          </p>
        </div>

        {/* Live Call Simulator Panel */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
          {/* Left Column: Caller Rail Selection */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start w-full">
            <CallerSelector
              activeId={activeId}
              onSelect={handleSelectScenario}
              disabled={isPlaying}
            />
          </div>

          {/* Center Column: Neutral Glass Device Frame */}
          <div className="lg:col-span-4 flex justify-center w-full">
            <DeviceFrame
              scenario={scenario}
              isPlaying={isPlaying}
              callDuration={callDuration}
              onAccept={startPlayback}
              onDecline={stopPlayback}
            />
          </div>

          {/* Right Column: Live Transcript Dialogue */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <LiveTranscript
              scenario={scenario}
              isPlaying={isPlaying}
              isTyping={isTyping}
              transcriptLines={transcriptLines}
              showSummary={showSummary}
              isMuted={isMuted}
              onPlayToggle={handlePlayToggle}
              onReset={resetPlayback}
              onMuteToggle={handleMuteToggle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
