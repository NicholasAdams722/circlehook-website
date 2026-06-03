import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { workflow } from "@/lib/content";

export function Process() {
  return (
    <Section id="process" width="wide" tone="muted">
      <Heading level="section">{workflow.heading}</Heading>
      <ol className="mt-12 grid list-none grid-cols-1 gap-10 md:mt-16 md:gap-14">
        {workflow.steps.map((step, i) => (
          <li
            key={step.heading}
            className="grid grid-cols-[auto_1fr] items-baseline gap-5 md:gap-10"
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
          </li>
        ))}
      </ol>
    </Section>
  );
}
