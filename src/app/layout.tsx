import type { Metadata } from "next";
import { Libre_Baskerville, Cabin } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cabin = Cabin({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ComposterGuide.com — Composting Tools That Work in Real Kitchens",
    template: "%s | ComposterGuide.com",
  },
  description:
    "Evidence-based reviews of electric composters, compost bins, worm bins, and tumblers. We test in real kitchens so you buy the right tool the first time.",
  metadataBase: new URL("https://www.composterguide.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ComposterGuide.com",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${cabin.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
