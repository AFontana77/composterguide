"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const reviewLinks = [
  { name: "Best Compost Bins", href: "/best-compost-bin" },
  { name: "Lomi Review", href: "/lomi-review" },
  { name: "Best Worm Composter", href: "/best-worm-composter" },
  { name: "Best Tumbler Composter", href: "/best-tumbler-composter" },
  { name: "Lomi vs FoodCycler", href: "/lomi-vs-vitamix-foodcycler" },
  { name: "Lomi vs Mill", href: "/lomi-vs-mill" },
];

const learnLinks = [
  { name: "How to Compost", href: "/how-to-compost" },
  { name: "Composting Basics", href: "/composting-basics" },
  { name: "Common Mistakes", href: "/composting-mistakes" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-primary-foreground" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <path d="M9 9h.01M15 9h.01"/>
              </svg>
            </div>
            <span className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              ComposterGuide
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <div className="relative group">
              <button className="px-1 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Reviews
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card rounded-lg shadow-lg border border-border p-2 min-w-[200px]">
                  {reviewLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="px-1 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Learn
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card rounded-lg shadow-lg border border-border p-2 min-w-[180px]">
                  {learnLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/about" className="px-1 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2 pb-1">Reviews</p>
            {reviewLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block px-2 py-2 text-sm text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors" onClick={() => setMobileOpen(false)}>
                {link.name}
              </Link>
            ))}
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2 pt-3 pb-1">Learn</p>
            {learnLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block px-2 py-2 text-sm text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors" onClick={() => setMobileOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Link href="/about" className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors" onClick={() => setMobileOpen(false)}>
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
