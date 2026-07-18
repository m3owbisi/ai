"use client";
import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Square, SpeakerSimpleHigh, SpeakerSimpleSlash, ArrowCounterClockwise } from "@phosphor-icons/react";
import { Scenario, DialogueLine } from "@/data/call-scenarios";

interface LiveTranscriptProps {
  scenario: Scenario;
  isPlaying: boolean;
  isTyping: boolean;
  transcriptLines: DialogueLine[];
  showSummary: boolean;
  isMuted: boolean;
  onPlayToggle: () => void;
  onReset: () => void;
  onMuteToggle: () => void;
}

export function LiveTranscript({
  scenario,
  isPlaying,
  isTyping,
  transcriptLines,
  showSummary,
  isMuted,
  onPlayToggle,
  onReset,
  onMuteToggle,
}: LiveTranscriptProps) {
  const bodyRef = useRef<HTMLDivElement>(null);

  // Auto scroll transcript to the bottom on new message
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [transcriptLines, isTyping, showSummary]);

  return (
    <div className="w-full flex flex-col h-[380px] bg-surface-1 border border-hairline-neutral rounded-3xl shadow-2xl overflow-hidden transition-all duration-500">
      {/* Transcript Header */}
      <div className="flex justify-between items-center px-5 py-3 border-b border-hairline-neutral bg-[var(--surface-2)]/30 select-none">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-quiet">
          Live Assistant Transcript
        </span>
        <div className="flex items-center gap-1.5 text-[10px] font-medium text-text-secondary">
          {isPlaying && (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-color shadow-[0_0_6px_var(--accent-glow)] animate-pulse" />
              <span className="text-accent-color font-mono uppercase tracking-wider">Live</span>
            </>
          )}
          {!isPlaying && transcriptLines.length > 0 && <span>Complete</span>}
          {!isPlaying && transcriptLines.length === 0 && <span className="text-text-quiet">Ready</span>}
        </div>
      </div>

      {/* Transcript Body */}
      <div
        ref={bodyRef}
        role="log"
        aria-live="polite"
        className="flex-1 p-5 overflow-y-auto flex flex-col gap-3 scrollbar-thin scrollbar-thumb-hairline-neutral"
      >
        {transcriptLines.length === 0 && !isTyping && (
          <div className="flex-1 flex items-center justify-center text-text-quiet text-xs italic text-center select-none">
            Press Accept or Play Call to listen
          </div>
        )}

        <AnimatePresence>
          {transcriptLines.map((line, idx) => {
            const isEqual = line.speaker === "equal";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col max-w-[85%] ${
                  isEqual ? "self-end items-end" : "self-start items-start"
                }`}
              >
                <span className="text-[8px] font-mono text-text-quiet uppercase tracking-wider mb-1 px-1">
                  {isEqual ? "Equal AI" : scenario.callerName}
                </span>
                <div
                  className={`px-4 py-2.5 rounded-2xl text-xs leading-relaxed font-medium ${
                    isEqual
                      ? "bg-accent-color text-black rounded-tr-xs"
                      : "bg-surface-2 text-text-primary rounded-tl-xs border border-hairline-neutral"
                  }`}
                >
                  {line.text}
                </div>
              </motion.div>
            );
          })}

          {/* Typing Indicator bubble */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex items-center gap-1.5 p-3 rounded-2xl bg-surface-2 border border-hairline-neutral max-w-[60px] ${
                transcriptLines.length % 2 === 1 ? "self-end" : "self-start"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-text-quiet animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-text-quiet animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-text-quiet animate-bounce" style={{ animationDelay: "300ms" }} />
            </motion.div>
          )}

          {/* Call Summary Card */}
          {showSummary && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 p-4 rounded-2xl bg-accent-color text-black shadow-lg shadow-accent-color/30 flex flex-col gap-2 select-none"
            >
              <div className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-wider font-semibold opacity-70">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                {scenario.summary.title}
              </div>
              <p className="text-xs font-semibold leading-relaxed">
                {scenario.summary.text}
              </p>
              <div className="pt-2 border-t border-black/10 text-[10px] font-medium opacity-80">
                → {scenario.summary.action}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Play/Control panel footer */}
      <div className="px-5 py-3 border-t border-hairline-neutral bg-[var(--surface-2)]/30 flex justify-between items-center select-none">
        <div className="flex items-center gap-3">
          <button
            onClick={onPlayToggle}
            className={`h-9 px-4 flex items-center gap-2 rounded-full font-semibold text-xs transition-all duration-300 active:scale-95 cursor-pointer ${
              isPlaying
                ? "bg-surface-2 text-text-primary border border-hairline-neutral"
                : "bg-text-primary text-background hover:bg-accent-color"
            }`}
          >
            {isPlaying ? (
              <>
                <Square size={12} weight="fill" />
                Stop call
              </>
            ) : (
              <>
                <Play size={12} weight="fill" />
                Play call
              </>
            )}
          </button>

          <button
            onClick={onReset}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-transparent border border-hairline-neutral text-text-secondary hover:border-hairline hover:text-text-primary active:scale-95 transition-all duration-300 cursor-pointer"
            title="Reset"
          >
            <ArrowCounterClockwise size={14} weight="bold" />
          </button>
        </div>

        {/* Audio Speaker Mute Toggle */}
        <button
          onClick={onMuteToggle}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-transparent border border-hairline-neutral text-text-secondary hover:border-hairline hover:text-text-primary active:scale-95 transition-all duration-300 cursor-pointer"
          title={isMuted ? "Unmute sound" : "Mute sound"}
        >
          {isMuted ? <SpeakerSimpleSlash size={16} /> : <SpeakerSimpleHigh size={16} />}
        </button>
      </div>
    </div>
  );
}
