'use client'

import { Share2, Camera, Play, MapPin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white py-24 relative" style={{ backgroundColor: '#050505' }}>
      <div className="container">
        <div className="grid grid-cols-1 grid-cols-12-md gap-16 mb-20">

          {/* Logo & Descrizione */}
          <div className="col-span-4-md">
            <Link href="/" className="serif text-2xl font-bold tracking-tight text-accent block mb-6">
              Com-Arredo
            </Link>
            <p className="text-white-40 text-sm leading-relaxed max-w-sm mb-8">
              Falegnameria artigianale dal 1991 a Cortenuova (BG). Mobili su misura, infissi in legno e arredamenti d'interni realizzati a mano con essenze pregiate certificate.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-white-40 text-xs hover-text-white transition-colors cursor-default">
                <MapPin size={14} className="text-accent" />
                <span>Via Giosuè Carducci 28 — 24050 Cortenuova (BG)</span>
              </div>
              <div className="flex items-center gap-3 text-white-40 text-xs hover-text-white transition-colors">
                <Mail size={14} className="text-accent" />
                <a href="mailto:info@comarredo.com">info@comarredo.com</a>
              </div>
            </div>
          </div>

          {/* Navigazione */}
          <div className="col-span-2-md">
            <h3 className="text-white text-xs font-bold tracking-2em mb-8">NAVIGAZIONE</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white-40 text-sm hover-text-white transition-colors">Home</Link></li>
              <li><Link href="/produzione" className="text-white-40 text-sm hover-text-white transition-colors">Produzione</Link></li>
              <li><Link href="/portfolio" className="text-white-40 text-sm hover-text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/chi-siamo" className="text-white-40 text-sm hover-text-white transition-colors">Chi Siamo</Link></li>
            </ul>
          </div>

          {/* Legale & Supporto */}
          <div className="col-span-3-md">
            <h3 className="text-white text-xs font-bold tracking-2em mb-8">LEGALE</h3>
            <ul className="space-y-4">
              <li><Link href="/termini" className="text-white-40 text-sm hover-text-white transition-colors">Termini e Condizioni</Link></li>
              <li><Link href="/contatti" className="text-white-40 text-sm hover-text-white transition-colors">Contattaci</Link></li>
              <li><Link href="/privacy" className="text-white-40 text-sm hover-text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="text-white-40 text-sm hover-text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-span-3-md flex justify-end-md gap-6 items-start">
            <Link href="#" className="w-10 h-10 rounded-full bg-white-5 flex items-center justify-center hover-bg-accent transition-all group">
              <Camera size={18} className="text-white-40 group-hover:text-white transition-colors" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white-5 flex items-center justify-center hover-bg-accent transition-all group">
              <Play size={18} className="text-white-40 group-hover:text-white transition-colors ml-1" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white-5 flex items-center justify-center hover-bg-accent transition-all group">
              <Share2 size={18} className="text-white-40 group-hover:text-white transition-colors" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="pt-12 border-t border-white-5 flex flex-col flex-row-md justify-between items-center gap-6">
          <div className="flex flex-col flex-row-md gap-4 md:gap-8 items-center text-center md:text-left">
            <p className="text-9px text-white-20 font-bold tracking-4em uppercase mb-0 whitespace-nowrap">
              © {currentYear} Com-Arredo S.R.L.
            </p>
            <p className="text-9px text-white-20 font-bold tracking-4em uppercase mb-0 whitespace-nowrap">
              P.IVA: 02113340166
            </p>
            <p className="text-9px text-white-20 font-bold tracking-4em uppercase mb-0 whitespace-nowrap">
              ARTIGIANATO ITALIANO DI ECCELLENZA
            </p>
          </div>
          
          <div className="flex items-center gap-1">
            <span className="text-9px text-white-20 font-bold tracking-4em uppercase">DESIGN BY</span>
            <span className="text-9px text-accent font-bold tracking-4em uppercase">FALCON DESIGN</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
