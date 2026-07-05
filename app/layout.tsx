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
    default: "Campux — Azure Cloud Consulting & IT Training | Atlanta, GA",
    template: "%s | Campux",
  },
  description:
    "Atlanta-based Azure cloud consulting and IT training firm. Cloud architecture and migration, DevSecOps, FinOps, and hands-on Azure training. Founded 2024. Small, senior, hands-on.",
  keywords: [
    "Azure cloud consulting",
    "Azure migration Atlanta",
    "DevSecOps consulting",
    "cloud FinOps",
    "Azure IT training",
    "cloud architecture",
    "Bicep Terraform infrastructure as code",
    "Azure landing zones",
    "federal contractor cloud consulting",
  ],
  authors: [{ name: "Campux", url: siteUrl }],
  creator: "Campux",
  publisher: "Campux",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Campux",
    title: "Campux — Azure Cloud Consulting & IT Training | Atlanta, GA",
    description:
      "Atlanta-based Azure cloud consulting and IT training firm. We design, secure, and optimize Azure environments — and teach teams to run them.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Campux — Azure Cloud Consulting & IT Training, Atlanta GA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campux — Azure Cloud Consulting & IT Training",
    description:
      "Atlanta-based Azure cloud consulting and IT training firm. Founded 2024. Small, senior, hands-on.",
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
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "Campux",
      legalName: "CAMPUX LLC",
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lilburn",
        addressRegion: "GA",
        addressCountry: "US",
      },
      telephone: "+1-470-718-4440",
      sameAs: [
        // TODO: LinkedIn company URL
      ],
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
      },
      description:
        "Atlanta-based Azure cloud consulting and IT training firm. We design, secure, and optimize Azure environments, and teach teams to run them.",
      foundingDate: "2024",
      areaServed: [
        { "@type": "Country", name: "United States" },
      ],
      knowsAbout: [
        "Azure Cloud Architecture",
        "Cloud Migration",
        "DevSecOps",
        "Infrastructure as Code",
        "Cloud FinOps",
        "IT Training",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Azure Cloud Consulting & IT Training",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Architecture & Migration" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "DevSecOps & Automation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud FinOps & Cost Optimization" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Training & Curriculum Development" } },
        ],
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "victor@campux.co",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Campux",
      publisher: { "@id": `${siteUrl}/#organization` },
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
