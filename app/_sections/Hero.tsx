import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { hero } from "@/lib/content";
import { HeroTicker } from "./HeroTicker";

function SwirlyArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M 40 44 C 40 34 28 34 30 26 C 32 20 42 21 38 14 C 33 8 22 10 18 4" />
      <path d="M 18 4 L 24 7" />
      <path d="M 18 4 L 20 10" />
    </svg>
  );
}

export function Hero() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "#contact";

  return (
    <Section
      id="top"
      width="wide"
      className="pt-20 md:pt-48"
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
          <div className="w-[9.35rem] sm:w-[11.9rem] md:ml-auto md:mr-0 md:w-full md:max-w-[20.4rem]">
            <div className="relative aspect-square w-full overflow-hidden rounded-full bg-muted ring-1 ring-border">
              <Image
                src="/headshot-nick.png"
                alt="Nick Adams, founder of Circle Hook"
                fill
                priority
                sizes="(max-width: 640px) 9.35rem, (max-width: 768px) 11.9rem, 20.4rem"
                className="object-cover"
              />
            </div>
            <a
              href="#who"
              className="mt-3 flex items-center gap-2 text-sm italic text-foreground/60 transition-colors hover:text-accent md:justify-end"
            >
              <span>who is this guy?</span>
              <SwirlyArrow className="size-7" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
