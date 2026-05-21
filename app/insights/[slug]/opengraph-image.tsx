import { ImageResponse } from "next/og"
import { blogPosts, getPostBySlug } from "@/app/data/blog"

export const dynamic = "force-static"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const title = post?.title ?? "Campux Insights"
  const category = post?.category ?? "Engineering"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #2a0a18 0%, #1a0612 45%, #0a0610 100%)",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#e05a2b",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {category}
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.1em",
          }}
        >
          CAMPUX
        </div>
      </div>
    ),
    { ...size }
  )
}
