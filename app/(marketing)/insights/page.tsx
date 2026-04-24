import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Writing on web design, AI search, and marketing strategy for financial advisory firms.",
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            From the studio
          </p>
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Insights
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Writing on web design, AI search, and marketing strategy for
              financial advisory firms.
            </p>
          </div>
        </div>
      </section>

      {/* Empty state */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder cards */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-4 border-t border-border pt-6">
                <div className="h-3 w-1/3 rounded bg-muted" aria-hidden="true" />
                <div className="h-5 w-full rounded bg-muted" aria-hidden="true" />
                <div className="h-5 w-4/5 rounded bg-muted" aria-hidden="true" />
                <div className="mt-1 h-3 w-full rounded bg-muted" aria-hidden="true" />
                <div className="h-3 w-2/3 rounded bg-muted" aria-hidden="true" />
              </div>
            ))}
          </div>
          <p className="mt-16 text-center text-sm text-muted-foreground">
            Posts coming soon.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
