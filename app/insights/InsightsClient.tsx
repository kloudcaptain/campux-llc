'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import type { BlogPost } from '@/app/data/blog'

const CATEGORIES = ['All', 'Engineering Culture', 'Security', 'DevOps & Deployment', 'AI & Engineering']

const gradients: Record<string, string> = {
  'Engineering Culture': 'linear-gradient(140deg,#9a2810,#5a0a18)',
  'Security':            'linear-gradient(140deg,#1a2a4a,#0a1020)',
  'DevOps & Deployment': 'linear-gradient(140deg,#1a3a5a,#0a1a30)',
  'AI & Engineering':    'linear-gradient(140deg,#3a1a5a,#1a0a2a)',
}

const categoryImages: Record<string, string> = {
  'Engineering Culture': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80&auto=format',
  'Security':            'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop&q=80&auto=format',
  'DevOps & Deployment': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&q=80&auto=format',
  'AI & Engineering':    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop&q=80&auto=format',
}

function postGradient(cat: string, i: number) {
  return gradients[cat] ?? `linear-gradient(140deg,#2a${10 + i * 5}10,#100808)`
}

const serif = "var(--font-dm-serif), Georgia, serif"

export default function InsightsClient({ posts }: { posts: BlogPost[] }) {
  const [cat, setCat] = useState('All')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [mobMenu, setMobMenu] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  const featured = posts[0]
  const filtered = cat === 'All' ? posts.slice(1) : posts.filter(p => p.category === cat)

  // Scroll reveal for cards
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          obs.unobserve(el)
        }
      })
    }, { threshold: 0.08 })
    const cards = gridRef.current?.querySelectorAll('.post-card') ?? []
    cards.forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [filtered])

  return (
    <div style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: 16, lineHeight: 1.65, background: '#f0ebe2', color: '#1a1a1a', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ── NAV ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 200, background: 'rgba(240,235,226,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="rsp-nav-inner" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px', height: 68, display: 'flex', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flex: '0 0 auto', marginRight: 48 }}>
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
              <rect x="3" y="3" width="13" height="13" rx="3" fill="#1a1a1a" />
              <rect x="20" y="3" width="13" height="13" rx="3" fill="#1a1a1a" opacity="0.3" />
              <rect x="3" y="20" width="13" height="13" rx="3" fill="#1a1a1a" opacity="0.3" />
              <rect x="20" y="20" width="13" height="13" rx="3" fill="#1a1a1a" />
            </svg>
            <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: '-0.04em', color: '#1a1a1a' }}>Campux</span>
          </Link>
          <div className="rsp-nav-links" style={{ display: 'flex', gap: 2, flex: 1 }}>
            <Link href="/#services" className="link-dark" style={{ padding: '8px 14px', borderRadius: 6, fontSize: 14, fontWeight: 500 }}>Services</Link>
            <Link href="/insights" style={{ padding: '8px 14px', borderRadius: 6, fontSize: 14, fontWeight: 500, color: '#1a1a1a', background: 'rgba(0,0,0,0.06)' }}>Insights</Link>
            <Link href="/about" className="link-dark" style={{ padding: '8px 14px', borderRadius: 6, fontSize: 14, fontWeight: 500 }}>About</Link>
          </div>
          <Link href="/contact" style={{ background: '#1a1a1a', color: 'white', padding: '8px 18px', borderRadius: 6, fontSize: 13, fontWeight: 600 }} className="rsp-nav-links">
            Get in touch
          </Link>
          <button className="mob-hamburger" onClick={() => setMobMenu(true)} aria-label="Open menu" style={{ color: '#1a1a1a', background: 'rgba(0,0,0,0.07)', borderColor: 'rgba(0,0,0,0.15)' }}>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none"><rect y="0" width="18" height="2" rx="1" fill="currentColor"/><rect y="6" width="18" height="2" rx="1" fill="currentColor"/><rect y="12" width="18" height="2" rx="1" fill="currentColor"/></svg>
          </button>
        </div>
        {mobMenu && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(240,235,226,0.99)', zIndex: 600, display: 'flex', flexDirection: 'column', padding: '0 20px', overflowY: 'auto' }}>
            <div style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Link href="/" onClick={() => setMobMenu(false)} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="24" height="24" viewBox="0 0 36 36" fill="none"><rect x="3" y="3" width="13" height="13" rx="3" fill="#1a1a1a"/><rect x="20" y="3" width="13" height="13" rx="3" fill="#1a1a1a" opacity="0.3"/><rect x="3" y="20" width="13" height="13" rx="3" fill="#1a1a1a" opacity="0.3"/><rect x="20" y="20" width="13" height="13" rx="3" fill="#1a1a1a"/></svg>
                <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.04em', color: '#1a1a1a' }}>Campux</span>
              </Link>
              <button onClick={() => setMobMenu(false)} style={{ background: 'rgba(0,0,0,0.07)', border: '1px solid rgba(0,0,0,0.12)', borderRadius: 8, padding: '8px 12px', cursor: 'pointer', fontSize: 18, color: '#1a1a1a', lineHeight: 1 }}>✕</button>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: 40, gap: 8 }}>
              {[{href:'/', label:'Home'},{href:'/services',label:'Services'},{href:'/industries',label:'Sectors'},{href:'/insights',label:'Insights'},{href:'/about',label:'About'}].map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMobMenu(false)} style={{ fontSize: 28, fontFamily: 'var(--font-dm-serif),Georgia,serif', fontWeight: 400, color: '#1a1a1a', padding: '14px 0', borderBottom: '1px solid rgba(0,0,0,0.08)', letterSpacing: '-0.02em' }}>{l.label}</Link>
              ))}
              <Link href="/contact" onClick={() => setMobMenu(false)} style={{ marginTop: 32, display: 'block', background: '#1a1a1a', color: 'white', padding: '16px 24px', borderRadius: 10, fontSize: 16, fontWeight: 600, textAlign: 'center' }}>Get in touch</Link>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="rsp-section-top" style={{ maxWidth: 1320, margin: '0 auto', padding: '64px 48px 0' }}>
        <h1 className="fu" style={{ fontFamily: serif, fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 400, color: '#1a1a1a', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 40 }}>Insights</h1>

        {/* Featured post */}
        <Link href={`/insights/${featured.slug}`} className="fu2 rsp-featured-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 4, overflow: 'hidden', marginBottom: 40, background: 'white' }}>
          <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid rgba(0,0,0,0.08)' }}>
            <div>
              <span style={{ fontSize: 10, fontWeight: 700, background: '#1a1a1a', color: 'white', padding: '3px 9px', borderRadius: 3, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'inline-block', marginBottom: 16 }}>{featured.category}</span>
              <h2 style={{ fontFamily: serif, fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 400, color: '#1a1a1a', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 20 }}>{featured.title}</h2>
              <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.55)', lineHeight: 1.75 }}>{featured.excerpt}</p>
            </div>
            <div style={{ marginTop: 32 }}>
              <span style={{ display: 'inline-block', border: '1px solid rgba(0,0,0,0.25)', color: '#1a1a1a', padding: '10px 22px', borderRadius: 5, fontSize: 14, fontWeight: 500 }}>Read More</span>
            </div>
          </div>
          <div style={{ background: 'linear-gradient(140deg,#c85a20 0%,#8a2010 50%,#3a1020 100%)', minHeight: 340, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 32, position: 'relative', overflow: 'hidden' }}>
            <img src={categoryImages[featured.category] ?? 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80&auto=format'} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18, mixBlendMode: 'luminosity', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(135deg,transparent,transparent 24px,rgba(255,255,255,0.025) 24px,rgba(255,255,255,0.025) 25px)' }} />
            <div style={{ position: 'relative' }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: 'white', letterSpacing: '-0.02em', marginBottom: 8 }}>Campux</p>
              <p style={{ fontSize: 18, fontWeight: 600, color: 'white', lineHeight: 1.3, letterSpacing: '-0.02em' }}>{featured.title}</p>
            </div>
          </div>
        </Link>

        {/* Newsletter */}
        <div className="fu3 rsp-newsletter" style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: 4, padding: '24px 32px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, background: 'white' }}>
          <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)', lineHeight: 1.5, maxWidth: 360 }}>Subscribe to new posts and stay up to date on infrastructure, security, and deployment thinking.</p>
          {subscribed ? (
            <span style={{ fontSize: 14, color: 'rgba(0,0,0,0.5)' }}>✓ Subscribed. Talk soon.</span>
          ) : (
            <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter an email address" style={{ width: 260, border: '1px solid rgba(0,0,0,0.2)', borderRadius: 4, padding: '9px 14px', fontSize: 14, fontFamily: 'inherit', outline: 'none', background: 'white', color: '#1a1a1a' }} />
              <button onClick={() => { if (email && email.includes('@')) setSubscribed(true) }} style={{ background: '#1a1a1a', color: 'white', border: 'none', padding: '9px 20px', borderRadius: 4, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Submit</button>
            </div>
          )}
        </div>

        {/* Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
          <span style={{ fontSize: 13, color: 'rgba(0,0,0,0.5)', fontWeight: 500 }}>Filter by:</span>
          <select className="insights-select" value={cat} onChange={e => setCat(e.target.value)}>
            {CATEGORIES.map(c => <option key={c} value={c}>{c === 'All' ? 'All categories' : c}</option>)}
          </select>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="rsp-section-top" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px 100px' }}>
        {filtered.length === 0 ? (
          <div style={{ padding: '80px 0', textAlign: 'center', color: 'rgba(0,0,0,0.35)', fontSize: 16 }}>No posts found.</div>
        ) : (
          <div ref={gridRef} className="rsp-insights-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {filtered.map((p, i) => (
              <Link key={p.slug} href={`/insights/${p.slug}`} className="post-card" style={{ opacity: 0, transform: 'translateY(22px)', transition: `opacity 0.7s ${i * 0.05}s ease, transform 0.7s ${i * 0.05}s ease, box-shadow 0.3s` }}>
                <div style={{ background: postGradient(p.category, i), minHeight: 160, display: 'flex', alignItems: 'flex-end', padding: 20, position: 'relative', overflow: 'hidden' }}>
                  <img src={categoryImages[p.category] ?? 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=260&fit=crop&q=80&auto=format'} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.16, mixBlendMode: 'luminosity', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(135deg,transparent,transparent 20px,rgba(255,255,255,0.02) 20px,rgba(255,255,255,0.02) 21px)' }} />
                  <span style={{ position: 'relative', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '-0.01em' }}>Campux</span>
                </div>
                <div style={{ padding: '20px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 10, fontWeight: 700, background: '#1a1a1a', color: 'white', padding: '3px 8px', borderRadius: 3, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'inline-block', marginBottom: 14, alignSelf: 'flex-start' }}>{p.category.split(' ')[0].toUpperCase()}</span>
                  <p style={{ fontSize: 11, color: 'rgba(0,0,0,0.4)', marginBottom: 8, fontWeight: 500 }}>{new Date(p.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })} · {p.readTime}</p>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a', lineHeight: 1.45, letterSpacing: '-0.01em', flex: 1, marginBottom: 16 }}>{p.title}</h3>
                  <span style={{ fontSize: 13, color: '#c04818', fontWeight: 500 }}>Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#1a1a1a', padding: '60px 48px 40px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
              <rect x="3" y="3" width="13" height="13" rx="3" fill="white" />
              <rect x="20" y="3" width="13" height="13" rx="3" fill="white" opacity="0.35" />
              <rect x="3" y="20" width="13" height="13" rx="3" fill="white" opacity="0.35" />
              <rect x="20" y="20" width="13" height="13" rx="3" fill="white" />
            </svg>
            <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.04em', color: 'white' }}>Campux</span>
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
