import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 130,
          background: "#050507",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontWeight: 700,
          letterSpacing: "-8px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        a
        <span style={{ color: "#22D3EE", marginLeft: "4px" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
