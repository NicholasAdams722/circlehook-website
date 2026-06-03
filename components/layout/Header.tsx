const navItems = [
  { label: "Services", href: "#services" },
  { label: "What you get", href: "#what-you-get" },
  { label: "About", href: "#who" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-8">
        <a
          href="#top"
          className="font-display text-[1.3rem] font-medium tracking-tight text-foreground"
        >
          Circle Hook
        </a>

        <div className="flex items-center gap-6 md:gap-8">
          <nav aria-label="Primary">
            <ul className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[1.138rem] text-foreground/75 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-md bg-accent px-4 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
