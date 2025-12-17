"use client";

import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

export const Confetti = () => {
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
        recycle={false}
        numberOfPieces={200}
        gravity={0.2}
      />
    </div>
  );
};