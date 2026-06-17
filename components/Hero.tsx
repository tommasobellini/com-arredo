'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { images } from '@/lib/images'
import { staggerContainer, fadeUp, expandWidth } from '@/lib/animations'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-0 mt-0 bg-antracite">
      <motion.div className="absolute inset-0 z-0" initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 1.2 }}>
        <Image
          src={images.hero}
          alt="Bottega artigiana Com-Arredo — falegnameria su misura"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: 'center 40%', opacity: 0.5 }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <motion.div className="absolute inset-0 bg-gradient-to-t to-transparent" />
      </motion.div>

      <div className="container relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.span
            variants={fadeUp}
            className="text-accent text-xs text-sm-md font-bold tracking-widest md:tracking-3em uppercase block mb-6"
          >
            ARTIGIANATO ITALIANO DAL 1991
          </motion.span>

          <motion.div variants={expandWidth} style={{ originX: 0.5 }}>
            <motion.div className="mx-auto mb-6" style={{ height: '1px', width: '60px', background: 'var(--accent-copper)' }} />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="serif text-4xl text-8xl-md mb-8 md:mb-12 leading-tight text-white px-4 md:px-0"
          >
            L&apos;Anima del <span className="text-accent">Legno.</span> <br />
            Scolpita a Mano.
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="section-actions section-actions--center section-actions--stack-md-row px-6 md:px-0"
            style={{ marginTop: '3rem' }}
          >
            <Link href="/portfolio" className="btn-primary w-full md:min-w-240">
              ESPLORA COLLEZIONE
            </Link>
            <Link href="/chi-siamo" className="btn-secondary w-full md:min-w-240">
              SCOPRI DI PIÙ
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base to-transparent z-20" />
    </section>
  )
}
