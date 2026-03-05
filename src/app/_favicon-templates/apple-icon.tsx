import { ImageResponse } from "next/og";
import { createWaveIconElement } from "@/lib/branding/wave-icon-render";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(createWaveIconElement(size.width), size);
}
