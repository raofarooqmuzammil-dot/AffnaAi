import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Affnaai — AI Receptionists for Service Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050507",
          padding: "72px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid background using radial gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,211,238,0.12), transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top: brand chip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: "#22D3EE",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              padding: "10px 18px",
              border: "1px solid rgba(34,211,238,0.35)",
              borderRadius: 999,
              background: "rgba(34,211,238,0.05)",
              display: "flex",
            }}
          >
            ● AFFNAAI · LIVE 24/7
          </div>
        </div>

        {/* Middle: headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 92,
              color: "#F4F4F5",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              fontWeight: 500,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>The AI receptionist</span>
            <span>
              that <span style={{ color: "#22D3EE" }}>never misses</span>
            </span>
            <span>a customer.</span>
          </div>
        </div>

        {/* Bottom: channels */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 26,
              color: "#8B8F98",
              display: "flex",
              gap: 18,
            }}
          >
            <span>WhatsApp</span>
            <span style={{ color: "#2C2F37" }}>·</span>
            <span>Voice</span>
            <span style={{ color: "#2C2F37" }}>·</span>
            <span>Web chat</span>
            <span style={{ color: "#2C2F37" }}>·</span>
            <span>SMS</span>
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#22D3EE",
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            affnaai.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
