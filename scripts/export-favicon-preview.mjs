import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ImageResponse } from "next/og.js";
import { createWaveIconElement, renderWaveIconSvgString } from "../src/lib/branding/wave-icon-render.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const outputDir = path.join(projectRoot, "public", "favicon-preview");

async function exportSvgPreview() {
  const svgPath = path.join(outputDir, "wave-favicon-preview.svg");
  const svg = renderWaveIconSvgString(512);
  await writeFile(svgPath, svg, "utf8");
}

async function exportPngPreview(size) {
  const pngPath = path.join(outputDir, `wave-favicon-preview-${size}.png`);
  const response = new ImageResponse(createWaveIconElement(size), {
    width: size,
    height: size,
  });
  const bytes = await response.arrayBuffer();
  await writeFile(pngPath, Buffer.from(bytes));
}

async function main() {
  await mkdir(outputDir, { recursive: true });

  await exportSvgPreview();
  for (const size of [512, 256, 64, 32, 16]) {
    await exportPngPreview(size);
  }

  console.log("Favicon previews exported to public/favicon-preview");
}

main().catch((error) => {
  console.error("Failed to export favicon previews:", error);
  process.exitCode = 1;
});
