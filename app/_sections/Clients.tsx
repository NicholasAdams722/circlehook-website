import Image from "next/image";
import { Heading } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { clients } from "@/lib/content";
import { cn } from "@/lib/utils";

// Fixed rotation classes so each polaroid feels hand-pinned rather than aligned.
// Repeats after 6 so any number of polaroids gets a plausible pattern.
const rotations = [
  "-rotate-[4deg]",
  "rotate-[3deg]",
  "-rotate-[2deg]",
  "rotate-[5deg]",
  "-rotate-[3deg]",
  "rotate-[2deg]",
];

export function Clients() {
  return (
    <Section id="clients" width="wide" tone="muted">
      <Heading level="section">
        {clients.heading.before}
        <span className="text-accent">{clients.heading.italic}</span>
        {clients.heading.after}
      </Heading>

      <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.6] text-foreground/85 lg:text-[18px] lg:leading-[1.65]">
        {clients.intro}
      </p>

      <div className="mt-14 flex flex-wrap items-start justify-center gap-6 md:mt-20 md:gap-10">
        {clients.featured.map((client, i) => {
          const rotation = rotations[i % rotations.length];
          const content = (
            <div
              className={cn(
                "group relative block w-[220px] shrink-0 bg-[#F5F1E8] p-3 pb-8 shadow-[0_10px_24px_-8px_rgba(0,0,0,0.55)]",
                "transition-all duration-300 ease-out",
                "hover:z-10 hover:!rotate-0 hover:scale-[1.04] hover:shadow-[0_18px_36px_-10px_rgba(0,0,0,0.6)]",
                rotation
              )}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#E4D1B0]">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  sizes="220px"
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-3 px-1 text-center">
                <p className="font-display text-[16px] italic leading-tight text-[#2A1E19]">
                  {client.name}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5A473C]">
                  {client.sector}
                </p>
              </div>
              {client.description && (
                <div className="pointer-events-none absolute inset-x-0 bottom-full mb-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <p className="mx-auto max-w-[240px] rounded-md bg-background/95 px-3 py-2 text-center text-[13px] leading-[1.4] text-foreground shadow-lg">
                    {client.description}
                  </p>
                </div>
              )}
            </div>
          );
          return (
            <Reveal key={`${client.name}-${i}`} delay={i * 80}>
              {client.href ? (
                <a
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={client.name}
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
