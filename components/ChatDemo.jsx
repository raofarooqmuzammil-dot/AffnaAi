"use client";

import { useEffect, useRef, useState } from "react";

const SUGGESTED = [
  "Hi, do you do deep cleaning?",
  "Need a quote for a 3-bed house",
  "Can I book for this Saturday morning?",
];

export default function ChatDemo() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Mia, the receptionist for Sparkle Pro Cleaning. What can I help you book today? 🧽",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const send = async (text) => {
    const content = (text || input).trim();
    if (!content || loading) return;

    setError(null);
    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (e) {
      setError(e.message);
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Hm — something glitched on my end. Try again in a moment? (This is the demo backend.)",
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-bg-border bg-bg-elevated/60 px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-glow/30 to-cyan-deep/30 font-display text-base text-cyan-glow">
              M
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 inline-block h-2.5 w-2.5 rounded-full bg-success ring-2 ring-bg-elevated" />
          </div>
          <div>
            <div className="text-sm font-medium text-ink">Mia</div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-dim">
              Sparkle Pro Cleaning · AI receptionist
            </div>
          </div>
        </div>
        <span className="chip-glow">LIVE DEMO</span>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="h-[420px] space-y-3 overflow-y-auto px-5 py-5"
        aria-live="polite"
      >
        {messages.map((m, i) => (
          <Bubble key={i} role={m.role} content={m.content} isError={m.isError} />
        ))}
        {loading && <TypingBubble />}
      </div>

      {/* Suggested prompts (only on first turn) */}
      {messages.length === 1 && !loading && (
        <div className="border-t border-bg-border px-5 pt-3 pb-2">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-ink-dim">
            Try one:
          </div>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="rounded-full border border-bg-border bg-bg-elevated/60 px-3 py-1.5 text-xs text-ink-muted transition-all hover:border-cyan-glow/40 hover:text-ink"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t border-bg-border bg-bg-surface px-5 py-3">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Type a message…"
            disabled={loading}
            className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-dim focus:outline-none disabled:opacity-50"
          />
          <button
            onClick={() => send()}
            disabled={loading || !input.trim()}
            className="rounded-full bg-cyan-glow p-2 text-bg-base transition-all hover:shadow-glow-sm disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Send"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7H12M12 7L8 3M12 7L8 11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {error && (
          <p className="mt-2 font-mono text-[10px] text-danger">{error}</p>
        )}
      </div>
    </div>
  );
}

function Bubble({ role, content, isError }) {
  const isUser = role === "user";
  return (
    <div
      className={`flex animate-fade-in ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "rounded-br-md bg-cyan-glow text-bg-base"
            : isError
            ? "rounded-bl-md border border-danger/30 bg-danger/5 text-ink-muted"
            : "rounded-bl-md border border-bg-border bg-bg-elevated text-ink"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl rounded-bl-md border border-bg-border bg-bg-elevated px-4 py-3">
        <div className="flex items-center gap-1">
          <span
            className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-glow"
            style={{ animationDelay: "0ms" }}
          />
          <span
            className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-glow"
            style={{ animationDelay: "200ms" }}
          />
          <span
            className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-glow"
            style={{ animationDelay: "400ms" }}
          />
        </div>
      </div>
    </div>
  );
}
