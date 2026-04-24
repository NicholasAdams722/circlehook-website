import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ServicePageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function ServicePageHero({
  eyebrow,
  title,
  description,
}: ServicePageHeroProps) {
  return (
    <section className="pt-8 pb-20 md:pt-12 md:pb-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p
          className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500"
          style={{ animationFillMode: "both" }}
        >
          {eyebrow}
        </p>
        <div className="max-w-4xl">
          <h1
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700"
            style={{ animationDelay: "75ms", animationFillMode: "both" }}
          >
            {title}
          </h1>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700"
            style={{ animationDelay: "175ms", animationFillMode: "both" }}
          >
            {description}
          </p>
          <div
            className="mt-8 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700"
            style={{ animationDelay: "275ms", animationFillMode: "both" }}
          >
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
