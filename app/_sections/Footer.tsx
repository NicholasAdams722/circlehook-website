import { Section } from "@/components/Section";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <Section
      as="footer"
      width="prose"
      className="border-t border-border py-12 text-sm text-muted-foreground md:py-16"
    >
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
    </Section>
  );
}
