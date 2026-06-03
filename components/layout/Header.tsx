"use client";

import { useEffect, useState, type SVGProps } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "What you get", href: "#what-you-get" },
  { label: "About", href: "#who" },
  { label: "Contact", href: "#contact" },
];

type IconProps = SVGProps<SVGSVGElement>;

function MenuIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-6 md:px-8">
        <a
          href="#top"
          onClick={() => setIsOpen(false)}
          className="font-display text-[1.3rem] font-medium tracking-tight text-foreground"
        >
          Circle Hook
        </a>

        <div className="flex items-center gap-3 md:gap-8">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
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
            onClick={() => setIsOpen(false)}
            className="inline-flex h-11 items-center rounded-md bg-accent px-4 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <span className="md:hidden">Quote</span>
            <span className="hidden md:inline">Get a Quote</span>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="flex size-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted md:hidden"
          >
            {isOpen ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out md:hidden",
          isOpen && "grid-rows-[1fr]"
        )}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile"
            className="border-t border-border/60 bg-background/95 backdrop-blur-md"
          >
            <ul className="flex flex-col px-6 py-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-4 text-lg text-foreground transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
