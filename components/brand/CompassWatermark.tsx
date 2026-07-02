"use client";

import { useEffect, useRef } from "react";
import { CompassStar } from "./CompassStar";

const HERO_OPACITY = 0.13;
const RESTING_OPACITY = 0.04;

export function CompassWatermark() {
  const spinRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spinEl = spinRef.current;
    const fadeEl = fadeRef.current;
    if (!spinEl || !fadeEl) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const fadeDistance = window.innerHeight * 0.75;
      const t = Math.min(1, y / fadeDistance);
      const opacity = HERO_OPACITY + (RESTING_OPACITY - HERO_OPACITY) * t;
      fadeEl.style.opacity = String(opacity);

      if (!prefersReducedMotion) {
        const rotation = y * 0.08;
        spinEl.style.transform = `translate3d(0, 0, 0) rotate(${rotation}deg)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        ref={fadeRef}
        className="absolute left-[55%] top-[42%] aspect-square w-[120vmin] -translate-x-1/2 -translate-y-1/2 text-foreground md:left-[70%] md:w-[95vmin]"
        style={{ opacity: HERO_OPACITY }}
      >
        <div
          ref={spinRef}
          className="h-full w-full"
          style={{ willChange: "transform" }}
        >
          <CompassStar className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
