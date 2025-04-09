import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GridBackgroundProps {
  children: ReactNode;
  className?: string;
  gridClassName?: string;
  containerClassName?: string;
  patternOpacity?: number;
  patternSize?: number;
  withGradient?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
}

export function GridBackground({
  children,
  className,
  gridClassName,
  containerClassName,
  patternOpacity = 0.05,
  patternSize = 20,
  withGradient = false,
  gradientFrom = "from-primary/5",
  gradientTo = "to-accent/5",
}: GridBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full bg-background overflow-hidden",
        className
      )}
    >
      {/* Grid Pattern */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          withGradient && `bg-gradient-to-b ${gradientFrom} ${gradientTo}`,
          gridClassName
        )}
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, ${patternOpacity}) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255, 255, 255, ${patternOpacity}) 1px, transparent 1px)`,
          backgroundSize: `${patternSize}px ${patternSize}px`,
        }}
      />

      {/* Content Container */}
      <div className={cn("relative z-10", containerClassName)}>{children}</div>
    </div>
  );
}
