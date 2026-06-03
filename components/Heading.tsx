import { cn } from "@/lib/utils";

type Level = "hero" | "section" | "block";
type Tag = "h1" | "h2" | "h3";

interface HeadingProps {
  level: Level;
  as?: Tag;
  children: React.ReactNode;
  className?: string;
}

const defaultTag: Record<Level, Tag> = {
  hero: "h1",
  section: "h2",
  block: "h3",
};

const styles: Record<Level, string> = {
  hero:
    "font-display font-medium tracking-tight text-[40px] leading-[1.1] lg:text-[64px] lg:leading-[1.05]",
  section:
    "font-display font-medium tracking-tight text-[28px] leading-[1.2] lg:text-[40px] lg:leading-[1.15]",
  block: "font-sans font-semibold text-[18px] leading-[1.3] lg:text-[20px]",
};

export function Heading({ level, as, children, className }: HeadingProps) {
  const Tag = as ?? defaultTag[level];
  return <Tag className={cn(styles[level], className)}>{children}</Tag>;
}
