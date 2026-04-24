import Link from "next/link";

const serviceLinks = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "AI Search Strategies", href: "/services/ai-search" },
  { label: "Marketing Strategy", href: "/services/marketing-strategy" },
  { label: "App Development", href: "/services/app-development" },
  { label: "Ongoing Support", href: "/services/support" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: Wordmark + tagline */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-display text-xl font-bold text-foreground hover:text-accent transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring w-fit"
            >
              Circle Hook
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Websites for wealth advisors, brokerages, and the firms that serve them.
            </p>
            {/* TODO: social icons */}
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Company
            </p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <hr className="mt-12 border-border" />
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2026 Circle Hook LLC</p>
          <nav aria-label="Legal navigation" className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Terms
            </Link>
            <Link
              href="/accessibility"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Accessibility
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
