import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { hero } from "@/lib/content";
import { HeroTicker } from "./HeroTicker";

export function Hero() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "#contact";

  return (
    <Section
      id="top"
      width="wide"
      className="pt-32 md:pt-48"
      background={<HeroTicker />}
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
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
        <div className="md:col-span-5">
          <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-full bg-muted ring-1 ring-border sm:w-64 md:ml-auto md:mr-0 md:w-full md:max-w-sm">
            <Image
              src="/headshot-nick.png"
              alt="Nick Adams, founder of Circle Hook"
              fill
              priority
              sizes="(max-width: 768px) 16rem, 24rem"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
