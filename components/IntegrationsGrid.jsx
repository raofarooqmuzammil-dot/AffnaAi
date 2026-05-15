const integrations = [
  { name: "WhatsApp", category: "Messaging", color: "#25D366" },
  { name: "Instagram", category: "Messaging", color: "#E1306C" },
  { name: "Google Calendar", category: "Scheduling", color: "#4285F4" },
  { name: "Calendly", category: "Scheduling", color: "#006BFF" },
  { name: "HubSpot", category: "CRM", color: "#FF7A59" },
  { name: "GoHighLevel", category: "CRM", color: "#3DB389" },
  { name: "Stripe", category: "Payments", color: "#635BFF" },
  { name: "Twilio", category: "Voice / SMS", color: "#F22F46" },
  { name: "Gmail", category: "Email", color: "#EA4335" },
  { name: "Slack", category: "Internal", color: "#4A154B" },
  { name: "Zapier", category: "Automation", color: "#FF4F00" },
  { name: "Make", category: "Automation", color: "#6D00CC" },
];

export default function IntegrationsGrid({ compact = false }) {
  const shown = compact ? integrations.slice(0, 8) : integrations;
  return (
    <div
      className={`grid gap-3 ${
        compact ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      }`}
    >
      {shown.map((i) => (
        <div
          key={i.name}
          className="card group relative overflow-hidden p-4 transition-colors hover:border-cyan-glow/30"
        >
          <div className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-medium text-white"
              style={{
                background: `linear-gradient(135deg, ${i.color}, ${i.color}cc)`,
                boxShadow: `0 0 24px ${i.color}30`,
              }}
            >
              {i.name[0]}
            </span>
            <div className="min-w-0">
              <div className="truncate text-sm font-medium text-ink">{i.name}</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-dim">
                {i.category}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
