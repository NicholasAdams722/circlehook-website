import { Heading } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { philosophy } from "@/lib/content";

export function Philosophy() {
  return (
    <Section id="philosophy" width="prose">
      <Heading level="section">
        {philosophy.heading.before}
        <span className="text-accent">
          {philosophy.heading.italic}
        </span>
        {philosophy.heading.after}
      </Heading>

      <div className="mt-12 flex flex-col gap-6 text-[17px] leading-[1.6] text-foreground lg:text-[18px] lg:leading-[1.65]">
        {philosophy.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={i * 80}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
