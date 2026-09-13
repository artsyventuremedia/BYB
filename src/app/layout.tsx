import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://bybfilms.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BYB Films — Post Production & Media House",
    template: "%s — BYB Films",
  },
  description:
    "BYB Films is a creative production house crafting film, photography and visual experiences through production, post-production and emerging visual technologies.",
  openGraph: {
    title: "BYB Films — Post Production & Media House",
    description:
      "A creative production house crafting film, photography and visual experiences for brands who don't want to look like everyone else.",
    url: siteUrl,
    siteName: "BYB Films",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BYB Films — Post Production & Media House",
    description:
      "A creative production house crafting film, photography and visual experiences.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BYB Films",
              url: siteUrl,
              description:
                "Creative production house specializing in film, post-production, photography and 3D visual content.",
              sameAs: [
                "https://instagram.com",
                "https://vimeo.com",
                "https://youtube.com",
                "https://linkedin.com",
              ],
            }),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <CustomCursor />
          <div className="grain" aria-hidden="true" />
          <Navbar />
          <PageTransition>
            <main id="main">{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
