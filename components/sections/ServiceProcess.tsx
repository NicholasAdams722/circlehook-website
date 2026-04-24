import { AnimateIn } from "@/components/ui/AnimateIn";

interface Step {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: Step[];
}

export function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section className="py-16 md:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateIn>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            How it works
          </h2>
        </AnimateIn>

        <div className="mt-12">
          {steps.map((step, i) => (
            <AnimateIn key={step.title} delay={i * 100}>
              <div className="border-t border-border py-10 grid grid-cols-1 gap-6 md:grid-cols-[8rem_1fr] md:gap-12">
                <p className="font-display text-8xl font-bold leading-none text-border select-none">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="flex flex-col justify-center">
                  <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
