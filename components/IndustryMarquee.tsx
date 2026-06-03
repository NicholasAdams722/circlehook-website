import { industries } from "@/lib/content";

function MarqueeRow() {
  return (
    <ul
      className="flex items-center gap-12 px-6 text-base font-medium text-foreground/70 md:text-lg"
      aria-hidden="true"
    >
      {industries.map((item, i) => (
        <li key={i} className="flex shrink-0 items-center gap-12 whitespace-nowrap">
          <span>{item}</span>
          <span className="text-accent" aria-hidden="true">
            ·
          </span>
        </li>
      ))}
    </ul>
  );
}

export function IndustryMarquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-border/60 bg-muted py-5"
      aria-label="Industries served"
    >
      <div className="inline-flex motion-safe:animate-[ticker-drift_50s_linear_infinite]">
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  );
}
