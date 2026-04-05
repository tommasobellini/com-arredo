'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/produzione', label: 'Produzione' },
  { href: '/portfolio', label: 'Portfolio' },
]

const rightLinks = [
  { href: '/chi-siamo', label: 'Chi Siamo' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-100 transition-all"
        style={{
          padding: scrolled ? '14px 0' : '28px 0',
          background: scrolled
            ? 'rgba(8,6,4,0.88)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(194,154,117,0.12)' : 'none',
          transition: 'padding 0.4s ease, background 0.4s ease, border 0.4s ease',
        }}
      >
        <div className="container flex justify-between items-center relative">

          {/* Left Links */}
          <div className="hidden md:flex items-center gap-10 flex-1">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="nav-link">
                {label}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <div className="absolute left-1-2 translate-x-1-2-neg text-center flex flex-col items-center gap-1">
            <Link href="/" className="serif text-2xl text-3xl-md font-bold tracking-tight text-accent">
              Com-Arredo
            </Link>
            <div style={{ height: '1px', width: '100%', background: 'linear-gradient(to right, transparent, rgba(194,154,117,0.6), transparent)' }} />
          </div>

          {/* Right Actions */}
          <div className="flex items-center justify-end gap-8 flex-1">
            {rightLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="nav-link hidden md:block">
                {label}
              </Link>
            ))}
            <Link
              href="/contatti"
              className="hidden md:inline-flex items-center gap-2 nav-cta"
            >
              Contattaci
            </Link>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-90 md:hidden flex flex-col"
            style={{ background: 'rgba(6,4,2,0.97)', backdropFilter: 'blur(20px)', top: '0', paddingTop: '100px' }}
          >
            {/* Close */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white-60"
            >
              <X size={24} />
            </button>

            {/* Logo */}
            <div className="text-center mb-12">
              <span className="serif text-3xl font-bold text-accent">Com-Arredo</span>
              <div className="mx-auto mt-2" style={{ height: '1px', width: '80px', background: 'linear-gradient(to right, transparent, rgba(194,154,117,0.7), transparent)' }} />
            </div>

            <div className="flex flex-col items-center gap-8">
              {[...navLinks, ...rightLinks].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="serif text-2xl text-white-80 hover-text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="h-px w-16 bg-white-10 my-2" />
              <Link
                href="/contatti"
                className="btn-primary px-12"
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
