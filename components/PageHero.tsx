'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface PageHeroProps {
  eyebrow: string
  title: string
  highlight?: string
  subtitle?: string
  image?: string
}

export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  image = '/detail.png',
}: PageHeroProps) {
  return (
    <section className="relative page-hero-section pt-40 pb-24 overflow-hidden bg-antracite">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          aria-hidden
        />
        <motion.div className="absolute inset-0 page-hero-overlay" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="container relative z-10 text-center max-w-3xl mx-auto"
      >
        <span className="text-accent text-10px font-bold tracking-3em uppercase block mb-6">
          {eyebrow}
        </span>
        <h1 className="serif text-4xl text-6xl-md text-white leading-tight mb-6">
          {title}
          {highlight && (
            <>
              {' '}
              <span className="text-accent">{highlight}</span>
            </>
          )}
        </h1>
        {subtitle && (
          <p className="text-white-60 text-lg leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
        )}
      </motion.div>
    </section>
  )
}
