'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { staggerContainer, fadeUp, expandWidth, viewportOptions } from '@/lib/animations'

const portfolioItems = [
  {
    title: 'Tavoli Minimalisti',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    highlight: false,
  },
  {
    title: 'Infilaggi a Coda di Rondine',
    img: 'https://images.unsplash.com/photo-1520110120835-c96534a4c984?q=80&w=800&auto=format&fit=crop',
    highlight: false,
  },
  {
    title: 'Tavoli Minimalisti',
    img: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop',
    highlight: true,
    details: 'Struttura in rovere massello con giunzioni a coda di rondine, finitura olio naturale. Dimensioni su misura...'
  },
  {
    title: 'Infissi su Misura',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    highlight: false,
  },
  {
    title: 'Dettagli di Prevenzione',
    img: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=800&auto=format&fit=crop',
    highlight: false,
  }
]

const CARD_SPACING = 330

export default function Portfolio() {
  const [index, setIndex] = useState(2)

  const next = () => setIndex((prev) => (prev + 1) % portfolioItems.length)
  const prev = () => setIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)

  return (
    <section className="bg-granite py-32 overflow-hidden relative">
      {/* Gradient fade in — About (#0a0a0a) → granite */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10" style={{ height: '260px', background: 'linear-gradient(to bottom, #0a0a0a 0%, rgba(10,10,10,0.85) 30%, rgba(10,10,10,0.4) 65%, transparent 100%)' }} />
      {/* Gradient fade out — granite → Preventivo (#0a0a0a) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" style={{ height: '260px', background: 'linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.85) 30%, rgba(10,10,10,0.4) 65%, transparent 100%)' }} />

      <div className="container relative z-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOptions}
          className="flex justify-between items-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <h2 className="serif text-4xl text-6xl-md text-white">
              Portfolio <span className="text-accent">Selezione</span>
            </h2>
            <motion.div variants={expandWidth} style={{ originX: 0 }}>
              <div className="h-px bg-accent mt-3" style={{ width: '60px' }} />
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{ background: 'rgba(194,154,117,0.15)', border: '1px solid rgba(194,154,117,0.6)', color: '#c29a75' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(194,154,117,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(194,154,117,0.15)')}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{ background: 'rgba(194,154,117,0.15)', border: '1px solid rgba(194,154,117,0.6)', color: '#c29a75' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(194,154,117,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(194,154,117,0.15)')}
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <div className="portfolio-carousel-wrapper">
          {portfolioItems.map((item, i) => {
            const isActive = i === index
            const offset = (i - index) * CARD_SPACING
            return (
              <motion.div
                key={i}
                animate={{
                  x: offset,
                  scale: isActive ? 1.05 : 0.88,
                  opacity: Math.abs(i - index) > 2 ? 0 : 1,
                  zIndex: isActive ? 20 : 10 - Math.abs(i - index),
                }}
                transition={{ type: 'spring', stiffness: 280, damping: 30 }}
                className={`portfolio-card wood-frame group cursor-pointer ${isActive ? 'shadow-accent' : ''}`}
                onClick={() => setIndex(i)}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />

                  <div className="absolute inset-0 flex flex-col justify-end p-6" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}>
                    {isActive && item.details && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4"
                      >
                        <p className="text-white-60 text-xs leading-relaxed mb-4">
                          {item.details}
                        </p>
                        <Link href="#" className="text-accent text-xs font-bold border-b border-accent pb-0-5">
                          Metallic details
                        </Link>
                      </motion.div>
                    )}
                    <h3 className="serif text-lg text-white group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {isActive && (
                    <div className="absolute top-50pct right-0 w-12 h-px bg-accent shadow-copper-glow" />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-4 mt-16">
          {portfolioItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all ${i === index ? 'w-12 bg-accent' : 'w-6 bg-white-10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
