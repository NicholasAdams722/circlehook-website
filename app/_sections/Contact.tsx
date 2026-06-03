import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { contact } from "@/lib/content";

export function Contact() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
  const mailtoHref = `mailto:nick@circlehook.io?subject=${encodeURIComponent(
    contact.quickContact.emailSubject
  )}&body=${encodeURIComponent(contact.quickContact.emailBody)}`;

  return (
    <Section id="contact" width="prose">
      <Heading level="section">{contact.heading}</Heading>
      <p className="mt-6 max-w-[65ch] text-[17px] leading-[1.6] text-foreground lg:text-[18px] lg:leading-[1.65]">
        {contact.leadText}
      </p>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        {calendlyUrl && (
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            {contact.quickContact.scheduleLabel}
          </a>
        )}
        <a
          href={mailtoHref}
          className="inline-flex h-12 items-center justify-center rounded-md border border-foreground/30 px-6 text-base font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          {contact.quickContact.emailLabel}
        </a>
      </div>
    </Section>
  );
}
