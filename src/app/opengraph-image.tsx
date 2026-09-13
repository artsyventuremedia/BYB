import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#060a12",
          color: "#eef2f6",
          padding: 80,
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, color: "#8792a3" }}>
          BYB FILMS
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ fontSize: 76, fontWeight: 500 }}>Post Production</div>
          <div style={{ fontSize: 76, fontStyle: "italic", color: "#c3ccd6" }}>
            Media House
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
