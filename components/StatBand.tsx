import { type SVGProps } from "react";
import { Reveal } from "./Reveal";
import { stats } from "@/lib/content";

type IconProps = SVGProps<SVGSVGElement>;

function BoltIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M13 2 L4 14 L11 14 L10 22 L20 9 L13 9 Z" />
    </svg>
  );
}

function CalendarIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </svg>
  );
}

function ChatIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 5 L20 5 L20 16 L13 16 L9 20 L9 16 L4 16 Z" />
    </svg>
  );
}

const icons = [BoltIcon, CalendarIcon, ChatIcon];

export function StatBand() {
  return (
    <section className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
        {stats.map((stat, i) => {
          const Icon = icons[i];
          return (
            <Reveal
              key={stat.label}
              delay={i * 120}
              className="flex flex-col items-center text-center"
            >
              <Icon className="size-9 text-accent/80 md:size-10" />
              <div className="mt-5 font-display text-5xl font-medium leading-none tracking-tight text-accent md:text-6xl lg:text-7xl">
                {stat.value}
              </div>
              <div className="mt-3 text-base text-foreground/80 md:text-lg">
                {stat.label}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
