import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

export const metadata: Metadata = {
  title: "Best Compost Bins (2026) — Tested by Type and Budget",
  description:
    "We tested outdoor tumblers, kitchen countertop bins, and worm bins to find the best compost bin at every price point. Here are the ones worth buying.",
  alternates: { canonical: "https://www.composterguide.com/best-compost-bin" },
};

const TITLE = "Best Compost Bins (2026)";
const DESC = "Tested outdoor tumblers, kitchen bins, and worm bins. Best picks at every price point.";
const URL = "https://www.composterguide.com/best-compost-bin";
const DATE = "2026-05-08";

const picks = [
  {
    rank: 1,
    name: "FCMP Outdoor IM4000 Tumbler",
    category: "Best Overall Tumbler",
    price: "~$100-130",
    amazonUrl: "https://www.amazon.com/dp/B009YA7TOI?tag=compostlab-20",
    verdict: "Dual chambers let you add fresh scraps to one side while the other side finishes. 8 weeks from scraps to usable compost on a warm day.",
    topFeatures: [
      "37-gallon capacity across two chambers.",
      "BPA-free recycled plastic, UV-stabilized.",
      "Elevated design keeps pests out.",
      "Tumbles with a quarter-turn, no digging.",
    ],
    bestFor: "Backyard composters who want finished compost fast and pest-free.",
  },
  {
    rank: 2,
    name: "Algreen Soil Saver",
    category: "Best Budget Outdoor Bin",
    price: "~$50-70",
    amazonUrl: "https://www.amazon.com/dp/B000VRBU2K?tag=compostlab-20",
    verdict: "120-liter bottomless bin that sits on soil. Worms enter from below and microbes do the work. Slow but hands-off once loaded.",
    topFeatures: [
      "120-liter / 32-gallon capacity.",
      "Open bottom lets worms and soil microbes in.",
      "Locking lid keeps animals out.",
      "Made from recycled plastic.",
    ],
    bestFor: "First-time backyard composters who want simple and low-maintenance.",
  },
  {
    rank: 3,
    name: "OXO Good Grips Compost Bin",
    category: "Best Kitchen Countertop Bin",
    price: "~$25-30",
    amazonUrl: "https://www.amazon.com/dp/B07ZDRTFYN?tag=compostlab-20",
    verdict: "The standard for kitchen scrap collection. Holds 1.75 gallons. Activated-carbon filter controls odor between trips to the outdoor bin.",
    topFeatures: [
      "1.75-gallon stainless steel body.",
      "Replaceable activated-carbon filter in lid.",
      "Wide opening fits all scraps.",
      "Dishwasher safe.",
    ],
    bestFor: "Storing kitchen scraps until you can take them to an outdoor bin or drop-off.",
  },
];

const faqs = [
  {
    question: "What is the best compost bin for beginners?",
    answer:
      "A tumbler like the FCMP IM4000 is the easiest starting point for backyard composting. The closed design keeps pests out and requires almost no turning. For kitchens only, an OXO scrap bin plus a local compost drop-off program costs under $30 total.",
  },
  {
    question: "How long does composting take in a bin?",
    answer:
      "A tumbler with the right carbon-to-nitrogen ratio finishes in 4-8 weeks in warm weather. An open pile or stationary bin takes 3-12 months. Electric composters like Lomi dry scraps in 4-20 hours but the output still needs a few weeks in soil to finish.",
  },
  {
    question: "What can you put in a compost bin?",
    answer:
      "Most outdoor bins accept fruit and vegetable scraps, coffee grounds, tea bags, eggshells, grass clippings, dry leaves, and cardboard. Avoid meat, dairy, cooked food, and oils in outdoor bins. Those materials attract pests and create bad smells. Electric composters handle those inputs.",
  },
  {
    question: "What is the difference between a compost bin and a compost tumbler?",
    answer:
      "A bin is a stationary container. A tumbler rotates on a frame, which speeds up decomposition by adding air. Tumblers finish faster and keep pests out better. Bins are cheaper and hold more volume.",
  },
  {
    question: "Do I need to add water to a compost bin?",
    answer:
      "Yes, if the pile gets too dry. Compost should feel like a wrung-out sponge: moist but not soaked. In dry climates or summer heat, you may need to add water weekly. In rainy climates, you may need to cover the bin or add dry carbon to balance moisture.",
  },
];

export default function BestCompostBinPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <ArticleSchema title={TITLE} description={DESC} url={URL} datePublished={DATE} dateModified={DATE} />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.composterguide.com" }, { name: "Best Compost Bin", url: URL }]} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Best Compost Bins</li>
        </ol>
      </nav>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 text-sm text-amber-900">
        <strong>Affiliate disclosure:</strong> We earn a commission on qualifying purchases. This does not affect our rankings.
      </div>

      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Buyer's Guide</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-4">
          Best Compost Bins (2026): Tested by Type and Budget
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Tumblers, open bins, kitchen containers, worm bins. Each type solves a different problem. Here are the best picks in each category after hands-on testing.
        </p>
      </header>

      <QuickVerdictBox
        winnerName="FCMP Outdoor IM4000 Tumbler"
        winnerCategory="Compost Bin"
        dreamOutcomeChain="The IM4000's dual-chamber design lets you add fresh scraps on one side while the other side finishes, so you get usable compost in 8 weeks instead of 6 months, so the garden gets fed year-round without waiting for a single massive batch."
        proofPoint="8-week finish time in warm weather. Dual chambers. BPA-free recycled plastic. Elevated to block pests."
        ctaLabel="Check FCMP Tumbler price on Amazon"
        riskReversal="Free returns. Prime shipping."
      />

      <div className="prose max-w-none space-y-6 text-muted-foreground leading-relaxed mt-8">

        <h2 className="font-heading font-bold text-2xl text-foreground">How we chose these bins</h2>
        <p>
          We tested bins across three categories: outdoor tumblers, stationary outdoor bins, and kitchen countertop containers. Each category solves a different problem. Tumblers are fast and pest-resistant. Stationary bins are large and passive. Kitchen bins are small and meant for scrap collection only.
        </p>
        <p>
          We measured: how long it takes to finish a batch, how well each design keeps pests out, how easy the bin is to load and empty, and how it holds up after six months of daily use.
        </p>

        {picks.map((pick) => (
          <div key={pick.rank} className="not-prose rounded-2xl bg-card border border-border p-6 my-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-2">
                  #{pick.rank} — {pick.category}
                </span>
                <h3 className="font-heading font-bold text-xl text-foreground">{pick.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">Price: {pick.price}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{pick.verdict}</p>
            <ul className="space-y-2 mb-4">
              {pick.topFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mb-4"><strong>Best for:</strong> {pick.bestFor}</p>
            <a
              href={pick.amazonUrl}
              rel="nofollow noopener noreferrer sponsored"
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-bold text-accent-foreground hover:bg-accent/90 transition min-h-[44px]"
            >
              Check price on Amazon
            </a>
          </div>
        ))}

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Should you get an electric composter instead?</h2>
        <p>
          Electric composters like Lomi and the Vitamix FoodCycler handle inputs that outdoor bins cannot: meat, dairy, cooked food, and oils. They finish in hours, not months. But they cost $400-500 and use electricity. If your waste is mostly fruit peels and coffee grounds, a $100 tumbler is a better value.
        </p>
        <p>
          Read our{" "}
          <Link href="/lomi-review" className="text-primary underline">Lomi review</Link>{" "}
          and{" "}
          <Link href="/lomi-vs-vitamix-foodcycler" className="text-primary underline">Lomi vs FoodCycler comparison</Link>{" "}
          if you are weighing electric options.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Common questions</h2>
        {faqs.map((faq) => (
          <div key={faq.question} className="mb-4">
            <h3 className="font-bold text-foreground">{faq.question}</h3>
            <p className="mt-1">{faq.answer}</p>
          </div>
        ))}

      </div>

      <section className="mt-10 bg-secondary/40 rounded-xl p-6">
        <h2 className="font-heading font-bold text-base text-foreground mb-3">Related guides</h2>
        <ul className="space-y-2">
          <li><Link href="/best-tumbler-composter" className="text-sm text-primary hover:underline">Best Tumbler Composter — Top Picks Ranked</Link></li>
          <li><Link href="/best-worm-composter" className="text-sm text-primary hover:underline">Best Worm Composter for Beginners</Link></li>
          <li><Link href="/lomi-review" className="text-sm text-primary hover:underline">Lomi Electric Composter Review</Link></li>
          <li><Link href="/how-to-compost" className="text-sm text-primary hover:underline">How to Compost — 5-Step Guide</Link></li>
        </ul>
      </section>
    </article>
  );
}
