'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import BrandLogo from '@/components/BrandLogo'
import ThemeToggle from '@/components/ThemeToggle'
import FontToggle from '@/components/FontToggle'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/produzione', label: 'Produzione' },
  { href: '/materiali', label: 'Materiali' },
  { href: '/portfolio', label: 'Portfolio' },
]

const rightLinks = [{ href: '/chi-siamo', label: 'Chi siamo' }]

const mobileLinks = [
  ...navLinks,
  ...rightLinks,
  { href: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const menuPanelRef = useRef<HTMLDivElement>(null)

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
    menuBtnRef.current?.focus()
  }, [])

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

  useEffect(() => {
    if (!mobileMenuOpen) return

    const panel = menuPanelRef.current
    if (!panel) return

    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    first?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu()
        return
      }
      if (e.key !== 'Tab' || focusable.length === 0) return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileMenuOpen, closeMobileMenu])

  return (
    <>
      <nav className={`site-navbar ${scrolled ? 'site-navbar--scrolled' : ''}`} aria-label="Navigazione principale">
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
            <ThemeToggle className="theme-toggle--navbar hidden sm:inline-flex" />
            <FontToggle className="font-toggle--navbar hidden lg:inline-flex" />
            {rightLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="nav-link hidden md:block">
                {label}
              </Link>
            ))}
            <Link href="/contatti" className="hidden md:inline-flex nav-cta">
              Richiedi preventivo
            </Link>
            <button
              ref={menuBtnRef}
              type="button"
              className="navbar-menu-btn md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-panel"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={menuPanelRef}
            id="mobile-menu-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mobile-menu-overlay md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu di navigazione"
          >
            <div className="mobile-menu-content">
              <div className="mobile-menu-toggles">
                <ThemeToggle className="theme-toggle--menu" />
                <FontToggle className="font-toggle--menu" />
              </div>
              <nav className="mobile-menu-nav" aria-label="Menu mobile">
                {mobileLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="mobile-menu-link"
                    onClick={closeMobileMenu}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contatti"
                className="btn-primary w-full"
                onClick={closeMobileMenu}
              >
                Richiedi preventivo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
