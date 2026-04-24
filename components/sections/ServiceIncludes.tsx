import { AnimateIn } from "@/components/ui/AnimateIn";

interface ServiceIncludesProps {
  items: string[];
}

export function ServiceIncludes({ items }: ServiceIncludesProps) {
  return (
    <section className="py-16 md:py-24 bg-muted border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateIn>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            What&rsquo;s included
          </h2>
        </AnimateIn>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((item, i) => (
            <li key={item}>
              <AnimateIn
                delay={i * 55}
                className="flex items-center gap-4 rounded-lg border border-border bg-background px-5 py-4 text-sm font-medium text-foreground"
              >
                <span
                  className="h-px w-4 shrink-0 bg-accent"
                  aria-hidden="true"
                />
                {item}
              </AnimateIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
