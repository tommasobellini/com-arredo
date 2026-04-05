'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { staggerContainer, fadeUp, fadeLeft, fadeRight, expandWidth, viewportOptions } from '@/lib/animations'

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=85&w=1920&auto=format&fit=crop"
          alt="Bottega artigiana Com-Arredo"
          fill
          className="object-cover"
          style={{ opacity: 0.35, objectPosition: 'center 60%' }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(8,6,4,0.72)' }} />
        <div className="absolute top-0 left-0 right-0" style={{ height: '180px', background: 'linear-gradient(to bottom, #0a0a0a, transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0" style={{ height: '180px', background: 'linear-gradient(to top, #0e0d0b, transparent)' }} />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 grid-cols-2-md gap-12 gap-24-md items-center">

          {/* Colonna sinistra — sequenza: badge → linea → titolo */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOptions}
          >
            <motion.span variants={fadeUp} className="text-accent text-10px font-bold tracking-3em uppercase block mb-6">
              LA NOSTRA ESSENZA
            </motion.span>

            <motion.h2 variants={fadeLeft} className="serif text-5xl text-7xl-md text-white leading-tight mb-8">
              Tradizione e <br />
              <span className="text-accent" style={{ borderBottom: '2px solid rgba(194,154,117,0.35)', paddingBottom: '4px' }}>Eccellenza</span> <br />
              Artigiana.
            </motion.h2>

            <motion.div variants={expandWidth} style={{ originX: 0 }}>
              <div className="w-20 h-px bg-accent mb-8" />
            </motion.div>
          </motion.div>

          {/* Colonna destra — sequenza: citazione → paragrafi → CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOptions}
            className="flex flex-col gap-10"
          >
            <div className="space-y-6">
              <motion.p variants={fadeRight} className="text-white-80 text-xl leading-relaxed serif italic">
                "Trasformiamo il legno in opere che durano generazioni."
              </motion.p>
              <motion.p variants={fadeUp} className="text-white-60 text-lg leading-relaxed">
                Dal 1991, Com-Arredo è il punto di riferimento per chi cerca l'unicità
                del fatto a mano. Ogni pezzo nasce da un dialogo tra la materia prima
                e la visione del cliente, portando l'arte falegnamistica italiana
                nei contesti del design contemporaneo.
              </motion.p>
              <motion.p variants={fadeUp} className="text-white-60 text-lg leading-relaxed">
                Utilizziamo esclusivamente legnami pregiati da filiere certificate,
                lavorati con tecniche tradizionali che ne esaltano le venature naturali
                e ne garantiscono la solidità nel tempo.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="flex items-center gap-6">
              <Link href="/chi-siamo" className="btn-primary">
                Scopri la nostra storia
              </Link>
              <Link
                href="/contatti"
                className="text-white-80 text-xs font-bold tracking-widest border-b border-white-20 hover-border-accent pb-1 transition-all"
              >
                CONTATTACI ORA
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
