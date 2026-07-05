'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import type { BlogPost } from '@/app/data/blog'
import Nav from '../../components/Nav'

const serif = "var(--font-dm-serif), Georgia, serif"

const gradients: Record<string, string> = {
  'Engineering Culture': 'linear-gradient(140deg,#c85a20,#7a1a18,#2a0818)',
  'Security':            'linear-gradient(140deg,#1a2a4a,#0a1020,#080818)',
  'DevOps & Deployment': 'linear-gradient(140deg,#1a3a5a,#0a1a30,#080e18)',
  'AI & Engineering':    'linear-gradient(140deg,#3a1a5a,#1a0a2a,#100818)',
}

const categoryImages: Record<string, string> = {
  'Engineering Culture': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&q=80&auto=format',
  'Security':            'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop&q=80&auto=format',
  'DevOps & Deployment': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80&auto=format',
  'AI & Engineering':    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop&q=80&auto=format',
}

export default function ArticleClient({ post, related }: { post: BlogPost; related: BlogPost[] }) {
  // Reading progress bar
  useEffect(() => {
    const bar = document.getElementById('reading-progress')
    if (!bar) return
    const onScroll = () => {
      const doc = document.documentElement
      const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100
      bar.style.width = Math.min(pct, 100) + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const heroGradient = gradients[post.category] ?? 'linear-gradient(140deg,#c85a20,#7a1a18)'

  return (
    <div style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: 17, lineHeight: 1.7, background: '#f0ebe2', color: '#1a1a1a', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* Reading progress */}
      <div id="reading-progress" style={{ position: 'fixed', top: 0, left: 0, height: 2, background: '#c04818', zIndex: 1000, width: '0%', transition: 'width 0.1s' }} />

      <Nav theme="light" active="insights" ctaLabel="Get in touch" />

      {/* ── ARTICLE ── */}
      <main className="rsp-article-main" style={{ maxWidth: 1160, margin: '0 auto', padding: '56px 48px 120px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 80, alignItems: 'start' }}>

        <article>
          {/* Back */}
          <Link href="/insights" className="fu link-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, marginBottom: 36 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            Back
          </Link>

          {/* Title */}
          <h1 className="fu" style={{ fontFamily: serif, fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, color: '#1a1a1a', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>
            {post.title}
          </h1>

          {/* Meta */}
          <div className="fu2" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 10, fontWeight: 700, background: '#1a1a1a', color: 'white', padding: '3px 9px', borderRadius: 3, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{post.category}</span>
            <span style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)' }}>{new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span style={{ fontSize: 13, color: 'rgba(0,0,0,0.25)' }}>·</span>
            <span style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)' }}>{post.readTime}</span>
          </div>

          {/* Hero image */}
          <div className="fu2" style={{ borderRadius: 8, overflow: 'hidden', marginBottom: 48, background: heroGradient, minHeight: 380, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 36, position: 'relative' }}>
            <img src={categoryImages[post.category] ?? 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&q=80&auto=format'} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2, mixBlendMode: 'luminosity', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(135deg,transparent,transparent 24px,rgba(255,255,255,0.02) 24px,rgba(255,255,255,0.02) 25px)' }} />
            <div style={{ position: 'relative' }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: 'white', letterSpacing: '-0.02em', marginBottom: 8 }}>Campux</p>
              <p style={{ fontSize: 22, fontWeight: 600, color: 'white', lineHeight: 1.25, letterSpacing: '-0.025em', maxWidth: 400 }}>{post.title}</p>
            </div>
          </div>

          {/* Body */}
          <div className="article-body">
            {post.sections.map((section, si) => (
              <div key={si}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map((para, pi) => (
                  <p key={pi}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </article>

        {/* ── SIDEBAR ── */}
        <aside className="rsp-sidebar" style={{ position: 'sticky', top: 100 }}>
          {/* Author */}
          <div style={{ background: 'white', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 10, padding: 28, marginBottom: 20 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginBottom: 16 }}>Written by</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#c85a20,#7a1a18)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: 'white' }}>T</span>
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a', letterSpacing: '-0.01em' }}>Campux</p>
                <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.45)' }}>Enterprise IT</p>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.5)', lineHeight: 1.65 }}>Notes on infrastructure, security, and the operational decisions that matter — from people who&apos;ve had to make them.</p>
          </div>

          {/* More posts */}
          {related.length > 0 && (
            <div style={{ background: 'white', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 10, padding: 28, marginBottom: 20 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginBottom: 20 }}>More Insights</p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {related.map((rp, i) => (
                  <Link key={rp.slug} href={`/insights/${rp.slug}`}
                    style={{ padding: '14px 0', borderBottom: i < related.length - 1 ? '1px solid rgba(0,0,0,0.07)' : undefined, display: 'block', transition: 'color 0.15s', color: '#1a1a1a' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#c04818')}
                    onMouseOut={e => (e.currentTarget.style.color = '#1a1a1a')}>
                    <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.4)', marginBottom: 5 }}>{rp.category} · {new Date(rp.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                    <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.4 }}>{rp.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div style={{ background: '#1a1a1a', borderRadius: 10, padding: 28 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: 'white', lineHeight: 1.4, marginBottom: 12, letterSpacing: '-0.01em' }}>Something here resonate?</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 20 }}>We work with companies that have real infrastructure problems — not just ones looking for a vendor to sign off on.</p>
            <Link href="/#contact-form" style={{ display: 'block', background: 'white', color: '#1a1a1a', padding: '11px 20px', borderRadius: 6, fontSize: 13, fontWeight: 700, textAlign: 'center', transition: 'opacity 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseOut={e => (e.currentTarget.style.opacity = '1')}>
              Get in touch
            </Link>
          </div>
        </aside>
      </main>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && (
        <section style={{ background: 'white', borderTop: '1px solid rgba(0,0,0,0.08)', padding: '60px 48px' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: 32 }}>More from Campux</p>
            <div className="rsp-related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {related.map((rp, i) => (
                <Link key={rp.slug} href={`/insights/${rp.slug}`} style={{ display: 'flex', flexDirection: 'column', gap: 10, transition: 'opacity 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.opacity = '0.75')}
                  onMouseOut={e => (e.currentTarget.style.opacity = '1')}>
                  <div style={{ background: gradients[rp.category] ?? `linear-gradient(140deg,#2a1a10,#100808)`, borderRadius: 8, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                    <img src={categoryImages[rp.category] ?? 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop&q=80&auto=format'} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18, mixBlendMode: 'luminosity', pointerEvents: 'none' }} />
                    <span style={{ position: 'relative', fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace', letterSpacing: '0.08em' }}>{rp.category}</span>
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 700, background: '#1a1a1a', color: 'white', padding: '2px 8px', borderRadius: 2, letterSpacing: '0.08em', textTransform: 'uppercase', alignSelf: 'flex-start' }}>{rp.category.split(' ')[0].toUpperCase()}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a', lineHeight: 1.4, letterSpacing: '-0.01em' }}>{rp.title}</h3>
                  <span style={{ fontSize: 13, color: '#c04818' }}>Read more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FOOTER ── */}
      <footer style={{ background: '#1a1a1a', padding: '48px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="22" height="22" viewBox="0 0 36 36" fill="none">
              <rect x="3" y="3" width="13" height="13" rx="3" fill="white" />
              <rect x="20" y="3" width="13" height="13" rx="3" fill="white" opacity="0.35" />
              <rect x="3" y="20" width="13" height="13" rx="3" fill="white" opacity="0.35" />
              <rect x="20" y="20" width="13" height="13" rx="3" fill="white" />
            </svg>
            <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: '-0.04em', color: 'white' }}>Campux</span>
          </Link>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2026 Campux. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/terms" style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', transition: 'color 0.15s' }} onMouseOver={e => (e.currentTarget.style.color = 'white')} onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}>Terms &amp; Conditions</Link>
            <Link href="/privacy-policy" style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', transition: 'color 0.15s' }} onMouseOver={e => (e.currentTarget.style.color = 'white')} onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}>Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
