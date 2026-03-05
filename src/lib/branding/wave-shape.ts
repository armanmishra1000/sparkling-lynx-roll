export type Point = {
  x: number;
  y: number;
};

export const WAVE_NUM_PEAKS = 8;
export const WAVE_ENVELOPE_POWER = 1.5;
export const WAVE_AMPLITUDE_RATIO = 0.24;

export const RAINBOW_COLOR_STOPS: ReadonlyArray<{
  offset: number;
  color: string;
}> = [
  { offset: 0.0, color: "#E81416" },
  { offset: 0.17, color: "#FFA500" },
  { offset: 0.33, color: "#FAEB36" },
  { offset: 0.5, color: "#79C314" },
  { offset: 0.67, color: "#487DE7" },
  { offset: 0.83, color: "#4B369D" },
  { offset: 1.0, color: "#70369D" },
];

export function getWaveSampleStep(width: number): number {
  return Math.max(0.5, width / 240);
}

type WavePointsOptions = {
  width: number;
  height: number;
  phase?: number;
  step?: number;
  numPeaks?: number;
  envelopePower?: number;
  amplitudeRatio?: number;
};

export function getWavePoints({
  width,
  height,
  phase = 0,
  step = getWaveSampleStep(width),
  numPeaks = WAVE_NUM_PEAKS,
  envelopePower = WAVE_ENVELOPE_POWER,
  amplitudeRatio = WAVE_AMPLITUDE_RATIO,
}: WavePointsOptions): Point[] {
  if (width <= 0 || height <= 0 || step <= 0) {
    return [];
  }

  const frequency = (Math.PI * numPeaks) / width;
  const amplitude = height * amplitudeRatio;
  const points: Point[] = [];

  for (let x = 0; x <= width; x += step) {
    const nx = x / width;
    const envelope = Math.pow(Math.sin(nx * Math.PI), envelopePower);
    const y = (height / 2) + (envelope * amplitude * Math.sin(frequency * x - phase));
    points.push({ x, y });
  }

  if (points.length === 0 || points[points.length - 1].x < width) {
    const nx = 1;
    const envelope = Math.pow(Math.sin(nx * Math.PI), envelopePower);
    const y = (height / 2) + (envelope * amplitude * Math.sin((Math.PI * numPeaks) - phase));
    points.push({ x: width, y });
  }

  return points;
}

export function buildSvgPathFromPoints(points: ReadonlyArray<Point>): string {
  if (points.length === 0) {
    return "";
  }

  let path = `M${points[0].x.toFixed(3)} ${points[0].y.toFixed(3)}`;
  for (let i = 1; i < points.length; i += 1) {
    path += ` L${points[i].x.toFixed(3)} ${points[i].y.toFixed(3)}`;
  }
  return path;
}
