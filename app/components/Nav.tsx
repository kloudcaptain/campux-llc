import Link from 'next/link'

type NavKey = 'services' | 'government' | 'insights' | 'about'

interface NavProps {
  active?: NavKey
  theme?: 'dark' | 'light'
  ctaHref?: string
  ctaLabel?: string
}

const NAV_ITEMS: { key: NavKey; href: string; label: string }[] = [
  { key: 'services', href: '/services', label: 'Services' },
  { key: 'government', href: '/government', label: 'Government' },
  { key: 'insights', href: '/insights', label: 'Insights' },
  { key: 'about', href: '/about', label: 'About' },
]

export default function Nav({ active, theme = 'dark', ctaHref = '/contact', ctaLabel = 'Talk to our team' }: NavProps) {
  const isDark = theme === 'dark'
  const logoFill = isDark ? 'white' : '#1a1a1a'
  const navBg = isDark ? 'rgba(10,6,14,0.9)' : 'rgba(240,235,226,0.92)'
  const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'
  const linkClass = isDark ? 'link-nav' : 'link-dark'
  const activeStyle = isDark
    ? { color: 'white', background: 'rgba(255,255,255,0.08)' }
    : { color: '#1a1a1a', background: 'rgba(0,0,0,0.06)' }
  const ctaStyle = isDark
    ? undefined
    : { background: '#1a1a1a', color: 'white', padding: '9px 22px', borderRadius: 8, fontSize: 14, fontWeight: 600 as const }

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 300, background: navBg, borderBottom: `1px solid ${borderColor}` }}>
      {/* Blur lives on its own layer so the sticky nav doesn't become a containing
          block for the fixed mobile overlay (backdrop-filter would trap it in the bar). */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', pointerEvents: 'none', zIndex: -1 }} />
      <div className="rsp-nav-inner" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px', height: 72, display: 'flex', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, flex: '0 0 auto', marginRight: 56 }}>
          <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
            <rect x="3" y="3" width="13" height="13" rx="3" fill={logoFill} />
            <rect x="20" y="3" width="13" height="13" rx="3" fill={logoFill} opacity="0.4" />
            <rect x="3" y="20" width="13" height="13" rx="3" fill={logoFill} opacity="0.4" />
            <rect x="20" y="20" width="13" height="13" rx="3" fill={logoFill} />
          </svg>
          <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: '-0.04em', color: logoFill }}>Campux</span>
        </Link>

        <div className="rsp-nav-links" style={{ display: 'flex', gap: 4, flex: 1 }}>
          {NAV_ITEMS.map(item => (
            <Link
              key={item.key}
              href={item.href}
              className={active === item.key ? undefined : linkClass}
              style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500, ...(active === item.key ? activeStyle : {}) }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href={ctaHref} className={isDark ? 'btn-dark rsp-nav-links' : 'rsp-nav-links'} style={{ ...(isDark ? { padding: '9px 22px', fontSize: 14 } : ctaStyle) }}>
          {ctaLabel}
        </Link>

        <details className="mob-menu-toggle">
          <summary aria-label="Open menu">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none"><rect y="0" width="18" height="2" rx="1" fill="currentColor" /><rect y="6" width="18" height="2" rx="1" fill="currentColor" /><rect y="12" width="18" height="2" rx="1" fill="currentColor" /></svg>
          </summary>
          <div className="mob-menu-overlay">
            <div style={{ height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="24" height="24" viewBox="0 0 36 36" fill="none"><rect x="3" y="3" width="13" height="13" rx="3" fill="white" /><rect x="20" y="3" width="13" height="13" rx="3" fill="white" opacity="0.4" /><rect x="3" y="20" width="13" height="13" rx="3" fill="white" opacity="0.4" /><rect x="20" y="20" width="13" height="13" rx="3" fill="white" /></svg>
                <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.04em', color: 'white' }}>Campux</span>
              </Link>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: 32, gap: 4 }}>
              {[{ href: '/', label: 'Home' }, ...NAV_ITEMS].map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: 28, fontFamily: 'var(--font-dm-serif),Georgia,serif', fontWeight: 400, color: 'white', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', letterSpacing: '-0.02em' }}>{l.label}</Link>
              ))}
              <Link href={ctaHref} style={{ marginTop: 32, display: 'block', background: 'white', color: '#111', padding: '16px 24px', borderRadius: 10, fontSize: 16, fontWeight: 600, textAlign: 'center' }}>
                {ctaHref === '#contact-form' || ctaLabel === 'Get in touch' ? 'Get in touch' : ctaLabel}
              </Link>
            </div>
          </div>
        </details>
      </div>
    </nav>
  )
}
