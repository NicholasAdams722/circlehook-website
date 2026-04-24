import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="border-t border-border bg-foreground py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-bold leading-tight text-background md:text-6xl">
            Most firms know their site isn&rsquo;t doing the work it should.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/70">
            Let&rsquo;s look at it. A 20-minute conversation is usually enough
            to know whether there&rsquo;s a fit.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent/50"
            >
              <Link href="/contact">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
