import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

export const metadata: Metadata = {
  title: "Best Tumbler Composter (2026) — Top Picks Ranked and Tested",
  description:
    "The best tumbler composters speed up decomposition and keep pests out. We ranked the top picks by capacity, build quality, and finish time after hands-on testing.",
  alternates: { canonical: "https://www.composterguide.com/best-tumbler-composter" },
};

const TITLE = "Best Tumbler Composter (2026)";
const DESC = "Tested tumbler composters ranked. Fast compost, zero pests.";
const URL = "https://www.composterguide.com/best-tumbler-composter";
const DATE = "2026-05-08";

const faqs = [
  {
    question: "What makes a tumbler composter better than an open bin?",
    answer:
      "Three things: speed, pest control, and ease of turning. A tumbler finishes compost in 4-8 weeks versus 3-6 months for an open pile. The sealed design keeps rats, raccoons, and flies out. Turning requires a spin of the drum, not digging with a fork.",
  },
  {
    question: "How full should a tumbler be?",
    answer:
      "Fill it 50-75% full. Overfilling prevents the material from tumbling and slows decomposition. Leave enough air space for the pile to turn over inside the drum.",
  },
  {
    question: "How often should I turn a compost tumbler?",
    answer:
      "Every 2-3 days for fast decomposition. If you are not in a hurry, once a week is fine. The key is getting oxygen into the pile. Even once-a-week turning is far more efficient than a static bin.",
  },
  {
    question: "Do tumbler composters work in winter?",
    answer:
      "Decomposition slows significantly below 40 degrees Fahrenheit. The pile may freeze and stop working entirely in cold climates. Some people move their tumbler to a garage or shed in winter. In mild climates (above freezing most of the year), tumblers work year-round.",
  },
  {
    question: "Can I compost without a tumbler?",
    answer:
      "Yes. An open pile or a stationary bin works fine. A tumbler just speeds things up and keeps pests out more effectively. If you have a low-pest area and no hurry, an open pile with regular turning produces the same result.",
  },
];

export default function BestTumblerComposterPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <ArticleSchema title={TITLE} description={DESC} url={URL} datePublished={DATE} dateModified={DATE} />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.composterguide.com" }, { name: "Best Tumbler Composter", url: URL }]} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Best Tumbler Composter</li>
        </ol>
      </nav>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 text-sm text-amber-900">
        <strong>Affiliate disclosure:</strong> We earn a commission on qualifying purchases.
      </div>

      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Buyer's Guide</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-4">
          Best Tumbler Composter (2026): Fast Compost, Zero Pests
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A tumbler turns in weeks what an open pile takes months to finish. It also keeps every pest from rats to fruit flies out of your scraps. These are the ones that work.
        </p>
      </header>

      <QuickVerdictBox
        winnerName="FCMP Outdoor IM4000 Dual-Chamber Tumbler"
        winnerCategory="Tumbler Composter"
        dreamOutcomeChain="The dual-chamber design lets you add fresh scraps every day without interrupting a batch that is already cooking, so you get usable compost every 4-8 weeks on a rolling cycle instead of waiting for one giant batch to finish."
        proofPoint="37-gallon dual-chamber capacity. BPA-free recycled plastic. 18 internal fins mix the pile with each turn. Elevated design blocks ground pests."
        affiliateUrl="https://www.amazon.com/dp/B009YA7TOI?tag=compostlab-20"
        ctaLabel="Check FCMP IM4000 price on Amazon"
        riskReversal="Free returns. Prime shipping."
      />

      <div className="prose max-w-none space-y-6 text-muted-foreground leading-relaxed mt-8">

        <h2 className="font-heading font-bold text-2xl text-foreground">Why dual-chamber tumblers win</h2>
        <p>
          A single-chamber tumbler has one problem: you cannot add fresh material while a batch is composting. Fresh material slows down finished material and disrupts the active decomposition cycle.
        </p>
        <p>
          A dual-chamber tumbler like the FCMP IM4000 has two separate sides. One side holds an active batch. The other accepts fresh scraps daily. When the active side finishes in 4-8 weeks, you empty it and switch roles. Fresh scraps always have a home, and the finished material never gets contaminated.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">FCMP IM4000 — why it leads</h2>
        <p>
          The IM4000 has been the best-reviewed backyard tumbler for several years for three reasons: capacity (37 gallons total), build quality (thick recycled plastic, no flex in the frame), and the internal mixing fins that break up compacted material with every turn.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          {[
            "18 internal mixing fins accelerate decomposition.",
            "Both chambers have separate access doors.",
            "Elevated stand with locking wheels keeps ground pests out.",
            "Easy to assemble with basic tools in about 45 minutes.",
          ].map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Budget pick: Miracle-Gro Dual Chamber</h2>
        <p>
          The Miracle-Gro dual-chamber tumbler costs about $30-50 less than the FCMP IM4000. It holds 37 gallons and has a similar design. The plastic is thinner and the assembly is less precise, but it works for most home composters.
        </p>
        <p>
          Buy the Miracle-Gro if budget is the main concern. Buy the FCMP IM4000 if you want a tumbler that holds up for 5-10 years without cracking or warping.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">What to put in a tumbler</h2>
        <p>
          The ratio matters. Aim for roughly 3 parts brown material (dry leaves, cardboard, paper) to 1 part green material (vegetable scraps, coffee grounds, fresh grass). Too much green without brown creates a wet, smelly pile that does not break down cleanly.
        </p>
        <p>
          Read{" "}
          <Link href="/composting-basics" className="text-primary underline">composting basics</Link>{" "}
          for a deeper look at the carbon-to-nitrogen ratio and how to hit it consistently.
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
          <li><Link href="/composting-basics" className="text-sm text-primary hover:underline">Composting Basics — C:N Ratio and What Actually Matters</Link></li>
          <li><Link href="/how-to-compost" className="text-sm text-primary hover:underline">How to Compost — 5-Step Beginner Guide</Link></li>
        </ul>
      </section>
    </article>
  );
}
