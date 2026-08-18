import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const iconPath = join(process.cwd(), "public/images/oes-icon.png");
  const iconBase64 = readFileSync(iconPath).toString("base64");
  const iconSrc = `data:image/png;base64,${iconBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#42563d",
          padding: "80px",
        }}
      >
        <img
          src={iconSrc}
          alt=""
          width={280}
          height={309}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 56,
            maxWidth: 720,
          }}
        >
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              color: "#c9d3c5",
              letterSpacing: 4,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            {site.location}
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.15,
              marginTop: 16,
              display: "flex",
            }}
          >
            {site.tagline}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#e6e9e4",
              marginTop: 28,
              display: "flex",
            }}
          >
            {site.name}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
