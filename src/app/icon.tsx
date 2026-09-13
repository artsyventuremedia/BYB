import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 34,
          fontWeight: 600,
          fontFamily: "Helvetica, Arial, sans-serif",
          letterSpacing: -1,
        }}
      >
        B
      </div>
    ),
    { ...size }
  );
}
