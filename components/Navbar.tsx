'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import BrandLogo from '@/components/BrandLogo'
import ThemeToggle from '@/components/ThemeToggle'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/produzione', label: 'Produzione' },
  { href: '/materiali', label: 'Materiali' },
  { href: '/portfolio', label: 'Portfolio' },
]

const rightLinks = [{ href: '/chi-siamo', label: 'Chi Siamo' }]

const mobileLinks = [
  ...navLinks,
  ...rightLinks,
  { href: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <nav className={`site-navbar ${scrolled ? 'site-navbar--scrolled' : ''}`}>
        <div className="container navbar-inner">
          <div className="hidden md:flex items-center gap-10 navbar-desktop-left">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="nav-link">
                {label}
              </Link>
            ))}
          </div>

          <Link href="/" className="navbar-logo" aria-label="Com-Arredo — Home">
            <BrandLogo variant="full" className="brand-logo brand-logo--navbar" priority />
          </Link>

          <div className="navbar-actions">
            <ThemeToggle className="theme-toggle--navbar" />
            {rightLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="nav-link hidden md:block">
                {label}
              </Link>
            ))}
            <Link href="/contatti" className="hidden md:inline-flex nav-cta">
              Contattaci
            </Link>
            <button
              type="button"
              className="navbar-menu-btn md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mobile-menu-overlay md:hidden"
          >
            <div className="mobile-menu-content">
              <nav className="mobile-menu-nav" aria-label="Menu mobile">
                {mobileLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="mobile-menu-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contatti"
                className="btn-primary w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contattaci
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
