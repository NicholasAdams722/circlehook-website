import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Circle Hook is a founder-led web studio built for financial advisory firms. One person. Your site. No handoffs.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            About
          </p>
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
              One person. Your site. No handoffs.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Circle Hook is a founder-led web studio specializing in financial
              advisory firms. Nicholas Adams started it because most RIAs and
              wealth management practices deserve better than what the market
              offers them — and because the category has a problem that more
              account managers won&rsquo;t fix.
            </p>
          </div>
        </div>
      </section>

      {/* The model */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
                How we work
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
                The person who sells the work is the person who builds it.
              </h2>
            </div>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                When you email Circle Hook, you&rsquo;re emailing Nicholas
                Adams. When something needs to be fixed on a Friday afternoon
                before a prospect meeting, Nicholas Adams fixes it. There is no
                account manager between you and the person responsible for your
                site.
              </p>
              <p>
                This model is intentional and it won&rsquo;t change. If and
                when contractors are brought in on a project, it&rsquo;s
                disclosed up front, not after the contract is signed. The
                accountability stays the same regardless.
              </p>
              <p>
                Fixed-scope, fixed-price engagements where possible. No
                surprise invoices for scope that should have been in the
                original brief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The niche */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
                The niche
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
                We only build for the financial advisory ecosystem.
              </h2>
            </div>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Registered Investment Advisors, independent wealth management
                firms, insurance and annuity brokerages, and the firms that
                serve them. This is the whole focus. Circle Hook takes select
                work outside the niche when the project and fit are right, but
                financial advisory is where we specialize and where our
                knowledge compounds.
              </p>
              <p>
                That focus matters because the category has specific
                requirements that a generalist agency learns on your dime. The
                SEC Marketing Rule governs how testimonials and endorsements can
                appear on an advisor&rsquo;s site. &ldquo;Fiduciary&rdquo; is a
                term of art that carries regulatory weight. Certain performance
                language — even seemingly innocuous phrases — can trigger a
                compliance review.
              </p>
              <p>
                Circle Hook knows these rules. You shouldn&rsquo;t have to
                explain them to your web agency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nashville */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
              Location
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Nashville-based. Nationally available.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Circle Hook is based in Nashville, Tennessee and works with firms
              across the country. Every engagement is remote-friendly by design.
              If you&rsquo;re local and want to meet in person, that&rsquo;s an
              option too.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent/50"
              >
                <Link href="/contact">Start a conversation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
