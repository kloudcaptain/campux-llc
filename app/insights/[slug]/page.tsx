import { notFound } from "next/navigation"
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/app/data/blog"
import ArticleClient from "./ArticleClient"

const siteUrl = "https://campux.co"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${siteUrl}/insights/${post.slug}` },
    openGraph: {
      title: `${post.title} | Campux`,
      description: post.excerpt,
      type: "article",
      url: `${siteUrl}/insights/${post.slug}`,
      publishedTime: post.date,
      tags: post.tags,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: post.title }],
      siteName: "Campux",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/og-image.png"],
    },
  }
}

export default async function InsightsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Campux",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Campux",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/insights/${post.slug}`,
    },
    url: `${siteUrl}/insights/${post.slug}`,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    inLanguage: "en-US",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleClient post={post} related={related} />
    </>
  )
}
