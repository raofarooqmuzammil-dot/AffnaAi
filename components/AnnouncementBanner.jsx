import Link from "next/link";

export default function AnnouncementBanner() {
  return (
    <div className="relative w-full overflow-hidden border-b border-cyan-glow/15 bg-bg-elevated">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.1) 50%, transparent 100%)",
        }}
      />
      <Link
        href="/pricing"
        className="relative flex items-center justify-center gap-2 px-4 py-2.5 text-center text-xs text-ink-muted transition-colors hover:text-ink sm:gap-3 sm:text-sm"
      >
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-cyan-glow/20 text-[10px]">
          🔥
        </span>
        <span>
          <span className="font-medium text-ink">Founding 10 launch</span>
          <span className="hidden md:inline"> — Growth-tier AI receptionist for </span>
          <span className="md:hidden"> · </span>
          <span className="font-semibold text-cyan-glow">$249/mo</span>
          <span className="hidden md:inline"> · </span>
          <span className="hidden md:inline text-ink">Save $148/mo</span>
          <span className="hidden lg:inline">. Limited spots.</span>
        </span>
        <span className="inline-flex items-center gap-1 font-medium text-cyan-glow">
          <span className="hidden sm:inline">Claim spot</span>
          <span className="sm:hidden">View</span>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 5.5h7M9 5.5L6 2.5M9 5.5L6 8.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
}
