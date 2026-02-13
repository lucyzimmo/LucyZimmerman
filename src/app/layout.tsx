import { Crimson_Pro } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const crimson = Crimson_Pro({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const siteUrl = "https://lucyzimmo.github.io/LucyZimmerman";

export const metadata: Metadata = {
  title: "Lucy Zimmerman | Portfolio",
  description:
    "Lucy Zimmerman's personal portfolio and website. AI research, ML pipelines, full-stack engineering, and human-centered technology. Stanford CS.",
  keywords: [
    "Lucy Zimmerman",
    "Lucy Zimmerman website",
    "Lucy Zimmerman portfolio",
    "Lucy Zimmerman Stanford",
    "Lucy Zimmerman AI",
    "Lucy Zimmerman ML",
  ],
  authors: [{ name: "Lucy Zimmerman", url: siteUrl }],
  creator: "Lucy Zimmerman",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Lucy Zimmerman | Portfolio",
    description: "Lucy Zimmerman's portfolio — AI research, ML, full-stack engineering. Stanford CS.",
    siteName: "Lucy Zimmerman",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucy Zimmerman | Portfolio",
    description: "Lucy Zimmerman's portfolio — AI research, ML, full-stack engineering.",
  },
  robots: "index, follow",
  metadataBase: new URL(siteUrl),
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lucy Zimmerman",
  url: siteUrl,
  description:
    "Lucy Zimmerman's personal portfolio. AI research, ML pipelines, full-stack engineering, and human-centered technology. Stanford CS.",
  sameAs: [
    "https://github.com/lucyzimmo",
    'https://www.linkedin.com/in/lucyzimmo/',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${crimson.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
