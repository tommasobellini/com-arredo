'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PreventivoForm from '@/components/PreventivoForm'
import { staggerContainer, fadeUp, fadeLeft, viewportOptions } from '@/lib/animations'

export default function Preventivo() {
  return (
    <section id="preventivo" className="bg-antracite py-32 relative overflow-hidden preventivo-section">
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10 section-fade-bottom-sm" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOptions}
          >
            <motion.h2 variants={fadeLeft} className="serif text-4xl text-7xl-md text-white mb-8 leading-tight">
              Richiedi un <br />
              <span className="text-accent">Preventivo.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white-60 text-lg mb-10 max-w-md leading-relaxed">
              Raccontaci il tuo progetto: dalle cucine su misura agli infissi,
              dai tavoli alle librerie. Ti risponderemo entro 24 ore con una
              valutazione personalizzata e senza impegno.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contatti" className="inline-block text-accent font-semibold border-b border-accent pb-1 hover-opacity-80 transition-all">
                Pagina contatti completa
              </Link>
            </motion.div>
          </motion.div>

          <PreventivoForm />
        </div>
      </div>
    </section>
  )
}
