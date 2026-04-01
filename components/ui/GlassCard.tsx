"use client";

import { forwardRef } from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className = "", hover = true, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          glass rounded-2xl p-6
          ${hover ? "transition-all duration-300 hover:bg-glass-hover hover:border-white/12" : ""}
          ${glow ? "animate-pulse-glow" : ""}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";
export default GlassCard;
