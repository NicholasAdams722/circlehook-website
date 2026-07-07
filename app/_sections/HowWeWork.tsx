"use client";

import { useId, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import Image from "next/image";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { howWeWork } from "@/lib/content";
import { cn } from "@/lib/utils";

const outlinedNumberStyle: CSSProperties = {
  WebkitTextStroke: "2px var(--color-foreground)",
  color: "transparent",
};

export function HowWeWork() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
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

  return (
    <Section id="how-we-work" width="wide" tone="muted">
      <Heading level="section">
        {howWeWork.heading.before}
        <span className="text-accent">{howWeWork.heading.italic}</span>
        {howWeWork.heading.after}
      </Heading>

      <div
        role="tablist"
        aria-label="Our process"
        className="mt-12 grid grid-cols-2 gap-6 md:mt-16 md:grid-cols-4 md:gap-10"
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
              className="group flex flex-col items-center gap-3 rounded-md p-2 text-center transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              <span
                aria-hidden="true"
                style={isActive ? undefined : outlinedNumberStyle}
                className={cn(
                  "font-display text-[64px] font-medium leading-none transition-all md:text-[96px]",
                  isActive
                    ? "text-accent"
                    : "text-foreground group-hover:scale-[1.03]"
                )}
              >
                {i + 1}
              </span>
              <span
                className={cn(
                  "font-sans text-sm font-semibold uppercase tracking-[0.14em] transition-colors md:text-base",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground group-hover:text-foreground"
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
        className="mt-12 grid grid-cols-1 gap-8 rounded-lg border border-border bg-background p-6 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500 md:mt-16 md:grid-cols-2 md:gap-12 md:p-10"
      >
        <div className="flex flex-col gap-6">
          <Heading level="block">{step.heading}</Heading>
          <p className="max-w-[60ch] text-[17px] leading-[1.6] text-foreground/85 lg:text-[18px] lg:leading-[1.65]">
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
