'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
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
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Tradizione e <br />
            <span className="text-accent underline decoration-cream underline-offset-8">Precisione Meccanica.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Ogni nostro pezzo nasce dalla passione per la materia prima. Utilizziamo legnami pregiati selezionati a mano, combinando le antiche tecniche di falegnameria con la precisione delle macchine moderne.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Dagli infissi su misura ai mobili d'arte, la nostra missione è trasformare i vostri sogni in realtà solide, eleganti e senza tempo.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-accent mb-1">40+</h3>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">Anni di Esperienza</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-accent mb-1">100%</h3>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">Handmade in Italy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
