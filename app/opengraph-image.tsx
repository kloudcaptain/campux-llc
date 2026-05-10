import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(ellipse 100% 50% at 8% 6%, rgba(200,75,20,0.55) 0%, transparent 46%), radial-gradient(ellipse 60% 38% at 92% 22%, rgba(140,28,80,0.55) 0%, transparent 42%), #0a0610",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#e05a2b",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          CAMPUX
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: 28,
          }}
        >
          Managed Infrastructure &amp; Security Operations
        </div>
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.5,
          }}
        >
          US-based. One team. No handoffs.
        </div>
      </div>
    ),
    { ...size }
  )
}
