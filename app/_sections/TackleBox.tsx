import Image from "next/image";
import type { CSSProperties } from "react";
import { Heading } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { tackleBox } from "@/lib/content";

// Index in tackleBox.blocks → lure file name in public/brand/tackle/
// 0 Marketing Websites → clean pill spoon
// 1 Custom Internal Applications → hand-tied starburst fly
// 2 Lead and Conversion CRM → finned baitfish
// 3 Content Management (Sanity) → segmented spread-hook lure
// 4 Software Stack Integration → round jig with treble
// 5 AI Where It Earns Its Keep → kraken / tentacle lure
const lureFiles = [
  "custom",
  "builder",
  "design",
  "stack",
  "crm",
  "ai",
] as const;

type LureIconProps = {
  src: string;
  className?: string;
};

function LureIcon({ src, className }: LureIconProps) {
  const style: CSSProperties = {
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
  };
  return <div aria-hidden="true" style={style} className={className} />;
}

export function TackleBox() {
  return (
    <Section id="tackle-box" width="wide">
      <Heading level="section">
        {tackleBox.heading.before}
        <span className="text-accent">{tackleBox.heading.italic}</span>
        {tackleBox.heading.after}
      </Heading>

      <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-2 md:gap-16">
        <div className="md:sticky md:top-24 md:self-start">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg ring-1 ring-border">
            <Image
              src="/brand/hero-boat.png"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <ul className="flex flex-col gap-10">
          {tackleBox.blocks.map((block, i) => {
            const lureSrc = `/brand/tackle/lure-${lureFiles[i]}.png`;
            return (
              <li key={block.heading}>
                <Reveal delay={i * 60}>
                  <div className="flex items-start gap-4">
                    <LureIcon
                      src={lureSrc}
                      className="mt-1 h-10 w-5 shrink-0 bg-accent"
                    />
                    <div className="flex-1">
                      <Heading level="block">{block.heading}</Heading>
                      <p className="mt-3 text-[16px] leading-[1.6] text-foreground/85 lg:text-[17px]">
                        {block.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
