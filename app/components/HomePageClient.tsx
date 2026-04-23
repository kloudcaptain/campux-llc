'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const serviceData = [
  { tag: 'Server Infrastructure', title: 'On-premises, cloud, hybrid — we run it.', body: 'Full operational ownership: provisioning, patching, monitoring, change records, and runbooks that reflect actual state. When something fails at 2am, there is a current document to follow — not someone\'s memory of how it used to work.', image: 'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=700&h=380&fit=crop&q=80&auto=format' },
  { tag: 'Cloud Environments', title: 'Every resource tracked. Nothing drifting.', body: 'AWS, Azure, GCP — version-controlled, policy-enforced, auditable against a known baseline. Drift is caught and remediated before it causes an incident. IAM boundaries and multi-account structures are designed in from the start, not bolted on when the access model breaks.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&h=380&fit=crop&q=80&auto=format' },
  { tag: 'Security Operations', title: 'Compliance year-round, not just before audits.', body: 'ISO 27001, SOC 2, HIPAA, PCI-DSS, NIST, Cyber Essentials. Controls are structural where possible — Policy-as-Code means misconfigured resources fail before they deploy. Audit prep takes hours, not weeks of emergency effort.', image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=700&h=380&fit=crop&q=80&auto=format' },
  { tag: 'Network Engineering', title: 'Designed for your environment, not templated.', body: 'SD-WAN, firewalls, segmentation, access control — built to your actual security obligations, not a generic template applied to every engagement. Networks we manage have topology diagrams that reflect current routing, not original design intent.', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&h=380&fit=crop&q=80&auto=format' },
  { tag: 'Database Management', title: 'Backup that gets tested. Recovery that works.', body: 'RTO and RPO targets agreed before we start, then actually met. We restore backups on a schedule and document the results. If the last restore test was more than a quarter ago, that is not a backup strategy — it is a backup habit.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&h=380&fit=crop&q=80&auto=format' },
  { tag: 'Integrated Managed IT', title: 'Everything under one contract.', body: 'All five service lines as a single managed function. One SLA, one quarterly review, one escalation path. For organisations that want infrastructure genuinely off their plate — not distributed across three suppliers, each owning a third of the failure.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=380&fit=crop&q=80&auto=format' },
]

export default function HomePageClient() {
  const navRef = useRef<HTMLElement>(null)
  const heroVisRef = useRef<HTMLDivElement>(null)
  const grainCanvasRef = useRef<HTMLCanvasElement>(null)
  const particlesCanvasRef = useRef<HTMLCanvasElement>(null)
  const [openAcc, setOpenAcc] = useState<number | null>(null)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [panelData, setPanelData] = useState<{ tag: string; title: string; body: string; image?: string }>({ tag: 'Select a service line', title: 'One team. Everything under one roof.', body: "We are not a helpdesk, a cloud reseller, or a consultancy that delivers reports and moves on. We manage infrastructure as an ongoing function and own the operational outcomes — not just the activity." })

  const toggleAcc = useCallback((idx: number) => {
    setOpenAcc(prev => {
      if (prev === idx) return null
      setPanelData(serviceData[idx])
      return idx
    })
  }, [])

  // Dropdown via DOM (avoids React synthetic event ordering issues)
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const closeAll = () => nav.querySelectorAll<HTMLElement>('[data-dropdown]').forEach(d => { d.style.display = 'none' })
    const buttons = nav.querySelectorAll<HTMLButtonElement>('[data-menu]')
    buttons.forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const name = btn.dataset.menu!
        const dd = nav.querySelector<HTMLElement>(`[data-dropdown="${name}"]`)
        const isOpen = dd?.style.display === 'block'
        closeAll()
        if (!isOpen && dd) dd.style.display = 'block'
      })
    })
    document.addEventListener('click', closeAll)
    return () => document.removeEventListener('click', closeAll)
  }, [])

  // Nav scroll
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const onScroll = () => {
      if (window.scrollY > 40) {
        nav.style.background = 'rgba(10,6,14,0.9)'
        nav.style.backdropFilter = 'blur(24px)'
        nav.style.borderColor = 'rgba(255,255,255,0.08)'
      } else {
        nav.style.background = 'transparent'
        nav.style.backdropFilter = 'none'
        nav.style.borderColor = 'transparent'
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Stat count-up
  useEffect(() => {
    const statEls = document.querySelectorAll<HTMLElement>('.stat-num')
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement
          const target = parseInt(el.dataset.target || '0')
          const hasPct = el.dataset.suffix === '%'
          let current = 0
          const increment = target / 40
          const timer = setInterval(() => {
            current = Math.min(current + increment, target)
            el.innerHTML = Math.round(current) + (hasPct ? '<span style="font-size:0.6em;">%</span>' : '')
            if (current >= target) clearInterval(timer)
          }, 30)
          statObserver.unobserve(el)
        }
      })
    }, { threshold: 0.5 })
    statEls.forEach(el => statObserver.observe(el))
    return () => statObserver.disconnect()
  }, [])

  // Analog grain canvas
  useEffect(() => {
    const canvas = grainCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let W = 0, H = 0, rafId = 0
    const resize = () => {
      W = canvas.width = Math.floor(window.innerWidth / 2)
      H = canvas.height = Math.floor(window.innerHeight / 2)
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
    }
    resize()
    window.addEventListener('resize', resize)
    const draw = () => {
      const img = ctx.createImageData(W, H)
      const d = img.data
      for (let i = 0; i < d.length; i += 4) {
        const v = (Math.random() * 255) | 0
        d[i] = Math.min(255, v + 18)
        d[i + 1] = (v * 0.82) | 0
        d[i + 2] = (v * 0.65) | 0
        d[i + 3] = 255
      }
      ctx.putImageData(img, 0, 0)
      rafId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // Floating network particles
  useEffect(() => {
    const canvas = particlesCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let rafId = 0
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    const nodes = Array.from({ length: 26 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.5,
      o: Math.random() * 0.35 + 0.08,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0) n.x = canvas.width
        if (n.x > canvas.width) n.x = 0
        if (n.y < 0) n.y = canvas.height
        if (n.y > canvas.height) n.y = 0
      })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 200) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(192,72,32,${0.07 * (1 - dist / 200)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(192,72,32,${n.o})`
        ctx.fill()
      })
      rafId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // Hero mouse parallax
  useEffect(() => {
    let mx = 0, my = 0, tx = 0, ty = 0, rafId = 0
    const onMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 28
      my = (e.clientY / window.innerHeight - 0.5) * 16
    }
    document.addEventListener('mousemove', onMove)
    const tick = () => {
      tx += (mx - tx) * 0.055
      ty += (my - ty) * 0.055
      if (heroVisRef.current) {
        heroVisRef.current.style.transform = `translate(${tx * 0.55}px, ${ty * 0.35}px)`
      }
      rafId = requestAnimationFrame(tick)
    }
    tick()
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  // Topology diagram injected after mount
  useEffect(() => {
    const panel = document.getElementById('service-panel')
    if (!panel) return
    panel.style.position = 'relative'
    panel.style.overflow = 'hidden'
    const ns = 'http://www.w3.org/2000/svg'
    const svg = document.createElementNS(ns, 'svg') as SVGSVGElement
    svg.setAttribute('viewBox', '0 0 280 180')
    svg.style.cssText = 'position:absolute;bottom:-10px;right:-10px;width:220px;height:140px;opacity:0.13;pointer-events:none;'
    const pts = [{ x: 140, y: 70 }, { x: 55, y: 130 }, { x: 225, y: 130 }, { x: 80, y: 25 }, { x: 200, y: 25 }]
    const edges: [number, number][] = [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [3, 4]]
    edges.forEach(([a, b]) => {
      const l = document.createElementNS(ns, 'line')
      l.setAttribute('x1', String(pts[a].x)); l.setAttribute('y1', String(pts[a].y))
      l.setAttribute('x2', String(pts[b].x)); l.setAttribute('y2', String(pts[b].y))
      l.setAttribute('stroke', 'white'); l.setAttribute('stroke-width', '0.9')
      l.setAttribute('stroke-dasharray', '5 3')
      const an = document.createElementNS(ns, 'animate')
      an.setAttribute('attributeName', 'stroke-dashoffset')
      an.setAttribute('from', '0'); an.setAttribute('to', '32')
      an.setAttribute('dur', (1.8 + Math.random()).toFixed(1) + 's')
      an.setAttribute('repeatCount', 'indefinite')
      l.appendChild(an); svg.appendChild(l)
    })
    const labels = ['CORE', 'DB', 'CDN', 'SEC', 'NET']
    pts.forEach((p, i) => {
      const c = document.createElementNS(ns, 'circle')
      c.setAttribute('cx', String(p.x)); c.setAttribute('cy', String(p.y))
      c.setAttribute('r', '9'); c.setAttribute('fill', 'none')
      c.setAttribute('stroke', 'white'); c.setAttribute('stroke-width', '1')
      svg.appendChild(c)
      const d = document.createElementNS(ns, 'circle')
      d.setAttribute('cx', String(p.x)); d.setAttribute('cy', String(p.y))
      d.setAttribute('r', '2.5'); d.setAttribute('fill', 'white')
      svg.appendChild(d)
      const t = document.createElementNS(ns, 'text')
      t.setAttribute('x', String(p.x)); t.setAttribute('y', String(p.y + 21))
      t.setAttribute('text-anchor', 'middle'); t.setAttribute('font-size', '6.5')
      t.setAttribute('fill', 'white'); t.setAttribute('font-family', 'monospace')
      t.setAttribute('letter-spacing', '0.8')
      t.textContent = labels[i]; svg.appendChild(t)
    })
    panel.appendChild(svg)
    return () => { if (panel.contains(svg)) panel.removeChild(svg) }
  }, [])

  const serif = "var(--font-dm-serif), Georgia, serif"

  return (
    <div style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: 18, lineHeight: 1.6, color: '#fff', background: "radial-gradient(ellipse 130% 65% at 8% 6%, #e05a18 0%, transparent 52%), radial-gradient(ellipse 80% 50% at 92% 22%, #a02060 0%, transparent 48%), radial-gradient(ellipse 100% 80% at 50% 58%, #3d1550 0%, transparent 58%), radial-gradient(ellipse 90% 65% at 18% 82%, #d04418 0%, transparent 52%), #0a0610", position: 'relative' }}>

      {/* Grain canvas */}
      <canvas ref={grainCanvasRef} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 10, opacity: 0.05, mixBlendMode: 'screen', imageRendering: 'pixelated' }} />

      {/* Particles canvas */}
      <canvas ref={particlesCanvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />

      {/* ── NAV ── */}
      <nav ref={navRef} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300, transition: 'background 0.4s, backdrop-filter 0.4s, border-color 0.4s', borderBottom: '1px solid transparent' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px', height: 72, display: 'flex', alignItems: 'center' }}>
          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, flex: '0 0 auto', marginRight: 56 }}>
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
              <rect x="3" y="3" width="13" height="13" rx="3" fill="white" />
              <rect x="20" y="3" width="13" height="13" rx="3" fill="white" opacity="0.4" />
              <rect x="3" y="20" width="13" height="13" rx="3" fill="white" opacity="0.4" />
              <rect x="20" y="20" width="13" height="13" rx="3" fill="white" />
            </svg>
            <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: '-0.04em', color: 'white' }}>Campux</span>
          </a>

          {/* Links */}
          <div style={{ display: 'flex', gap: 2, flex: 1, position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              <button data-menu="services" className="link-nav" style={{ padding: '9px 16px', borderRadius: 8, fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.75)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'inherit', transition: 'color 0.2s' }}>
                Services
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 4l3.5 3.5L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
              <div data-dropdown="services" className="hp-dropdown" style={{ display: 'none' }} onClick={e => e.stopPropagation()}>
                <a href="/services">Server Infrastructure</a>
                <a href="/services">Cloud Environments</a>
                <a href="/services">Network Engineering</a>
                <a href="/services">Database Management</a>
                <a href="/services">Security Operations</a>
                <a href="/services">Integrated Managed IT</a>
                <a href="#contact-form" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 4, paddingTop: 12 }}>Get in touch →</a>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <button data-menu="sectors" className="link-nav" style={{ padding: '9px 16px', borderRadius: 8, fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.75)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'inherit', transition: 'color 0.2s' }}>
                Sectors
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 4l3.5 3.5L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
              <div data-dropdown="sectors" className="hp-dropdown" style={{ display: 'none' }} onClick={e => e.stopPropagation()}>
                <a href="/industries">Startups &amp; Growth</a>
                <a href="/industries">Enterprise</a>
                <a href="/industries">Government &amp; Regulated</a>
                <a href="/industries">Healthcare</a>
                <a href="/industries">Financial Services</a>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <button data-menu="about" className="link-nav" style={{ padding: '9px 16px', borderRadius: 8, fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.75)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'inherit', transition: 'color 0.2s' }}>
                About
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 4l3.5 3.5L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
              <div data-dropdown="about" className="hp-dropdown" style={{ display: 'none' }} onClick={e => e.stopPropagation()}>
                <a href="#contact-form">Who we are</a>
                <a href="/insights">Insights</a>
                <a href="mailto:project@campux.co">Email us</a>
              </div>
            </div>
            <a href="/insights" className="link-nav" style={{ padding: '9px 16px', borderRadius: 8, fontSize: 14, fontWeight: 500, display: 'inline-block' }}>Insights</a>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, flex: '0 0 auto' }}>
            <a href="#contact-form" className="btn-dark" style={{ padding: '9px 22px', fontSize: 14 }}>Get in touch</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 48px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', paddingTop: 72 }}>
          <div>
            <div className="hero-h1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 100, padding: '5px 16px 5px 12px', marginBottom: 36, backdropFilter: 'blur(8px)' }}>
              <span style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 100, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', padding: '3px 10px', color: 'white', textTransform: 'uppercase' }}>Managed IT</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>US-based · Since 2023</span>
            </div>
            <h1 className="hero-h1" style={{ fontFamily: serif, fontSize: 'clamp(52px, 6.5vw, 92px)', fontWeight: 400, lineHeight: 1.02, letterSpacing: '-0.02em', color: 'white', marginBottom: 32 }}>
              We operate the<br />infrastructure<br /><em style={{ opacity: 0.55, fontStyle: 'italic' }}>others avoid.</em>
            </h1>
            <p className="hero-p" style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 460, marginBottom: 44, fontWeight: 300 }}>
              Server estates. Cloud environments. Networks. Databases. Security operations. All managed as one function, by engineers who know your environment — not account managers who don't.
            </p>
            <div className="hero-cta" style={{ display: 'flex', gap: 16 }}>
              <a href="#contact-form" className="btn-dark">Get in touch</a>
              <a href="#services" className="btn-ghost">What we do</a>
            </div>
          </div>

          {/* Dashboard visual */}
          <div className="hero-vis" ref={heroVisRef}>
            <div style={{ background: 'rgba(6,4,10,0.7)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.12)', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.6)', backdropFilter: 'blur(16px)' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#d06030' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }} />
                <span style={{ marginLeft: 14, fontSize: 12, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', letterSpacing: '0.06em' }}>campux — ops-console</span>
              </div>
              <div style={{ padding: 20, fontFamily: 'monospace', fontSize: 12.5, lineHeight: 1, display: 'flex', flexDirection: 'column' }}>
                {[
                  { status: 'HEALTHY', color: '#4ade80', name: 'prod-infra-01', note: 'uptime 99.98%' },
                  { status: 'HEALTHY', color: '#4ade80', name: 'prod-infra-02', note: 'uptime 99.97%' },
                  { status: 'HEALTHY', color: '#4ade80', name: 'db-cluster-primary', note: 'restore tested 6d ago' },
                  { status: 'REVIEW', color: '#fbbf24', name: 'staging-net-02', note: 'patch scheduled' },
                  { status: 'HEALTHY', color: '#4ade80', name: 'security-ops', note: '0 open incidents' },
                  { status: 'HEALTHY', color: '#4ade80', name: 'cloud-compliance', note: 'policy enforced' },
                ].map((row, i, arr) => (
                  <div key={row.name} style={{ display: 'grid', gridTemplateColumns: '8px 56px 1fr auto', gap: 12, alignItems: 'center', padding: '12px 0', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.05)' : undefined }}>
                    <span style={{ fontSize: 7, color: row.color }}>●</span>
                    <span style={{ color: row.color, fontSize: 10, fontWeight: 700 }}>{row.status}</span>
                    <span style={{ color: 'rgba(255,255,255,0.6)' }}>{row.name}</span>
                    <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11 }}>{row.note}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>
                <span>SLA compliance: 100%</span><span>Next review: scheduled</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY TICKER ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '32px 0', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>Trusted Across</span>
        </div>
        <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="ticker-track" style={{ display: 'flex', gap: 80, width: 'max-content', alignItems: 'center' }}>
            {['Healthcare', 'Financial Services', 'Central Government', 'Local Government', 'Retail & Commerce', 'Series A–C Startups', 'Regulated Fintech', 'Insurance', 'Legal & Professional',
              'Healthcare', 'Financial Services', 'Central Government', 'Local Government', 'Retail & Commerce', 'Series A–C Startups', 'Regulated Fintech', 'Insurance', 'Legal & Professional'].map((s, i) => (
              <span key={i} style={{ fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,0.45)', whiteSpace: 'nowrap' }}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: '140px 48px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>What we do</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <h2 className="reveal" style={{ fontFamily: serif, fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 400, letterSpacing: '-0.02em', color: 'white', lineHeight: 1.06, marginBottom: 28 }}>
                Six disciplines. One operational team.
              </h2>
              <a href="#contact-form" className="reveal btn-ghost" style={{ marginBottom: 56, display: 'inline-block', fontSize: 14, padding: '11px 24px' }}>Talk to us about your setup</a>

              {/* Accordion */}
              <div>
                {serviceData.map((svc, idx) => (
                  <div key={idx} className="reveal" style={{ borderTop: '1px solid rgba(255,255,255,0.12)', ...(idx === serviceData.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.12)' } : {}) }}>
                    <button
                      onClick={() => toggleAcc(idx)}
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 0', background: 'none', border: 'none', cursor: 'pointer', color: 'white', fontFamily: 'inherit', textAlign: 'left' }}
                    >
                      <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em' }}>{svc.tag}</span>
                      <span style={{ fontSize: 26, fontWeight: 300, color: openAcc === idx ? '#d06030' : 'rgba(255,255,255,0.35)', transform: openAcc === idx ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s, color 0.3s', flexShrink: 0 }}>+</span>
                    </button>
                    <div className="acc-body" style={{ maxHeight: openAcc === idx ? 300 : 0, opacity: openAcc === idx ? 1 : 0, paddingBottom: openAcc === idx ? 28 : 0 }}>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>{svc.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky panel */}
            <div style={{ position: 'sticky', top: 120 }}>
              <div id="service-panel" style={{ background: 'rgba(6,4,10,0.5)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', backdropFilter: 'blur(12px)', display: 'flex', flexDirection: 'column', minHeight: 480 }}>
                {panelData.image && (
                  <div style={{ position: 'relative', height: 220, overflow: 'hidden', flexShrink: 0 }}>
                    <img
                      src={panelData.image}
                      alt={panelData.tag}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,4,10,0.1) 0%, rgba(6,4,10,0.7) 100%)' }} />
                  </div>
                )}
                <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>{panelData.tag}</p>
                    <h3 style={{ fontFamily: serif, fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 400, color: 'white', lineHeight: 1.25, marginBottom: 16, letterSpacing: '-0.02em' }}>{panelData.title}</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>{panelData.body}</p>
                  </div>
                  <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <a href="#contact-form" className="btn-ghost" style={{ fontSize: 14, padding: '11px 22px' }}>Talk to our team</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK FOLD: STATS ── */}
      <section className="dark-fold" style={{ padding: '120px 48px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <p className="reveal" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>By the numbers</p>
          <h2 className="reveal" style={{ fontFamily: serif, fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 400, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.06, marginBottom: 96 }}>
            Straightforward to measure.<br />Hard to fake.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="reveal" style={{ padding: '0 56px 0 0', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.5), rgba(255,255,255,0.1))', marginBottom: 32 }} />
              <div className="stat-num" data-target="100" data-suffix="%" style={{ fontFamily: serif, fontSize: 'clamp(64px, 8vw, 108px)', fontWeight: 400, color: 'white', lineHeight: 1, marginBottom: 24, letterSpacing: '-0.04em' }}>0<span style={{ fontSize: '0.6em' }}>%</span></div>
              <div style={{ width: 48, height: 2, background: 'rgba(208,96,48,0.8)', marginBottom: 24 }} />
              <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>of environments we manage have written runbooks and tested failover procedures. Not scheduled. Done.</div>
            </div>
            <div className="reveal reveal-delay-1" style={{ padding: '0 56px', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: 36, height: 36, borderRadius: 4, border: '1.5px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.04)', marginBottom: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, padding: 6 }}>
                <div style={{ background: 'rgba(255,255,255,0.3)', borderRadius: 1 }} />
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 1 }} />
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 1 }} />
                <div style={{ background: 'rgba(255,255,255,0.3)', borderRadius: 1 }} />
              </div>
              <div className="stat-num" data-target="6" style={{ fontFamily: serif, fontSize: 'clamp(64px, 8vw, 108px)', fontWeight: 400, color: 'white', lineHeight: 1, marginBottom: 24, letterSpacing: '-0.04em' }}>0</div>
              <div style={{ width: 48, height: 2, background: 'rgba(208,96,48,0.8)', marginBottom: 24 }} />
              <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>service lines. One contract, one SLA, one escalation path. No gaps between who owns what.</div>
            </div>
            <div className="reveal reveal-delay-2" style={{ padding: '0 0 0 56px' }}>
              <div style={{ width: 36, height: 36, marginBottom: 32, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', width: 36, height: 1.5, background: 'rgba(255,255,255,0.25)', transform: 'rotate(45deg)' }} />
                <div style={{ position: 'absolute', width: 36, height: 1.5, background: 'rgba(255,255,255,0.25)', transform: 'rotate(-45deg)' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.35)' }} />
              </div>
              <div className="stat-num" data-target="4" style={{ fontFamily: serif, fontSize: 'clamp(64px, 8vw, 108px)', fontWeight: 400, color: 'white', lineHeight: 1, marginBottom: 24, letterSpacing: '-0.04em' }}>0</div>
              <div style={{ width: 48, height: 2, background: 'rgba(208,96,48,0.8)', marginBottom: 24 }} />
              <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>regulated sectors. Healthcare, financial services, retail, government. We do not take on work we cannot do properly.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE BLOCKS ── */}
      <section style={{ padding: '140px 48px 0', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>

          {/* Feature 1 */}
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', paddingBottom: 120, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ background: 'rgba(6,4,10,0.5)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', backdropFilter: 'blur(12px)' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '16px 24px', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', fontFamily: 'monospace', textTransform: 'uppercase' }}>Quarterly Operational Review — Q1 2026</div>
              <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { label: 'Infrastructure documentation', val: 'Complete', c: '#4ade80' },
                  { label: 'Failover tests executed', val: '4 of 4', c: '#4ade80' },
                  { label: 'SLA compliance', val: '100%', c: '#4ade80' },
                  { label: 'Open recommendations', val: '3 items', c: '#fbbf24' },
                  { label: 'Evidence pack', val: 'Delivered', c: '#4ade80' },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16, background: 'rgba(255,255,255,0.04)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.07)' }}>
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>{row.label}</span>
                    <span style={{ fontSize: 13, color: row.c, fontWeight: 600 }}>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>How we work</p>
              <h2 style={{ fontFamily: serif, fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, color: 'white', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 24 }}>
                You get written records, not slide decks.
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 20 }}>Every environment we manage has current runbooks, topology diagrams, and change records. Not documents from the migration three years ago — what is actually running, updated after every change.</p>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 36 }}>Quarterly reviews are written, not verbal. They include recommendations and evidence packs. If something needs fixing, it gets tracked to completion — not added to a backlog that nobody reviews.</p>
              <a href="#contact-form" className="btn-ghost" style={{ fontSize: 14, padding: '12px 24px' }}>Talk to us</a>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', paddingTop: 120, paddingBottom: 140 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>Security & compliance</p>
              <h2 style={{ fontFamily: serif, fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, color: 'white', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 24 }}>
                Compliance that holds up when someone actually checks.
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 20 }}>We build controls into the infrastructure itself — not into a policy document that relies on someone following it. Enforcement at the pipeline and access layer means it happens whether or not the right person is in the office.</p>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 36 }}>ISO 27001, SOC 2, HIPAA, PCI-DSS, NIST, Cyber Essentials. Whichever applies to your business, we build for it before the auditors arrive — and keep it maintained after they leave.</p>
              <a href="#contact-form" className="btn-ghost" style={{ fontSize: 14, padding: '12px 24px' }}>Talk to us</a>
            </div>
            <div style={{ background: 'rgba(6,4,10,0.5)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', backdropFilter: 'blur(12px)', padding: 40 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 2.2 }}>
                <div style={{ color: 'rgba(255,255,255,0.25)', marginBottom: 12, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Policy-as-Code enforcement</div>
                {['encryption-at-rest', 'mfa-required', 'access-logging', 'patch-policy', 'network-segmentation'].map(p => (
                  <div key={p}><span style={{ color: '#d06030' }}>✓</span> <span style={{ color: 'rgba(255,255,255,0.7)' }}>{p}</span> <span style={{ color: '#4ade80' }}>enforced</span></div>
                ))}
                <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.25)', fontSize: 11 }}>0 policy violations · last scan: now</div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28 }}>
                {['ISO 27001', 'SOC 2', 'PCI-DSS', 'NIST', 'Cyber Essentials'].map(b => (
                  <span key={b} style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.12)', padding: '4px 10px', borderRadius: 4 }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSIGHTS CARDS ── */}
      <section style={{ padding: '0 48px 140px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 0, alignItems: 'start' }}>
            <div style={{ paddingRight: 48, paddingTop: 12 }}>
              <h2 className="reveal" style={{ fontFamily: serif, fontSize: 'clamp(32px, 3.8vw, 54px)', fontWeight: 400, color: 'white', lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: 28 }}>From the<br />Campux desk</h2>
              <a href="/insights" className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.4)', color: 'white', padding: '9px 20px', borderRadius: 6, fontSize: 13, fontWeight: 500, transition: 'background 0.2s' }}
                onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseOut={e => (e.currentTarget.style.background = 'transparent')}>
                View All Insights
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, alignItems: 'start' }}>
              {[
                { delay: '', bg: 'linear-gradient(160deg,#2a1a10 0%,#1a0c08 100%)', tags: ['ENGINEERING'], title: "The Infrastructure Nobody Thinks About (Until It's 3am)", href: '/insights/the-infrastructure-nobody-thinks-about', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=320&fit=crop&q=80&auto=format' },
                { delay: 'reveal-delay-1', bg: 'linear-gradient(160deg,#1a2a18 0%,#0e1810 100%)', tags: ['SECURITY'], title: 'Why Most Security Audits Miss the Point', href: '/insights', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=320&fit=crop&q=80&auto=format' },
                { delay: 'reveal-delay-2', bg: 'linear-gradient(160deg,#1a1a2a 0%,#0e0e1a 100%)', tags: ['DEVOPS'], title: 'The Deployment Pipeline Nobody Reviewed for Eighteen Months', href: '/insights', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=320&fit=crop&q=80&auto=format' },
              ].map((card, i) => (
                <a key={i} href={card.href} className={`reveal card-lift ${card.delay}`} style={{ borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
                  <div style={{ background: card.bg, padding: 24, minHeight: 160, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                    <img src={card.img} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18, mixBlendMode: 'luminosity', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(255,255,255,0.015) 20px, rgba(255,255,255,0.015) 21px)' }} />
                    <div style={{ position: 'relative' }}><span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '-0.02em', color: 'white' }}>Campux</span></div>
                    <div style={{ position: 'relative' }}><p style={{ fontSize: 16, fontWeight: 600, color: 'white', lineHeight: 1.35, letterSpacing: '-0.02em' }}>{card.title}</p></div>
                  </div>
                  <div style={{ background: 'linear-gradient(180deg, #fff9f4 0%, #fde8d0 60%, #f5c8a0 100%)', padding: '20px 24px 24px' }}>
                    <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
                      {card.tags.map(t => <span key={t} style={{ fontSize: 10, fontWeight: 700, background: '#1a1a1a', color: 'white', padding: '3px 8px', borderRadius: 3, letterSpacing: '0.04em' }}>{t}</span>)}
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a', lineHeight: 1.45, marginBottom: 16, letterSpacing: '-0.01em' }}>{card.title}</h3>
                    <span style={{ fontSize: 13, color: '#c04818', fontWeight: 500 }}>Read →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact-form" style={{ position: 'relative', zIndex: 1, padding: '100px 48px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div className="reveal">
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Get in touch</p>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(36px, 4vw, 58px)', fontWeight: 400, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.08, marginBottom: 24 }}>Tell us what you're dealing with.</h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, maxWidth: 440 }}>We'll read it, reply within a working day, and if it sounds like a fit, we'll find time for a conversation. No sales deck, no discovery call with someone who doesn't know the product.</p>
            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[['Email', 'project@campux.co', 'mailto:project@campux.co'], ['Insights', 'Read our latest thinking', '/insights']].map(([label, val, href]) => (
                <a key={label} href={href} style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s', fontSize: 15 }}
                  onMouseOver={e => (e.currentTarget.style.color = 'white')}
                  onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', minWidth: 60 }}>{label}</span>
                  {val}
                </a>
              ))}
            </div>
          </div>
          <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 40 }}>
            {formState === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <p style={{ fontSize: 20, fontWeight: 600, color: 'white', marginBottom: 12, letterSpacing: '-0.02em' }}>Message received.</p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)' }}>We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={e => {
                e.preventDefault()
                setFormState('sending')
                setTimeout(() => setFormState('sent'), 1200)
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  {([['name', 'Name', 'Your name', true], ['email', 'Email', 'your@email.com', true]] as const).map(([field, label, placeholder, required]) => (
                    <div key={field}>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>{label}</label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        required={required}
                        placeholder={placeholder}
                        value={form[field]}
                        onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                        style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '12px 16px', fontSize: 15, color: 'white', fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.2s' }}
                        onFocus={e => (e.target.style.borderColor = 'rgba(255,255,255,0.35)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Company <span style={{ fontWeight: 400, opacity: 0.5 }}>(optional)</span></label>
                  <input
                    type="text"
                    placeholder="Your company"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '12px 16px', fontSize: 15, color: 'white', fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(255,255,255,0.35)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your infrastructure and what you're looking to achieve..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '12px 16px', fontSize: 15, color: 'white', fontFamily: 'inherit', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(255,255,255,0.35)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  style={{ width: '100%', background: 'white', color: '#111', border: 'none', borderRadius: 8, padding: '14px 24px', fontSize: 15, fontWeight: 700, cursor: formState === 'sending' ? 'wait' : 'pointer', fontFamily: 'inherit', letterSpacing: '-0.01em', transition: 'opacity 0.2s', opacity: formState === 'sending' ? 0.6 : 1 }}>
                  {formState === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="dark-fold" style={{ padding: '60px 48px 48px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>

          {/* Footer links */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr 1fr', gap: 40, paddingTop: 64, paddingBottom: 60 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <svg width="26" height="26" viewBox="0 0 36 36" fill="none">
                  <rect x="3" y="3" width="13" height="13" rx="3" fill="white" />
                  <rect x="20" y="3" width="13" height="13" rx="3" fill="white" opacity="0.35" />
                  <rect x="3" y="20" width="13" height="13" rx="3" fill="white" opacity="0.35" />
                  <rect x="20" y="20" width="13" height="13" rx="3" fill="white" />
                </svg>
                <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.04em', color: 'white' }}>Campux</span>
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.75, maxWidth: 260, marginBottom: 20 }}>Managed infrastructure for organisations where downtime is not an option. US-based. Operating since 2023.</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['ISO 27001', 'SOC 2', 'Cyber Essentials'].map(b => (
                  <span key={b} style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: 3 }}>{b}</span>
                ))}
              </div>
            </div>
            {[
              { heading: 'Services', links: [['Server Infrastructure', '/#services'], ['Cloud Environments', '/#services'], ['Network Engineering', '/#services'], ['Database Management', '/#services'], ['Security Operations', '/#services'], ['Integrated Managed IT', '/#services']] },
              { heading: 'Sectors', links: [['Startups & Growth', '/#services'], ['Enterprise', '/#services'], ['Government & Regulated', '/#services']] },
              { heading: 'Resources', links: [['Insights', '/insights']] },
              { heading: 'Company', links: [['About Campux', '#contact-form'], ['Contact', 'mailto:project@campux.co']] },
            ].map(col => (
              <div key={col.heading}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>{col.heading}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                  {col.links.map(([label, href]) => (
                    <a key={label} href={href} className="link-muted" style={{ fontSize: 14 }}>{label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>© 2026 Campux. All rights reserved.</p>
            <div style={{ display: 'flex', gap: 28 }}>
              {[['Terms & Conditions', '/terms'], ['Privacy Policy', '/privacy-policy'], ['Security', '/about']].map(([label, href]) => (
                <a key={label} href={href} className="link-muted" style={{ fontSize: 12 }}>{label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
