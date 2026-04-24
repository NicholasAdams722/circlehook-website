import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and selected work from Circle Hook. Websites built for wealth advisors and financial advisory firms.",
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Selected work
          </p>
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Work
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Case studies from financial advisory firms, brokerages, and select
              clients outside the niche.
            </p>
          </div>
        </div>
      </section>

      {/* Empty state */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder cards */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="aspect-[4/3] bg-muted" aria-hidden="true" />
                <div className="p-6">
                  <div className="h-4 w-3/4 rounded bg-muted" aria-hidden="true" />
                  <div className="mt-3 h-3 w-full rounded bg-muted" aria-hidden="true" />
                  <div className="mt-2 h-3 w-2/3 rounded bg-muted" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted-foreground">
            Case studies are being prepared. Check back soon.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
