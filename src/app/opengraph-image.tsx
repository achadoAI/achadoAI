import { ImageResponse } from "next/og";

export const alt = "achadoAI | GEO e AEO no Brasil";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #1a1f36 0%, #111827 58%, #0f172a 100%)",
          color: "#f8fafc",
          padding: "56px 64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          <span>achado</span>
          <span style={{ color: "#22c55e" }}>AI</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 800,
              maxWidth: "920px",
            }}
          >
            Sua Marca Visível nas Respostas da IA
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "#cbd5e1",
              maxWidth: "980px",
            }}
          >
            GEO e AEO para ChatGPT, Perplexity e Google AI Overviews.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#94a3b8",
          }}
        >
          <span>Diagnóstico gratuito de AI Visibility</span>
          <span style={{ color: "#22c55e", fontWeight: 700 }}>Campinas, SP</span>
        </div>
      </div>
    ),
    size
  );
}
