import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "ComposterGuide.com — Composting Tools That Work in Real Kitchens",
  description:
    "Electric composters, compost bins, worm bins, and tumblers reviewed in real kitchens. Buy the right tool the first time.",
  alternates: { canonical: "https://www.composterguide.com" },
};

const reviews = [
  {
    title: "Lomi Electric Composter Review",
    desc: "Lomi turns food scraps into usable material in 4 hours. We ran 30 cycles to see if it holds up past the honeymoon phase.",
    href: "/lomi-review",
    badge: "Most Popular",
  },
  {
    title: "Best Compost Bins",
    desc: "From $30 plastic bins to $200 tumblers, we found the ones that actually break down food scraps without going anaerobic.",
    href: "/best-compost-bin",
    badge: "Top Picks",
  },
  {
    title: "Lomi vs Vitamix FoodCycler",
    desc: "Two electric composters, two very different machines. One is better for small kitchens. One handles larger volumes. Here is which to pick.",
    href: "/lomi-vs-vitamix-foodcycler",
    badge: "Head to Head",
  },
  {
    title: "Best Worm Composter",
    desc: "Vermicomposting turns kitchen scraps into high-quality castings. We tested the top bins to find which ones are actually worm-friendly.",
    href: "/best-worm-composter",
    badge: "Best Value",
  },
];

const learnPieces = [
  {
    title: "Composting Basics",
    desc: "The carbon-to-nitrogen ratio is everything. Get it right and scraps break down in weeks. Get it wrong and you get a wet, smelly pile.",
    href: "/composting-basics",
  },
  {
    title: "How to Compost",
    desc: "Five steps from scrap to finished compost. Works in any kitchen or backyard. No special gear required.",
    href: "/how-to-compost",
  },
  {
    title: "Common Composting Mistakes",
    desc: "Most composting problems come down to two things: too wet or wrong ratio. Here is how to fix both.",
    href: "/composting-mistakes",
  },
];

export default function HomePage() {
  return (
    <>
      <ArticleSchema
        title="ComposterGuide.com — Composting Tools Tested in Real Kitchens"
        description="Electric composters, bins, worm bins, and tumblers reviewed. Buy the right tool the first time."
        url="https://www.composterguide.com"
        datePublished="2026-05-08"
        dateModified="2026-05-08"
      />

      {/* Hero */}
      <section className="bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
            Tested in real kitchens, not a lab
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            Composting tools that actually work.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Electric composters, bins, worm farms, and tumblers. We run real cycles, track real results, and tell you which ones earn a place on the counter.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/lomi-review"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition min-h-[48px]"
            >
              Read the Lomi Review
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/best-compost-bin"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-6 py-3 text-base font-bold text-primary hover:bg-primary/5 transition min-h-[48px]"
            >
              Compare All Bins
            </Link>
          </div>
        </div>
      </section>

      {/* Affiliate disclosure */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-3">
        <p className="text-xs text-muted-foreground text-center">
          ComposterGuide.com is reader-supported. We earn a commission on qualifying purchases at no extra cost to you.{" "}
          <Link href="/about#affiliate-disclosure" className="underline hover:text-primary transition-colors">Learn more.</Link>
        </p>
      </div>

      {/* Top reviews */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-8">
          Top-tested composting tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="group rounded-2xl bg-card border border-border p-6 hover:shadow-md transition-shadow"
            >
              <span className="inline-block mb-3 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {r.badge}
              </span>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {r.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Read review <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Learn section */}
      <section className="bg-secondary/30 border-t border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-8">
            Learn composting from the ground up
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {learnPieces.map((piece) => (
              <Link
                key={piece.href}
                href={piece.href}
                className="group rounded-xl bg-card border border-border p-5 hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                  {piece.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{piece.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why trust section */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 text-center">
        <h2 className="font-heading font-bold text-xl text-foreground mb-4">
          Why trust our reviews?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We buy or borrow every product we review. We run real cycles with real food scraps. We note what breaks, what smells, and what works after 30 days, not 30 minutes.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Affiliate links fund this work. They do not affect which products we recommend. A product that earns a top pick did so by working well, not by paying us.
        </p>
        <Link href="/about" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          About our testing process <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
