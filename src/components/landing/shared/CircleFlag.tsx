"use client";

import React from "react";

interface CircleFlagProps {
  countryCode: string;
  size?: number;
  alt: string;
}

const CircleFlag = ({ countryCode, size = 40, alt }: CircleFlagProps) => {
  const normalizedCode = countryCode.toLowerCase();
  const flagUrl = `https://hatscripts.github.io/circle-flags/flags/${normalizedCode}.svg`;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        overflow: "hidden",
      }}
      className="shrink-0 shadow-sm"
    >
      <img
        src={flagUrl}
        alt={alt}
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default CircleFlag;
