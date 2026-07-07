import { Heading } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { problem } from "@/lib/content";

export function Problem() {
  return (
    <Section id="problem" width="wide">
      <div className="max-w-3xl">
        <Heading level="section">
          {problem.heading.before}
          <span className="text-accent">
            {problem.heading.italic}
          </span>
          {problem.heading.after}
        </Heading>

        <div className="mt-12 flex flex-col gap-6 text-[17px] leading-[1.6] text-foreground lg:text-[18px] lg:leading-[1.65]">
          {problem.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 80}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
