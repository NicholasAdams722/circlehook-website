import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { whoIAm } from "@/lib/content";

export function WhoIAm() {
  return (
    <Section id="who" width="prose" tone="muted">
      <Heading level="section">{whoIAm.heading}</Heading>
      <div className="mt-12 flex flex-col gap-6 text-[17px] leading-[1.6] text-foreground lg:text-[18px] lg:leading-[1.65]">
        {whoIAm.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
