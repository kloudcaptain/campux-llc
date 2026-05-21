import type { MetadataRoute } from "next"
import { blogPosts } from "@/app/data/blog"

export const dynamic = "force-static"

const siteUrl = "https://campux.co"

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/industries`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/solutions`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/insights`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: buildDate,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: buildDate,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }))

  return [...staticRoutes, ...blogRoutes]
}
