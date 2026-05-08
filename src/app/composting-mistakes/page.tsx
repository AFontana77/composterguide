import type { Metadata } from "next";
import Link from "next/link";
import { X } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "Common Composting Mistakes (2026) — and How to Fix Each One",
  description:
    "The most common composting problems and exactly how to fix them. Wet pile, no heat, bad smell, pests. Simple fixes for each.",
  alternates: { canonical: "https://www.composterguide.com/composting-mistakes" },
};

const TITLE = "Common Composting Mistakes";
const DESC = "Wet pile, no heat, bad smell, pests. Simple fixes for each.";
const URL = "https://www.composterguide.com/composting-mistakes";
const DATE = "2026-05-08";

const mistakes = [
  {
    mistake: "Too much nitrogen, not enough carbon",
    symptom: "Ammonia smell, wet and slimy pile.",
    fix: "Add dry browns: shredded cardboard, dry leaves, or straw. A 3:1 browns-to-greens ratio by volume is the target. Add browns generously, then turn the pile to mix.",
  },
  {
    mistake: "Too much carbon, not enough nitrogen",
    symptom: "Pile does not heat up. Decomposition is very slow. Material looks the same after months.",
    fix: "Add nitrogen-rich material: food scraps, coffee grounds, or fresh grass clippings. Water the pile if it is also dry. Turn to mix the new material throughout.",
  },
  {
    mistake: "Pile is too dry",
    symptom: "No heat, no activity, pile feels dusty.",
    fix: "Water the pile until it feels like a wrung-out sponge. A handful of compost should yield a few drops when squeezed. Cover with cardboard or a tarp to slow moisture loss in hot weather.",
  },
  {
    mistake: "Pile is too wet",
    symptom: "Sulfur or rotten-egg smell. No heat. Pile feels like a wet mat.",
    fix: "Add dry carbon material: cardboard, straw, or dry leaves. Turn the pile to expose wet interior material to air. Remove the cover if you are using one. Let it breathe.",
  },
  {
    mistake: "Pile is too small",
    symptom: "No heat at all. Decomposition is very slow even with correct ratio.",
    fix: "A pile needs at least 3x3x3 feet to heat up properly. Add more material, building the pile from all sides. Or combine two piles into one.",
  },
  {
    mistake: "Adding food scraps without covering them",
    symptom: "Pest activity, flies, smells.",
    fix: "Always bury food scraps 4-6 inches into the pile and cover with browns. Exposed food is an open invitation for pests. A covered tumbler composter eliminates this problem entirely.",
  },
  {
    mistake: "Adding meat, dairy, or cooked food to an outdoor pile",
    symptom: "Strong smell, pest digging, slow decomposition.",
    fix: "Remove what you can and bury the rest deep. For ongoing meat and dairy composting, use an electric composter like Lomi that handles those inputs without an outdoor pile.",
  },
  {
    mistake: "Not turning the pile",
    symptom: "Pile works very slowly. Anaerobic conditions in the center.",
    fix: "Turn the pile every 3-7 days. Even once a month is far better than never. Turning adds oxygen and redistributes heat and moisture. A tumbler makes turning a 10-second task.",
  },
];

const faqs = [
  {
    question: "Why does my compost smell bad?",
    answer:
      "Two main causes: too much nitrogen without enough carbon (ammonia smell), or too little oxygen from not turning or being too wet (sulfur, rotten-egg smell). For ammonia smell, add dry cardboard or leaves. For sulfur smell, add dry material and turn the pile to add air.",
  },
  {
    question: "Why are there flies in my compost?",
    answer:
      "Exposed food scraps. Always bury food scraps 4-6 inches deep and cover with a layer of browns. A tight-fitting tumbler eliminates fly access entirely. Black soldier flies are actually beneficial decomposers but can be off-putting. Fruit flies come from exposed sweet material near the surface.",
  },
  {
    question: "Why is my compost not hot?",
    answer:
      "Three common causes: pile is too small (below 3x3x3 feet), not enough nitrogen, or too dry. Fix in that order: add more material, add food scraps or coffee grounds, and water if needed. A pile that is actively composting should reach 130-160 degrees in the center.",
  },
  {
    question: "Can I add too much compost to a garden?",
    answer:
      "Yes, though it is hard to do with finished compost. Very large amounts can create nutrient imbalances, particularly in phosphorus. A 1-3 inch layer per season worked into the top 6 inches of soil is appropriate. More than 4 inches at once is usually unnecessary and can temporarily tie up soil nitrogen as it integrates.",
  },
  {
    question: "Why are there pests in my compost bin?",
    answer:
      "Exposed food scraps, especially meat, dairy, or sweet fruit, attract rats, raccoons, and other animals. Remove these inputs and bury all food scraps under a thick layer of browns. A tumbler with a sealed body and elevated stand prevents almost all ground-dwelling pests.",
  },
];

export default function CompostingMistakesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <ArticleSchema title={TITLE} description={DESC} url={URL} datePublished={DATE} dateModified={DATE} />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.composterguide.com" }, { name: "Composting Mistakes", url: URL }]} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Composting Mistakes</li>
        </ol>
      </nav>

      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Troubleshooting Guide</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-4">
          Common Composting Mistakes and How to Fix Every One
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Most compost problems come from two things: wrong ratio or wrong moisture. The rest come from not turning. Here is every common mistake and the exact fix.
        </p>
      </header>

      <div className="prose max-w-none text-muted-foreground leading-relaxed">

        <div className="not-prose space-y-5 mb-8">
          {mistakes.map((m, i) => (
            <div key={m.mistake} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">Mistake {i + 1}: {m.mistake}</p>
                  <p className="text-sm text-muted-foreground mt-1"><strong>Symptom:</strong> {m.symptom}</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 ml-11">
                <p className="text-sm text-green-900"><strong>Fix:</strong> {m.fix}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-4">The fastest way to fix a broken pile</h2>
        <p>
          If a pile has been sitting for months with no progress, do this in order:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Turn the entire pile. Move outside material to the center and center material to the outside.</li>
          <li>Check moisture. Squeeze a handful. If no water comes out, water the pile thoroughly as you turn.</li>
          <li>Add greens if the pile is mostly browns: two buckets of food scraps or a bag of coffee grounds.</li>
          <li>Cover the pile loosely with cardboard to retain moisture.</li>
          <li>Turn again in 3-4 days and check for heat in the center.</li>
        </ol>
        <p>
          A pile that was stalled for 6 months can restart and finish in 4-8 weeks with this approach.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">When to switch to a tumbler</h2>
        <p>
          If managing an open pile consistently produces smells or pest problems, a sealed tumbler removes both issues. Tumblers block ground pests, retain moisture automatically, and make turning require almost no effort. Our{" "}
          <Link href="/best-tumbler-composter" className="text-primary underline">tumbler guide</Link>{" "}
          covers the top picks by capacity and price.
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
          <li><Link href="/composting-basics" className="text-sm text-primary hover:underline">Composting Basics — Ratios, Moisture, and Aeration</Link></li>
          <li><Link href="/how-to-compost" className="text-sm text-primary hover:underline">How to Compost — 5 Steps for Beginners</Link></li>
          <li><Link href="/best-tumbler-composter" className="text-sm text-primary hover:underline">Best Tumbler Composter — Pest-Free and Fast</Link></li>
          <li><Link href="/lomi-review" className="text-sm text-primary hover:underline">Lomi Review — For Meat, Dairy, and Indoor Use</Link></li>
        </ul>
      </section>
    </article>
  );
}
