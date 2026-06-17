'use client'

import { MapPin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import BrandLogo from '@/components/BrandLogo'
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

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-grid">
          <div className="footer-col footer-col--brand">
            <Link href="/" className="footer-logo">
              <BrandLogo variant="full" className="brand-logo brand-logo--footer" />
            </Link>
            <span className="footer-logo-line" aria-hidden />
            <p className="footer-tagline">
              Falegnameria artigianale dal {site.founded}. Mobili su misura e arredi
              d&apos;interni a Cortenuova (BG).
            </p>
          </div>

          <div className="footer-mid">
            <div className="footer-col footer-col--contact">
              <h3 className="footer-heading">Contatti</h3>
              <ul className="footer-contact-list">
                <li>
                  <MapPin size={15} strokeWidth={1.5} aria-hidden />
                  <span>{site.address.full}</span>
                </li>
                <li>
                  <Mail size={15} strokeWidth={1.5} aria-hidden />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                {site.phone && (
                  <li>
                    <Phone size={15} strokeWidth={1.5} aria-hidden />
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
  )
}
