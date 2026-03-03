"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useDemo } from "@/context/DemoContext";
import InteractiveRainbowWave from "@/components/landing/shared/InteractiveRainbowWave";

type LogoProps = {
  className?: string;
  markSize?: number;
  showText?: boolean;
  textClassName?: string;
  href?: string;
  withLink?: boolean;
};

const Logo = ({
  className,
  markSize = 40,
  showText = true,
  textClassName = "text-xl font-bold tracking-tight text-black",
  href = "/",
  withLink = true,
}: LogoProps) => {
  const { currentLanguage } = useDemo();

  const content = (
    <span className={cn("flex items-center gap-2", className)}>
      <span
        className="relative shrink-0"
        style={{ width: markSize, height: markSize }}
        aria-hidden="true"
      >
        <span
          style={{
            background: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
          }}
          className="block h-full w-full rounded-full p-[2px]"
        >
          <span className="flex h-full w-full items-center justify-center rounded-full bg-white overflow-hidden">
            <InteractiveRainbowWave
              useRainbow
              animate={false}
              initialPhase={0}
              lineWidth={1.5}
              sampleStep={0.5}
              className="h-[56%] w-full"
            />
          </span>
        </span>
      </span>
      {showText ? <span className={textClassName}>Sophie.ai</span> : null}
    </span>
  );

  if (!withLink) {
    return content;
  }

  return (
    <Link href={href} className="group w-fit">
      {content}
    </Link>
  );
};

export default Logo;
