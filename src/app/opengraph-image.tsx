import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0e11",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              background: "#34d399",
            }}
          />
          <div style={{ color: "#8b949e", fontSize: "28px" }}>
            {`${site.location} · Open to AI engineering roles`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#fafafa",
              fontSize: "84px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              color: "#34d399",
              fontSize: "44px",
              fontWeight: 600,
              marginTop: "12px",
            }}
          >
            {site.role}
          </div>
          <div
            style={{
              color: "#c9d1d9",
              fontSize: "32px",
              marginTop: "28px",
              maxWidth: "900px",
              lineHeight: 1.35,
            }}
          >
            {site.tagline}
          </div>
        </div>

        <div style={{ display: "flex", color: "#8b949e", fontSize: "26px" }}>
          cristianchiorescu.com
        </div>
      </div>
    ),
    { ...size },
  );
}
