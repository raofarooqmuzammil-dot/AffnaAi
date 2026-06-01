import { ImageResponse } from "next/og";

export const alt =
  "Affnaai — Automating customer conversation into revenue";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050507",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "10px",
            color: "#888880",
            marginBottom: 40,
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          AI Receptionists for Small Business
        </div>

        <div
          style={{
            fontSize: 200,
            fontWeight: 900,
            letterSpacing: "-10px",
            lineHeight: 1,
            display: "flex",
          }}
        >
          <span style={{ color: "#FFFFFF" }}>affna</span>
          <span style={{ color: "#22D3EE" }}>ai</span>
          <span style={{ color: "#22D3EE" }}>.</span>
        </div>

        <div
          style={{
            fontSize: 38,
            color: "#B4B2A9",
            marginTop: 50,
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          Automating customer conversation into revenue.
        </div>

        <div
          style={{
            display: "flex",
            gap: 4,
            alignItems: "flex-end",
            marginTop: 60,
            height: 40,
          }}
        >
          <div style={{ width: 4, height: 8, background: "#FFFFFF", borderRadius: 2 }}></div>
          <div style={{ width: 4, height: 14, background: "#FFFFFF", borderRadius: 2 }}></div>
          <div style={{ width: 4, height: 22, background: "#FFFFFF", borderRadius: 2 }}></div>
          <div style={{ width: 4, height: 30, background: "#FFFFFF", borderRadius: 2 }}></div>
          <div style={{ width: 4, height: 36, background: "#FFFFFF", borderRadius: 2 }}></div>
          <div style={{ width: 4, height: 40, background: "#22D3EE", borderRadius: 2 }}></div>
          <div style={{ width: 4, height: 36, background: "#FFFFFF", borderRadius: 2 }}></div>
          <div style={{ width: 4, height: 30, background: "#FFFFFF", borderRadius: 2 }}></div>
          <div style={{ width: 4, height: 22, background: "#FFFFFF", borderRadius: 2 }}></div>
          <div style={{ width: 4, height: 14, background: "#FFFFFF", borderRadius: 2 }}></div>
          <div style={{ width: 4, height: 8, background: "#FFFFFF", borderRadius: 2 }}></div>
        </div>
      </div>
    ),
    { ...size }
  );
}
