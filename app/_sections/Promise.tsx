import { Heading } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { promise } from "@/lib/content";

export function Promise() {
  return (
    <Section id="promise" width="prose" tone="muted">
      <Heading level="section">
        {promise.heading.before}
        <span className="text-accent">
          {promise.heading.italic}
        </span>
        {promise.heading.after}
      </Heading>

      <div className="mt-12 flex flex-col gap-6 text-[17px] leading-[1.6] text-foreground lg:text-[18px] lg:leading-[1.65]">
        {promise.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={i * 80}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
