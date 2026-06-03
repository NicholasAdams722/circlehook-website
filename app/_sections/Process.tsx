import { Heading } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { workflow } from "@/lib/content";

export function Process() {
  return (
    <Section id="process" width="wide" tone="muted">
      <Heading level="section">{workflow.heading}</Heading>
      <div
        role="list"
        className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:gap-6"
      >
        {workflow.steps.map((step, i) => (
          <Reveal key={step.heading} delay={i * 100}>
            <div
              role="listitem"
              className="grid grid-cols-[auto_1fr] items-baseline gap-5 rounded-lg border border-border bg-background p-6 transition-colors duration-200 hover:border-accent md:gap-10 md:p-8"
            >
              <div className="font-display text-4xl font-medium text-accent md:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <Heading level="block">{step.heading}</Heading>
                <p className="mt-3 max-w-[60ch] text-[17px] leading-[1.6] text-foreground lg:text-[18px] lg:leading-[1.65]">
                  {step.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
