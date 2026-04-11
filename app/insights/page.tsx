import Link from "next/link"
import { blogPosts, type BlogPost } from "@/app/data/blog"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Insights",
  description:
    "Engineering insights on infrastructure, security, DevOps, and the craft of building software that holds up under real conditions. Written by practitioners, relevant to decision-makers.",
  keywords: [
    "infrastructure engineering", "DevOps", "security compliance", "policy as code",
    "deployment strategy", "cloud architecture", "engineering culture", "agile",
  ],
  openGraph: {
    title: "ThomsUp Insights — Engineering Perspectives Worth Reading",
    description:
      "Honest takes on infrastructure, deployment, security, and the craft of building software that holds up under real conditions.",
    type: "website",
  },
  alternates: { canonical: "https://thomsup.com/insights" },
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
  "AI & Engineering":    "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Security":            "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "DevOps & Deployment": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Engineering Culture": "bg-amber-500/10 text-amber-400 border-amber-500/20",
}

function categoryClass(cat: string) {
  return categoryColour[cat] ?? "bg-white/10 text-gray-400 border-white/10"
}

// ─── Static grid card ─────────────────────────────────────────────────────────

function GridCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
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

export default function InsightsPage() {
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
          ThomsUp Insights
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
          href={`/insights/${latest.slug}`}
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

      {/* ── All articles grid ── */}
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
