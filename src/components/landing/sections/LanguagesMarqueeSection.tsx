"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { RainbowBorder } from "@/components/ui/RainbowBorder";
import { marqueeLanguages } from "@/lib/marquee-languages";
import CircleFlag from "@/components/landing/shared/CircleFlag";

const PX_PER_SECOND = 120;
const MIN_DURATION_SECONDS = 12;

const LanguagesMarqueeSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [travelDistance, setTravelDistance] = useState<number>(0);

  const languageItems = useMemo(() => marqueeLanguages, []);

  useEffect(() => {
    const calculateDistance = () => {
      const container = containerRef.current;
      const track = trackRef.current;

      if (!container || !track) {
        setTravelDistance(0);
        return;
      }

      const nextDistance = Math.max(track.scrollWidth - container.clientWidth, 0);
      setTravelDistance(nextDistance);
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, [languageItems.length]);

  const shouldAnimate = travelDistance > 0;
  const durationSeconds = Math.max(travelDistance / PX_PER_SECOND, MIN_DURATION_SECONDS);
  const trackStyle = {
    "--marquee-distance": `-${travelDistance}px`,
    "--marquee-duration": `${durationSeconds}s`,
  } as React.CSSProperties;

  return (
    <section className="pb-16 bg-white overflow-hidden" aria-label="Supported languages">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-10">
          <p className="text-2xl md:text-4xl font-semibold text-black">
            Learn any language in any language, no English required!
          </p>
        </div>

        <div className="relative">
          <div ref={containerRef} className="overflow-hidden bg-white">
            <div
              ref={trackRef}
              className={`flex w-max items-center gap-4 p-4 ${shouldAnimate ? "animate-languages-marquee" : ""}`}
              style={trackStyle}
            >
              {languageItems.map((language) => (
                <RainbowBorder
                  key={language.id}
                  className="shrink-0"
                  borderWidth={2}
                  borderRadius={9999}
                  innerClassName="flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 bg-white"
                >
                  <CircleFlag countryCode={language.countryCode} size={40} alt={`${language.name} flag`} />
                  <span className="text-lg sm:text-xl font-medium text-black">{language.name}</span>
                </RainbowBorder>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent md:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent md:w-16" />
        </div>
      </div>
    </section>
  );
};

export default LanguagesMarqueeSection;
