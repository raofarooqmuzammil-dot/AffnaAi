"use client";

import { useEffect, useRef, useState } from "react";

const TRANSCRIPT = [
  { speaker: "system", line: "Incoming call · +1 (415) 555-2271" },
  { speaker: "ai", line: "Sparkle Pro Cleaning, this is Mia — how can I help?" },
  { speaker: "caller", line: "Hi, my fridge just broke and there's water all over the kitchen floor. Can someone come help today?" },
  { speaker: "ai", line: "Oh no, that's the worst. We can absolutely get someone out today. Can I grab your address?" },
  { speaker: "caller", line: "It's 2840 Marigold Avenue, apartment 4, in Austin, Texas." },
  { speaker: "ai", line: "Got it. I have a team that can be there in about 90 minutes. The visit is 145 dollars for the first hour and 60 each additional. Want me to lock that in?" },
  { speaker: "caller", line: "Yes please, that would be amazing." },
  { speaker: "ai", line: "Done. Marco's on his way — you'll get a text in about 75 minutes when he's 15 out. Anything else I can help with?" },
  { speaker: "caller", line: "No that's it, thank you so much!" },
  { speaker: "ai", line: "You got it. Hang tight — help's on the way." },
  { speaker: "system", line: "Call ended · Booked: Emergency Visit · Marco K." },
];

export default function VoiceDemo() {
  const [playing, setPlaying] = useState(false);
  const [visibleIdx, setVisibleIdx] = useState(0);
  const [voices, setVoices] = useState({ ai: null, caller: null });
  const [speechSupported, setSpeechSupported] = useState(true);
  const scrollRef = useRef(null);
  const currentIdxRef = useRef(0);
  const cancelledRef = useRef(false);

  // Load voices once available
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setSpeechSupported(false);
      return;
    }

    const loadVoices = () => {
      const all = window.speechSynthesis.getVoices();
      if (all.length === 0) return;

      // Prefer high-quality English voices
      const englishVoices = all.filter((v) => v.lang.startsWith("en"));

      const findBest = (preferences) => {
        for (const pref of preferences) {
          const match = englishVoices.find((v) =>
            v.name.toLowerCase().includes(pref.toLowerCase())
          );
          if (match) return match;
        }
        return englishVoices[0] || all[0];
      };

      // Female-sounding voice for Mia (the AI)
      const aiVoice = findBest([
        "Samantha", "Google US English", "Microsoft Aria", "Microsoft Jenny",
        "Karen", "Moira", "Tessa", "Female", "en-US",
      ]);

      // Different voice for the caller
      const callerVoice =
        englishVoices.find(
          (v) =>
            v !== aiVoice &&
            (v.name.toLowerCase().includes("daniel") ||
              v.name.toLowerCase().includes("male") ||
              v.name.toLowerCase().includes("alex") ||
              v.name.toLowerCase().includes("microsoft david") ||
              v.name.toLowerCase().includes("google uk english male"))
        ) ||
        englishVoices.find((v) => v !== aiVoice) ||
        aiVoice;

      setVoices({ ai: aiVoice, caller: callerVoice });
    };

    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleIdx]);

  const speakLine = (idx) => {
    if (cancelledRef.current || idx >= TRANSCRIPT.length) {
      setPlaying(false);
      return;
    }

    setVisibleIdx(idx + 1);
    currentIdxRef.current = idx;
    const line = TRANSCRIPT[idx];

    // System lines: brief pause, no speech
    if (line.speaker === "system") {
      setTimeout(() => {
        if (!cancelledRef.current) speakLine(idx + 1);
      }, 600);
      return;
    }

    if (!window.speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(line.line);
    const isAi = line.speaker === "ai";

    if (isAi && voices.ai) {
      utterance.voice = voices.ai;
      utterance.pitch = 1.05;
      utterance.rate = 1.02;
    } else if (!isAi && voices.caller) {
      utterance.voice = voices.caller;
      utterance.pitch = 0.95;
      utterance.rate = 1.0;
    }

    utterance.onend = () => {
      if (!cancelledRef.current) {
        // Brief gap between speakers
        setTimeout(() => speakLine(idx + 1), 350);
      }
    };

    utterance.onerror = () => {
      if (!cancelledRef.current) speakLine(idx + 1);
    };

    window.speechSynthesis.speak(utterance);
  };

  const play = () => {
    if (!speechSupported) return;
    cancelledRef.current = false;

    // If we already finished, reset
    if (visibleIdx >= TRANSCRIPT.length) {
      setVisibleIdx(0);
      currentIdxRef.current = 0;
      setTimeout(() => {
        setPlaying(true);
        speakLine(0);
      }, 100);
      return;
    }

    setPlaying(true);
    // Resume from where we left off
    const startIdx = currentIdxRef.current || 0;
    speakLine(startIdx);
  };

  const pause = () => {
    cancelledRef.current = true;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setPlaying(false);
  };

  const reset = () => {
    cancelledRef.current = true;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setPlaying(false);
    setVisibleIdx(0);
    currentIdxRef.current = 0;
  };

  const progress = TRANSCRIPT.length ? visibleIdx / TRANSCRIPT.length : 0;

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
        <Waveform playing={playing} progress={progress} />
        <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-ink-dim">
          <span>{playing ? "● LIVE" : "READY"}</span>
          <span>{visibleIdx}/{TRANSCRIPT.length}</span>
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
              {speechSupported
                ? "Press play to start the call"
                : "Voice not supported in this browser"}
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
          onClick={playing ? pause : play}
          disabled={!speechSupported}
          className="btn-primary text-xs disabled:opacity-40"
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
              {visibleIdx >= TRANSCRIPT.length ? "Replay" : visibleIdx > 0 ? "Resume" : "Play call"}
            </>
          )}
        </button>
      </div>

      {!speechSupported && (
        <div className="border-t border-bg-border bg-warn/5 px-5 py-2 font-mono text-[10px] text-warn">
          Your browser doesn't support speech synthesis. Try Chrome, Safari, or Edge.
        </div>
      )}
    </div>
  );
}

function Waveform({ playing, progress }) {
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
            className={`flex-1 rounded-full transition-all ${
              isActive ? "bg-cyan-glow" : "bg-bg-borderHi"
            } ${playing ? "animate-pulse-dot" : ""}`}
            style={{
              height: `${h * 100}%`,
              opacity: isActive ? 1 : 0.5,
              animationDelay: `${(i % 8) * 50}ms`,
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
