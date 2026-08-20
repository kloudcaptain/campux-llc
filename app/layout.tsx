import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "@/app/components/MobileNav";

const siteUrl = "https://campux.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Campux — We build the cloud environment. Your team runs it. · Atlanta",
    template: "%s | Campux",
  },
  description:
    "Campux LLC builds and secures Microsoft Azure platforms, and AWS where you already run there, for public-sector and regulated organizations, then trains the internal team to run them. Atlanta, Georgia.",
  authors: [{ name: "Campux", url: siteUrl }],
  creator: "Campux",
  publisher: "Campux",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Campux",
    title: "Campux — We build the cloud environment. Your team runs it.",
    description:
      "Azure-first, AWS-capable cloud consulting for public-sector and regulated organizations. Architecture, DevSecOps, automation, FinOps and training. Atlanta, Georgia.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Campux" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campux — We build the cloud environment. Your team runs it.",
    description:
      "Azure-first, AWS-capable cloud consulting for public-sector and regulated organizations. Atlanta, Georgia.",
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
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US",
      },
      email: "victor@campux.co",
      telephone: "+1-770-750-5856",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
      },
      description:
        "Azure-first, AWS-capable cloud consulting for public-sector and regulated organizations. We build the cloud environment; your team runs it.",
      foundingDate: "2024",
      areaServed: [{ "@type": "Country", name: "United States" }],
      knowsAbout: [
        "Azure Cloud Architecture",
        "Azure Landing Zones",
        "Cloud Migration",
        "DevSecOps",
        "Infrastructure as Code",
        "Cloud FinOps",
        "IT Training",
      ],
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <a className="skip" href="#top">
          Skip to content
        </a>
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
