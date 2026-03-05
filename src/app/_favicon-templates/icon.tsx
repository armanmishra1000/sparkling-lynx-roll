import { ImageResponse } from "next/og";
import { createWaveIconElement } from "@/lib/branding/wave-icon-render";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(createWaveIconElement(size.width), size);
}
