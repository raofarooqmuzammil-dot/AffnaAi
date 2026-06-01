import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: "#050507",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontWeight: 700,
          letterSpacing: "-1.5px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        a
        <span style={{ color: "#22D3EE", marginLeft: "1px" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
