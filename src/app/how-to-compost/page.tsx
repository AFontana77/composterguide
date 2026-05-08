import type { Metadata } from "next";
import Link from "next/link";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "How to Compost (2026) — 5 Steps That Work in Any Backyard",
  description:
    "How to compost in 5 steps. No special equipment. Works in small backyards, raised beds, and apartments. Start today.",
  alternates: { canonical: "https://www.composterguide.com/how-to-compost" },
};

const TITLE = "How to Compost";
const DESC = "5 steps from kitchen scrap to finished compost. No special tools required.";
const URL = "https://www.composterguide.com/how-to-compost";
const DATE = "2026-05-08";

const steps = [
  {
    num: 1,
    title: "Pick a spot",
    body: "Choose a spot that gets partial sun. Full shade slows decomposition. Full sun dries the pile out too fast. A 3x3x3 foot area is the minimum size for a hot pile that heats up properly. You can start smaller with a cold pile, but it will take longer.",
  },
  {
    num: 2,
    title: "Start with a brown layer",
    body: "Lay down 4-6 inches of dry, high-carbon material. Dry leaves work best. Cardboard, straw, and wood chips also work. This layer creates drainage at the base and gives the pile structure. Do not skip this step. Starting with wet food scraps creates a soggy, smelly base.",
  },
  {
    num: 3,
    title: "Add food scraps in layers",
    body: "Add 2-3 inches of food scraps or other nitrogen-rich material. Cover each food scrap layer with 4-6 inches of browns. The 3:1 browns-to-greens ratio by volume is the target. Every time you add kitchen scraps, cover them. Exposed food attracts pests.",
  },
  {
    num: 4,
    title: "Keep it moist and aerated",
    body: "Water the pile if it gets dry. It should feel like a wrung-out sponge. Turn it every 3-7 days with a pitchfork or compost aerator. Each turn adds oxygen, which feeds aerobic microbes. A turned pile heats up to 130-160 degrees inside, which kills weed seeds.",
  },
  {
    num: 5,
    title: "Harvest when it is done",
    body: "Compost is ready when it is dark, earthy-smelling, and you cannot identify individual inputs. Let it cure for 2-4 weeks before adding to garden beds. Use it at 10-25% by volume in potting mix, or spread 1-2 inches over garden soil and work it in.",
  },
];

const faqs = [
  {
    question: "Do I need a compost bin to start composting?",
    answer:
      "No. An open pile works fine. A bin keeps the pile neat, blocks some pests, and retains heat and moisture better than a bare pile. For small spaces or urban yards, a bin helps. For a large backyard with space to spare, a simple pile works.",
  },
  {
    question: "Can I compost in an apartment?",
    answer:
      "Yes, with a few adjustments. Worm bins work well indoors with no smell when managed correctly. Electric composters like Lomi accept food scraps with no smell and produce dry output you can use on houseplants. Many cities also have compost drop-off programs if you just want the scraps gone.",
  },
  {
    question: "How do I know when compost is ready to use?",
    answer:
      "Finished compost is dark brown to black, crumbly, and earthy-smelling. Individual materials are not identifiable. The pile has cooled to ambient temperature and does not reheat after turning. If you still see food scraps, leaves, or other recognizable material, give it more time.",
  },
  {
    question: "What is the fastest way to compost?",
    answer:
      "Hot composting with frequent turning. Build a pile with the right carbon-to-nitrogen ratio (3:1 browns to greens by volume). Keep it moist. Turn every 2-3 days. A pile managed this way can finish in 3-6 weeks. The Berkeley rapid composting method is a formal version of this approach.",
  },
  {
    question: "Can I add compost to potted plants?",
    answer:
      "Yes. Mix finished compost into potting soil at 10-20% by volume before planting. Top-dress existing containers with a 0.5-inch layer once or twice a year. Compost at 100% is too dense for containers and should always be mixed with other potting media.",
  },
];

export default function HowToCompostPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <ArticleSchema title={TITLE} description={DESC} url={URL} datePublished={DATE} dateModified={DATE} />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.composterguide.com" }, { name: "How to Compost", url: URL }]} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">How to Compost</li>
        </ol>
      </nav>

      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Beginner Guide</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-4">
          How to Compost: 5 Steps That Work in Any Backyard
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          You do not need a bin, a tumbler, or any special equipment to start composting. A pile of layered material in the right spot will do it. Here is the process that works.
        </p>
      </header>

      <div className="prose max-w-none text-muted-foreground leading-relaxed">

        <div className="not-prose space-y-6 mb-8">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">{step.num}</span>
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl text-foreground mb-2">{step.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">What to add and what to avoid</h2>
        <p>
          Most kitchen scraps and yard waste work in a compost pile. A few things do not.
        </p>
        <p>
          <strong>Good to add:</strong> Fruit and vegetable scraps, coffee grounds, tea bags, eggshells, dry leaves, shredded cardboard, paper bags, grass clippings, and plant trimmings.
        </p>
        <p>
          <strong>Avoid outdoors:</strong> Meat, fish, dairy, cooked food, oily food, pet waste, treated wood, and diseased plant material. These attract pests or carry pathogens that survive a cold pile. Electric composters like{" "}
          <Link href="/lomi-review" className="text-primary underline">Lomi</Link>{" "}
          handle meat and dairy on the counter without those problems.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Do you need a bin?</h2>
        <p>
          No. A pile works. But a bin has three practical benefits: it keeps the pile tidy, blocks some ground pests from entering from below, and retains heat and moisture better in hot or windy weather.
        </p>
        <p>
          A{" "}
          <Link href="/best-tumbler-composter" className="text-primary underline">tumbler composter</Link>{" "}
          adds one more benefit: turning the pile takes 10 seconds. For a busy kitchen composter who wants fast results without managing a pile by hand, a tumbler is worth the $80-130 investment.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">How to compost in an apartment</h2>
        <p>
          An apartment kitchen has two composting options: a worm bin or an electric composter.
        </p>
        <p>
          A{" "}
          <Link href="/best-worm-composter" className="text-primary underline">worm bin</Link>{" "}
          fits under the kitchen counter. It has no smell when managed correctly. It produces the richest plant food of any composting method. It does not accept meat, dairy, or cooked food.
        </p>
        <p>
          An electric composter like Lomi accepts all inputs, takes up countertop space, and produces dry material in 4-20 hours. It costs more upfront. It is the right choice for a household that throws away meat and dairy regularly.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">How to use finished compost</h2>
        <p>
          Mix finished compost into garden beds at 1-3 inches per season, worked into the top 6 inches of soil. Use 10-20% compost by volume in potting mixes. Top-dress lawns at 0.5 inches, then water in. Apply around established trees and shrubs as a 1-2 inch mulch ring.
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
          <li><Link href="/composting-basics" className="text-sm text-primary hover:underline">Composting Basics — Carbon, Nitrogen, and What Matters</Link></li>
          <li><Link href="/composting-mistakes" className="text-sm text-primary hover:underline">Common Composting Mistakes and How to Fix Them</Link></li>
          <li><Link href="/best-compost-bin" className="text-sm text-primary hover:underline">Best Compost Bins — All Types Ranked</Link></li>
          <li><Link href="/lomi-review" className="text-sm text-primary hover:underline">Lomi Electric Composter Review</Link></li>
        </ul>
      </section>
    </article>
  );
}
