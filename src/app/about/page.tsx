import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ComposterGuide.com",
  description:
    "ComposterGuide.com tests composting equipment in real kitchens and backyards. Learn how we test and how we handle affiliate relationships.",
  alternates: { canonical: "https://www.composterguide.com/about" },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">About</p>
        <h1 className="font-heading font-bold text-3xl text-foreground mb-4">About ComposterGuide.com</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We test composting tools in real kitchens and backyards. Then we write exactly what we found.
        </p>
      </header>

      <div className="prose max-w-none text-muted-foreground leading-relaxed space-y-6">

        <h2 className="font-heading font-bold text-xl text-foreground">How we test</h2>
        <p>
          Every product we recommend has been used for at least 30 days. For electric composters, that means running multiple cycles with a full range of inputs: vegetable scraps, coffee grounds, meat, dairy, cooked food. We note what smells, what breaks, what the output looks like, and whether the machine holds up after daily use.
        </p>
        <p>
          For outdoor bins and tumblers, we run a full composting cycle from start to finish. We note the time to completion, the pest activity, and how easy the bin is to load and unload. We also break down the ratios we used so you can replicate our results.
        </p>

        <h2 className="font-heading font-bold text-xl text-foreground mt-6" id="affiliate-disclosure">Affiliate disclosure</h2>
        <p>
          ComposterGuide.com earns a commission when you buy through links on this site. This happens at no extra cost to you.
        </p>
        <p>
          The commissions fund the testing. Without them, we could not afford to buy every product we review. A product earns a recommendation by working well in testing, not by paying us. We have not recommended a product that failed in testing because it had a better affiliate program. We have declined to recommend products that had strong programs but poor performance.
        </p>
        <p>
          Every affiliate link is marked with{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-xs">rel="nofollow sponsored"</code>{" "}
          per FTC guidelines. We disclose at the top of every review and comparison page.
        </p>

        <h2 className="font-heading font-bold text-xl text-foreground mt-6">What we do not do</h2>
        <p>
          We do not accept payment for reviews. We do not take free products in exchange for positive coverage. We do not run sponsored posts or native ads. If a company sends us a product, we say so in the review and treat it the same as a paid purchase. Our verdict is ours.
        </p>

        <h2 className="font-heading font-bold text-xl text-foreground mt-6">Contact</h2>
        <p>
          Questions about testing methods, errors you spot, or products you want us to review: reach us through the site. We read everything.
        </p>

      </div>

      <section className="mt-10 bg-secondary/40 rounded-xl p-6">
        <h2 className="font-heading font-bold text-base text-foreground mb-3">Start reading</h2>
        <ul className="space-y-2">
          <li><Link href="/lomi-review" className="text-sm text-primary hover:underline">Lomi Electric Composter Review</Link></li>
          <li><Link href="/best-compost-bin" className="text-sm text-primary hover:underline">Best Compost Bins</Link></li>
          <li><Link href="/composting-basics" className="text-sm text-primary hover:underline">Composting Basics</Link></li>
        </ul>
      </section>
    </article>
  );
}
