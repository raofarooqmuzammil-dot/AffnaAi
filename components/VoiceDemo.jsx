"use client";

import { useEffect, useRef, useState } from "react";

// Voice call transcript — drafted script for the user to re-record later with ElevenLabs or their own voice
const TRANSCRIPT = [
  { speaker: "system", line: "Incoming call · +1 (415) 555-2271", t: 0 },
  { speaker: "ai", line: "Sparkle Pro Cleaning, this is Mia — how can I help?", t: 1.2 },
  { speaker: "caller", line: "Hi, uh, my fridge just broke and there's water all over the kitchen floor. Can someone come help today?", t: 4.5 },
  { speaker: "ai", line: "Oh no, that's the worst. We can absolutely get someone out today. Can I grab your address?", t: 9.0 },
  { speaker: "caller", line: "It's 2840 Marigold Avenue, apartment 4.", t: 13.2 },
  { speaker: "ai", line: "Got it. I have a team that can be there in about 90 minutes. The visit is $145 for the first hour and $60 each additional. Want me to lock that in?", t: 16.5 },
  { speaker: "caller", line: "Yes please, that would be amazing.", t: 22.0 },
  { speaker: "ai", line: "Done. Marco's en route — you'll get a text in about 75 minutes when he's 15 out. Anything else I can help with?", t: 24.5 },
  { speaker: "caller", line: "No that's it, thank you so much!", t: 30.0 },
  { speaker: "ai", line: "You got it. Hang tight — help's on the way.", t: 32.5 },
  { speaker: "system", line: "Call ended · 0:34 · Booked: Emergency Visit · Marco K.", t: 35.0 },
];

const TOTAL_DURATION = 36;

export default function VoiceDemo() {
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [visibleIdx, setVisibleIdx] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!playing) return;
    startRef.current = performance.now() - elapsed * 1000;
    const tick = (now) => {
      const t = (now - startRef.current) / 1000;
      setElapsed(t);
      if (t >= TOTAL_DURATION) {
        setPlaying(false);
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  useEffect(() => {
    const idx = TRANSCRIPT.findIndex((l, i) => {
      const next = TRANSCRIPT[i + 1];
      return elapsed >= l.t && (!next || elapsed < next.t);
    });
    if (idx !== -1) setVisibleIdx(idx + 1);
  }, [elapsed]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleIdx]);

  const toggle = () => {
    if (elapsed >= TOTAL_DURATION) {
      setElapsed(0);
      setVisibleIdx(0);
    }
    setPlaying((p) => !p);
  };

  const reset = () => {
    setPlaying(false);
    setElapsed(0);
    setVisibleIdx(0);
  };

  return (
    <div className="card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-bg-border bg-bg-elevated/60 px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-glow/30 to-cyan-deep/30">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-glow">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            {playing && (
              <span className="absolute -bottom-0.5 -right-0.5 inline-block h-2.5 w-2.5 animate-pulse-dot rounded-full bg-success ring-2 ring-bg-elevated" />
            )}
          </div>
          <div>
            <div className="text-sm font-medium text-ink">Voice receptionist demo</div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-dim">
              Inbound emergency · cleaning company
            </div>
          </div>
        </div>
        <span className="chip-glow">SAMPLE CALL</span>
      </div>

      {/* Waveform */}
      <div className="border-b border-bg-border bg-bg-base/50 px-5 py-4">
        <Waveform playing={playing} progress={elapsed / TOTAL_DURATION} />
        <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-ink-dim">
          <span>{formatTime(elapsed)}</span>
          <span>{formatTime(TOTAL_DURATION)}</span>
        </div>
      </div>

      {/* Transcript */}
      <div ref={scrollRef} className="h-[280px] space-y-2.5 overflow-y-auto px-5 py-4">
        {TRANSCRIPT.slice(0, visibleIdx).map((line, i) => (
          <TranscriptLine key={i} {...line} />
        ))}
        {visibleIdx === 0 && (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-dim">
              Press play to start the call
            </p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between border-t border-bg-border bg-bg-surface px-5 py-3">
        <button
          onClick={reset}
          className="font-mono text-xs uppercase tracking-wider text-ink-muted transition-colors hover:text-ink"
        >
          ↺ Reset
        </button>
        <button
          onClick={toggle}
          className="btn-primary text-xs"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                <rect x="1.5" y="1" width="2.5" height="8" />
                <rect x="6" y="1" width="2.5" height="8" />
              </svg>
              Pause
            </>
          ) : (
            <>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                <path d="M2 1l7 4-7 4z" />
              </svg>
              {elapsed >= TOTAL_DURATION ? "Replay" : elapsed > 0 ? "Resume" : "Play call"}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function Waveform({ playing, progress }) {
  // Deterministic pseudo-random heights for the waveform bars
  const bars = Array.from({ length: 60 }, (_, i) => {
    const seed = Math.sin(i * 12.9898) * 43758.5453;
    return 0.3 + Math.abs(seed - Math.floor(seed)) * 0.7;
  });
  return (
    <div className="flex h-12 items-center gap-[2px]">
      {bars.map((h, i) => {
        const isActive = i / bars.length <= progress;
        return (
          <div
            key={i}
            className={`flex-1 rounded-full transition-all duration-150 ${
              isActive ? "bg-cyan-glow" : "bg-bg-borderHi"
            } ${playing && isActive && i / bars.length > progress - 0.05 ? "h-full" : ""}`}
            style={{
              height: `${h * 100}%`,
              opacity: isActive ? 1 : 0.5,
            }}
          />
        );
      })}
    </div>
  );
}

function TranscriptLine({ speaker, line }) {
  if (speaker === "system") {
    return (
      <div className="flex animate-fade-in items-center gap-2 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-dim">
        <span className="h-px flex-1 bg-bg-border" />
        <span>{line}</span>
        <span className="h-px flex-1 bg-bg-border" />
      </div>
    );
  }
  const isAi = speaker === "ai";
  return (
    <div className={`flex animate-fade-up gap-3 ${isAi ? "" : "flex-row-reverse"}`}>
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[10px] ${
          isAi
            ? "bg-cyan-glow/15 text-cyan-glow"
            : "bg-bg-elevated text-ink-muted"
        }`}
      >
        {isAi ? "AI" : "👤"}
      </div>
      <div
        className={`max-w-[80%] rounded-2xl border px-3.5 py-2 text-sm ${
          isAi
            ? "rounded-tl-sm border-cyan-glow/20 bg-cyan-glow/5 text-ink"
            : "rounded-tr-sm border-bg-border bg-bg-elevated text-ink"
        }`}
      >
        {line}
      </div>
    </div>
  );
}

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}
