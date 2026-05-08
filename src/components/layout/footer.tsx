import Link from "next/link";

const reviewLinks = [
  { name: "Best Compost Bins", href: "/best-compost-bin" },
  { name: "Lomi Composter Review", href: "/lomi-review" },
  { name: "Best Worm Composter", href: "/best-worm-composter" },
  { name: "Best Tumbler Composter", href: "/best-tumbler-composter" },
  { name: "Lomi vs FoodCycler", href: "/lomi-vs-vitamix-foodcycler" },
];

const learnLinks = [
  { name: "How to Compost", href: "/how-to-compost" },
  { name: "Composting Basics", href: "/composting-basics" },
  { name: "Common Mistakes", href: "/composting-mistakes" },
  { name: "About Us", href: "/about" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Affiliate Disclosure", href: "/about#affiliate-disclosure" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-primary-foreground" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <path d="M9 9h.01M15 9h.01"/>
                </svg>
              </div>
              <span className="font-heading text-base font-bold">ComposterGuide</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Composting tools that actually work in real kitchens. Evidence-based reviews, not marketing copy.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Reviews</h3>
            <ul className="space-y-2">
              {reviewLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Learn</h3>
            <ul className="space-y-2">
              {learnLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">&copy; {currentYear} ComposterGuide.com. All rights reserved.</p>
          <p className="text-xs text-muted-foreground text-center sm:text-right max-w-md">
            ComposterGuide.com is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
