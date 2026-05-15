"use client";

import { useEffect, useRef, useState } from "react";

// Scripted conversation that auto-plays — simulates a real customer chat
const SCRIPT = [
  { from: "user", text: "Hey do you guys clean offices on weekends?" },
  { from: "ai", text: "Hi! Yes, we do — Saturdays and Sundays both work. What size office and where's it located?" },
  { from: "user", text: "Around 2000 sqft, in the financial district" },
  { from: "ai", text: "Great. For ~2000 sqft we typically quote $220–$280 per visit depending on how loaded the space is. Want a one-time deep clean or recurring weekly?" },
  { from: "user", text: "Recurring weekly. Saturdays after 6pm?" },
  { from: "ai", text: "Perfect, that's our quiet shift. Can I grab your name + the building address to set it up?" },
  { from: "user", text: "Alex Chen, 412 Pine St, suite 9B" },
  { from: "ai", text: "Locked in, Alex 🔒\n\nSat 6:30pm weekly · Pine St · $240/wk\n\nYou'll get a text reminder the morning of, and our lead cleaner Marco will text you when he's 10min out. Sound good?" },
  { from: "user", text: "Yes thank you!" },
  { from: "ai", text: "You're welcome! See you Saturday 👋" },
];

export default function WhatsAppDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const containerRef = useRef(null);
  const timersRef = useRef([]);

  // Auto-start on viewport intersection
  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setStarted(true);
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const clear = () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
    clear();

    let elapsed = 600;
    SCRIPT.forEach((msg, idx) => {
      if (msg.from === "ai") {
        timersRef.current.push(
          setTimeout(() => setTyping(true), elapsed)
        );
        elapsed += 900;
      }
      timersRef.current.push(
        setTimeout(() => {
          setTyping(false);
          setVisibleCount(idx + 1);
        }, elapsed)
      );
      elapsed += msg.text.length > 60 ? 1600 : 1100;
    });

    return clear;
  }, [started]);

  const replay = () => {
    setVisibleCount(0);
    setTyping(false);
    setTimeout(() => setStarted(false), 50);
    setTimeout(() => setStarted(true), 100);
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="card mx-auto max-w-sm overflow-hidden bg-[#0B141A]"
      >
        {/* WhatsApp-style header */}
        <div className="flex items-center justify-between border-b border-white/5 bg-[#1F2C34] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-sm font-medium text-white">
              S
            </div>
            <div>
              <div className="text-sm font-medium text-white">Sparkle Pro Cleaning</div>
              <div className="text-[10px] text-emerald-400">online</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white/60">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01-.37-1.12-.57-2.32-.57-3.57 0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
            </svg>
          </div>
        </div>

        {/* Chat body with WhatsApp-style background */}
        <div
          className="relative min-h-[420px] space-y-2 px-4 py-4"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='%230B141A'/%3E%3Cpath d='M30 30a3 3 0 100-6 3 3 0 000 6z' fill='%23ffffff' fill-opacity='0.015'/%3E%3C/svg%3E\")",
          }}
        >
          {SCRIPT.slice(0, visibleCount).map((m, i) => (
            <WhatsAppBubble key={i} from={m.from} text={m.text} />
          ))}
          {typing && <WhatsAppTyping />}
        </div>

        {/* Input bar (decorative) */}
        <div className="flex items-center gap-2 border-t border-white/5 bg-[#1F2C34] px-3 py-2">
          <div className="flex-1 rounded-full bg-[#2A3942] px-4 py-2 text-xs text-white/40">
            Message
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20l18-8L3 4v6l13 2-13 2v6z" />
            </svg>
          </div>
        </div>
      </div>

      {visibleCount === SCRIPT.length && (
        <button
          onClick={replay}
          className="mx-auto mt-4 flex items-center gap-2 rounded-full border border-bg-borderHi bg-bg-elevated/60 px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink-muted transition-colors hover:border-cyan-glow/40 hover:text-cyan-glow"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6a4 4 0 014-4 4 4 0 013.46 2M10 6a4 4 0 01-4 4 4 4 0 01-3.46-2M9 1v3h-3M3 11V8h3"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          Replay
        </button>
      )}
    </div>
  );
}

function WhatsAppBubble({ from, text }) {
  const isUser = from === "user";
  return (
    <div
      className={`flex animate-fade-up ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[78%] whitespace-pre-line rounded-lg px-3 py-1.5 text-sm leading-snug shadow-sm ${
          isUser
            ? "rounded-tr-sm bg-[#005C4B] text-white"
            : "rounded-tl-sm bg-[#202C33] text-white"
        }`}
      >
        {text}
        <div className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-white/40">
          <span>{isUser ? "11:42" : "11:42"}</span>
          {isUser && (
            <svg width="14" height="10" viewBox="0 0 16 11" fill="currentColor">
              <path d="M11.07.65L9.5 2.22 4.3 7.42 1.43 4.55 0 5.98 4.3 10.28 12.5 2.08zM15.55.65L13.97 2.22l-2.55 2.55L13 6.3 15.55.65z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

function WhatsAppTyping() {
  return (
    <div className="flex animate-fade-in justify-start">
      <div className="rounded-tl-sm rounded-lg bg-[#202C33] px-3 py-2.5">
        <div className="flex items-center gap-1">
          <span
            className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-white/40"
            style={{ animationDelay: "0ms" }}
          />
          <span
            className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-white/40"
            style={{ animationDelay: "200ms" }}
          />
          <span
            className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-white/40"
            style={{ animationDelay: "400ms" }}
          />
        </div>
      </div>
    </div>
  );
}
