"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { scenarios } from "@/data/call-scenarios";
import { CallerSelector } from "./CallerSelector";
import { DeviceFrame } from "./DeviceFrame";
import { LiveTranscript } from "./LiveTranscript";
import SplitOrbit from "./HeroOrbitImages";
import { Chats, CheckCircle } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SCENARIOS_ORDER = ["pitcher", "family", "stranger", "client", "courier"];

const HERO_ORBIT_NODES = [
  { id: "family", label: "Family", image: "/orbit-nodes/home.png" },
  { id: "courier", label: "Courier", image: "/orbit-nodes/package.png" },
  { id: "pitcher", label: "Promo Call", image: "/orbit-nodes/sparkle.png" },
  { id: "client", label: "Client", image: "/orbit-nodes/briefcase.png" },
  { id: "stranger", label: "Stranger", image: "/orbit-nodes/phone.png" },
  { id: "auto", label: "Auto", image: "/orbit-nodes/auto.png" },
];

export function StickyCallStory() {
  const [activeId, setActiveId] = useState<string>("pitcher");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [transcriptLines, setTranscriptLines] = useState<any[]>([]);
  const [showSummary, setShowSummary] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(true); // Muted by default per guidelines
  
  const [layoutMode, setLayoutMode] = useState<"hero" | "demo">("hero");
  const [isDesktop, setIsDesktop] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const scrollTweenRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRefs = useRef<NodeJS.Timeout[]>([]);
  const durationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scenario = scenarios[activeId];

  const heroOrbitItems = HERO_ORBIT_NODES.map((node) => {
    const isActive = activeId === node.id;

    return (
      <div key={node.id} className="relative grid size-16 shrink-0 place-items-center pointer-events-auto">
        <div
          className={`grid size-14 shrink-0 place-items-center overflow-hidden rounded-full border-2 transition-all duration-500 ${
            isActive
              ? "bg-accent-color/20 shadow-[0_0_20px_var(--accent-glow)] scale-110"
              : "bg-surface-1/90 scale-100"
          }`}
        >
          <img
            src={node.image}
            alt={node.label}
            draggable={false}
            className="block aspect-square size-full rounded-full object-cover transition-transform duration-300"
          />
        </div>
      </div>
    );
  });

  // Keep refs of current values to avoid redundant React state updates during scroll scrubbing
  const lastActiveIdRef = useRef("");
  const lastLinesCountRef = useRef(-1);
  const lastShowSummaryRef = useRef(false);
  const lastIsPlayingRef = useRef(false);

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

  // Stop script playback and clear all timers (Mobile fallback)
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

  // Reset script state to baseline (Mobile fallback)
  const resetPlayback = () => {
    stopPlayback();
    setTranscriptLines([]);
    setShowSummary(false);
    setCallDuration(0);
  };

  // Playback choreography (Mobile fallback)
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

  // Stop auto-scroll tween
  const stopAutoScroll = () => {
    if (scrollTweenRef.current) {
      scrollTweenRef.current.kill();
      scrollTweenRef.current = null;
    }
  };

  // Cancel auto-scroll if user manually scrolls/touches
  useEffect(() => {
    const handleUserInteraction = () => {
      stopAutoScroll();
    };
    window.addEventListener("wheel", handleUserInteraction);
    window.addEventListener("touchmove", handleUserInteraction);
    window.addEventListener("mousedown", handleUserInteraction);
    return () => {
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchmove", handleUserInteraction);
      window.removeEventListener("mousedown", handleUserInteraction);
    };
  }, []);

  // GSAP ScrollTrigger Setup
  useGSAP(() => {
    // Calculate 3D translation offset between Hero Orbit center and Demo center
    const getDeltas = () => {
      const heroEl = document.getElementById("hero-phone-placeholder");
      const demoEl = document.getElementById("demo-phone-placeholder");
      if (!heroEl || !demoEl) return { x: 0, y: 0 };

      const scrollY = window.scrollY;
      const scrollX = window.scrollX;

      const heroRect = heroEl.getBoundingClientRect();
      const demoRect = demoEl.getBoundingClientRect();

      const heroX = heroRect.left + scrollX + heroRect.width / 2;
      const heroY = heroRect.top + scrollY + heroRect.height / 2;

      const demoX = demoRect.left + scrollX + demoRect.width / 2;
      const demoY = demoRect.top + scrollY + demoRect.height / 2;

      return {
        x: heroX - demoX,
        y: heroY - demoY
      };
    };

    const mm = gsap.matchMedia();

    // Condition A: Desktop (With pinning and scroll flow)
    mm.add({
      isDesktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
    }, (context) => {
      setIsDesktop(true);

      const deltas = getDeltas();
      
      // Initialize phone position in the Hero orbit (Larger scale + slanted rotation + 360deg spin buffer)
      gsap.set(".hero-phone-orbit-layer", {
        opacity: 1,
        scale: 1,
      });
      gsap.set(phoneRef.current, {
        x: deltas.x,
        y: deltas.y,
        scale: 1.26,
        rotateX: 0,
        rotateY: 0,
        rotateZ: -360,
      });

      // 1. Flight transition timeline (Scroll 1 -> Scroll 2)
      const transitionTl = gsap.timeline({
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          endTrigger: "#what",
          end: "top top",
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.progress > 0.95) {
              setLayoutMode("demo");
            } else {
              setLayoutMode("hero");
            }
          }
        }
      });

      // Fade out scroll cue very quickly (first 10% scroll)
      transitionTl.to("#hero-scroll-cue", {
        opacity: 0,
        y: -20,
        pointerEvents: "none",
        duration: 0.15,
      }, 0);

      // Fade out the verdict card early in the scroll
      transitionTl.to("#verdict-card", {
        opacity: 0,
        scale: 0.8,
        y: 15,
        pointerEvents: "none",
        duration: 0.25,
      }, 0);

      transitionTl.to(".hero-phone-orbit-layer", {
        opacity: 0,
        scale: 0.9,
        duration: 0.65,
        ease: "power2.out",
      }, 0);
      transitionTl.to(phoneRef.current, {
        x: 0,
        y: 0,
        scale: 1.0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        ease: "power1.inOut",
        duration: 1.0,
      }, 0);

      // Fade out Hero orbit stage during transition
      gsap.to(".hero-orbit-stage", {
        opacity: 0.15,
        scrollTrigger: {
          trigger: "main",
          start: "center top",
          end: "bottom top",
          scrub: true,
        }
      });

      // 3. Exit transition timeline (Scroll 2 -> Scroll 3 / Exit)
      // Triggered when #what finishes pinning and starts scrolling away
      const exitTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#what",
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      exitTl.to(phoneRef.current, {
        x: -250, // glide left
        opacity: 0,
        scale: 0.85,
        rotateY: -20,
        ease: "power1.in",
      });

      // 2. Pinned Call Story timeline
      ScrollTrigger.create({
        id: "story-pin",
        trigger: "#what",
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;
          const totalScenarios = SCENARIOS_ORDER.length;
          const index = Math.min(totalScenarios - 1, Math.floor(p * totalScenarios));
          const nextActiveId = SCENARIOS_ORDER[index];

          // Calculate scenario segment progress (0 to 1)
          const pBlock = (p * totalScenarios) - index;
          const currentScenario = scenarios[nextActiveId];
          const dialogueLines = currentScenario.dialogue;
          const numLines = dialogueLines.length;

          let nextIsPlaying = false;
          let nextShowSummary = false;
          let nextLines: any[] = [];
          let nextDuration = 0;

          if (pBlock < 0.15) {
            nextIsPlaying = false;
            nextShowSummary = false;
            nextLines = [];
            nextDuration = 0;
          } else if (pBlock >= 0.15 && pBlock < 0.80) {
            nextIsPlaying = true;
            nextShowSummary = false;
            const pDial = (pBlock - 0.15) / 0.65;
            nextDuration = Math.floor(pDial * 15);
            const visibleLinesCount = Math.floor(pDial * (numLines + 1));
            nextLines = dialogueLines.slice(0, visibleLinesCount);
          } else {
            nextIsPlaying = false;
            nextShowSummary = true;
            nextLines = dialogueLines;
            nextDuration = 15;
          }

          // Update states and handle sound triggers
          if (nextActiveId !== lastActiveIdRef.current) {
            lastActiveIdRef.current = nextActiveId;
            setActiveId(nextActiveId);
          }
          if (nextIsPlaying !== lastIsPlayingRef.current) {
            lastIsPlayingRef.current = nextIsPlaying;
            setIsPlaying(nextIsPlaying);
          }
          if (nextShowSummary !== lastShowSummaryRef.current) {
            lastShowSummaryRef.current = nextShowSummary;
            setShowSummary(nextShowSummary);
            if (nextShowSummary) {
              playSummarySweep();
            }
          }
          if (nextLines.length !== lastLinesCountRef.current) {
            const prevCount = lastLinesCountRef.current;
            lastLinesCountRef.current = nextLines.length;
            setTranscriptLines(nextLines);

            // Play synth beeps only on forward scrub reveals
            if (nextLines.length > prevCount && prevCount >= 0 && !isMuted) {
              const lastLine = nextLines[nextLines.length - 1];
              if (lastLine.speaker === "equal") {
                playSynthTone(580, 0.2, "sine");
              } else {
                playSynthTone(340, 0.3, "triangle");
              }
            }
          }
          setCallDuration(nextDuration);
        }
      });
    });

    // Condition B: Mobile / Reduced Motion (Static coordinates, normal playback)
    mm.add({
      isMobileOrReduced: "(max-width: 1023px), (prefers-reduced-motion: reduce)"
    }, () => {
      setIsDesktop(false);
      setLayoutMode("demo");
      gsap.set(".hero-phone-orbit-layer", { opacity: 0, scale: 0.9 });
      gsap.set(phoneRef.current, {
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
      });
    });

    return () => {
      mm.revert();
    };
  });

  // Desktop click handlers: smoothly scrolls window to the target scenario segment
  const handleSelectScenario = (id: string) => {
    if (!isDesktop) {
      // Mobile fallback: switch scenario instantly
      resetPlayback();
      setActiveId(id);
      return;
    }

    const trigger = ScrollTrigger.getById("story-pin");
    if (!trigger) return;

    stopAutoScroll();

    const index = SCENARIOS_ORDER.indexOf(id);
    if (index === -1) return;

    const start = trigger.start;
    const end = trigger.end;
    const blockStart = start + (index / SCENARIOS_ORDER.length) * (end - start) + 15;

    const scrollObj = { y: window.scrollY };
    scrollTweenRef.current = gsap.to(scrollObj, {
      y: blockStart,
      duration: 0.8,
      ease: "power2.out",
      onUpdate: () => window.scrollTo(0, scrollObj.y),
      onComplete: () => {
        scrollTweenRef.current = null;
      }
    });
  };

  const handleDesktopAccept = () => {
    const trigger = ScrollTrigger.getById("story-pin");
    if (!trigger) return;

    stopAutoScroll();

    const index = SCENARIOS_ORDER.indexOf(activeId);
    if (index === -1) return;

    const start = trigger.start;
    const end = trigger.end;
    const blockStart = start + (index / SCENARIOS_ORDER.length) * (end - start) + 15;
    const blockEnd = start + ((index + 0.78) / SCENARIOS_ORDER.length) * (end - start);

    const scrollObj = { y: window.scrollY };
    const tl = gsap.timeline();
    scrollTweenRef.current = tl;

    // Glide to starting block if not there
    if (Math.abs(window.scrollY - blockStart) > 80) {
      tl.to(scrollObj, {
        y: blockStart,
        duration: 0.4,
        ease: "power2.out",
        onUpdate: () => window.scrollTo(0, scrollObj.y),
      });
    }

    // Scroll slowly to trigger dialogue sequence
    tl.to(scrollObj, {
      y: blockEnd,
      duration: 8.0,
      ease: "none",
      onUpdate: () => window.scrollTo(0, scrollObj.y),
      onComplete: () => {
        scrollTweenRef.current = null;
      }
    });
  };

  const handleDesktopDecline = () => {
    const trigger = ScrollTrigger.getById("story-pin");
    if (!trigger) return;

    stopAutoScroll();

    const index = SCENARIOS_ORDER.indexOf(activeId);
    if (index === -1) return;

    const start = trigger.start;
    const end = trigger.end;
    const summaryPos = start + ((index + 0.85) / SCENARIOS_ORDER.length) * (end - start);

    const scrollObj = { y: window.scrollY };
    scrollTweenRef.current = gsap.to(scrollObj, {
      y: summaryPos,
      duration: 0.5,
      ease: "power2.out",
      onUpdate: () => window.scrollTo(0, scrollObj.y),
      onComplete: () => {
        scrollTweenRef.current = null;
      }
    });
  };

  const handlePlayToggle = () => {
    if (isDesktop) {
      if (isPlaying) {
        stopAutoScroll();
      } else {
        handleDesktopAccept();
      }
    } else {
      if (isPlaying) {
        stopPlayback();
      } else {
        startPlayback();
      }
    }
  };

  const handleMuteToggle = () => {
    initAudio();
    setIsMuted((prev) => !prev);
  };

  const handleReset = () => {
    if (isDesktop) {
      const trigger = ScrollTrigger.getById("story-pin");
      if (!trigger) return;

      stopAutoScroll();
      const index = SCENARIOS_ORDER.indexOf(activeId);
      const start = trigger.start;
      const end = trigger.end;
      const blockStart = start + (index / SCENARIOS_ORDER.length) * (end - start) + 15;

      const scrollObj = { y: window.scrollY };
      scrollTweenRef.current = gsap.to(scrollObj, {
        y: blockStart,
        duration: 0.5,
        ease: "power2.out",
        onUpdate: () => window.scrollTo(0, scrollObj.y),
        onComplete: () => {
          scrollTweenRef.current = null;
        }
      });
    } else {
      resetPlayback();
    }
  };

  useEffect(() => {
    return () => {
      stopPlayback();
      stopAutoScroll();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="what"
      className="w-full py-20 bg-canvas-elevated border-y border-hairline-neutral relative z-auto overflow-visible transition-colors duration-500"
    >
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
              disabled={isPlaying && !isDesktop}
            />
          </div>

          {/* Center Column: Neutral Glass Device Frame */}
          <div className="lg:col-span-4 flex justify-center w-full">
            {/* The stable parent container for the 3D phone model */}
            <div id="demo-phone-placeholder" className="relative w-[245px] h-[490px] flex items-center justify-center">
              <div
                ref={phoneRef}
                className="absolute left-1/2 top-1/2 z-50 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ transformStyle: "preserve-3d" }}
              >
                <SplitOrbit
                  items={heroOrbitItems}
                  baseWidth={620}
                  radiusX={215}
                  radiusY={78}
                  rotation={-22}
                  duration={30}
                  itemSize={64}
                  showPath={true}
                  pathColor="var(--orbit-path)"
                  pathWidth={2.25}
                  frontOnly={false}
                  className="h-full w-full"
                  phoneContent={
                    <div className="relative pointer-events-auto" style={{ transformStyle: "preserve-3d" }}>
                      <DeviceFrame
                        layout={layoutMode}
                        scenario={scenario}
                        isPlaying={isPlaying}
                        callDuration={callDuration}
                        onAccept={isDesktop ? handleDesktopAccept : startPlayback}
                        onDecline={isDesktop ? handleDesktopDecline : stopPlayback}
                      />
                      <div
                        id="verdict-card"
                        className={`absolute -bottom-6 -right-8 p-3 bg-surface-1/95 backdrop-blur border border-hairline-neutral rounded-2xl shadow-xl max-w-[190px] flex flex-col gap-2 pointer-events-auto select-none transition-opacity duration-300 ${
                          layoutMode === "hero" ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                        style={{ transform: "translateZ(30px)" }}
                      >
                        <div className="flex items-center gap-1.5 text-[8.5px] font-mono text-accent-color uppercase tracking-wider">
                          <Chats size={10} />
                          <span>AI Action Verdict</span>
                        </div>
                        <p className="text-[11px] leading-snug text-text-secondary font-medium font-sans">
                          {scenario.summary.text}
                        </p>
                        <div className="pt-1.5 border-t border-hairline-neutral flex items-center gap-1.5 text-[9px] text-success font-semibold uppercase">
                          <CheckCircle size={10} weight="fill" />
                          <span>{scenario.summary.action}</span>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
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
              onReset={handleReset}
              onMuteToggle={handleMuteToggle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
