import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const WIDTH = 1200;
const HEIGHT = 630;
const JAPANESE = /[\u3000-\u30ff\u3400-\u9fff\uf900-\ufaff]/;

// Google serves WOFF (which the image renderer understands) to this user agent.
const LEGACY_UA =
  "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36";

const fontCache = new Map<string, ArrayBuffer>();

async function loadJapaneseFont(text: string) {
  const subset = Array.from(new Set(Array.from(text))).join("");
  const cached = fontCache.get(subset);
  if (cached) return cached;

  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400&text=${encodeURIComponent(subset)}`,
    { headers: { "User-Agent": LEGACY_UA }, cache: "force-cache" },
  ).then((response) => response.text());

  const url = css.match(/url\(([^)]+)\)/)?.[1];
  if (!url) return null;

  const data = await fetch(url, { cache: "force-cache" }).then((response) =>
    response.arrayBuffer(),
  );
  fontCache.set(subset, data);
  return data;
}

const clean = (value: string | null, max: number, fallback = "") =>
  (value ?? fallback).replace(/\s+/g, " ").trim().slice(0, max);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const label = clean(searchParams.get("label"), 64, "Portfolio").toUpperCase();
  const title = clean(searchParams.get("title"), 110, "Zharfan Hakim");
  const subtitle = clean(searchParams.get("sub"), 190);
  const tags = clean(searchParams.get("tags"), 90);
  const meta = clean(searchParams.get("meta"), 64, "jarrworkspace.com");

  const text = [label, title, subtitle, tags, meta].join(" ");
  const isJapanese = JAPANESE.test(text);

  let japaneseFont: ArrayBuffer | null = null;
  if (isJapanese) {
    try {
      japaneseFont = await loadJapaneseFont(text);
    } catch {
      japaneseFont = null;
    }
  }

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
          fontFamily: japaneseFont ? "Noto Sans JP" : "sans-serif",
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
              fontSize: isJapanese ? 64 : title.length > 42 ? 58 : 76,
              lineHeight: isJapanese ? 1.25 : 1.06,
              letterSpacing: isJapanese ? 0 : -2,
              maxWidth: 980,
            }}
          >
            {title}
          </div>

          {subtitle ? (
            <div
              style={{
                marginTop: isJapanese ? 32 : 26,
                fontSize: isJapanese ? 28 : 26,
                lineHeight: isJapanese ? 1.7 : 1.45,
                color: "#a3a3a3",
                maxWidth: 880,
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
      fonts: japaneseFont
        ? [{ name: "Noto Sans JP", data: japaneseFont, weight: 400, style: "normal" }]
        : undefined,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );
}
