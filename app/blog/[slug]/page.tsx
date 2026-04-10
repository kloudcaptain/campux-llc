import { notFound } from "next/navigation"
import Link from "next/link"
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/app/data/blog"
import { ArrowLeft, ArrowRight } from "lucide-react"

const siteUrl = "https://nexcore.io"
const HERO_SLUG = "the-infrastructure-nobody-thinks-about"

// ─── Per-category service CTAs ────────────────────────────────────────────────

const serviceCTA: Record<string, {
  service: string
  headline: string
  body: string
  primary: { label: string; href: string }
  secondary: { label: string; href: string }
}> = {
  "AI & Engineering": {
    service: "Cloud & Infrastructure",
    headline: "AI in production is an infrastructure problem",
    body: "Unpredictable load, versioned models, GPU cost at scale — we design the cloud architecture that makes AI systems reliable beyond the demo.",
    primary: { label: "Explore infrastructure services", href: "/#services" },
    secondary: { label: "See client results", href: "/solutions" },
  },
  "Security & Compliance": {
    service: "Security Operations",
    headline: "Compliance shouldn't consume your engineering team",
    body: "We automate policy enforcement and compliance evidence pipelines, and help organisations maintain ISO 27001, SOC 2, and HIPAA posture — without the quarterly scramble.",
    primary: { label: "See how we do it", href: "/solutions" },
    secondary: { label: "Talk to our team", href: "/contact" },
  },
  "DevOps & Deployment": {
    service: "Managed Infrastructure",
    headline: "Deployments that don't require a ritual",
    body: "We design CI/CD pipelines, deployment strategies, and monitoring setups that make shipping feel routine. If your releases still require a checklist and a prayer, let's talk.",
    primary: { label: "Explore our services", href: "/#services" },
    secondary: { label: "See client results", href: "/solutions" },
  },
  "Engineering Culture": {
    service: "Infrastructure & Operations",
    headline: "Good infrastructure is invisible. Let's keep it that way.",
    body: "We help organisations build the systems, runbooks, and on-call practices that keep the 3am calls from happening. Quiet is the goal.",
    primary: { label: "Talk to our team", href: "/contact" },
    secondary: { label: "See client results", href: "/solutions" },
  },
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

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
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
      tags: post.tags,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  }
}

const categoryColour: Record<string, string> = {
  "AI & Engineering":      "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Security & Compliance": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "DevOps & Deployment":   "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Engineering Culture":   "bg-amber-500/10 text-amber-400 border-amber-500/20",
}

function categoryClass(cat: string) {
  return categoryColour[cat] ?? "bg-white/10 text-gray-400 border-white/10"
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const isHero = slug === HERO_SLUG
  const heroPost = isHero ? null : getPostBySlug(HERO_SLUG)
  const related = getRelatedPosts(slug, 3).filter((p) => p.slug !== HERO_SLUG)
  const cta = serviceCTA[post.category] ?? serviceCTA["Engineering Culture"]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "NexCore", url: siteUrl },
    publisher: {
      "@type": "Organization",
      name: "NexCore",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
    },
    url: `${siteUrl}/blog/${post.slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/${post.slug}` },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          {/* Category + tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${categoryClass(post.category)}`}>
              {post.category}
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-500 border border-white/8"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-12 pb-12 border-b border-white/10">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          {/* Article body */}
          <article>
            {post.sections.map((section, si) => (
              <div key={si} className="mb-10">
                {section.heading && (
                  <h2 className="text-2xl font-semibold text-white mb-5">{section.heading}</h2>
                )}
                {section.paragraphs.map((para, pi) => (
                  <p key={pi} className="text-gray-300 text-lg leading-relaxed mb-5">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </article>

          {/* ── Contextual service CTA ── */}
          <div className="mt-16 border-l-2 border-cyan-500/40 pl-6 py-1">
            <p className="text-xs text-cyan-500/70 uppercase tracking-widest font-medium mb-3">
              {cta.service}
            </p>
            <h3 className="text-white font-semibold text-xl mb-2 leading-snug">
              {cta.headline}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {cta.body}
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href={cta.primary.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-black bg-cyan-500 hover:bg-cyan-400 px-5 py-2.5 rounded-full transition-colors"
              >
                {cta.primary.label}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href={cta.secondary.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {cta.secondary.label}
              </Link>
            </div>
          </div>

          {/* ── Hero article nudge (all posts except the hero itself) ── */}
          {!isHero && heroPost && (
            <div className="mt-12 rounded-xl bg-[#111] border border-white/8 p-6">
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">
                Start here
              </p>
              <p className="text-gray-400 text-sm mb-3">
                If infrastructure reliability is relevant to your work, this piece ties together a lot of what we write about.
              </p>
              <Link
                href={`/blog/${HERO_SLUG}`}
                className="group inline-flex items-center gap-2 text-white text-sm font-medium hover:text-cyan-400 transition-colors"
              >
                {heroPost.title}
                <ArrowRight className="w-3.5 h-3.5 text-cyan-500 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          )}

          {/* ── Related posts ── */}
          {related.length > 0 && (
            <div className="mt-12 pt-10 border-t border-white/8">
              <h2 className="text-lg font-semibold text-white mb-5">Continue reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group block rounded-xl bg-[#1a1a1a] border border-white/8 p-5 hover:border-cyan-500/20 transition-colors"
                  >
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${categoryClass(rp.category)} mb-3 inline-block`}>
                      {rp.category}
                    </span>
                    <p className="text-white text-sm font-medium leading-snug line-clamp-2 group-hover:text-cyan-50 transition-colors">
                      {rp.title}
                    </p>
                    <p className="text-xs text-gray-600 mt-2">{rp.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  )
}
