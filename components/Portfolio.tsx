'use client'

import { useState, useEffect, useRef, type CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { images } from '@/lib/images'
import { staggerContainer, fadeUp, expandWidth, viewportOptions } from '@/lib/animations'

const portfolioItems = [
  {
    title: 'Cucina in Noce Massello',
    img: images.portfolio.cucina,
    slug: 'cucina-artigianale',
    details: 'Cucina su misura in noce con incastri a coda di rondine e finitura olio naturale.',
  },
  {
    title: 'Soggiorno Contemporaneo',
    img: images.portfolio.soggiorno,
    slug: 'soggiorno-su-misura',
    details: 'Rovere sbiancato, moduli nascosti e illuminazione integrata per un living essenziale.',
  },
  {
    title: 'Suite Padronale',
    img: images.portfolio.camera,
    slug: 'camera-da-letto-premium',
    highlight: true,
    details: 'Camera completa in frassino ebano con armadi a tutta altezza e hardware soft-close.',
  },
  {
    title: 'Infissi su Misura',
    img: images.portfolio.infissi,
    slug: 'infissi-su-misura',
    details: 'Finestre in legno con doppio vetro, essenze certificate e posa professionale.',
  },
  {
    title: 'Dettaglio Artigianale',
    img: images.portfolio.dettaglio,
    slug: null,
    details: 'Giunzioni a mano, venature esaltate e finiture che rispettano la materia.',
  },
]

const CARD_ASPECT = 400 / 300

function getCarouselMetrics(width: number) {
  const cardWidth = Math.round(Math.min(300, Math.max(220, width * 0.72)))
  const cardHeight = Math.round(cardWidth * CARD_ASPECT)
  const gap = width < 480 ? 24 : width < 768 ? 32 : 40
  const spacing = cardWidth + gap
  return { cardWidth, cardHeight, spacing, viewportWidth: width }
}

function getCardOpacity(distance: number, viewportWidth: number) {
  const maxVisible = viewportWidth < 480 ? 1 : 2
  return distance > maxVisible ? 0 : 1
}

export default function Portfolio() {
  const [index, setIndex] = useState(2)
  const [metrics, setMetrics] = useState(() => getCarouselMetrics(1280))
  const wrapperRef = useRef<HTMLDivElement>(null)
  const carouselSectionRef = useRef<HTMLDivElement>(null)
  const entranceDone = useRef(false)

  const carouselInView = useInView(carouselSectionRef, {
    once: true,
    margin: '-80px',
    amount: 0.2,
  })

  useEffect(() => {
    if (!carouselInView) return
    const timer = setTimeout(() => {
      entranceDone.current = true
    }, 900)
    return () => clearTimeout(timer)
  }, [carouselInView])

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const update = () => {
      const width = el.clientWidth || window.innerWidth
      setMetrics(getCarouselMetrics(width))
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    window.addEventListener('resize', update)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  const { cardWidth, cardHeight, spacing: cardSpacing, viewportWidth } = metrics
  const centerX = -cardWidth / 2
  const centerY = -cardHeight / 2
  const carouselHeight = Math.round(cardHeight * 1.15 + 48)

  const next = () => setIndex((prev) => (prev + 1) % portfolioItems.length)
  const prev = () => setIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)

  return (
    <section id="portfolio" className="bg-granite py-32 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10 section-fade-top" />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10 section-fade-bottom" />

      <motion.div
        className="container relative z-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOptions}
      >
        <motion.div variants={fadeUp} className="portfolio-header flex justify-between items-center mb-16">
          <div>
            <h2 className="serif text-4xl text-6xl-md text-white">
              Portfolio <span className="text-accent">Selezione</span>
            </h2>
            <motion.div variants={expandWidth} style={{ originX: 0 }}>
              <div className="h-px bg-accent mt-3" style={{ width: '60px' }} />
            </motion.div>
          </div>

          <div className="portfolio-header-actions flex gap-4 items-center">
            <Link href="/portfolio" className="nav-link hidden md:block mr-4">
              Vedi tutto
            </Link>
            <button
              onClick={prev}
              aria-label="Precedente"
              className="carousel-nav-btn rounded-full flex items-center justify-center transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Successivo"
              className="carousel-nav-btn rounded-full flex items-center justify-center transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </motion.div>

      <div ref={carouselSectionRef} className="portfolio-carousel-fullwidth relative z-20">
        <motion.div
          ref={wrapperRef}
          className="portfolio-carousel-wrapper relative touch-pan-y"
          style={{ '--carousel-height': `${carouselHeight}px` } as CSSProperties}
          initial={{ opacity: 0 }}
          animate={{ opacity: carouselInView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onPanEnd={(_, info) => {
            if (info.offset.x < -50) next()
            else if (info.offset.x > 50) prev()
          }}
        >
          {portfolioItems.map((item, i) => {
            const isActive = i === index
            const slideOffset = (i - index) * cardSpacing
            const distance = Math.abs(i - index)
            const targetX = centerX + slideOffset
            const targetY = centerY
            const targetScale = isActive ? 1.05 : 0.88
            const targetOpacity = getCardOpacity(distance, viewportWidth)
            const entranceDelay = carouselInView && !entranceDone.current ? distance * 0.12 : 0

            return (
              <motion.div
                key={item.title}
                animate={{
                  x: carouselInView ? targetX : targetX + (i - index) * 28,
                  y: carouselInView ? targetY : targetY + 72,
                  scale: carouselInView ? targetScale : 0.78,
                  opacity: carouselInView ? targetOpacity : 0,
                  zIndex: isActive ? 20 : 10 - distance,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 28,
                  delay: entranceDelay,
                }}
                className={`portfolio-card wood-frame group cursor-pointer ${isActive ? 'shadow-accent' : ''}`}
                style={{ width: cardWidth, height: cardHeight }}
                onClick={() => setIndex(i)}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />

                  <div className="absolute inset-0 flex flex-col justify-end p-6 card-gradient-overlay">
                    {isActive && item.details && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
                        <p className="text-white-60 text-xs leading-relaxed mb-4">{item.details}</p>
                        {item.slug ? (
                          <Link href={`/prodotti/${item.slug}`} className="text-accent text-xs font-bold border-b border-accent pb-0-5">
                            Scopri il progetto
                          </Link>
                        ) : (
                          <Link href="/portfolio" className="text-accent text-xs font-bold border-b border-accent pb-0-5">
                            Vedi portfolio
                          </Link>
                        )}
                      </motion.div>
                    )}
                    <h3 className="serif text-lg text-white group-hover:text-accent transition-colors">{item.title}</h3>
                  </div>

                  {isActive && <div className="absolute top-50pct right-0 w-12 h-px bg-accent shadow-copper-glow" />}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <div className="container relative z-20">
        <motion.div
          className="flex justify-center gap-4 mt-16"
          initial={{ opacity: 0, y: 24 }}
          animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {portfolioItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1 rounded-full transition-all ${i === index ? 'w-12 bg-accent' : 'w-6 bg-white-10'}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
