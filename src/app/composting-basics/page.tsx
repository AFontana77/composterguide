import type { Metadata } from "next";
import Link from "next/link";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "Composting Basics (2026) — What Actually Makes Compost Work",
  description:
    "Composting basics explained simply. The carbon-to-nitrogen ratio, moisture, aeration, and how to fix a pile that is not working. No jargon.",
  alternates: { canonical: "https://www.composterguide.com/composting-basics" },
};

const TITLE = "Composting Basics";
const DESC = "The carbon-to-nitrogen ratio, moisture, and aeration: what actually drives composting.";
const URL = "https://www.composterguide.com/composting-basics";
const DATE = "2026-05-08";

const faqs = [
  {
    question: "What is composting?",
    answer:
      "Composting is the controlled breakdown of organic matter by microbes. You provide the right conditions: carbon, nitrogen, moisture, and air. Microbes do the work. The result is a stable, dark, earthy material that improves soil structure and feeds plants.",
  },
  {
    question: "What is the carbon-to-nitrogen ratio in composting?",
    answer:
      "The ideal ratio is 25:1 to 30:1 carbon to nitrogen by weight. High-carbon browns include dry leaves (60:1), cardboard (400:1), and straw. High-nitrogen greens include food scraps (15:1), coffee grounds (20:1), and fresh grass clippings (15:1). A pile that smells like ammonia has too much nitrogen. A pile that does not break down has too much carbon.",
  },
  {
    question: "How wet should a compost pile be?",
    answer:
      "The pile should feel like a wrung-out sponge: moist but not dripping. Squeeze a handful of compost. A few drops of water should fall, not a stream. Too wet and the pile goes anaerobic and smells. Too dry and decomposition stops.",
  },
  {
    question: "Why is my compost pile not heating up?",
    answer:
      "Three common causes: not enough nitrogen (add food scraps or coffee grounds), too dry (water the pile), or too small (piles smaller than 3x3 feet do not hold heat well). A hot pile means active decomposition. Temperatures of 130-160 degrees Fahrenheit kill weed seeds and pathogens.",
  },
  {
    question: "How long does composting take?",
    answer:
      "A hot pile that is turned every 2-3 days with the right ratio finishes in 3-6 weeks. A cold pile that is rarely turned takes 3-12 months. A tumbler with proper ratio finishes in 4-8 weeks. Electric composters like Lomi dehydrate scraps in 4-20 hours, but the output still needs weeks in soil to fully break down.",
  },
  {
    question: "What should not go in a compost pile?",
    answer:
      "Meat, dairy, oily food, and cooked food attract pests in outdoor piles and can go anaerobic. Pet waste and human waste carry pathogens. Diseased plant material can spread disease through the finished compost. Treated wood scraps contain chemicals. Electric composters handle meat and dairy but outdoor bins should not.",
  },
];

export default function CompostingBasicsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <ArticleSchema title={TITLE} description={DESC} url={URL} datePublished={DATE} dateModified={DATE} />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.composterguide.com" }, { name: "Composting Basics", url: URL }]} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Composting Basics</li>
        </ol>
      </nav>

      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Beginner Guide</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-4">
          Composting Basics: What Actually Makes It Work
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Most composting problems come from one of two things: wrong carbon-to-nitrogen ratio, or wrong moisture level. Get those right and a pile almost runs itself.
        </p>
      </header>

      <div className="prose max-w-none space-y-6 text-muted-foreground leading-relaxed">

        <h2 className="font-heading font-bold text-2xl text-foreground">What composting actually is</h2>
        <p>
          Composting is decomposition under controlled conditions. You are not making compost. You are creating the right conditions for microbes to make it for you. Bacteria, fungi, and other organisms break down organic material into a stable form that looks and smells like dark, earthy soil.
        </p>
        <p>
          The output is called finished compost or humus. It adds nutrients to soil, improves water retention, and feeds soil microbes. A handful of finished compost contains billions of beneficial organisms.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">The carbon-to-nitrogen ratio</h2>
        <p>
          This is the most important variable in composting. Microbes need carbon for energy and nitrogen to build proteins. The ideal ratio is about 25:1 to 30:1 carbon to nitrogen.
        </p>
        <p>
          In practice, this means mixing browns (high-carbon) with greens (high-nitrogen) in roughly a 3:1 ratio by volume.
        </p>

        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
            <p className="text-sm font-bold text-amber-900 uppercase tracking-wide mb-3">Browns (High Carbon)</p>
            <ul className="space-y-1 text-sm text-amber-800">
              {["Dry leaves (C:N ~60:1)", "Cardboard, shredded (~400:1)", "Paper bags, newspaper (~170:1)", "Straw (~80:1)", "Wood chips (~400:1)", "Corn stalks (~75:1)"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-green-50 border border-green-200 p-5">
            <p className="text-sm font-bold text-green-900 uppercase tracking-wide mb-3">Greens (High Nitrogen)</p>
            <ul className="space-y-1 text-sm text-green-800">
              {["Fruit and vegetable scraps (~15:1)", "Coffee grounds (~20:1)", "Fresh grass clippings (~15:1)", "Eggshells (neutral)", "Tea bags (~15:1)", "Plant trimmings (~25:1)"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-2">How to read your pile</h2>
        <p>
          Your compost pile tells you exactly what it needs. Learn to read it.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Ammonia smell:</strong> Too much nitrogen. Add browns. Cardboard or dry leaves work fast.</li>
          <li><strong>No activity, no heat:</strong> Too dry, too much carbon, or pile is too small. Add water and green material. Turn the pile.</li>
          <li><strong>Wet and smelly (sulfur, rotten egg):</strong> Anaerobic. Pile is too wet and lacks oxygen. Add dry material, turn the pile, and stop covering it tightly.</li>
          <li><strong>Hot in the center only:</strong> Pile is too small. Add more material on all sides or build a second pile and combine them.</li>
        </ul>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Moisture: the wrung-out sponge rule</h2>
        <p>
          Grab a handful of compost and squeeze it. A few drops of water should fall. That is the right moisture level. No drops means too dry. A stream of water means too wet.
        </p>
        <p>
          Moisture is easy to fix. Too dry: water the pile when you turn it. Too wet: add dry carbon material (cardboard, straw) and turn to expose wet material to air.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Aeration: why turning matters</h2>
        <p>
          Aerobic microbes need oxygen. Without regular turning, the pile becomes anaerobic. Anaerobic decomposition is much slower and produces unpleasant smells.
        </p>
        <p>
          Turning a pile every 2-3 days produces finished compost in 3-6 weeks. Turning once a week produces compost in 2-3 months. An unturned pile takes 6-12 months.
        </p>
        <p>
          A tumbler composter makes turning a 10-second task. Read our{" "}
          <Link href="/best-tumbler-composter" className="text-primary underline">tumbler composter guide</Link>{" "}
          if turning an open pile does not appeal.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Particle size</h2>
        <p>
          Smaller pieces decompose faster. A whole cardboard box takes months. Shredded cardboard takes weeks. Chop or shred inputs when possible. For kitchen scraps, smaller pieces break down faster in the pile. Large chunks slow the process.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">What not to compost outdoors</h2>
        <p>
          Meat, dairy, oily food, and cooked food attract pests in outdoor piles. They also slow decomposition. Standard outdoor bins and piles should stick to fruit scraps, vegetable peels, coffee grounds, eggshells, and dry plant material.
        </p>
        <p>
          If you want to compost meat and dairy, an electric composter like{" "}
          <Link href="/lomi-review" className="text-primary underline">Lomi</Link>{" "}
          handles those inputs without attracting pests.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">When compost is finished</h2>
        <p>
          Finished compost is dark brown to black, crumbly, and smells earthy. Individual inputs are no longer identifiable. It has cooled down to ambient temperature and holds that temperature through a full pile turn.
        </p>
        <p>
          If you can identify apple cores and egg shells, it is not done. Give it more time and more turns.
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
        <h2 className="font-heading font-bold text-base text-foreground mb-3">Next steps</h2>
        <ul className="space-y-2">
          <li><Link href="/how-to-compost" className="text-sm text-primary hover:underline">How to Compost — 5 Steps for Beginners</Link></li>
          <li><Link href="/composting-mistakes" className="text-sm text-primary hover:underline">Common Composting Mistakes and Fixes</Link></li>
          <li><Link href="/best-compost-bin" className="text-sm text-primary hover:underline">Best Compost Bins — Tested and Ranked</Link></li>
          <li><Link href="/best-tumbler-composter" className="text-sm text-primary hover:underline">Best Tumbler Composter for Fast Results</Link></li>
        </ul>
      </section>
    </article>
  );
}
