import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Circle Hook. Tell us about your firm and what your current site isn't doing.",
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: copy */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
              Get in touch
            </p>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Let&rsquo;s talk about your site.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Send a message and we&rsquo;ll take a look at what you have before
              we talk. A 20-minute call is usually enough to know whether
              there&rsquo;s a fit.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Typical response time: one business day.
            </p>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
