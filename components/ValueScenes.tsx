"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const LANGUAGES = [
  "हिन्दी",
  "ਪੰਜਾਬੀ",
  "বাংলা",
  "தமிழ்",
  "తెలుగు",
  "മലയാളം",
  "ગુજરાતી",
  "ಕನ್ನಡ",
  "मराठी",
  "ଓଡ଼ିଆ",
  "English",
];

const FLOATING_CHARACTERS = ["क", "অ", "த", "క", "ગ", "ಕ", "മ", "ਕ", "ਅ", "अ", "र", "ஞ"];

export function ValueScenes() {
  const [langIndex, setLangIndex] = useState(0);
  const [floatingScripts, setFloatingScripts] = useState<any[]>([]);

  useEffect(() => {
    // Language rotation
    const langInterval = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % LANGUAGES.length);
    }, 2400);

    // Spawning script characters in background of Scene 2
    const spawnInterval = setInterval(() => {
      if (!document.hidden) {
        const newChar = {
          id: Math.random(),
          char: FLOATING_CHARACTERS[Math.floor(Math.random() * FLOATING_CHARACTERS.length)],
          left: `${Math.random() * 90}%`,
          top: `${Math.random() * 80 + 10}%`,
          size: `${Math.random() * 40 + 20}px`,
          duration: Math.random() * 8 + 12,
        };
        setFloatingScripts((prev) => [...prev.slice(-10), newChar]);
      }
    }, 1800);

    return () => {
      clearInterval(langInterval);
      clearInterval(spawnInterval);
    };
  }, []);

  return (
    <div id="why" className="w-full flex flex-col bg-background text-text-primary z-10 select-none">
      {/* Intro Scene */}
      <section className="min-h-[60svh] flex flex-col justify-center items-center text-center px-6 relative py-20">
        <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-accent-color">
          Why Equal
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight mt-3 text-text-primary">
          5 reasons people are<br />quietly switching to Equal.
        </h2>
      </section>

      {/* Scene 1: A New Standard */}
      <section className="min-h-[80svh] flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto w-full py-20 border-t border-white/5 relative">
        {/* Floating Crown element */}
        <div className="absolute right-12 md:right-32 top-1/2 -translate-y-1/2 w-48 h-48 opacity-10 text-white/40 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 70 L15 40 L30 55 L50 25 L70 55 L85 40 L85 70 Z" />
            <line x1="15" y1="80" x2="85" y2="80" />
            <circle cx="30" cy="40" r="3" fill="currentColor" />
            <circle cx="50" cy="22" r="3" fill="currentColor" />
            <circle cx="70" cy="40" r="3" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-2xl flex flex-col gap-4 relative z-10">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent-color">
            01 / A NEW STANDARD
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-primary">
            everyone deserves<br />a gatekeeper.
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-[50ch]">
            Until now, only the powerful had someone to manage their calls. Equal changes that — your assistant, always on.
          </p>
        </div>
      </section>

      {/* Scene 2: 11 Indian Languages */}
      <section className="min-h-[80svh] flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto w-full py-20 border-t border-white/5 relative overflow-hidden">
        {/* Floating scripts characters behind */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          {floatingScripts.map((item) => (
            <motion.div
              key={item.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: -150, opacity: 1 }}
              transition={{ duration: item.duration, ease: "linear" }}
              style={{
                position: "absolute",
                left: item.left,
                top: item.top,
                fontSize: item.size,
              }}
              className="text-text-primary font-serif font-light"
            >
              {item.char}
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl flex flex-col gap-4 relative z-10">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent-color">
            02 / 11 INDIAN LANGUAGES
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-primary">
            Equal speaks{" "}
            <span className="text-accent-color transition-all duration-300">
              {LANGUAGES[langIndex]}
            </span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-[50ch]">
            People never have to switch languages to reach you. Equal handles calls in the language they speak — without missing a beat.
          </p>
        </div>
      </section>

      {/* Scene 3: Safety First */}
      <section className="min-h-[80svh] flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto w-full py-20 border-t border-white/5 relative">
        {/* Floating Shield SVG */}
        <div className="absolute right-12 md:right-32 top-1/2 -translate-y-1/2 w-48 h-48 opacity-10 text-white/40 pointer-events-none">
          <svg viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M50 5 L90 20 L90 55 Q90 95 50 115 Q10 95 10 55 L10 20 Z" />
            <path d="M35 60 L45 70 L70 45" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="max-w-2xl flex flex-col gap-4 relative z-10">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent-color">
            03 / SAFETY FIRST
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-primary">
            protect<br />what matters most.
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-[50ch]">
            Equal blocks fraud calls, refuses OTP requests, and reports scam numbers to cybercrime — automatically. Your money stays yours. Your parents stay safe.
          </p>
        </div>
      </section>

      {/* Scene 4: Origin */}
      <section className="min-h-[80svh] flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto w-full py-20 border-t border-white/5 relative">
        {/* Floating India outline SVG */}
        <div className="absolute right-12 md:right-32 top-1/2 -translate-y-1/2 w-48 h-48 opacity-10 text-white/40 pointer-events-none">
          <svg viewBox="0 0 200 240" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M85 20 L100 15 L115 18 L130 25 L145 35 L155 50 L165 65 L168 80 L170 100 L172 120 L168 140 L160 155 L150 170 L145 185 L140 200 L130 215 L115 225 L100 230 L88 228 L75 220 L65 205 L55 190 L48 175 L42 160 L40 145 L35 130 L30 115 L28 100 L32 85 L40 70 L50 55 L60 42 L70 30 Z" />
            <circle cx="95" cy="65" r="2" fill="currentColor" />
            <circle cx="115" cy="95" r="2" fill="currentColor" />
            <circle cx="100" cy="135" r="2" fill="currentColor" />
            <circle cx="125" cy="170" r="2" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-2xl flex flex-col gap-4 relative z-10">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent-color">
            04 / ORIGIN
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-primary">
            built for India.<br />made in India.
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-[50ch]">
            Equal understands Indian context — recovery agents, brokers, courier callers, family rhythms. Built by Indians who got 30 spam calls a day. For everyone who got the same.
          </p>
        </div>
      </section>
    </div>
  );
}
