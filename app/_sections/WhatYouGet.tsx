import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { whatYouGet } from "@/lib/content";

export function WhatYouGet() {
  return (
    <Section id="approach" width="wide">
      <Heading level="section">{whatYouGet.heading}</Heading>
      <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-2 md:gap-16">
        {whatYouGet.blocks.map((block) => (
          <div key={block.heading}>
            <Heading level="block">{block.heading}</Heading>
            <p className="mt-3 max-w-[60ch] text-[17px] leading-[1.6] text-foreground lg:text-[18px] lg:leading-[1.65]">
              {block.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
