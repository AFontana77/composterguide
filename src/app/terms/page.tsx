import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for composterguide.com, operated by Anvil Road LLC.",
  alternates: { canonical: "https://www.composterguide.com/terms" },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
        Terms of Use
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">Last updated: August 20, 2026</p>

      <div className="prose prose-stone max-w-none space-y-4 text-muted-foreground leading-relaxed">
        <p>
          composterguide.com is operated by Anvil Road LLC. By using this site you agree to these
          terms. If you do not agree, please do not use the site.
        </p>

        <h2>Use of the Site</h2>
        <p>
          You may read and share our content for personal, non-commercial use. You may not
          republish, sell, or systematically copy our content without written permission.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          We earn commissions from qualifying purchases made through links on this site,
          including Amazon affiliate links. This costs you nothing extra. Commissions do
          not change which products we recommend or how we rank them.
        </p>
        <p>As an Amazon Associate we earn from qualifying purchases.</p>

        <h2>Product Information and Pricing</h2>
        <p>
          Prices and availability change often. Any price or availability shown on the
          retailer&apos;s site at the time of purchase is what applies. We do our best to
          keep product information current, but we cannot guarantee that every detail is
          accurate at the moment you read it.
        </p>

        <h2>No Warranty</h2>
        <p>
          This site is provided &quot;as is&quot;. We make no warranties about the
          accuracy, completeness, or fitness for a particular purpose of anything
          published here.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the extent permitted by law, Anvil Road LLC is not liable for any loss or
          damage arising from your use of this site or from any product you buy through a
          link on it.
        </p>

        <h2>External Links</h2>
        <p>
          We link to other websites we do not control. We are not responsible for their
          content, their products, or their privacy practices.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms. Changes are posted on this page with a new date.
        </p>

        <h2>Contact</h2>
        <p>
          Questions can be sent to Anvil Road LLC at{" "}
          <a href="mailto:editorial@anvilroad.com">editorial@anvilroad.com</a>.
        </p>
      </div>
    </article>
  );
}
