import Image from "next/image";
import { Heading } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { promise } from "@/lib/content";

export function Promise() {
  return (
    <Section
      id="promise"
      width="wide"
      background={
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/brand/how-we-work-crosssection.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      }
    >
      <div className="max-w-3xl text-white">
        <Heading level="section">
          {promise.heading.before}
          <span className="text-accent">
            {promise.heading.italic}
          </span>
          {promise.heading.after}
        </Heading>

        <div className="mt-12 flex flex-col gap-6 text-[17px] leading-[1.6] [text-shadow:0_2px_16px_rgba(0,0,0,0.55)] lg:text-[18px] lg:leading-[1.65]">
          {promise.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 80}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
