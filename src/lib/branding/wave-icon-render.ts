import React from "react";
import {
  buildSvgPathFromPoints,
  getWavePoints,
  getWaveSampleStep,
  RAINBOW_COLOR_STOPS,
} from "./wave-shape.ts";

type WaveIconModel = {
  size: number;
  radius: number;
  wavePath: string;
  strokeWidth: number;
};

function getWaveIconModel(size: number): WaveIconModel {
  const waveHeight = size * 0.56;
  const waveTop = (size - waveHeight) / 2;
  const points = getWavePoints({
    width: size,
    height: waveHeight,
    phase: 0,
    step: getWaveSampleStep(size),
  }).map((point) => ({
    x: point.x,
    y: point.y + waveTop,
  }));

  return {
    size,
    radius: (size / 2) - Math.max(1, size * 0.015625),
    wavePath: buildSvgPathFromPoints(points),
    strokeWidth: (1.5 * size) / 64,
  };
}

function buildGradientStops() {
  return RAINBOW_COLOR_STOPS.map((stop) =>
    React.createElement("stop", {
      key: stop.offset,
      offset: stop.offset,
      stopColor: stop.color,
    })
  );
}

export function createWaveIconElement(size: number): React.ReactElement {
  const model = getWaveIconModel(size);
  const center = model.size / 2;

  return React.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${model.size} ${model.size}` },
    React.createElement(
      "defs",
      null,
      React.createElement(
        "linearGradient",
        { id: "rainbow-wave", x1: "0", y1: String(center), x2: String(model.size), y2: String(center), gradientUnits: "userSpaceOnUse" },
        ...buildGradientStops()
      ),
      React.createElement(
        "clipPath",
        { id: "icon-circle" },
        React.createElement("circle", { cx: center, cy: center, r: model.radius })
      )
    ),
    React.createElement("circle", { cx: center, cy: center, r: model.radius, fill: "#FFFFFF" }),
    React.createElement(
      "g",
      { clipPath: "url(#icon-circle)" },
      React.createElement("path", {
        d: model.wavePath,
        fill: "none",
        stroke: "url(#rainbow-wave)",
        strokeWidth: model.strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    )
  );
}

export function renderWaveIconSvgString(size: number): string {
  const model = getWaveIconModel(size);
  const center = model.size / 2;

  const stops = RAINBOW_COLOR_STOPS.map(
    (stop) => `<stop offset="${stop.offset}" stop-color="${stop.color}" />`
  ).join("");

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${model.size} ${model.size}" fill="none">`,
    "<defs>",
    `<linearGradient id="rainbow-wave" x1="0" y1="${center}" x2="${model.size}" y2="${center}" gradientUnits="userSpaceOnUse">`,
    stops,
    "</linearGradient>",
    `<clipPath id="icon-circle"><circle cx="${center}" cy="${center}" r="${model.radius}" /></clipPath>`,
    "</defs>",
    `<circle cx="${center}" cy="${center}" r="${model.radius}" fill="#FFFFFF" />`,
    `<g clip-path="url(#icon-circle)">`,
    `<path d="${model.wavePath}" stroke="url(#rainbow-wave)" stroke-width="${model.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" />`,
    "</g>",
    "</svg>",
  ].join("");
}
