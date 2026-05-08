import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "Lomi vs Mill Kitchen Bin (2026) — Which Is Worth It?",
  description:
    "Lomi and Mill both sit on your counter and handle food waste. Mill uses a subscription model. Lomi is a one-time purchase. Here is the full comparison.",
  alternates: { canonical: "https://www.composterguide.com/lomi-vs-mill" },
};

const TITLE = "Lomi vs Mill Kitchen Bin (2026)";
const DESC = "Two countertop food waste systems, two very different models. Here is which one fits your life.";
const URL = "https://www.composterguide.com/lomi-vs-mill";
const DATE = "2026-05-08";

const faqs = [
  {
    question: "What is Mill and how does it work?",
    answer:
      "Mill is a countertop food-waste machine that dehydrates scraps overnight into a dry food grounds material. Mill then ships those grounds to chicken farms as feed. The machine costs $45-60 per month on a subscription, which includes shipping. You never need to manage compost yourself.",
  },
  {
    question: "Is Lomi better than Mill?",
    answer:
      "Lomi is better if you want to compost at home and add the output to your garden. Mill is better if you want to reduce food waste with zero effort and do not care where the scraps go. Mill's subscription handles the end product for you. Lomi leaves the output in your hands.",
  },
  {
    question: "How much does Mill cost over time?",
    answer:
      "Mill costs $45-60 per month plus a device fee ($75-100 one-time). Over three years that is $1,700-2,200. Lomi costs $400-500 upfront plus $100-140 per year in filters and electricity. Over three years Lomi costs $700-920 total. Lomi is significantly cheaper over the long term.",
  },
  {
    question: "Does Mill produce compost?",
    answer:
      "No. Mill dehydrates food waste into a dried grounds material, which Mill collects and sends to poultry farms. You do not get anything back for your garden. If you want output for plants, Lomi or a standard compost bin is the right choice.",
  },
  {
    question: "Can Mill handle meat and dairy?",
    answer:
      "Yes. Mill accepts meat, dairy, and cooked food. This is a shared advantage between Mill and Lomi over standard outdoor bins.",
  },
];

export default function LomiVsMillPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <ArticleSchema title={TITLE} description={DESC} url={URL} datePublished={DATE} dateModified={DATE} />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.composterguide.com" }, { name: "Reviews", url: "https://www.composterguide.com/best-compost-bin" }, { name: "Lomi vs Mill", url: URL }]} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/best-compost-bin" className="hover:text-primary transition-colors">Reviews</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Lomi vs Mill</li>
        </ol>
      </nav>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 text-sm text-amber-900">
        <strong>Affiliate disclosure:</strong> We earn a commission on qualifying purchases.
      </div>

      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Head to Head</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-4">
          Lomi vs Mill Kitchen Bin: Buy Once or Subscribe Forever?
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Lomi is a one-time purchase you manage yourself. Mill is a subscription that handles your food waste from start to finish. The right choice depends on what you actually want out of a food-waste system.
        </p>
      </header>

      <div className="not-prose my-8 rounded-2xl overflow-hidden border border-border">
        <div className="bg-secondary/40 px-4 py-3 border-b border-border">
          <p className="text-sm font-bold text-foreground uppercase tracking-wide">Lomi vs Mill at a Glance</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Feature</th>
                <th className="px-4 py-3 text-left font-semibold text-primary">Lomi</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Mill</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Model", "One-time purchase", "Monthly subscription"],
                ["Upfront cost", "~$400-500", "~$75-100 device fee"],
                ["Monthly cost", "$8-12 (filters + electricity)", "$45-60 (subscription)"],
                ["3-year total cost", "~$700-920", "~$1,700-2,200"],
                ["Output", "Earthy dry material for soil", "None (Mill ships it out)"],
                ["Accepts meat/dairy", "Yes", "Yes"],
                ["Cycle time", "4-20 hours", "Overnight"],
                ["What happens to scraps", "You manage the output", "Mill ships to chicken farms"],
              ].map(([feature, lomi, mill]) => (
                <tr key={feature} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 text-muted-foreground">{feature}</td>
                  <td className="px-4 py-3 text-foreground font-medium">{lomi}</td>
                  <td className="px-4 py-3 text-foreground">{mill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="prose max-w-none space-y-6 text-muted-foreground leading-relaxed">

        <h2 className="font-heading font-bold text-2xl text-foreground">The key difference: ownership vs service</h2>
        <p>
          Lomi is a product. You own it. You run cycles when you want. You use the output in your garden or compost pile. The ongoing cost is filter replacements and electricity.
        </p>
        <p>
          Mill is a service. They lease you a machine, collect your dried food grounds by mail, and send them to poultry farms. You never touch compost material. But you pay every month, forever, as long as you use it.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">The 3-year cost math</h2>
        <p>
          Over three years, Lomi costs $700-920 total (machine plus filters and electricity). Mill costs $1,700-2,200 total. If you compost primarily to reduce landfill waste and do not use the output for a garden, Mill removes all effort but costs about twice as much.
        </p>
        <p>
          If you grow plants, the math shifts further toward Lomi. Lomi output is worth $20-40 in soil amendments per year at retail prices. That erases another year of Lomi's operating cost.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Who should choose Mill</h2>
        <p>
          Mill is the right choice for someone who wants zero management. You load scraps overnight. A truck picks up the grounds once a month. Done. No cycles to run, no output to manage, no composting knowledge required.
        </p>
        <p>
          For apartment dwellers who do not garden and want food waste to stay out of landfill with no effort, Mill is a clean solution. The cost is real, but so is the convenience.
        </p>

        <h2 className="font-heading font-bold text-2xl text-foreground mt-6">Who should choose Lomi</h2>
        <p>
          Lomi is better for anyone who gardens, or anyone who wants to own their system and not pay monthly. The output has real value as a soil amendment. The machine pays for itself faster than most appliances.
        </p>
        <p>
          Read the full{" "}
          <Link href="/lomi-review" className="text-primary underline">Lomi review</Link>{" "}
          for a detailed breakdown of all three modes and 30-cycle results.
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
        <h2 className="font-heading font-bold text-base text-foreground mb-3">Related reviews</h2>
        <ul className="space-y-2">
          <li><Link href="/lomi-review" className="text-sm text-primary hover:underline">Lomi Review — 30 Cycles, Honest Results</Link></li>
          <li><Link href="/lomi-vs-vitamix-foodcycler" className="text-sm text-primary hover:underline">Lomi vs Vitamix FoodCycler Comparison</Link></li>
          <li><Link href="/best-compost-bin" className="text-sm text-primary hover:underline">Best Compost Bins — All Types Compared</Link></li>
        </ul>
      </section>
    </article>
  );
}
