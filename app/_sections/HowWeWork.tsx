"use client";

import { Fragment, useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import Image from "next/image";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { howWeWork } from "@/lib/content";
import { cn } from "@/lib/utils";

const outlinedNumberStyle: CSSProperties = {
  WebkitTextStroke: "2px #FFFFFF",
  color: "transparent",
};

export function HowWeWork() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tablistRef = useRef<HTMLDivElement | null>(null);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  const total = howWeWork.steps.length;
  const step = howWeWork.steps[active];
  const tabId = (i: number) => `${baseId}-tab-${i}`;
  const panelId = `${baseId}-panel`;

  const handleKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % total;
    else if (e.key === "ArrowLeft") next = (i - 1 + total) % total;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = total - 1;
    else return;

    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(max-width: 767px)").matches) return;
    tabRefs.current[active]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [active]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = tablistRef.current;
    if (!container) return;
    if (!window.matchMedia("(max-width: 767px)").matches) return;

    let raf: number | null = null;
    let debounce: ReturnType<typeof setTimeout> | null = null;

    const applyTransforms = () => {
      const cRect = container.getBoundingClientRect();
      const cCenter = cRect.left + cRect.width / 2;
      const halfWidth = cRect.width / 2;
      let closestIdx = 0;
      let closestDist = Infinity;

      tabRefs.current.forEach((tab, i) => {
        if (!tab) return;
        const tRect = tab.getBoundingClientRect();
        const tCenter = tRect.left + tRect.width / 2;
        const dist = Math.abs(tCenter - cCenter);
        const nDist = Math.min(dist / halfWidth, 1);
        tab.style.transform = `scale(${(1 - nDist * 0.32).toFixed(3)})`;
        tab.style.opacity = (1 - nDist * 0.6).toFixed(3);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });

      if (debounce) clearTimeout(debounce);
      debounce = setTimeout(() => {
        setActive((prev) => (prev !== closestIdx ? closestIdx : prev));
      }, 130);
      raf = null;
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(applyTransforms);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    applyTransforms();

    return () => {
      container.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (debounce) clearTimeout(debounce);
      tabRefs.current.forEach((tab) => {
        if (tab) {
          tab.style.transform = "";
          tab.style.opacity = "";
        }
      });
    };
  }, []);

  return (
    <Section
      id="how-we-work"
      width="wide"
      background={
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/brand/promise-topo.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
      }
    >
      <div className="text-white">
        <Heading level="section">
          {howWeWork.steps.map((s, i) => (
            <Fragment key={s.tabLabel}>
              <span className={i === active ? "text-accent" : undefined}>
                {s.tabLabel}
              </span>
              {"."}
              {i < total - 1 && " "}
            </Fragment>
          ))}
        </Heading>
      </div>

      <div
        ref={tablistRef}
        role="tablist"
        aria-label="Our process"
        className="mt-12 -mx-6 flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth pl-[25vw] pr-[25vw] pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:mt-16 md:grid md:grid-cols-4 md:gap-10 md:overflow-visible md:px-0 md:pb-0"
      >
        {howWeWork.steps.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.heading}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={tabId(i)}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => handleKey(e, i)}
              className="group flex shrink-0 basis-[50%] snap-center flex-col items-center gap-3 rounded-md p-2 text-center will-change-transform transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 md:basis-auto md:will-change-auto"
            >
              <span
                aria-hidden="true"
                style={isActive ? undefined : outlinedNumberStyle}
                className={cn(
                  "font-display text-[64px] font-medium leading-none transition-all md:text-[96px]",
                  isActive
                    ? "text-accent"
                    : "text-white group-hover:scale-[1.03]"
                )}
              >
                {i + 1}
              </span>
              <span
                className={cn(
                  "font-sans text-sm font-semibold uppercase tracking-[0.14em] transition-colors md:text-base",
                  isActive
                    ? "text-white"
                    : "text-white/70 group-hover:text-white"
                )}
              >
                {s.tabLabel}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={tabId(active)}
        key={active}
        className="mt-12 grid grid-cols-1 gap-8 rounded-lg border border-white/15 bg-white/5 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500 md:mt-16 md:grid-cols-2 md:gap-12 md:p-10"
      >
        <div className="flex flex-col gap-6 text-white">
          <Heading level="block">{step.heading}</Heading>
          <p className="max-w-[60ch] text-[17px] leading-[1.6] text-white/85 lg:text-[18px] lg:leading-[1.65]">
            {step.body}
          </p>
          {calendlyUrl && (
            <div>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center rounded-md bg-accent px-5 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Book a call
              </a>
            </div>
          )}
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md ring-1 ring-border">
          <Image
            src="/brand/hero-boat.png"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </Section>
  );
}
