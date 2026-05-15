"use client";

import { useMemo, useState } from "react";

export default function ROICalculator() {
  const [missed, setMissed] = useState(12);
  const [conversion, setConversion] = useState(35);
  const [value, setValue] = useState(220);

  const result = useMemo(() => {
    const weeklyLoss = missed * (conversion / 100) * value;
    const monthlyLoss = weeklyLoss * 4.33;
    const annualLoss = weeklyLoss * 52;
    const recoverable = monthlyLoss * 0.85; // Affnaai typically recovers ~85%
    return { monthlyLoss, annualLoss, recoverable };
  }, [missed, conversion, value]);

  return (
    <div className="card overflow-hidden">
      <div className="grid lg:grid-cols-5">
        {/* Inputs */}
        <div className="space-y-7 p-7 lg:col-span-3 lg:border-r lg:border-bg-border">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-cyan-glow">
              [ ROI CALCULATOR ]
            </div>
            <h3 className="mt-2 font-display text-2xl text-ink">
              How much are missed calls costing you?
            </h3>
            <p className="mt-1 text-sm text-ink-muted">
              Adjust the inputs to match your business.
            </p>
          </div>

          <Slider
            label="Missed calls / inquiries per week"
            value={missed}
            onChange={setMissed}
            min={1}
            max={60}
            suffix=""
          />
          <Slider
            label="Lead-to-customer conversion rate"
            value={conversion}
            onChange={setConversion}
            min={5}
            max={80}
            suffix="%"
          />
          <Slider
            label="Average first-job value"
            value={value}
            onChange={setValue}
            min={50}
            max={2000}
            step={10}
            prefix="$"
          />
        </div>

        {/* Results */}
        <div className="relative overflow-hidden bg-bg-base/50 p-7 lg:col-span-2">
          <div className="grid-bg-fine pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative space-y-6">
            <ResultRow
              label="You're losing per month"
              value={`-$${Math.round(result.monthlyLoss).toLocaleString()}`}
              tone="danger"
            />
            <ResultRow
              label="Annualized"
              value={`-$${Math.round(result.annualLoss).toLocaleString()}`}
              tone="muted"
            />
            <div className="my-2 h-px divider-glow" />
            <ResultRow
              label="Affnaai can recover ~85% of this"
              value={`+$${Math.round(result.recoverable).toLocaleString()}/mo`}
              tone="success"
              big
            />
            <p className="font-mono text-[10px] leading-relaxed text-ink-dim">
              Based on industry benchmarks. Actual results depend on your channel mix,
              response speed, and how qualified your leads are. Most businesses see
              measurable recovery within 30 days of going live.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({ label, value, onChange, min, max, step = 1, prefix = "", suffix = "" }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label className="text-sm text-ink-muted">{label}</label>
        <div className="font-display text-2xl text-ink">
          <span className="text-ink-dim text-base">{prefix}</span>
          {value.toLocaleString()}
          <span className="text-ink-dim text-base">{suffix}</span>
        </div>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="slider-input w-full appearance-none"
          style={{
            background: `linear-gradient(to right, #22D3EE 0%, #22D3EE ${pct}%, #1C2029 ${pct}%, #1C2029 100%)`,
          }}
        />
        <style jsx>{`
          .slider-input {
            -webkit-appearance: none;
            height: 6px;
            border-radius: 9999px;
            outline: none;
          }
          .slider-input::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #22d3ee;
            border: 3px solid #050507;
            box-shadow: 0 0 0 1px rgba(34, 211, 238, 0.5), 0 0 16px rgba(34, 211, 238, 0.4);
            cursor: pointer;
            transition: transform 0.15s;
          }
          .slider-input::-webkit-slider-thumb:hover {
            transform: scale(1.15);
          }
          .slider-input::-moz-range-thumb {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #22d3ee;
            border: 3px solid #050507;
            box-shadow: 0 0 0 1px rgba(34, 211, 238, 0.5), 0 0 16px rgba(34, 211, 238, 0.4);
            cursor: pointer;
          }
        `}</style>
      </div>
    </div>
  );
}

function ResultRow({ label, value, tone = "muted", big = false }) {
  const colorMap = {
    danger: "text-danger",
    success: "text-success",
    muted: "text-ink-muted",
  };
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
        {label}
      </div>
      <div
        className={`mt-1 font-display ${
          big ? "text-3xl lg:text-4xl" : "text-2xl"
        } ${colorMap[tone]}`}
      >
        {value}
      </div>
    </div>
  );
}
