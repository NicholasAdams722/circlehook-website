import { Button } from "@/components/ui/button";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { hero } from "@/lib/content";
import { HeroCircuit } from "./HeroCircuit";

export function Hero() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "#contact";

  return (
    <Section
      id="top"
      width="wide"
      className="pt-20 md:pt-48"
      background={<HeroCircuit />}
    >
      <div className="md:max-w-[58%]">
        <Heading
          level="hero"
          className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300"
        >
          <span className="text-accent">{hero.headline.lead}</span>
          {hero.headline.rest}
        </Heading>
        <p className="mt-8 max-w-[65ch] text-[17px] leading-[1.6] text-foreground lg:text-[18px] lg:leading-[1.65]">
          {hero.subheadline}
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="h-11 bg-accent px-5 text-base text-accent-foreground hover:bg-accent/90"
          >
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              {hero.ctaLabel}
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
