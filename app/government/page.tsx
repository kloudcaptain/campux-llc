import type { Metadata } from "next"
import Link from "next/link"
import Nav from "../components/Nav"

export const metadata: Metadata = {
  title: "Government Contracting",
  description: "CAMPUX LLC is registered in SAM.gov as a small business, minority-owned, Black American-owned federal contractor. UEI, NAICS codes, and capability statement.",
  alternates: { canonical: "https://campux.co/government" },
  openGraph: {
    title: "Government Contracting | Campux",
    description: "CAMPUX LLC is registered in SAM.gov as a small business, minority-owned, Black American-owned federal contractor. UEI, NAICS codes, and capability statement.",
    url: "https://campux.co/government",
    type: "website",
  },
}

const serif = "var(--font-dm-serif), Georgia, serif"
const bg = "radial-gradient(ellipse 100% 50% at 8% 6%, rgba(200,75,20,0.55) 0%, transparent 46%), radial-gradient(ellipse 60% 38% at 92% 22%, rgba(140,28,80,0.55) 0%, transparent 42%), radial-gradient(ellipse 80% 62% at 50% 58%, rgba(50,16,65,0.75) 0%, transparent 52%), #0a0610"

export default function GovernmentPage() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: 18, lineHeight: 1.6, color: '#fff', background: bg, minHeight: '100vh' }}>

      <Nav active="government" />

      {/* CONTENT */}
      <section className="rsp-section" style={{ maxWidth: 860, margin: '0 auto', padding: '100px 48px 120px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>Federal Contracting</p>
        <h1 style={{ fontFamily: serif, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 40 }}>Government Contracting</h1>

        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, marginBottom: 40 }}>
          CAMPUX LLC is registered in SAM.gov.
        </p>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', minWidth: 100 }}>UEI</span>
              <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)' }}>LZHNRGY8U3L8</span>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', minWidth: 100 }}>CAGE</span>
              <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)' }}>Pending</span>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', minWidth: 100, paddingTop: 2 }}>NAICS</span>
              <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)' }}>541512 (primary), 541511, 541519, 611420</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 32 }}>
            {['Small Business', 'Minority-Owned', 'Black American Owned'].map(b => (
              <span key={b} style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.18)', padding: '6px 14px', borderRadius: 100 }}>{b}</span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
          <a href="/campux-capability-statement.pdf" download style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', color: '#111', padding: '13px 24px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none', letterSpacing: '-0.01em' }}>
            Download Capability Statement (PDF)
          </a>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32, marginTop: 40 }}>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
            Questions about our federal contracting registration or capabilities: <a href="mailto:victor@campux.co" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>victor@campux.co</a>.
          </p>
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
