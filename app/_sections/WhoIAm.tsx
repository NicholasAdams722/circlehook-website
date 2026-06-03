import Image from "next/image";
import { Heading } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { whoIAm } from "@/lib/content";

export function WhoIAm() {
  return (
    <Section id="who" width="prose" tone="muted">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
        <div className="relative size-40 shrink-0 overflow-hidden rounded-full bg-muted ring-1 ring-border md:size-48">
          <Image
            src="/headshot-nick.png"
            alt="Nick Adams, founder of Circle Hook"
            fill
            sizes="(max-width: 768px) 10rem, 12rem"
            className="object-cover"
          />
        </div>
        <Heading level="section">{whoIAm.heading}</Heading>
      </div>

      <div className="mt-12 flex flex-col gap-6 text-[17px] leading-[1.6] text-foreground lg:text-[18px] lg:leading-[1.65]">
        {whoIAm.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={i * 100}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={whoIAm.paragraphs.length * 100} className="mt-10">
        <div className="rounded-lg border-l-4 border-accent bg-background p-6 md:p-8">
          <h3 className="font-display text-[20px] font-medium text-foreground lg:text-[24px]">
            {whoIAm.promise.heading}
          </h3>
          <p className="mt-3 text-[17px] leading-[1.6] text-foreground lg:text-[18px] lg:leading-[1.65]">
            {whoIAm.promise.body}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
