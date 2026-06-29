'use client'

import { useState, useEffect, useRef, type CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { images } from '@/lib/images'
import { staggerContainer, fadeUp, expandWidth, viewportOptions } from '@/lib/animations'
import { useContentParallax, useLayerParallax, useSectionScroll } from '@/lib/parallax'

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

function getCircularOffset(itemIndex: number, activeIndex: number, total: number) {
  let offset = itemIndex - activeIndex
  if (offset > total / 2) offset -= total
  if (offset < -total / 2) offset += total
  return offset
}

function getCircularDistance(itemIndex: number, activeIndex: number, total: number) {
  return Math.abs(getCircularOffset(itemIndex, activeIndex, total))
}

export default function Portfolio() {
  const [index, setIndex] = useState(2)
  const [metrics, setMetrics] = useState(() => getCarouselMetrics(1280))
  const wrapperRef = useRef<HTMLDivElement>(null)
  const carouselSectionRef = useRef<HTMLDivElement>(null)
  const entranceDone = useRef(false)
  const swipeRef = useRef({ x: 0, y: 0, pointerId: -1 })
  const didSwipeRef = useRef(false)

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

  const itemCount = portfolioItems.length

  const next = () => setIndex((prev) => (prev + 1) % itemCount)
  const prev = () => setIndex((prev) => (prev - 1 + itemCount) % itemCount)

  const SWIPE_THRESHOLD = 48

  const handleSwipePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    swipeRef.current = { x: e.clientX, y: e.clientY, pointerId: e.pointerId }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handleSwipePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (swipeRef.current.pointerId !== e.pointerId) return

    const deltaX = e.clientX - swipeRef.current.x
    const deltaY = e.clientY - swipeRef.current.y
    swipeRef.current.pointerId = -1

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return
    if (Math.abs(deltaX) <= Math.abs(deltaY)) return

    didSwipeRef.current = true
    if (deltaX < 0) next()
    else prev()
  }

  const handleSwipePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (swipeRef.current.pointerId === e.pointerId) {
      swipeRef.current.pointerId = -1
    }
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
  }

  const handleCarouselKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    }
  }

  const activeItem = portfolioItems[index]

  const { ref: sectionRef, scrollYProgress, reduceMotion } = useSectionScroll()
  const headerY = useLayerParallax(scrollYProgress, reduceMotion, 72, -72)
  const carouselY = useLayerParallax(scrollYProgress, reduceMotion, 120, -120)

  return (
    <section ref={sectionRef} id="portfolio" className="bg-granite py-32 overflow-hidden relative">

      <motion.div
        className="container relative z-20 parallax-layer"
        style={{ y: headerY }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOptions}
      >
        <motion.div variants={fadeUp} className="portfolio-header flex justify-between items-center mb-16">
          <div>
            <span className="text-accent text-10px font-bold tracking-3em uppercase block mb-3">
              ESEMPI DI FINITURA
            </span>
            <h2 className="serif text-4xl text-6xl-md text-white">
              Portfolio <span className="text-accent">Selezione</span>
            </h2>
            <motion.div variants={expandWidth} style={{ originX: 0 }}>
              <div className="h-px bg-accent mt-3" style={{ width: '60px' }} />
            </motion.div>
            <p className="portfolio-disclaimer">
              Riferimenti di stile e finitura. Ogni commessa è unica e realizzata su misura in bottega.
            </p>
          </div>

          <div className="portfolio-header-actions flex gap-4 items-center">
            <Link href="/portfolio" className="nav-link mr-4">
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

      <motion.div
        ref={carouselSectionRef}
        className="portfolio-carousel-fullwidth relative z-20 parallax-layer"
        style={{ y: carouselY }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Esempi di finitura portfolio"
        tabIndex={0}
        onKeyDown={handleCarouselKeyDown}
      >
        <p className="sr-only" aria-live="polite">
          {activeItem.title}
        </p>
        <motion.div
          ref={wrapperRef}
          className="portfolio-carousel-wrapper relative"
          style={{ '--carousel-height': `${carouselHeight}px` } as CSSProperties}
          initial={{ opacity: 0 }}
          animate={{ opacity: carouselInView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onPointerDown={handleSwipePointerDown}
          onPointerUp={handleSwipePointerUp}
          onPointerCancel={handleSwipePointerCancel}
        >
          {portfolioItems.map((item, i) => {
            const isActive = i === index
            const circularOffset = getCircularOffset(i, index, itemCount)
            const slideOffset = circularOffset * cardSpacing
            const distance = getCircularDistance(i, index, itemCount)
            const targetX = centerX + slideOffset
            const targetY = centerY
            const targetScale = isActive ? 1.05 : 0.88
            const targetOpacity = getCardOpacity(distance, viewportWidth)
            const entranceDelay = carouselInView && !entranceDone.current ? distance * 0.12 : 0

            return (
              <motion.div
                key={item.title}
                animate={{
                  x: carouselInView ? targetX : targetX + circularOffset * 28,
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
                onClick={() => {
                  if (didSwipeRef.current) {
                    didSwipeRef.current = false
                    return
                  }
                  setIndex(i)
                }}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={`Esempio di finitura — ${item.title}`}
                    fill
                    sizes="(max-width: 768px) 72vw, 300px"
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />

                  <div className="portfolio-card-overlay absolute inset-0 flex flex-col justify-end p-6">
                    {isActive && item.details && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="portfolio-card-details-wrap mb-4"
                      >
                        <p className="portfolio-card-details">{item.details}</p>
                        {item.slug ? (
                          <Link href={`/prodotti/${item.slug}`} className="portfolio-card-link">
                            Scopri il progetto
                          </Link>
                        ) : (
                          <Link href="/portfolio" className="portfolio-card-link">
                            Vedi portfolio
                          </Link>
                        )}
                      </motion.div>
                    )}
                    <h3 className="serif text-lg portfolio-card-title group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {isActive && <div className="absolute top-50pct right-0 w-12 h-px bg-accent shadow-copper-glow" />}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>

      <motion.div className="container relative z-20 parallax-layer" style={{ y: carouselY }}>
        <motion.div
          className="flex justify-center gap-4 mt-16"
          initial={{ opacity: 0, y: 24 }}
          animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {portfolioItems.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}: ${portfolioItems[i].title}`}
              aria-current={i === index ? 'true' : undefined}
              className="carousel-dot"
            >
              <span
                className={`carousel-dot-bar ${i === index ? 'carousel-dot-bar--active' : ''}`}
                aria-hidden
              />
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
