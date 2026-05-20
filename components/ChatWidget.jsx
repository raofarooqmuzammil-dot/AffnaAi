"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const QUICK_REPLIES = [
  { label: "💰 What does it cost?", action: "What does Affnaai cost?" },
  { label: "🚀 How does setup work?", action: "How does the 7-day setup process work?" },
  { label: "📱 What channels?", action: "Which channels does Affnaai support?" },
  { label: "🗓 Try the demo", href: "/demo" },
  { label: "📞 Book a call", href: "/contact" },
];

const GREETING =
  "Hi! I'm Affnaai's AI assistant. Ask me anything about the AI receptionist, pricing, or setup — or pick a question below.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Lead capture state
  const [stage, setStage] = useState("chat"); // "chat" | "capturing" | "captured"
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadError, setLeadError] = useState("");
  const [firstQuestion, setFirstQuestion] = useState("");
  const captureTriggeredRef = useRef(false);
  const pendingMessagesRef = useRef(null); // Snapshot of messages waiting for AI after capture

  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const lastMessage = messages[messages.length - 1];
    const container = scrollRef.current;

    // When a new AI reply arrives, scroll to show its START (not bottom)
    // This way long replies don't have the beginning hidden off-screen
    if (lastMessage?.role === "assistant" && !loading) {
      setTimeout(() => {
        const bubbles = container.querySelectorAll('[data-role="assistant"]');
        const lastBubble = bubbles[bubbles.length - 1];
        if (lastBubble) {
          container.scrollTo({
            top: lastBubble.offsetTop - 12,
            behavior: "smooth",
          });
        }
      }, 80);
    } else {
      // For user messages, typing indicator, or capture form — scroll to bottom
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, loading, stage]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [open]);

  const sendToAI = async (messagesArray) => {
    setLoading(true);
    try {
      const res = await fetch("/api/widget-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messagesArray.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Something went wrong. Email us at ai@affnaai.com and we'll get right back to you.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const send = async (text) => {
    const content = (text || input).trim();
    if (!content || loading || stage === "capturing") return;

    if (!firstQuestion) setFirstQuestion(content);

    setInput("");
    const next = [...messages, { role: "user", content }];
    setMessages(next);

    // Count user messages so far
    const userMessageCount = next.filter((m) => m.role === "user").length;

    // INTERCEPT the SECOND user message — show capture form BEFORE sending to AI
    // (Lets user see the first AI reply, then asks for info when they engage again)
    if (userMessageCount === 2 && !captureTriggeredRef.current) {
      captureTriggeredRef.current = true;
      pendingMessagesRef.current = next; // Save snapshot — send to AI after form is filled
      setTimeout(() => setStage("capturing"), 400);
      return;
    }

    // Otherwise, send to AI normally
    await sendToAI(next);
  };

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const submitLead = async (e) => {
    e.preventDefault();
    setLeadError("");

    const { name, email, phone } = leadForm;
    if (!name.trim()) return setLeadError("Please enter your name.");
    if (!email.trim() || !email.includes("@"))
      return setLeadError("Please enter a valid email.");
    if (!phone.trim() || phone.replace(/\D/g, "").length < 7)
      return setLeadError("Please enter a valid phone number.");

    setLeadSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          firstQuestion,
          source: "widget-chat",
        }),
      });

      const firstName = name.split(" ")[0];
      setStage("captured");
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: `Thanks ${firstName}! Let me get back to your question.`,
        },
      ]);

      // If we intercepted a 2nd user message, now send it to AI
      if (pendingMessagesRef.current) {
        const snapshot = pendingMessagesRef.current;
        pendingMessagesRef.current = null;
        setTimeout(() => sendToAI(snapshot), 900);
      }
    } catch {
      setLeadError("Something went wrong. Try again.");
    } finally {
      setLeadSubmitting(false);
    }
  };

  const resetChat = () => {
    setMessages([{ role: "assistant", content: GREETING }]);
    setInput("");
    setLoading(false);
    setFirstQuestion("");
    setLeadForm({ name: "", email: "", phone: "" });
    setLeadError("");
    pendingMessagesRef.current = null;
    // If form was showing, close it. Keep captureTriggeredRef intact —
    // already-captured users won't be re-asked for their info.
    if (stage === "capturing") setStage("chat");
  };

  const showQuickReplies = messages.length === 1 && !loading && stage === "chat";
  const inputDisabled = loading || stage === "capturing";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      {open && (
        <div
          className="animate-fade-up w-[360px] overflow-hidden rounded-2xl border border-bg-border bg-bg-surface/95 backdrop-blur-xl"
          style={{
            boxShadow:
              "0 0 0 1px rgba(34,211,238,0.15), 0 24px 64px 0 rgba(0,0,0,0.6), 0 0 40px 0 rgba(34,211,238,0.08)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-bg-border bg-bg-elevated px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full font-display text-base font-semibold text-bg-base"
                  style={{
                    background: "linear-gradient(135deg, #22D3EE 0%, #0891B2 100%)",
                    boxShadow: "0 0 16px rgba(34,211,238,0.35)",
                  }}
                >
                  A
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 inline-block h-2.5 w-2.5 rounded-full bg-success ring-2 ring-bg-elevated" />
              </div>
              <div>
                <div className="text-sm font-medium text-ink">Affnaai AI</div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-success" />
                  <span className="text-[10px] text-ink-dim">
                    Online · Replies instantly
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                className="flex h-7 w-7 items-center justify-center rounded-full text-ink-dim transition-colors hover:bg-bg-border hover:text-ink"
                aria-label="Start new conversation"
                title="Start new conversation"
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M13 7a6 6 0 11-1.76-4.24M13 1v3h-3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => setOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-ink-dim transition-colors hover:bg-bg-border hover:text-ink"
                aria-label="Close"
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path
                    d="M1 1l9 9M10 1L1 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="max-h-[300px] space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role} content={m.content} />
            ))}
            {loading && <TypingBubble />}

            {/* Lead capture form — appears in chat stream */}
            {stage === "capturing" && !loading && (
              <div className="animate-fade-up rounded-2xl rounded-bl-sm border border-cyan-glow/20 bg-bg-elevated p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold text-bg-base flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #22D3EE, #0891B2)" }}
                  >
                    A
                  </div>
                  <p className="text-xs font-medium text-ink">
                    Before I answer — what's the best way to reach you?
                  </p>
                </div>
                <form onSubmit={submitLead} className="space-y-2">
                  <input
                    type="text"
                    placeholder="Name *"
                    value={leadForm.name}
                    onChange={(e) =>
                      setLeadForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full rounded-lg border border-bg-border bg-bg-base/60 px-3 py-2 text-xs text-ink placeholder:text-ink-dim focus:border-cyan-glow/40 focus:outline-none focus:ring-1 focus:ring-cyan-glow/20"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    value={leadForm.email}
                    onChange={(e) =>
                      setLeadForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="w-full rounded-lg border border-bg-border bg-bg-base/60 px-3 py-2 text-xs text-ink placeholder:text-ink-dim focus:border-cyan-glow/40 focus:outline-none focus:ring-1 focus:ring-cyan-glow/20"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number *"
                    value={leadForm.phone}
                    onChange={(e) =>
                      setLeadForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className="w-full rounded-lg border border-bg-border bg-bg-base/60 px-3 py-2 text-xs text-ink placeholder:text-ink-dim focus:border-cyan-glow/40 focus:outline-none focus:ring-1 focus:ring-cyan-glow/20"
                  />
                  {leadError && (
                    <p className="text-[10px] text-danger">{leadError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={leadSubmitting}
                    className="w-full rounded-lg bg-cyan-glow py-2 text-xs font-medium text-bg-base transition-all hover:shadow-glow-sm disabled:opacity-50"
                  >
                    {leadSubmitting ? "Saving..." : "Continue →"}
                  </button>
                  <p className="text-center text-[9px] text-ink-dim">
                    We'll only use this to follow up with you.
                  </p>
                </form>
              </div>
            )}
          </div>

          {/* Quick replies */}
          {showQuickReplies && (
            <div className="border-t border-bg-border px-4 py-3">
              <p className="mb-2 text-[10px] text-ink-dim">Quick questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_REPLIES.map((q) =>
                  q.href ? (
                    <Link
                      key={q.label}
                      href={q.href}
                      onClick={() => setOpen(false)}
                      className="rounded-full border border-bg-borderHi bg-bg-elevated/80 px-3 py-1.5 text-[11px] text-ink-muted transition-all hover:border-cyan-glow/40 hover:bg-cyan-glow/5 hover:text-ink"
                    >
                      {q.label}
                    </Link>
                  ) : (
                    <button
                      key={q.label}
                      onClick={() => send(q.action)}
                      className="rounded-full border border-bg-borderHi bg-bg-elevated/80 px-3 py-1.5 text-[11px] text-ink-muted transition-all hover:border-cyan-glow/40 hover:bg-cyan-glow/5 hover:text-ink"
                    >
                      {q.label}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-bg-border bg-bg-base/80 px-4 py-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                placeholder={
                  stage === "capturing"
                    ? "Please fill in your details above..."
                    : "Type a message..."
                }
                disabled={inputDisabled}
                className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-dim focus:outline-none disabled:opacity-40"
                aria-label="Message"
              />
              <button
                onClick={() => send()}
                disabled={inputDisabled || !input.trim()}
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-glow text-bg-base transition-all hover:shadow-glow-sm disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Send"
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
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
            <p className="mt-2 text-center text-[9px] text-ink-dim">
              Powered by Affnaai AI
            </p>
          </div>
        </div>
      )}

      {/* Floating trigger button — no badge */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Chat with us"}
        className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200 hover:scale-105"
        style={{
          background: open
            ? "#050507"
            : "linear-gradient(135deg, #22D3EE 0%, #0891B2 100%)",
          border: open ? "1px solid #1C2029" : "none",
          boxShadow: open
            ? "none"
            : "0 0 0 1px rgba(34,211,238,0.4), 0 0 32px rgba(34,211,238,0.3), 0 8px 24px rgba(0,0,0,0.5)",
        }}
      >
        {!open && (
          <span
            className="absolute inset-0 animate-ping rounded-full opacity-20"
            style={{ background: "#22D3EE" }}
          />
        )}

        {open ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-ink-muted"
          >
            <path
              d="M2 2l12 12M14 2L2 14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="text-bg-base"
          >
            <path
              d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

function Bubble({ role, content }) {
  const isUser = role === "user";
  return (
    <div
      data-role={role}
      className={`flex animate-fade-in ${isUser ? "justify-end" : "justify-start"}`}
    >
      {!isUser && (
        <div
          className="mr-2 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-bg-base"
          style={{ background: "linear-gradient(135deg, #22D3EE 0%, #0891B2 100%)" }}
        >
          A
        </div>
      )}
      <div
        className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "rounded-br-sm bg-cyan-glow text-bg-base"
            : "rounded-bl-sm border border-bg-border bg-bg-elevated text-ink"
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
      <div
        className="mr-2 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-bg-base"
        style={{ background: "linear-gradient(135deg, #22D3EE 0%, #0891B2 100%)" }}
      >
        A
      </div>
      <div className="rounded-2xl rounded-bl-sm border border-bg-border bg-bg-elevated px-4 py-3">
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-glow" style={{ animationDelay: "0ms" }} />
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-glow" style={{ animationDelay: "200ms" }} />
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-glow" style={{ animationDelay: "400ms" }} />
        </div>
      </div>
    </div>
  );
}
