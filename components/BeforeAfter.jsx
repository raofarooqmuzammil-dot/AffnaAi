const data = [
  {
    before: { time: "11:42 PM", event: "Missed call from new lead", lost: true },
    after: { time: "11:42 PM", event: "AI answered in 8 seconds", lost: false },
  },
  {
    before: { time: "7:14 AM", event: "Voicemail unchecked", lost: true },
    after: { time: "7:14 AM", event: "Booking confirmed: Sat 10am", lost: false },
  },
  {
    before: { time: "2:33 PM", event: "Staff overwhelmed mid-shift", lost: true },
    after: { time: "2:33 PM", event: "12 inquiries handled, 4 booked", lost: false },
  },
  {
    before: { time: "—", event: "$3,200 lost / mo in missed bookings", lost: true },
    after: { time: "—", event: "+$2,700 recovered / mo", lost: false },
  },
];

export default function BeforeAfter() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {/* Before */}
      <div className="card relative overflow-hidden p-7">
        <div className="absolute right-6 top-6 chip">BEFORE</div>
        <h3 className="font-display text-2xl text-ink">A typical Tuesday</h3>
        <p className="mt-1 text-sm text-ink-muted">Without an AI receptionist.</p>
        <div className="mt-6 space-y-2">
          {data.map((row, i) => (
            <LogRow
              key={i}
              time={row.before.time}
              event={row.before.event}
              lost={row.before.lost}
            />
          ))}
        </div>
      </div>

      {/* After */}
      <div className="card relative overflow-hidden p-7 shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_0_60px_0_rgba(34,211,238,0.06)]">
        <div className="absolute right-6 top-6 chip-glow">AFTER</div>
        <h3 className="font-display text-2xl text-ink">With Affnaai live</h3>
        <p className="mt-1 text-sm text-ink-muted">Every channel, every hour.</p>
        <div className="mt-6 space-y-2">
          {data.map((row, i) => (
            <LogRow
              key={i}
              time={row.after.time}
              event={row.after.event}
              lost={row.after.lost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function LogRow({ time, event, lost }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 font-mono text-xs ${
        lost
          ? "border-bg-border bg-bg-base/40 text-ink-dim"
          : "border-cyan-glow/15 bg-cyan-glow/[0.03] text-ink"
      }`}
    >
      <span className={lost ? "text-ink-dim" : "text-cyan-glow"}>
        [{time}]
      </span>
      <span className={`flex-1 ${lost ? "line-through decoration-danger/40" : ""}`}>
        {event}
      </span>
      {lost ? (
        <span className="text-danger">✕</span>
      ) : (
        <span className="text-cyan-glow">✓</span>
      )}
    </div>
  );
}
