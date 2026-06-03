"use client";

import { useState, type SVGProps } from "react";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { services } from "@/lib/content";
import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement>;

function WebsiteIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <circle cx="6.5" cy="6.5" r="0.4" fill="currentColor" />
      <circle cx="8.5" cy="6.5" r="0.4" fill="currentColor" />
      <circle cx="10.5" cy="6.5" r="0.4" fill="currentColor" />
    </svg>
  );
}

function SearchIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="10.5" cy="10.5" r="5.5" />
      <line x1="14.5" y1="14.5" x2="20" y2="20" />
      <path
        d="M10.5 7.5 L11 9 L12.5 9.5 L11 10 L10.5 11.5 L10 10 L8.5 9.5 L10 9 Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function AppIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <line x1="6" y1="6" x2="18" y2="6" />
      <line x1="6" y1="18" x2="18" y2="18" />
      <path d="M10.5 10.5 L9 12 L10.5 13.5" />
      <path d="M13.5 10.5 L15 12 L13.5 13.5" />
    </svg>
  );
}

function PaletteIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3 C 7 3 3 7 3 12 C 3 14.5 5 16 7 16 L 9 16 L 9 18 C 9 19.5 10 20 11 20 C 13 20 14 18 14 16 L 17 16 C 19.5 16 21 14 21 12 C 21 7 17 3 12 3 Z" />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ChevronIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 8 L10 13 L15 8" />
    </svg>
  );
}

const icons = [WebsiteIcon, SearchIcon, AppIcon, PaletteIcon];

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="services" width="wide" tone="muted">
      <Heading level="section">{services.heading}</Heading>
      <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
        {services.blocks.map((block, i) => {
          const Icon = icons[i];
          const isOpen = openIndex === i;
          return (
            <button
              key={block.heading}
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={cn(
                "group flex flex-col rounded-lg border border-border bg-background p-6 text-left transition-colors duration-200",
                "hover:border-accent focus-visible:border-accent focus-visible:outline-none",
                isOpen && "border-accent"
              )}
            >
              <div className="flex items-center gap-4">
                <Icon
                  className={cn(
                    "size-7 shrink-0 text-foreground/70 transition-all duration-200",
                    "group-hover:scale-110 group-hover:text-accent",
                    isOpen && "scale-110 text-accent"
                  )}
                />
                <span className="flex-1 font-sans text-[18px] font-semibold leading-[1.3] text-foreground lg:text-[20px]">
                  {block.heading}
                </span>
                <ChevronIcon
                  className={cn(
                    "size-5 shrink-0 text-foreground/60 transition-all duration-200",
                    "group-hover:text-foreground",
                    isOpen && "rotate-180 text-foreground"
                  )}
                />
              </div>

              <div
                className={cn(
                  "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out",
                  isOpen && "grid-rows-[1fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p
                    className={cn(
                      "pt-4 text-[16px] leading-[1.6] text-foreground/85 transition-opacity duration-200 lg:text-[17px]",
                      isOpen ? "opacity-100" : "opacity-0"
                    )}
                  >
                    {block.body}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}
