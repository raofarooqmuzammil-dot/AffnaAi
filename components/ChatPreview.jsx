"use client";

import { useState, useEffect, useRef } from "react";

// 4 channels, each with its own scenario showing a different industry winning
const CHANNELS = [
  {
    name: "WhatsApp",
    subtitle: "AI active",
    accent: "#22C55E",
    accentBg: "rgba(34, 197, 94, 0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 21l1.9-5.7a8.38 8.38 0 113.8 3.8L3 21z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    messages: [
      { role: "customer", text: "In-laws coming tomorrow. House is a disaster 😩 Can you come today?" },
      { role: "ai", text: "Yes! Deep clean for 2-bed is $280, takes 3 hours. I have 2pm or 4pm today. Which works?" },
      { role: "customer", text: "2pm please 🙏" },
      { role: "ai", text: "Booked ✓ Maria's team arrives at 2pm. Confirmation sent." },
    ],
  },
  {
    name: "Web chat",
    subtitle: "Live chat",
    accent: "#22D3EE",
    accentBg: "rgba(34, 211, 238, 0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    messages: [
      { role: "customer", text: "How much for highlights on shoulder-length hair?" },
      { role: "ai", text: "$180 to $240 depending on technique. Sarah does a free 15-min consult before booking. Want to see her availability?" },
      { role: "customer", text: "Yes please!" },
      { role: "ai", text: "Sarah has tomorrow at 11am or Friday at 2pm. Which works?" },
    ],
  },
  {
    name: "SMS",
    subtitle: "Missed call · auto reply",
    accent: "#F59E0B",
    accentBg: "rgba(245, 158, 11, 0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4l-4 4v-4H5a2 2 0 01-2-2V5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    messages: [
      { role: "ai", text: "Hi! Sorry we missed your call. What's the issue we can help with?" },
      { role: "customer", text: "My kitchen sink is leaking everywhere 😰" },
      { role: "ai", text: "That sounds urgent. Mike can be there in 90 minutes. What's your address?" },
      { role: "customer", text: "247 Oak Street" },
      { role: "ai", text: "Mike's on his way ✓ ETA 12:45." },
    ],
  },
  {
    name: "Instagram",
    subtitle: "DM auto-reply",
    accent: "#E879F9",
    accentBg: "rgba(232, 121, 249, 0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
    messages: [
      { role: "customer", text: "Is the 3-bed colonial on Maple still available?" },
      { role: "ai", text: "Yes! Listed at $529K. Want to see it Saturday 11am or Sunday 2pm?" },
      { role: "customer", text: "Saturday please" },
      { role: "ai", text: "Booked ✓ Sarah meets you 11am Saturday at 1842 Maple." },
    ],
  },
];

export default function ChatPreview() {
  const [channelIndex, setChannelIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    let cancelled = false;

    function clearAllTimeouts() {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    }

    function schedule(fn, delay) {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
      timeoutsRef.current.push(id);
    }

    function playChannel(ci) {
      const channel = CHANNELS[ci];

      setChannelIndex(ci);
      setMessages([]);
      setTyping(false);

      let delay = 800;

      channel.messages.forEach((msg) => {
        if (msg.role === "ai") {
          schedule(() => setTyping(true), delay);
          delay += 1400;
          schedule(() => {
            setTyping(false);
            setMessages((prev) => [...prev, msg]);
          }, delay);
        } else {
          schedule(() => {
            setMessages((prev) => [...prev, msg]);
          }, delay);
        }
        delay += Math.max(1700, msg.text.length * 28);
      });

      delay += 2500;
      schedule(() => {
        playChannel((ci + 1) % CHANNELS.length);
      }, delay);
    }

    playChannel(0);

    return () => {
      cancelled = true;
      clearAllTimeouts();
    };
  }, []);

  const currentChannel = CHANNELS[channelIndex];

  return (
    <section className="relative py-20 lg:py-28">
      <div className="container-x">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-glow/30 bg-cyan-glow/10 px-3 py-1 text-xs font-medium text-cyan-glow">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-glow" />
            Live conversations
          </span>
          <h2 className="mt-6 font-display text-balance text-3xl text-ink lg:text-4xl">
            See it work across every channel.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-base text-ink-muted">
            Real AI conversations from cleaning, salon, plumbing, and real estate
            businesses. Watch how each one is handled in seconds.
          </p>
        </div>

        {/* Phone frame */}
        <div className="mx-auto mt-14 max-w-sm">
          <div
            className="rounded-[40px] border p-3"
            style={{
              background: "#1a1a1d",
              borderColor: "#2a2a2e",
              boxShadow: "0 30px 80px -15px rgba(34, 211, 238, 0.18)",
            }}
          >
            <div className="overflow-hidden rounded-[32px]" style={{ background: "#0a0a0c" }}>
              {/* Channel header */}
              <div
                className="flex items-center gap-3 px-4 py-3.5 transition-all duration-500"
                style={{ background: "#131316", borderBottom: "1px solid #1f1f23" }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500"
                  style={{ background: currentChannel.accentBg, color: currentChannel.accent }}
                >
                  {currentChannel.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">
                    Affnaai · {currentChannel.name}
                  </div>
                  <div
                    className="flex items-center gap-1.5 text-xs"
                    style={{ color: currentChannel.accent }}
                  >
                    <span
                      className="inline-block h-1.5 w-1.5 animate-pulse rounded-full"
                      style={{ background: currentChannel.accent }}
                    />
                    {currentChannel.subtitle}
                  </div>
                </div>
              </div>

              {/* Messages area */}
              <div
                className="flex min-h-[340px] flex-col justify-end space-y-2.5 px-4 py-5"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(34, 211, 238, 0.025), transparent 40%)",
                }}
              >
                {messages.map((m, i) => (
                  <Message
                    key={`${channelIndex}-${i}`}
                    role={m.role}
                    text={m.text}
                    accent={currentChannel.accent}
                  />
                ))}
                {typing && <TypingBubble accent={currentChannel.accent} />}
              </div>
            </div>
          </div>
        </div>

        {/* Channel progress indicator */}
        <div className="mx-auto mt-6 max-w-sm">
          <div className="flex items-center gap-2">
            {CHANNELS.map((ch, i) => (
              <div
                key={ch.name}
                className="flex-1 transition-all duration-500"
                style={{
                  height: "3px",
                  borderRadius: "2px",
                  background:
                    i === channelIndex ? ch.accent : "rgba(255, 255, 255, 0.12)",
                }}
              />
            ))}
          </div>
          <div className="mt-3 flex justify-between">
            {CHANNELS.map((ch, i) => (
              <div
                key={ch.name}
                className="text-[10px] font-medium transition-colors duration-500 sm:text-xs"
                style={{
                  color:
                    i === channelIndex ? ch.accent : "rgba(255, 255, 255, 0.35)",
                }}
              >
                {ch.name}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3">
          <a
            href="/demo"
            className="rounded-full bg-cyan-glow px-6 py-3 text-sm font-medium text-bg-base transition-all hover:shadow-glow-sm"
          >
            Try the live demo →
          </a>
          <p className="text-xs text-ink-dim">
            Talk to the real AI yourself. No signup, no credit card.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes messageIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes typingDot {
          0%,
          60%,
          100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          30% {
            opacity: 1;
            transform: translateY(-3px);
          }
        }
      `}</style>
    </section>
  );
}

function Message({ role, text, accent }) {
  const isCustomer = role === "customer";
  return (
    <div
      className={`flex ${isCustomer ? "justify-end" : "justify-start"}`}
      style={{ animation: "messageIn 0.35s ease-out" }}
    >
      <div
        className="max-w-[82%] px-4 py-2.5 text-[13px] leading-relaxed text-white"
        style={{
          background: isCustomer ? "rgba(255, 255, 255, 0.08)" : `${accent}1f`,
          border: isCustomer ? "none" : `1px solid ${accent}33`,
          borderRadius: isCustomer ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
        }}
      >
        {text}
      </div>
    </div>
  );
}

function TypingBubble({ accent }) {
  return (
    <div className="flex justify-start">
      <div
        className="px-4 py-3"
        style={{
          background: `${accent}22`,
          border: `1px solid ${accent}33`,
          borderRadius: "18px 18px 18px 4px",
        }}
      >
        <div className="flex items-center gap-1">
          {[0, 0.15, 0.3].map((d, i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: accent,
                animation: `typingDot 1.2s ease-in-out infinite ${d}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
