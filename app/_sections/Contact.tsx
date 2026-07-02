import { Heading } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Flourish } from "@/components/brand/Flourish";
import { contact } from "@/lib/content";

export function Contact() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
  const mailtoHref = `mailto:nick@circlehook.io?subject=${encodeURIComponent(
    contact.quickContact.emailSubject
  )}&body=${encodeURIComponent(contact.quickContact.emailBody)}`;

  return (
    <Section id="contact" width="prose">
      <Reveal>
        <Flourish className="mb-6 h-3 w-32 text-accent/80" />
        <Heading level="section">
          {contact.heading.before}
          <span className="text-accent">
            {contact.heading.italic}
          </span>
          {contact.heading.after}
        </Heading>
        <p className="mt-6 max-w-[65ch] text-[17px] leading-[1.6] text-foreground lg:text-[18px] lg:leading-[1.65]">
          {contact.leadText}
        </p>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          {calendlyUrl && (
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              {contact.quickContact.scheduleLabel}
            </a>
          )}
          <a
            href={mailtoHref}
            className="inline-flex h-12 items-center justify-center rounded-md border border-foreground/60 px-6 text-base font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {contact.quickContact.emailLabel}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
