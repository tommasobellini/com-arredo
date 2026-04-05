'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, fadeUp, expandWidth } from '@/lib/animations'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-0 mt-0 bg-antracite">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=90&w=1920&auto=format&fit=crop"
          alt="Artigianato Italiano - Falegnameria Com-Arredo"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 30%', opacity: 0.45 }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(5,5,5,0.55)' }} />
        <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.span
            variants={fadeUp}
            className="text-accent text-xs text-sm-md font-bold tracking-3em uppercase block mb-6"
          >
            ARTIGIANATO ITALIANO DAL 1991
          </motion.span>

          <motion.div variants={expandWidth} style={{ originX: 0.5 }}>
            <div className="mx-auto mb-6" style={{ height: '1px', width: '60px', background: 'var(--accent-copper)' }} />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="serif text-5xl text-8xl-md mb-12 leading-tight text-white"
          >
            L'Anima del <span className="text-accent">Legno.</span> <br />
            Scolpita a Mano.
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-col flex-row-md items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary min-w-240"
            >
              ESPLORA COLLEZIONE
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary min-w-240"
            >
              SCOPRI DI PIÙ
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base to-transparent z-20" />
    </section>
  )
}
