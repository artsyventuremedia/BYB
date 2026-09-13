import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#060a12",
          color: "#eef2f6",
          fontSize: 88,
          fontWeight: 600,
          fontFamily: "Helvetica, Arial, sans-serif",
          letterSpacing: -2,
        }}
      >
        B
      </div>
    ),
    { ...size }
  );
}
