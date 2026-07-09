import { notFound } from "next/navigation"
import { blogAuthor, blogPosts, getPostBySlug, getRelatedPosts } from "@/app/data/blog"
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
    title: post.seoTitle ?? post.title,
    description: post.metaDescription ?? post.excerpt,
    alternates: { canonical: `${siteUrl}/insights/${post.slug}` },
    openGraph: {
      title: `${post.title} | Campux`,
      description: post.excerpt,
      type: "article",
      url: `${siteUrl}/insights/${post.slug}`,
      publishedTime: post.date,
      tags: post.tags,
      siteName: "Campux",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
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
    image: `${siteUrl}/insights/${post.slug}/opengraph-image`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: blogAuthor.name,
      jobTitle: blogAuthor.jobTitle,
      url: blogAuthor.url,
      worksFor: { "@type": "Organization", name: "Campux", url: siteUrl },
    },
    publisher: {
      "@type": "Organization",
      name: "Campux",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/opengraph-image`,
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
