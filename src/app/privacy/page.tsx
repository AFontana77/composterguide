import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for composterguide.com, operated by Anvil Road LLC.",
  alternates: { canonical: "https://www.composterguide.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
        Privacy Policy
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">Last updated: August 20, 2026</p>

      <div className="prose prose-stone max-w-none space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Anvil Road LLC (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates{" "}
          composterguide.com. This page explains what we collect when you visit, why we collect it,
          and what we do with it.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect standard web analytics data when you visit: your IP address, browser
          type, device type, pages viewed, time on page, and the site or app that referred
          you. We collect this through Google Analytics 4 and Google Tag Manager.
        </p>
        <p>
          We do not collect your name, email address, or phone number unless you
          voluntarily give it to us, for example by sending us a message.
        </p>

        <h2>Cookies</h2>
        <p>
          This site uses cookies. Cookies are small text files stored on your device. We
          use them for analytics and to support affiliate tracking. You can disable
          cookies in your browser settings, though parts of the site may stop working
          properly.
        </p>

        <h2>Affiliate Links</h2>
        <p>
          This site contains affiliate links, including links to Amazon. If you click one
          and buy something, the retailer may pay us a commission at no extra cost to you.
          When you click an affiliate link, the retailer may set its own cookie to track
          the referral. We do not have access to the data those retailers collect.
        </p>
        <p>As an Amazon Associate we earn from qualifying purchases.</p>

        <h2>Third-Party Services</h2>
        <p>
          We use Google Analytics 4, Google Tag Manager, and Amazon Associates. We may use
          other affiliate networks. Each of these has its own privacy policy, and we
          encourage you to read them.
        </p>

        <h2>Data Security</h2>
        <p>
          We take reasonable steps to protect the information we hold. No method of
          transmission over the internet is completely secure, so we cannot guarantee
          absolute security.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          This site is not directed at children under 13. We do not knowingly collect
          personal information from children under 13. If we learn we have, we will delete
          it promptly.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on where you live, you may have the right to access, correct, or
          delete the personal data we hold about you. Contact us if you want to exercise
          those rights.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy. Changes are posted on this page with a new date.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to Anvil Road LLC at{" "}
          <a href="mailto:editorial@anvilroad.com">editorial@anvilroad.com</a>.
        </p>
      </div>
    </article>
  );
}
