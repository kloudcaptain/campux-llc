import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://nexcore.io"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NexCore — Managed Infrastructure, Security & Cloud Operations",
    template: "%s — NexCore",
  },
  description:
    "NexCore delivers managed infrastructure, security operations, and cloud architecture for startups, enterprises, and government organisations that cannot afford downtime.",
  keywords: [
    "managed infrastructure",
    "security operations",
    "cloud architecture",
    "enterprise IT",
    "government IT",
    "ISO 27001",
    "SOC 2",
    "HIPAA compliance",
    "DevOps",
    "cloud migration",
    "zero trust security",
    "identity access management",
  ],
  authors: [{ name: "NexCore" }],
  creator: "NexCore",
  publisher: "NexCore",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "NexCore",
    title: "NexCore — Managed Infrastructure, Security & Cloud Operations",
    description:
      "Managed infrastructure, security operations, and cloud architecture for organisations where downtime is never an acceptable outcome.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexCore — Enterprise Infrastructure & Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexCore — Managed Infrastructure, Security & Cloud Operations",
    description:
      "Managed infrastructure, security operations, and cloud architecture for enterprises and government organisations.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "NexCore",
      url: siteUrl,
      description:
        "Managed infrastructure, security operations, and cloud architecture for enterprises and government organisations.",
      contactPoint: {
        "@type": "ContactPoint",
        email: "project@thomsup.com",
        contactType: "sales",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "NexCore",
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/blog?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
