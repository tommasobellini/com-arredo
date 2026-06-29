import Link from 'next/link'
import BrandLogo from '@/components/BrandLogo'
import SectionDivider, { type SectionTone } from '@/components/SectionDivider'
import { site } from '@/lib/site'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/produzione', label: 'Produzione' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '/contatti', label: 'Contatti' },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/cookies', label: 'Cookie' },
  { href: '/termini', label: 'Termini' },
]

function IconMapPin() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  )
}

export default function Footer({ dividerFrom = 'elevated' }: { dividerFrom?: SectionTone }) {
  const year = new Date().getFullYear()

  return (
    <>
      <SectionDivider from={dividerFrom} to="footer" />
      <footer className="site-footer">
        <div className="container footer-shell">
          <div className="footer-grid">
            <div className="footer-col footer-col--brand">
              <Link href="/" className="footer-logo">
                <BrandLogo variant="full" className="brand-logo brand-logo--footer" />
              </Link>
              <span className="footer-logo-line" aria-hidden />
              <p className="footer-tagline">
                <span>Falegnameria artigianale dal {site.founded}.</span>
                <span>Mobili su misura e arredi d&apos;interni a Cortenuova (BG).</span>
              </p>
            </div>

            <div className="footer-mid">
              <div className="footer-col footer-col--contact">
                <h3 className="footer-heading">Contatti</h3>
                <ul className="footer-contact-list">
                  <li>
                    <IconMapPin />
                    <span className="footer-address">
                      <span>{site.address.street}</span>
                      <span>
                        {site.address.cap} {site.address.city} ({site.address.province})
                      </span>
                    </span>
                  </li>
                  <li>
                    <IconMail />
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </li>
                  {site.phone && (
                    <li>
                      <IconPhone />
                      <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
                    </li>
                  )}
                </ul>
                <Link
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-maps-link"
                >
                  Indicazioni stradali
                </Link>
              </div>

              <nav className="footer-col footer-col--nav" aria-label="Navigazione footer">
                <h3 className="footer-heading">Menu</h3>
                <ul className="footer-links">
                  {navLinks.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="footer-col footer-col--cta">
              <Link href="/contatti" className="btn-primary footer-btn">
                Richiedi preventivo
              </Link>
              <Link href="/portfolio" className="footer-cta-secondary footer-btn">
                Vedi portfolio
              </Link>
            </div>
          </div>

          <div className="footer-bar">
            <div className="footer-bar-main">
              <p className="footer-meta">
                <span>© {year} {site.name}</span>
                <span className="footer-meta-dot" aria-hidden>·</span>
                <span>P.IVA {site.piva}</span>
              </p>
              <nav className="footer-legal-bar" aria-label="Link legali">
                <ul className="footer-legal-links">
                  {legalLinks.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <p className="footer-credit">
              design by{' '}
              <a href="https://www.tommasobellini.it" target="_blank" rel="noopener noreferrer">
                Tommaso Bellini
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
