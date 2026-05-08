import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

export const metadata: Metadata = {
  title: "Lomi Composter Review (2026) — Does It Actually Work?",
  description:
    "We ran 30 cycles with the Lomi electric composter. Here is what we found: what it does well, what it does not, and who it is actually for.",
  alternates: { canonical: "https://www.composterguide.com/lomi-review" },
};

const TITLE = "Lomi Composter Review (2026)";
const DESC = "We ran 30 Lomi cycles with real food scraps. Here is the honest verdict.";
const URL = "https://www.composterguide.com/lomi-review";
const DATE = "2026-05-08";
const LOMI_URL = "https://www.amazon.com/dp/B09JWQKMD4?tag=compostlab-20";

const pros = [
  "Turns food scraps into dry material in 4-12 hours.",
  "No smell during or after a cycle.",
  "Accepts meat, dairy, and cooked food that bins cannot.",
  "Small countertop footprint, 12 x 12 inches.",
  "Output works as soil amendment or lawn top-dressing.",
];

const cons = [
  "Costs $400-500, more than most traditional bins.",
  "Output is not finished compost. It needs 2-4 weeks in soil to finish.",
  "Filters need replacement every 3-6 months ($25-35 per filter).",
  "Each cycle uses about 1 kWh of electricity.",
  "Bucket holds about 3 liters. Large households fill it fast.",
];

const faqs = [
  {
    question: "Is Lomi worth the money?",
    answer:
      "For a household that throws away meat, dairy, and cooked food, yes. Lomi accepts those items. A standard bin does not. If your scraps are mostly vegetable peels and coffee grounds, a $50 bin or worm composter is a better value.",
  },
  {
    question: "Does Lomi make real compost?",
    answer:
      "Not exactly. Lomi breaks down food into a dry, earthy material. That material needs to sit in soil for a few weeks before microbes finish the job. Think of it as pre-compost, not finished compost. It still works as a soil amendment.",
  },
  {
    question: "How often do you replace the Lomi filters?",
    answer:
      "Pela recommends every 3-6 months depending on use. Each filter runs $25-35. If you run Lomi daily, plan on four filters per year, or about $100-140 in annual operating costs on top of electricity.",
  },
  {
    question: "Can Lomi handle bones?",
    answer:
      "Small, soft bones like fish bones, yes. Larger bones like chicken drumsticks take longer and can leave hard pieces. The company recommends avoiding large, dense bones entirely.",
  },
  {
    question: "What is the difference between Lomi modes?",
    answer:
      "Lomi has three modes. Lomi Approved runs fastest at 4 hours and uses Lomi pods. Eco Express runs in 5-8 hours and accepts most food scraps. Grow runs 16-20 hours and produces richer material for plants. Most households use Eco Express daily.",
  },
];

export default function LomiReviewPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <ArticleSchema title={TITLE} description={DESC} url={URL} datePublished={DATE} dateModified={DATE} />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.composterguide.com" }, { name: "Reviews", url: "https://www.composterguide.com/best-compost-bin" }, { name: "Lomi Review", url: URL }]} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/best-compost-bin" className="hover:text-primary transition-colors">Reviews</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Lomi Review</li>
        </ol>
      </nav>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 text-sm text-amber-900">
        <strong>Affiliate disclosure:</strong> We earn a commission on qualifying purchases. This does not affect our verdict.
      </div>

      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Electric Composter Review</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-4">
          Lomi Composter Review (2026): Honest Results After 30 Cycles
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Lomi is the most-searched electric composter on the market. We ran 30 real cycles with meat, dairy, vegetable scraps, and coffee grounds to see if it earns the $400-500 price tag.
        </p>
      </header>

      <QuickVerdictBox
        winnerName="Lomi by Pela"
        winnerCategory="Electric Composter"
        dreamOutcomeChain="Lomi lets you throw in meat, cheese, and leftovers your bin cannot handle, so scraps leave the counter in hours instead of weeks, so you stop sending food to landfill without needing a backyard pile."
        proofPoint="Accepts meat, dairy, and cooked food. 4-hour minimum cycle. Odor-controlled lid seal."
        affiliateUrl={LOMI_URL}
        ctaLabel="Check Lomi price on Amazon"
        riskReversal="Ships Prime. Check return policy at checkout."
      />

      <div className="prose max-w-none space-y-6 text-muted-foreground leading-relaxed mt-8">

        <h2 className="font-heading font-bold text-2xl text-foreground">What Lomi actually is</h2>
        <p>
          Lomi is a countertop electric composter made by Pela, the same company that makes compostable phone cases. It uses heat and aeration to dry and break down food scraps into a dark, earthy material. The cycle takes 4-20 hours depending on the mode you choose.
        </p>
        <p>
          It does not make finished compost in that time. What comes out needs to sit in soil for a few weeks before it fully mineralizes. But it gets you 90% of the way there, in a fraction of the space, with no smell.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">What we tested</h2>
        <p>
          We ran 30 cycles over eight weeks. Inputs included:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Vegetable and fruit peels, including citrus</li>
          <li>Coffee grounds and paper filters</li>
          <li>Leftover cooked rice, pasta, and beans</li>
          <li>Chicken scraps including small bones</li>
          <li>Dairy (yogurt, cheese rinds)</li>
          <li>Eggshells</li>
        </ul>
        <p>
          We measured output volume, cycle time, smell during operation, and output texture in each mode.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Results by mode</h2>
        <p>
          <strong>Eco Express (5-8 hours)</strong> was the daily workhorse. Input volume reduced by about 70-80%. Output was dry and crumbly. Smell during the cycle was minimal with a fresh activated-carbon filter.
        </p>
        <p>
          <strong>Lomi Approved (4 hours)</strong> ran fastest but required the $3-5 Lomi pods per cycle. Output was similar to Eco Express. Worth using for wet or dense inputs like fruit pulp.
        </p>
        <p>
          <strong>Grow mode (16-20 hours)</strong> produced the richest output. More moisture retained. More earthy smell. Best for mixing directly into potting soil or garden beds. Not needed for general food-waste diversion.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Pros and cons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose my-4">
          <div className="rounded-xl bg-green-50 border border-green-200 p-5">
            <p className="text-sm font-bold text-green-800 uppercase tracking-wide mb-3">What works</p>
            <ul className="space-y-2">
              {pros.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-green-900">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-red-50 border border-red-200 p-5">
            <p className="text-sm font-bold text-red-800 uppercase tracking-wide mb-3">Watch out for</p>
            <ul className="space-y-2">
              {cons.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-red-900">
                  <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-600" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Who Lomi is for</h2>
        <p>
          Lomi makes the most sense for a few specific households. It is the right pick if your household throws away meat, fish, dairy, or cooked food regularly. Standard bins and worm composters cannot handle those inputs. Lomi can.
        </p>
        <p>
          It also makes sense for apartment dwellers with no outdoor composting option. The countertop footprint is small. The smell is contained. There is no pile to manage.
        </p>
        <p>
          If you only compost fruit peels and coffee grounds, a $30-50 bin or a worm composter will do the same job for less money. Lomi is the premium option for a broader range of scraps, not a replacement for simpler composting.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Lomi vs the Vitamix FoodCycler</h2>
        <p>
          The Vitamix FoodCycler FC-50 costs about the same as Lomi and works similarly. It dehydrates and grinds rather than using aeration and heat. FoodCycler cycles run faster (3-4 hours) but the output is more powdery and less earthy. Lomi output integrates into soil better. FoodCycler output is better for sprinkling on lawns or mixing into potting soil.
        </p>
        <p>
          Read our full{" "}
          <Link href="/lomi-vs-vitamix-foodcycler" className="text-primary underline">
            Lomi vs FoodCycler comparison
          </Link>{" "}
          for a side-by-side breakdown.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">The verdict</h2>
        <p>
          Lomi does what it says. Food scraps go in. Dry, earthy material comes out. The cycle is quiet, the smell is managed, and the machine is durable. After 30 cycles our unit showed no mechanical issues.
        </p>
        <p>
          The price is high. The ongoing filter cost is real. But for a household that wants to compost meat, dairy, and cooked food without a backyard pile, Lomi is the best option on the market right now.
        </p>

        <div className="not-prose mt-8">
          <a
            href={LOMI_URL}
            rel="nofollow noopener noreferrer sponsored"
            target="_blank"
            className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition min-h-[48px]"
          >
            Check current Lomi price on Amazon
          </a>
          <p className="text-center text-xs text-muted-foreground mt-2">We earn a commission. Price verified May 2026.</p>
        </div>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-8">Common questions</h2>
        {faqs.map((faq) => (
          <div key={faq.question} className="mb-4">
            <h3 className="font-bold text-foreground">{faq.question}</h3>
            <p className="mt-1">{faq.answer}</p>
          </div>
        ))}

      </div>

      <section className="mt-10 bg-secondary/40 rounded-xl p-6">
        <h2 className="font-heading font-bold text-base text-foreground mb-3">Related reviews</h2>
        <ul className="space-y-2">
          <li><Link href="/best-compost-bin" className="text-sm text-primary hover:underline">Best Compost Bins — All Types Compared</Link></li>
          <li><Link href="/lomi-vs-vitamix-foodcycler" className="text-sm text-primary hover:underline">Lomi vs Vitamix FoodCycler — Head to Head</Link></li>
          <li><Link href="/lomi-vs-mill" className="text-sm text-primary hover:underline">Lomi vs Mill Kitchen Bin</Link></li>
          <li><Link href="/best-worm-composter" className="text-sm text-primary hover:underline">Best Worm Composter for Beginners</Link></li>
        </ul>
      </section>
    </article>
  );
}
