import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Campux — Azure Cloud Consulting & IT Training",
  description:
    "CAMPUX was founded in 2024 by a senior Azure cloud and DevSecOps engineer. Principal-led engagements — the person who scopes your work is the person who does it.",
  alternates: { canonical: "https://campux.co/about" },
  openGraph: {
    title: "About Campux — Azure Cloud Consulting & IT Training",
    description: "Atlanta-based Azure cloud consulting and IT training firm, operating on a principal-led model.",
    url: "https://campux.co/about",
    type: "website",
  },
}

const serif = "var(--font-dm-serif), Georgia, serif"
const bg = "radial-gradient(ellipse 100% 50% at 8% 6%, rgba(200,75,20,0.55) 0%, transparent 46%), radial-gradient(ellipse 60% 38% at 92% 22%, rgba(140,28,80,0.55) 0%, transparent 42%), radial-gradient(ellipse 80% 62% at 50% 58%, rgba(50,16,65,0.75) 0%, transparent 52%), #0a0610"

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: 18, lineHeight: 1.6, color: '#fff', background: bg, minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 300, background: 'rgba(10,6,14,0.9)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="rsp-nav-inner" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px', height: 72, display: 'flex', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, flex: '0 0 auto', marginRight: 56 }}>
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none"><rect x="3" y="3" width="13" height="13" rx="3" fill="white"/><rect x="20" y="3" width="13" height="13" rx="3" fill="white" opacity="0.4"/><rect x="3" y="20" width="13" height="13" rx="3" fill="white" opacity="0.4"/><rect x="20" y="20" width="13" height="13" rx="3" fill="white"/></svg>
            <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: '-0.04em' }}>Campux</span>
          </Link>
          <div className="rsp-nav-links" style={{ display: 'flex', gap: 4, flex: 1 }}>
            <Link href="/services" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>Services</Link>
            <Link href="/government" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>Government</Link>
            <Link href="/insights" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>Insights</Link>
            <Link href="/about" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500, color: 'white', background: 'rgba(255,255,255,0.08)' }}>About</Link>
          </div>
          <Link href="/contact" className="btn-dark rsp-nav-links" style={{ padding: '9px 22px', fontSize: 14 }}>Talk to our team</Link>
          <details className="mob-menu-toggle">
            <summary aria-label="Open menu"><svg width="18" height="14" viewBox="0 0 18 14" fill="none"><rect y="0" width="18" height="2" rx="1" fill="currentColor"/><rect y="6" width="18" height="2" rx="1" fill="currentColor"/><rect y="12" width="18" height="2" rx="1" fill="currentColor"/></svg></summary>
            <div className="mob-menu-overlay">
              <div style={{ height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}><svg width="24" height="24" viewBox="0 0 36 36" fill="none"><rect x="3" y="3" width="13" height="13" rx="3" fill="white"/><rect x="20" y="3" width="13" height="13" rx="3" fill="white" opacity="0.4"/><rect x="3" y="20" width="13" height="13" rx="3" fill="white" opacity="0.4"/><rect x="20" y="20" width="13" height="13" rx="3" fill="white"/></svg><span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.04em', color: 'white' }}>Campux</span></Link>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: 32, gap: 4 }}>
                {([['/', 'Home'], ['/services', 'Services'], ['/government', 'Government'], ['/insights', 'Insights'], ['/about', 'About']] as [string,string][]).map(([href, label]) => (
                  <Link key={href} href={href} style={{ fontSize: 28, fontFamily: 'var(--font-dm-serif),Georgia,serif', fontWeight: 400, color: 'white', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', letterSpacing: '-0.02em' }}>{label}</Link>
                ))}
                <Link href="/contact" style={{ marginTop: 32, display: 'block', background: 'white', color: '#111', padding: '16px 24px', borderRadius: 10, fontSize: 16, fontWeight: 600, textAlign: 'center' }}>Get in touch</Link>
              </div>
            </div>
          </details>
        </div>
      </nav>

      {/* HERO */}
      <section className="rsp-section" style={{ maxWidth: 1320, margin: '0 auto', padding: '100px 48px 80px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>About Campux</p>
        <h1 style={{ fontFamily: serif, fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 400, lineHeight: 1.04, letterSpacing: '-0.02em', marginBottom: 40, maxWidth: 800 }}>
          The person who scopes your work<br /><em style={{ opacity: 0.5 }}>is the person who does it.</em>
        </h1>
        <div className="rsp-about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 19, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginBottom: 24, fontWeight: 300 }}>
              CAMPUX was founded in 2024 by a senior Azure cloud and DevSecOps engineer with nine years in IT and six specializing in Azure architecture.
            </p>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8 }}>
              We operate on a principal-led model: engagements are scoped and delivered by our founding engineer, extended by a vetted network of senior practitioners — cloud engineers, DevOps specialists, and security professionals — engaged per project.
            </p>
          </div>
          <div style={{ paddingTop: 8 }}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32, marginBottom: 32 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>Founded</p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.68)', lineHeight: 1.8 }}>2024 · Atlanta, GA</p>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>Credentials</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['M.S. Cybersecurity & Information Assurance', 'CompTIA Security+', 'Pentest+', 'CySA+', 'ITIL v4', 'AZ-305 (in progress)', 'DP-700 (in progress)'].map(b => (
                  <span key={b} style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.16)', padding: '4px 10px', borderRadius: 4 }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section style={{ background: '#141414', padding: '100px 48px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 20 }}>How we work</p>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(36px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: 72 }}>
            A few things we believe.
          </h2>
          <div className="rsp-about-principles" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
            {[
              {
                title: "Senior from day one.",
                body: "No account layers, no handoffs — the engineer who scopes the work delivers it."
              },
              {
                title: "Infrastructure as code, always.",
                body: "Everything we build is versioned, repeatable, and documented. You own the code and can run it without us."
              },
              {
                title: "Teach as we go.",
                body: "Every engagement transfers knowledge — runbooks, walkthroughs, and training so your team operates what we build."
              },
            ].map(p => (
              <div key={p.title} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32 }}>
                <h3 style={{ fontFamily: serif, fontSize: 22, fontWeight: 400, lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: 16, color: 'white' }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 48px', borderTop: '1px solid rgba(255,255,255,0.06)', background: '#141414' }}>
        <div className="rsp-cta-row" style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 12 }}>Want to talk about your Azure environment?</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 480 }}>We will tell you honestly whether we are the right fit — and if we are not, we will say so.</p>
          </div>
          <Link href="/contact" style={{ display: 'block', background: 'white', color: '#111', padding: '16px 32px', borderRadius: 10, fontSize: 15, fontWeight: 600, whiteSpace: 'nowrap', letterSpacing: '-0.01em' }}>Get in touch</Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#141414', padding: '40px 48px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="20" height="20" viewBox="0 0 36 36" fill="none"><rect x="3" y="3" width="13" height="13" rx="3" fill="white"/><rect x="20" y="3" width="13" height="13" rx="3" fill="white" opacity="0.35"/><rect x="3" y="20" width="13" height="13" rx="3" fill="white" opacity="0.35"/><rect x="20" y="20" width="13" height="13" rx="3" fill="white"/></svg>
            <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: '-0.04em', color: 'white' }}>Campux</span>
          </Link>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.32)' }}>© 2026 Campux. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/terms" className="link-muted" style={{ fontSize: 12 }}>Terms</Link>
            <Link href="/privacy-policy" className="link-muted" style={{ fontSize: 12 }}>Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
