'use client'

import { motion, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { images } from '@/lib/images'
import { staggerContainer, fadeUp, fadeLeft, fadeRight, expandWidth, viewportOptions } from '@/lib/animations'
import { useContentParallax, useImageParallax, useSectionScroll } from '@/lib/parallax'

export default function About() {
  const { ref, scrollYProgress, reduceMotion } = useSectionScroll()
  const bgY = useImageParallax(scrollYProgress, reduceMotion, '-5%', '8%')
  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1.04, 1.1],
  )
  const contentY = useContentParallax(scrollYProgress, reduceMotion, 20, -20)

  return (
    <section ref={ref} id="about" className="relative bg-antracite about-section overflow-hidden">
      <motion.div
        className="about-section-bg parallax-layer"
        style={{ y: bgY, scale: bgScale }}
        aria-hidden
      >
        <Image
          src={images.about}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className="object-cover"
          style={{ objectPosition: 'center 45%' }}
        />
        <div className="absolute inset-0 about-overlay" />
      </motion.div>

      <motion.div className="container relative z-10 about-section-inner parallax-layer" style={{ y: contentY }}>
        <div className="grid grid-cols-1 grid-cols-2-md gap-12 gap-24-md items-center w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOptions}
          >
            <motion.span variants={fadeUp} className="text-accent text-10px font-bold tracking-3em uppercase block mb-6">
              LA NOSTRA ESSENZA
            </motion.span>

            <motion.h2 variants={fadeLeft} className="serif text-3xl text-7xl-md text-white leading-tight mb-8">
              Tradizione e <br />
              <span className="text-accent accent-underline">Eccellenza</span> <br />
              Artigiana.
            </motion.h2>

            <motion.div variants={expandWidth} style={{ originX: 0 }}>
              <div className="w-20 h-px bg-accent mb-8" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOptions}
            className="flex flex-col gap-10"
          >
            <div className="space-y-6">
              <motion.p variants={fadeRight} className="text-white-80 text-xl leading-relaxed serif italic">
                &ldquo;Trasformiamo il legno in opere che durano generazioni.&rdquo;
              </motion.p>
              <motion.p variants={fadeUp} className="text-white-60 text-lg leading-relaxed">
                Dal 1991, Com-Arredo è il punto di riferimento per chi cerca l&apos;unicità
                del fatto a mano. Ogni pezzo nasce da un dialogo tra la materia prima
                e la visione del cliente, portando l&apos;arte falegnamistica italiana
                nei contesti del design contemporaneo.
              </motion.p>
              <motion.p variants={fadeUp} className="text-white-60 text-lg leading-relaxed">
                Utilizziamo esclusivamente legnami pregiati da filiere certificate,
                lavorati con tecniche tradizionali che ne esaltano le venature naturali
                e ne garantiscono la solidità nel tempo.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="section-actions">
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
      </motion.div>
    </section>
  )
}
