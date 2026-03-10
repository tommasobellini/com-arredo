'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'CHI SIAMO', href: '#about' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'CONTATTI', href: '#contatti' },
  ]

  return (
    <nav 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.5s ease',
        padding: scrolled || mobileMenuOpen ? '1rem 0' : '1.5rem 0',
        background: scrolled || mobileMenuOpen ? 'rgba(255, 255, 255, 0.98)' : 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)',
        boxShadow: scrolled || mobileMenuOpen ? '0 10px 30px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          width: '100%', 
          padding: '0 5%',
          boxSizing: 'border-box'
        }}
      >
        {/* Left: Logo */}
        <div style={{ flex: '1 0 0%', display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ 
            fontSize: '1.8rem', 
            fontWeight: 900, 
            letterSpacing: '-0.05em', 
            color: 'var(--accent)', 
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            whiteSpace: 'nowrap'
          }}>
            COM ARREDO
          </div>
        </div>
        
        {/* Center: Desktop Links */}
        <div className="hidden lg:flex" style={{ flex: '0 1 auto', gap: '3rem', alignItems: 'center', justifyContent: 'center' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              style={{ 
                fontSize: '11px', 
                fontWeight: 900, 
                letterSpacing: '0.3em', 
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: scrolled || mobileMenuOpen ? '#1a1a1a' : 'white',
                transition: 'color 0.3s ease',
                position: 'relative',
                padding: '0.5rem 0',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = scrolled || mobileMenuOpen ? '#1a1a1a' : 'white')}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full shadow-[0_0_15px_var(--accent)]"></span>
            </a>
          ))}
        </div>

        {/* Right: CTA & Mobile Toggle */}
        <div style={{ flex: '1 0 0%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '2rem' }}>
          <button 
            onClick={() => document.getElementById('preventivo')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden sm:block"
            style={{ 
              backgroundColor: 'var(--accent)',
              color: 'white',
              padding: '0.8rem 2.22rem',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '10px',
              fontWeight: 900,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 10px 20px rgba(139, 69, 19, 0.4)',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            PREVENTIVO
          </button>
          
          <button 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              background: 'none', 
              border: 'none', 
              color: 'var(--accent)', 
              cursor: 'pointer'
            }}
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Chiudi menu di navigazione" : "Apri menu di navigazione"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
      
      {/* LED Strip - Fixed refined look */}
      <div 
        style={{ 
          height: '2px', 
          width: '100%', 
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', 
          backgroundSize: '200% 100%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          boxShadow: '0 0 15px var(--accent)',
          opacity: 0.8
        }}
        className="led-strip-anim"
      ></div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white z-[60] overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6 p-8 font-bold tracking-widest text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-accent transition-colors py-4 block text-gray-900 font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTimeout(() => document.getElementById('preventivo')?.scrollIntoView({ behavior: 'smooth' }), 300);
                }}
                className="btn-primary w-full mt-4"
              >
                PREVENTIVO
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
