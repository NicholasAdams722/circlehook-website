const anchorItems = [
  "Registered Investment Advisors (RIAs)",
  "Independent wealth management firms",
  "Insurance & annuity brokerages",
] as const;

const otherCategories = [
  {
    label: "CFPs & Fee-Only Planners",
    description:
      "Independent planners who need a site that communicates fiduciary clarity without the baggage of a broker-dealer template.",
  },
  {
    label: "Multi-Family Offices",
    description:
      "Ultra-high-net-worth service providers who need design to match the expectations of their client base.",
  },
  {
    label: "Select work outside the niche",
    description:
      "We take on work outside the advisory ecosystem when the project and fit are right. Ask.",
  },
] as const;

export function Industries() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Featured: Financial advisory */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
              Who we work with
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
              We only work with advisors, brokerages, and the firms that serve
              them.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              It&rsquo;s the whole reason we exist. Registered Investment
              Advisors, independent wealth management firms, insurance and
              annuity brokerages. Firms operating in a category dominated by
              dated templates and broker-dealer cookie-cutter sites.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {anchorItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="h-px w-5 shrink-0 bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Other categories */}
          <div className="flex flex-col justify-center">
            {otherCategories.map((category) => (
              <div
                key={category.label}
                className="border-t border-border py-8 first:border-t-0 first:pt-0"
              >
                <h3 className="font-display text-lg font-bold text-foreground">
                  {category.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
