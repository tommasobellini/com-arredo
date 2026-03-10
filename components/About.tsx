'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Parallax Y value
  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section id="about" ref={ref} className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          style={{ y: yParallax }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full max-w-[500px] aspect-[4/5] mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop" 
              alt="Artigianato legno" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-black-10 rounded-2xl" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.2, duration: 0.8 } },
            hidden: { opacity: 0, x: 50 }
          }}
        >
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Tradizione e <br />
            <span className="text-accent underline decoration-cream underline-offset-8">Precisione Meccanica.</span>
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-lg text-gray-600 mb-6 leading-relaxed">
            Ogni nostro pezzo nasce dalla passione per la materia prima. Utilizziamo legnami pregiati selezionati a mano, combinando le antiche tecniche di falegnameria con la precisione delle macchine moderne.
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-lg text-gray-600 mb-8 leading-relaxed">
            Dagli infissi su misura ai mobili d'arte, la nostra missione è trasformare i vostri sogni in realtà solide, eleganti e senza tempo.
          </motion.p>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-accent mb-1">40+</h3>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">Anni di Esperienza</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-accent mb-1">100%</h3>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">Handmade in Italy</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
