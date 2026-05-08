import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

export const metadata: Metadata = {
  title: "Best Worm Composter (2026) — Tested Worm Bins Ranked",
  description:
    "We tested the Worm Factory 360, Urban Worm Bag, and others to find the best worm composter for home use. Here are the ones that keep worms alive and happy.",
  alternates: { canonical: "https://www.composterguide.com/best-worm-composter" },
};

const TITLE = "Best Worm Composter (2026)";
const DESC = "We tested the top worm bins. Here are the ones that work.";
const URL = "https://www.composterguide.com/best-worm-composter";
const DATE = "2026-05-08";

const faqs = [
  {
    question: "How many worms do I need to start?",
    answer:
      "One pound of red wigglers handles about half a pound of food scraps per day. Start with 1-2 pounds for a household of two. Buy red wigglers (Eisenia fetida), not night crawlers. Night crawlers do not thrive in a confined bin.",
  },
  {
    question: "What can you feed worms?",
    answer:
      "Fruit and vegetable scraps, coffee grounds, crushed eggshells, tea bags, and shredded newspaper. Avoid meat, dairy, oily food, citrus in large amounts, and onions. Citrus and onions are fine in small amounts but slow worms down.",
  },
  {
    question: "How long does worm composting take?",
    answer:
      "Worms produce usable castings in 3-6 months under good conditions. A multi-tray system like the Worm Factory 360 lets you harvest from the bottom tray while the top trays continue processing, so production becomes continuous.",
  },
  {
    question: "What temperature do worms need?",
    answer:
      "Red wigglers thrive at 55-77 degrees Fahrenheit. Below 40 degrees they stop feeding. Above 90 degrees they try to escape and can die. Keep the bin indoors in summer and winter in most US climates.",
  },
  {
    question: "What do you do with worm castings?",
    answer:
      "Mix them into potting soil at 10-20% by volume, top-dress houseplants, or brew a casting tea. Castings contain nitrogen, phosphorus, potassium, and beneficial microbes. They are safe for all plants at any concentration.",
  },
];

export default function BestWormComposterPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <ArticleSchema title={TITLE} description={DESC} url={URL} datePublished={DATE} dateModified={DATE} />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.composterguide.com" }, { name: "Best Worm Composter", url: URL }]} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Best Worm Composter</li>
        </ol>
      </nav>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 text-sm text-amber-900">
        <strong>Affiliate disclosure:</strong> We earn a commission on qualifying purchases.
      </div>

      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Worm Bin Guide</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-4">
          Best Worm Composter (2026): Bins That Keep Worms Alive and Productive
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Vermicomposting turns kitchen scraps into the richest soil amendment you can make at home. The bin matters less than keeping the worms alive. These bins make that easy.
        </p>
      </header>

      <QuickVerdictBox
        winnerName="Worm Factory 360"
        winnerCategory="Worm Composter"
        dreamOutcomeChain="The stackable tray system migrates worms upward automatically so you can pull a finished tray of castings from the bottom without disturbing the bin, so you get rich compost on a rolling basis instead of shutting down the whole bin to harvest."
        proofPoint="4-tray stacking design. 1,000-worm starter capacity per tray. Leachate spigot for liquid fertilizer. Made in the USA."
        affiliateUrl="https://www.amazon.com/dp/B006E0J2KK?tag=compostlab-20"
        ctaLabel="Check Worm Factory 360 price"
        riskReversal="Free returns. Prime shipping."
      />

      <div className="prose max-w-none space-y-6 text-muted-foreground leading-relaxed mt-8">

        <h2 className="font-heading font-bold text-2xl text-foreground">Why a tray system beats a single-bin setup</h2>
        <p>
          Single-bin worm composters work. But harvesting castings from them requires separating worms from finished material by hand. It takes 30-60 minutes and stresses the worms.
        </p>
        <p>
          A tray system like the Worm Factory 360 works differently. Worms migrate upward through a mesh bottom toward fresh food. When the bottom tray fills with finished castings, the worms have mostly moved on. You pull the tray, empty it, and stack it on top. No sorting required.
        </p>
        <p>
          For anyone planning to vermicompost for more than one season, the tray system is worth the extra $30-50.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Worm Factory 360 — what makes it worth it</h2>
        <p>
          The Worm Factory 360 comes with 4 trays and can expand to 8. Each tray holds about 1 pound of worms at capacity. The spigot at the base drains leachate, the liquid that collects below the bin. Diluted 10:1 with water, leachate works as a liquid plant fertilizer.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          {["Made from recycled plastic. BPA-free.",
            "Comes with a coconut coir bedding block, worm ladder, and instructions.",
            "Starter tray kit available directly from Nature's Footprint.",
            "Expands from 4 to 8 trays as your worm population grows.",
          ].map((f) => (
            <li key={f}><Check className="w-4 h-4 inline mr-1 text-primary" aria-hidden="true" />{f}</li>
          ))}
        </ul>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Budget option: Urban Worm Bag</h2>
        <p>
          The Urban Worm Bag costs about $100 less than the Worm Factory 360. It is a fabric bag with a breathable outer shell, a zipper bottom for harvesting, and good airflow. Worms do well in it.
        </p>
        <p>
          The downside is durability. The bag shows wear after 12-18 months of heavy use. It also does not expand. But for a first worm bin on a budget, it is a reasonable starting point.
        </p>
        <p>
          Buy the Worm Factory 360 if you plan to continue vermicomposting long-term. Buy the Urban Worm Bag if you want to try it before committing.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">What worm composting gives you</h2>
        <p>
          Worm castings are the best soil amendment you can make at home. They contain 5-7 times more nitrogen, phosphorus, and potassium than standard compost. They also carry beneficial microbes that suppress plant pathogens.
        </p>
        <p>
          A healthy bin with 2 pounds of worms processes about 4 pounds of scraps per week. At full production, you get 1-2 pounds of finished castings per month. Small by volume, but high by value.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Worm composting vs electric composters</h2>
        <p>
          Worm composting and electric composters like Lomi are not competing products. They solve different parts of the problem. Worms produce the highest-quality plant food but cannot handle meat, dairy, or cooked food. Lomi handles those inputs but produces a drier, less biologically active output.
        </p>
        <p>
          Many serious home composters run both: a worm bin for kitchen scraps and an electric composter or backyard tumbler for meat and dairy.
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
          <li><Link href="/best-compost-bin" className="text-sm text-primary hover:underline">Best Compost Bins — All Types Compared</Link></li>
          <li><Link href="/lomi-review" className="text-sm text-primary hover:underline">Lomi Electric Composter Review</Link></li>
          <li><Link href="/composting-basics" className="text-sm text-primary hover:underline">Composting Basics — Carbon, Nitrogen, and What Actually Matters</Link></li>
          <li><Link href="/composting-mistakes" className="text-sm text-primary hover:underline">Common Composting Mistakes and How to Fix Them</Link></li>
        </ul>
      </section>
    </article>
  );
}
