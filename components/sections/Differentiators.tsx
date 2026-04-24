export function Differentiators() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-16 text-xs font-semibold uppercase tracking-widest text-accent">
          How we work differently
        </p>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          {/* Differentiator 1: Direct Access */}
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              01
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              The person you email is the person writing the code.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              No account managers. No discovery-call handoffs. No offshore dev
              team behind the curtain. Circle Hook is founder-led: the person
              who sells the work is the person who builds it. This matters when
              something breaks at 4pm on a Friday before a big prospect meeting.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              This won&rsquo;t change. If and when we bring in contractors,
              it&rsquo;s disclosed up front, not hidden.
            </p>
          </div>

          {/* Differentiator 2: Compliance-Aware */}
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              02
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              We know the SEC Marketing Rule. You shouldn&rsquo;t have to
              explain it to your web agency.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We understand the regulatory environment advisors operate in:
              what &ldquo;fiduciary&rdquo; means as a term of art, what the
              Marketing Rule says about testimonials and endorsements, which
              widgets get flagged in a compliance audit. Your site won&rsquo;t
              be the reason your compliance officer calls you.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Built for FINRA and SEC oversight from day one. Not retrofitted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
