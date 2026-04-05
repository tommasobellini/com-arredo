'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewportOptions } from '@/lib/animations'

export default function Preventivo() {
  return (
    <section id="preventivo" className="bg-antracite py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none grayscale" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" style={{ height: '180px', background: 'linear-gradient(to top, #050505 0%, transparent 100%)' }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Testo — sequenza: titolo → corpo → link */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOptions}
          >
            <motion.h2 variants={fadeLeft} className="serif text-5xl text-7xl-md text-white mb-8 leading-tight">
              Richiedi un <br />
              <span className="text-accent">Preventivo.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white-60 text-lg mb-10 max-w-md leading-relaxed">
              Raccontaci il tuo progetto: dalle cucine su misura agli infissi,
              dai tavoli alle librerie. Ti risponderemo entro 24 ore con una
              valutazione personalizzata e senza impegno.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="#preventivo"
                className="inline-block text-accent font-semibold border-b border-accent pb-1 hover-opacity-80 transition-all"
              >
                Richiedi un Preventivo
              </Link>
            </motion.div>
          </motion.div>

          {/* Form — sequenza: riga 1 → riga 2 → textarea → bottone */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOptions}
            className="w-full"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <motion.div variants={fadeRight} className="grid grid-cols-2-md gap-6">
                <input type="text" placeholder="Nome" className="input-field" />
                <input type="text" placeholder="Cognome" className="input-field" />
              </motion.div>
              <motion.div variants={fadeRight} className="grid grid-cols-2-md gap-6">
                <input type="email" placeholder="Email" className="input-field" />
                <input type="tel" placeholder="Telefono" className="input-field" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <textarea placeholder="Lascia un messaggio..." rows={5} className="input-field" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <button
                  type="submit"
                  className="btn-primary w-full"
                  style={{ boxShadow: '0 10px 40px rgba(194,154,117,0.2)' }}
                >
                  INVIA RICHIESTA
                </button>
              </motion.div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
