import { cn } from "@/lib/utils";

type Width = "prose" | "wide";
type Tone = "default" | "muted";
type Belly = "top" | "bottom" | false;

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  width?: Width;
  tone?: Tone;
  id?: string;
  as?: "section" | "footer";
  background?: React.ReactNode;
  belly?: Belly;
}

const widthClass: Record<Width, string> = {
  prose: "max-w-3xl",
  wide: "max-w-5xl",
};

const toneClass: Record<Tone, string> = {
  default: "",
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
  belly = "bottom",
}: SectionProps) {
  const clipId =
    belly === "top"
      ? "section-top-belly-clip"
      : belly === "bottom"
        ? "section-belly-clip"
        : null;

  return (
    <Tag
      id={id}
      style={clipId ? { clipPath: `url(#${clipId})` } : undefined}
      className={cn(
        "relative px-6 py-20 md:px-8 md:py-32",
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
