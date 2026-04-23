import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const siteUrl = "https://campux.co"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campux — Managed Infrastructure & Security Operations | US",
    template: "%s | Campux",
  },
  description:
    "US-based managed infrastructure and security operations. We run your servers, cloud environments, networks, databases, and compliance posture — one team, one contract, no handoffs.",
  keywords: [
    "managed infrastructure US",
    "managed IT services",
    "managed security operations",
    "cloud infrastructure management",
    "ISO 27001 managed service",
    "SOC 2 compliance",
    "HIPAA compliance US",
    "PCI-DSS managed service",
    "Cyber Essentials",
    "server management",
    "network engineering",
    "database management",
    "DevOps managed service",
    "government IT management",
    "healthcare IT infrastructure",
  ],
  authors: [{ name: "Campux", url: siteUrl }],
  creator: "Campux",
  publisher: "Campux",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Campux",
    title: "Campux — Managed Infrastructure & Security Operations | US",
    description:
      "US-based managed infrastructure and security operations. Server estates, cloud environments, networks, databases, and compliance posture — operated as one accountable function.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Campux — Managed Infrastructure & Security Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campux — Managed Infrastructure & Security Operations",
    description:
      "US-based managed infrastructure and security operations for healthcare, financial services, and government. One team. No handoffs.",
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
  verification: {
    // Add Google Search Console verification token here when available
    // google: "your-verification-token",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "Campux",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
      },
      description:
        "US-based managed infrastructure and security operations firm. We take operational ownership of server estates, cloud environments, networks, databases, and security posture.",
      foundingDate: "2023",
      areaServed: [
        { "@type": "Country", name: "United States" },
      ],
      knowsAbout: [
        "Managed Infrastructure",
        "Security Operations",
        "ISO 27001",
        "SOC 2",
        "HIPAA",
        "PCI-DSS",
        "NIST",
        "Cyber Essentials",
        "Cloud Infrastructure",
        "Network Engineering",
        "Database Management",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Managed IT Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Server Infrastructure Management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Environment Management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Security Operations" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Network Engineering" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Database Management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Integrated Managed IT" } },
        ],
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "project@campux.co",
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: "English",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Campux",
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/insights?q={search_term_string}` },
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
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
