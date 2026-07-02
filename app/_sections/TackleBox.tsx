"use client";

import { useState, type CSSProperties, type SVGProps } from "react";
import { Heading } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { tackleBox } from "@/lib/content";
import { cn } from "@/lib/utils";

// Index in tackleBox.blocks → lure file name in public/brand/tackle/
// 0 Website Builders → clean pill spoon (off-the-shelf tool)
// 1 Custom Code → hand-tied starburst fly
// 2 Hand-Crafted Design → finned baitfish
// 3 Software Stack Integration → segmented spread-hook lure
// 4 CRM and Lead Management → round jig with treble
// 5 AI Integration → kraken / tentacle lure
const lureFiles = [
  "custom",
  "builder",
  "design",
  "stack",
  "crm",
  "ai",
] as const;

type LureIconProps = {
  src: string;
  className?: string;
};

function LureIcon({ src, className }: LureIconProps) {
  const style: CSSProperties = {
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
  };
  return <div aria-hidden="true" style={style} className={className} />;
}

function ChevronIcon(props: SVGProps<SVGSVGElement>) {
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

export function TackleBox() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="tackle-box" width="wide">
      <Heading level="section">
        {tackleBox.heading.before}
        <span className="text-accent">{tackleBox.heading.italic}</span>
        {tackleBox.heading.after}
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
        {tackleBox.blocks.map((block, i) => {
          const lureSrc = `/brand/tackle/lure-${lureFiles[i]}.png`;
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
                  <LureIcon
                    src={lureSrc}
                    className={cn(
                      "h-12 w-6 shrink-0 bg-foreground/70 transition-all duration-200",
                      "group-hover:scale-110 group-hover:bg-accent",
                      isOpen && "scale-110 bg-accent"
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
