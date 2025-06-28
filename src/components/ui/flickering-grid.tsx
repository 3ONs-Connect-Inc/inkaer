"use client";

import React, { useRef, useEffect } from "react";

interface FlickeringGridProps {
  squareSize?: number; // unused now but kept for compatibility
  gridGap?: number; // unused now but kept for compatibility
  flickerChance?: number; // unused now but kept for compatibility
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number; // unused now but kept for compatibility
}

const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  color = "rgba(0,0,0,0.1)",
  width,
  height,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (width) container.style.width = `${width}px`;
    if (height) container.style.height = `${height}px`;
  }, [width, height]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full ${className}`}
      style={{
        background: `linear-gradient(270deg, ${color}, transparent, ${color})`,
        backgroundSize: "400% 400%",
        animation: "flickerBackground 5s ease infinite",
      }}
    />
  );
};

export { FlickeringGrid };