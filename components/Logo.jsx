export default function Logo({ className = "" }) {
  return (
    <span
      className={`inline-flex items-baseline font-display text-xl font-medium tracking-tight ${className}`}
      aria-label="Affnaai"
    >
      <span className="text-ink">affna</span>
      <span className="ml-0.5 inline-flex items-center">
        <span className="text-gradient-cyan">ai</span>
        <span className="ml-1 inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-glow" />
      </span>
    </span>
  );
}
