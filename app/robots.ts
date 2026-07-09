import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const siteUrl = "https://campux.co"

// AI crawlers we deny. Google-Extended is intentionally NOT here — we allow
// Google's AI (AI Overviews / Gemini grounding) to use the content.
const blockedAiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "Applebot-Extended",
  "meta-externalagent",
  "PerplexityBot",
  "Google-CloudVertexBot",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: blockedAiBots,
        disallow: ["/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
