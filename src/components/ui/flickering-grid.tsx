"use client";

import React, { useRef, useEffect } from "react";

interface FlickeringGridProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  color = "rgba(0,0,0,0.05)",
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

    // Perform a one-time flicker by toggling opacity
    container.style.opacity = "0";
    const timeout = setTimeout(() => {
      container.style.opacity = "1";
    }, 500); // flicker duration in ms

    return () => clearTimeout(timeout);
  }, [width, height]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full ${className}`}
      style={{
        backgroundColor: color,
        transition: "opacity 0.5s ease-in-out",
      }}
    />
  );
};

export { FlickeringGrid };