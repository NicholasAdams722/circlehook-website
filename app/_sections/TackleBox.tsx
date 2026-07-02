"use client";

import { useState, type SVGProps } from "react";
import { Heading } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { tackleBox } from "@/lib/content";
import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement>;

function BuilderIcon(props: IconProps) {
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

function CodeIcon(props: IconProps) {
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
      <path d="M8 6 L2 12 L8 18" />
      <path d="M16 6 L22 12 L16 18" />
      <line x1="13.5" y1="4" x2="10.5" y2="20" />
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

function StackIcon(props: IconProps) {
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
      <path d="M12 3 L21 7.5 L12 12 L3 7.5 Z" />
      <path d="M3 12 L12 16.5 L21 12" />
      <path d="M3 16.5 L12 21 L21 16.5" />
    </svg>
  );
}

function UsersIcon(props: IconProps) {
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
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20 C 3 16 6 14 9 14 C 12 14 15 16 15 20" />
      <circle cx="17" cy="9.5" r="2.5" />
      <path d="M15 14.5 C 18 14.5 21 16 21 20" />
    </svg>
  );
}

function SparkleIcon(props: IconProps) {
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
      <path d="M12 3 L13.5 9.5 L20 11 L13.5 12.5 L12 19 L10.5 12.5 L4 11 L10.5 9.5 Z" />
      <path d="M19 3 L19.7 5 L21.5 5.5 L19.7 6 L19 8 L18.3 6 L16.5 5.5 L18.3 5 Z" />
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

const icons = [
  BuilderIcon,
  CodeIcon,
  PaletteIcon,
  StackIcon,
  UsersIcon,
  SparkleIcon,
];

export function TackleBox() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="tackle-box" width="wide">
      <Heading level="section">
        {tackleBox.heading.before}
        <span className="text-accent">
          {tackleBox.heading.italic}
        </span>
        {tackleBox.heading.after}
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
        {tackleBox.blocks.map((block, i) => {
          const Icon = icons[i];
          const isOpen = openIndex === i;
          return (
            <Reveal key={block.heading} delay={i * 80}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={cn(
                  "group flex w-full flex-col rounded-lg border border-border bg-card p-6 text-left transition-colors duration-200",
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
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
