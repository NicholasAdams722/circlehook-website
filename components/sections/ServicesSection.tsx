import Link from "next/link";

const services = [
  {
    label: "Web Design",
    href: "/services/web-design",
    description:
      "Fast, beautiful, compliance-aware sites built on Next.js. The anchor service, and the one most advisory firms actually need.",
    hero: true,
  },
  {
    label: "AI Search Strategies",
    href: "/services/ai-search",
    description:
      "Get found in Google, ChatGPT, Perplexity, and AI Overviews. Traditional SEO and generative engine optimization, treated as one discipline.",
    hero: false,
  },
  {
    label: "Marketing Strategy",
    href: "/services/marketing-strategy",
    description:
      "Positioning, messaging, and conversion architecture for firms ready to grow beyond referrals.",
    hero: false,
  },
  {
    label: "App Development & Integrations",
    href: "/services/app-development",
    description:
      "Custom tools, client portals, and CRM integrations: Wealthbox, Redtail, Orion, HubSpot, and more.",
    hero: false,
  },
  {
    label: "Ongoing Support",
    href: "/services/support",
    description:
      "A retainer partner for firms that want someone they can actually reach when something needs to change.",
    hero: false,
  },
] as const;

export function ServicesSection() {
  const [heroService, ...otherServices] = services;

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Services
          </h2>
          <Link
            href="/services"
            className="hidden text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:block"
          >
            View all
          </Link>
        </div>

        {/* Grid — Web Design hero card full-width, 4 smaller cards below in 2×2 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Hero card */}
          <div className="col-span-1 flex flex-col overflow-hidden rounded-lg border border-border bg-card md:col-span-2">
            {/* TODO: Replace with next/image screenshot once client permission confirmed per AGENTS.md §20 */}
            <div className="aspect-[16/7] bg-muted" aria-hidden="true" />
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between md:p-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  {heroService.label}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {heroService.description}
                </p>
              </div>
              <Link
                href={heroService.href}
                className="shrink-0 text-sm font-medium text-accent underline-offset-4 hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Smaller cards */}
          {otherServices.map((service) => (
            <div
              key={service.href}
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-card"
            >
              {/* TODO: Replace with next/image screenshot once client permission confirmed per AGENTS.md §20 */}
              <div className="aspect-[4/3] bg-muted" aria-hidden="true" />
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {service.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <Link
                  href={service.href}
                  className="mt-4 w-fit text-sm font-medium text-accent underline-offset-4 hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
