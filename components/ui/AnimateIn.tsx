"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
}

type State = "ssr" | "hidden" | "visible" | "skip";

export function AnimateIn({ children, className, delay = 0 }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>("ssr");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setState("skip");
      return;
    }

    setState("hidden");

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: React.CSSProperties =
    state === "hidden"
      ? { opacity: 0, transform: "translateY(1.5rem)" }
      : state === "visible"
      ? {
          opacity: 1,
          transform: "translateY(0)",
          transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        }
      : {};

  return (
    <div ref={ref} className={cn(className)} style={style}>
      {children}
    </div>
  );
}
