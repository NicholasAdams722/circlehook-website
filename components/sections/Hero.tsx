import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-8 pb-12 md:pt-10 md:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-5xl">
          <p
            className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700"
            style={{ animationFillMode: "both" }}
          >
            Nashville · Nationwide
          </p>
          <h1
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700"
            style={{ animationDelay: "75ms", animationFillMode: "both" }}
          >
            Most RIA websites look like they were built in 2014. Yours
            doesn&rsquo;t have to.
          </h1>
          <p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700"
            style={{ animationDelay: "200ms", animationFillMode: "both" }}
          >
            Circle Hook designs and builds modern, compliance-aware websites for
            RIAs, wealth management firms, and the firms that serve them. You
            work directly with the person who builds it. No account managers,
            no handoffs.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700"
            style={{ animationDelay: "325ms", animationFillMode: "both" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent/50"
            >
              <Link href="/contact">Start a conversation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/work">See the work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
