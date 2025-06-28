
"use client";

import React from "react";

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  className,
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      {/* Premium static background with subtle gradients and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"></div>
      
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="premium-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(0, 170, 254)" strokeWidth="1"/>
            </pattern>
            <pattern id="premium-dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="rgb(41, 98, 255)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#premium-grid)"/>
          <rect width="100%" height="100%" fill="url(#premium-dots)"/>
        </svg>
      </div>

      {/* Subtle radial gradients for depth */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-inkaer-blue/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-inkaer-dark-blue/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-inkaer-light-blue/3 to-transparent rounded-full blur-3xl"></div>

      {/* Premium texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.005] to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.005] to-transparent"></div>
    </div>
  );
};

export { FlickeringGrid };
