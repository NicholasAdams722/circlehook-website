"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const desktopNavLinks = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "AI Search", href: "/services/ai-search" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
] as const;

const mobileServiceLinks = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "AI Search Strategies", href: "/services/ai-search" },
  { label: "Marketing Strategy", href: "/services/marketing-strategy" },
  { label: "App Development", href: "/services/app-development" },
  { label: "Ongoing Support", href: "/services/support" },
] as const;

const mobileTopLinks = [
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-background"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-xl font-bold text-foreground rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Circle Hook
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {desktopNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent/50"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open navigation menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 5h16M2 10h16M2 15h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-full sm:max-w-full p-0 bg-background"
            showCloseButton={false}
          >
            {/* Accessible title, visually hidden */}
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>

            <div className="flex h-full flex-col">
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-border shrink-0">
                <Link
                  href="/"
                  className="font-display text-xl font-bold text-foreground rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={close}
                >
                  Circle Hook
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={close}
                  aria-label="Close navigation menu"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 4l12 12M16 4L4 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </Button>
              </div>

              {/* Drawer nav — services expanded, then other links */}
              <nav
                className="flex flex-col flex-1 overflow-y-auto px-6 py-8"
                aria-label="Mobile navigation"
              >
                {/* Services section — always expanded */}
                <div className="mb-10">
                  <Link
                    href="/services"
                    className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5 hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={close}
                  >
                    Services
                  </Link>
                  <ul className="flex flex-col gap-5">
                    {mobileServiceLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-2xl font-display font-bold text-foreground hover:text-accent transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          onClick={close}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Other top-level links */}
                <ul className="flex flex-col gap-6">
                  {mobileTopLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-2xl font-display font-bold text-foreground hover:text-accent transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        onClick={close}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Drawer footer — Contact CTA */}
              <div className="px-6 py-6 border-t border-border shrink-0">
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent/50"
                >
                  <Link href="/contact" onClick={close}>
                    Contact
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
