import Image from "next/image";
import { Section } from "@/components/Section";
import { Flourish } from "@/components/brand/Flourish";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <Section
      as="footer"
      width="prose"
      className="border-t border-border py-12 text-sm text-muted-foreground md:py-16"
    >
      <div className="flex flex-col items-start gap-6">
        <Image
          src="/brand/circle-hook-wordmark.png"
          alt="Circle Hook"
          width={800}
          height={445}
          className="h-14 w-auto opacity-85"
        />
        <p className="font-display text-[18px] italic text-foreground/85 lg:text-[20px]">
          {footer.tagline}
        </p>
        <div className="flex flex-col gap-1">
          <p>{footer.lines[0]}</p>
          <p>
            <a
              href={`mailto:${footer.email}`}
              className="transition-colors hover:text-foreground"
            >
              {footer.email}
            </a>
          </p>
          <p>{footer.lines[2]}</p>
        </div>
        <Flourish className="mt-2 h-3 w-32 text-foreground/60" />
      </div>
    </Section>
  );
}
