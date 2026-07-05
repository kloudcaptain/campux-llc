import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "./ContactForm"

export const metadata: Metadata = {
  title: "Contact Campux — Talk to Our Infrastructure Team",
  description:
    "Describe your environment. No pitch decks, no qualification calls — a direct conversation about what you're running and whether we're the right fit. Reply within one business day.",
  alternates: { canonical: "https://campux.co/contact" },
  openGraph: {
    title: "Contact Campux — Talk to Our Infrastructure Team",
    description: "Tell us what you're running. Direct conversation, no sales process. Reply within one business day.",
    url: "https://campux.co/contact",
    type: "website",
  },
}

const serif = "var(--font-dm-serif), Georgia, serif"
const bg = "radial-gradient(ellipse 100% 50% at 8% 6%, rgba(200,75,20,0.55) 0%, transparent 46%), radial-gradient(ellipse 60% 38% at 92% 22%, rgba(140,28,80,0.55) 0%, transparent 42%), radial-gradient(ellipse 80% 62% at 50% 58%, rgba(50,16,65,0.75) 0%, transparent 52%), #0a0610"

export default function ContactPage() {
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
            <Link href="/about" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>About</Link>
          </div>
          <Link href="/contact" className="rsp-nav-links" style={{ display: 'inline-block', background: 'white', color: '#111', padding: '9px 22px', borderRadius: 8, fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em' }}>Talk to our team</Link>
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
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>Get in touch</p>
        <h1 style={{ fontFamily: serif, fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 400, lineHeight: 1.04, letterSpacing: '-0.02em', marginBottom: 24, maxWidth: 700 }}>
          Tell us what you are running.
        </h1>
        <p style={{ fontSize: 19, color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, maxWidth: 560, fontWeight: 300 }}>
          No pitch deck. No qualification call. A direct conversation about your environment — what it is, what is not working, and whether we are the right people to manage it.
        </p>
      </section>

      {/* FORM + DETAILS */}
      <section className="rsp-contact-inner" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px 120px', display: 'grid', gridTemplateColumns: '1fr 420px', gap: 80, alignItems: 'start' }}>

        {/* FORM */}
        <ContactForm />

        {/* CONTACT DETAILS */}
        <div style={{ paddingTop: 8 }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32, marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>Direct email</p>
            <a href="mailto:victor@campux.co" style={{ fontSize: 17, color: 'white', textDecoration: 'none', fontWeight: 500 }}>victor@campux.co</a>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.62)', marginTop: 8, lineHeight: 1.65 }}>We read everything. If it is relevant, we will respond — usually within one business day.</p>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32, marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>What happens next</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { step: '01', text: 'We read your message and decide if we can actually help.' },
                { step: '02', text: 'If we can, we come back with specific questions about your environment — not a proposal.' },
                { step: '03', text: 'A direct call, scoped to your situation. We will tell you if we are not the right fit.' },
              ].map(s => (
                <div key={s.step} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 12, color: 'rgba(255,255,255,0.32)', flexShrink: 0, paddingTop: 2 }}>{s.step}</span>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.68)', lineHeight: 1.7, margin: 0 }}>{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>What we do</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>Cloud architecture and migration, DevSecOps and automation, cloud FinOps, and Azure and DevOps training. Small, senior, hands-on.</p>
          </div>
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
