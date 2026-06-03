import { cn } from "@/lib/utils";

type Width = "prose" | "wide";
type Tone = "default" | "muted";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  width?: Width;
  tone?: Tone;
  id?: string;
  as?: "section" | "footer";
  background?: React.ReactNode;
}

const widthClass: Record<Width, string> = {
  prose: "max-w-3xl",
  wide: "max-w-5xl",
};

const toneClass: Record<Tone, string> = {
  default: "bg-background",
  muted: "bg-muted",
};

export function Section({
  children,
  className,
  innerClassName,
  width = "prose",
  tone = "default",
  id,
  as: Tag = "section",
  background,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative px-6 py-24 md:px-8 md:py-32",
        toneClass[tone],
        className
      )}
    >
      {background}
      <div
        className={cn("relative mx-auto", widthClass[width], innerClassName)}
      >
        {children}
      </div>
    </Tag>
  );
}
