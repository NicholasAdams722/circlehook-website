import { AnimateIn } from "@/components/ui/AnimateIn";

interface ServiceAudienceProps {
  children: React.ReactNode;
}

export function ServiceAudience({ children }: ServiceAudienceProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateIn>
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent">
            Who it&rsquo;s for
          </p>
        </AnimateIn>
        <AnimateIn delay={75}>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {children}
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
