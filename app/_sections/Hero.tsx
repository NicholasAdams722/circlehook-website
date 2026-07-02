import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <Section
      id="top"
      width="wide"
      className="overflow-hidden pt-16 md:min-h-screen md:pt-24"
      background={
        <>
          <div aria-hidden="true" className="absolute inset-0">
            <Image
              src="/brand/hero-boat.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-transparent md:from-black/65 md:via-black/25 md:to-transparent"
          />
        </>
      }
    >
      <div className="md:max-w-[48%]">
        <Heading
          level="hero"
          className="text-[32px] leading-[1.1] [text-shadow:0_2px_16px_rgba(0,0,0,0.55)] lg:text-[48px] lg:leading-[1.05] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-700 motion-safe:[animation-delay:80ms] motion-safe:[animation-fill-mode:both]"
        >
          {hero.headline.before}
          <span className="text-accent [filter:drop-shadow(0_2px_16px_rgba(0,0,0,0.55))]">
            {hero.headline.italic}
          </span>
          {hero.headline.after}
        </Heading>

        <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.6] text-foreground/90 [text-shadow:0_2px_16px_rgba(0,0,0,0.55)] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 motion-safe:duration-700 motion-safe:[animation-delay:220ms] motion-safe:[animation-fill-mode:both] lg:text-[16px] lg:leading-[1.6]">
          {hero.subheadline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 motion-safe:duration-700 motion-safe:[animation-delay:360ms] motion-safe:[animation-fill-mode:both]">
          <Button
            asChild
            size="lg"
            className="h-11 bg-accent px-5 text-base text-accent-foreground shadow-[0_8px_30px_-12px_#E89060] transition-all hover:opacity-90 hover:shadow-[0_12px_40px_-12px_#E89060]"
          >
            <a href={hero.ctaHref}>{hero.ctaLabel}</a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
