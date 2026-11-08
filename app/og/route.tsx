import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const WIDTH = 1200;
const HEIGHT = 630;

const clean = (value: string | null, max: number, fallback = "") =>
  (value ?? fallback).replace(/\s+/g, " ").trim().slice(0, max);

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const label = clean(searchParams.get("label"), 64, "Portfolio").toUpperCase();
  const title = clean(searchParams.get("title"), 110, "Zharfan Hakim");
  const subtitle = clean(searchParams.get("sub"), 190);
  const tags = clean(searchParams.get("tags"), 90);
  const meta = clean(searchParams.get("meta"), 64, "jarrworkspace.com");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#737373",
          }}
        >
          <span>Zharfan Hakim</span>
          <span>{label}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: title.length > 42 ? 58 : 76,
              lineHeight: 1.06,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            {title}
          </div>

          {subtitle ? (
            <div
              style={{
                marginTop: 26,
                fontSize: 26,
                lineHeight: 1.45,
                color: "#a3a3a3",
                maxWidth: 860,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 28,
            fontSize: 20,
            color: "#a3a3a3",
          }}
        >
          <span>{tags || "Engineering case study"}</span>
          <span style={{ color: "#fafafa" }}>{meta}</span>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );
}
