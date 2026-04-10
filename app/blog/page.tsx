import Link from "next/link"
import { blogPosts, type BlogPost } from "@/app/data/blog"
import { Marquee } from "@/components/ui/marquee"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog",
  description:
    "Engineering insights on infrastructure, security, DevOps, and the craft of building software that holds up under real conditions. Written by practitioners, relevant to decision-makers.",
  keywords: [
    "infrastructure engineering", "DevOps", "security compliance", "policy as code",
    "deployment strategy", "cloud architecture", "engineering culture", "agile",
  ],
  openGraph: {
    title: "NexCore Blog — Engineering Perspectives Worth Reading",
    description:
      "Honest takes on infrastructure, deployment, security, and the craft of building software that holds up under real conditions.",
    type: "website",
  },
  alternates: { canonical: "https://nexcore.io/blog" },
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

const categoryColour: Record<string, string> = {
  "AI & Engineering":     "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Security & Compliance":"bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "DevOps & Deployment":  "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Engineering Culture":  "bg-amber-500/10 text-amber-400 border-amber-500/20",
}

function categoryClass(cat: string) {
  return categoryColour[cat] ?? "bg-white/10 text-gray-400 border-white/10"
}

// ─── Marquee card ─────────────────────────────────────────────────────────────

function MarqueeCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block w-[22rem] shrink-0 rounded-xl bg-[#1a1a1a] border border-white/10 p-5 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_24px_rgba(6,182,212,0.12)]"
    >
      {/* Category + tag */}
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${categoryClass(post.category)}`}>
          {post.category}
        </span>
        {post.tags.slice(0, 1).map((tag) => (
          <span key={tag} className="text-xs text-gray-600">
            · {tag}
          </span>
        ))}
      </div>

      <h3 className="text-white font-semibold text-[15px] leading-snug mb-2 line-clamp-2 group-hover:text-cyan-50 transition-colors duration-200">
        {post.title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{formatDate(post.date)} · {post.readTime}</span>
        <span className="flex items-center gap-1 text-cyan-500 group-hover:gap-1.5 transition-all duration-200">
          Read <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  )
}

// ─── Static grid card (for SEO + browsing) ────────────────────────────────────

function GridCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl bg-[#111] border border-white/8 p-6 hover:border-cyan-500/30 transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className={`text-xs px-2.5 py-0.5 rounded-full border ${categoryClass(post.category)}`}>
          {post.category}
        </span>
      </div>
      <h3 className="text-white font-semibold leading-snug mb-2 group-hover:text-cyan-50 transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between text-xs text-gray-600">
        <span>{formatDate(post.date)}</span>
        <span>{post.readTime}</span>
      </div>
    </Link>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const latest = sorted[0]
  const rest   = sorted.slice(1)

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">

      {/* ── Page header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">
          The NexCore Blog
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5 leading-tight">
          Thinking out loud
          <br />
          <span className="text-gray-500">about hard infrastructure problems</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
          Written by engineers who run production systems for a living. No fluff,
          no vendor pitches — just the thinking we wish existed when we needed it.
        </p>

        {/* Category key */}
        <div className="flex flex-wrap gap-2 mt-8">
          {Object.entries(categoryColour).map(([cat, cls]) => (
            <span key={cat} className={`text-xs px-3 py-1 rounded-full border ${cls}`}>
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* ── Featured latest post ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <Link
          href={`/blog/${latest.slug}`}
          className="group block relative overflow-hidden rounded-2xl bg-[#111] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_50px_rgba(6,182,212,0.1)]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative p-8 sm:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 border border-cyan-500/30 rounded-full px-3 py-1">
                Latest
              </span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full border ${categoryClass(latest.category)}`}>
                {latest.category}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 max-w-2xl group-hover:text-cyan-50 transition-colors">
              {latest.title}
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-2xl">
              {latest.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                {formatDate(latest.date)} · {latest.readTime}
              </div>
              <span className="flex items-center gap-2 text-sm font-medium text-cyan-400 group-hover:gap-3 transition-all duration-200">
                Read article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ── Single continuous marquee — all articles ── */}
      <div className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <p className="text-xs text-gray-600 uppercase tracking-widest">All articles · scroll to browse</p>
        </div>

        <div className="relative w-full">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

          <Marquee className="[--gap:1.25rem] [--duration:90s] py-2" pauseOnHover>
            {sorted.map((post) => (
              <MarqueeCard key={post.slug} post={post} />
            ))}
          </Marquee>
        </div>
      </div>

      {/* ── Static grid — full index for SEO ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-2xl font-semibold text-white mb-8">All articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post) => (
            <GridCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      {/* ── Cross-links ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <div className="bg-[#111] border border-white/8 rounded-2xl p-8">
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-3">See the work</p>
            <h3 className="text-white font-semibold text-lg mb-3">
              Read about how we put these principles into practice
            </h3>
            <p className="text-gray-500 text-sm mb-5">
              Our case studies cover cloud migrations, compliance automation, and zero-trust security architecture — with measured outcomes.
            </p>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View client results <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-[#111] border border-white/8 rounded-2xl p-8">
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-3">Have a question</p>
            <h3 className="text-white font-semibold text-lg mb-3">
              Facing a challenge one of these articles touches on?
            </h3>
            <p className="text-gray-500 text-sm mb-5">
              We are happy to talk through your situation — whether you are exploring options or already committed to a direction and want a second opinion.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
