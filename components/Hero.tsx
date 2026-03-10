'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-0 mt-0">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop" 
          alt="Mobili Moderni" 
          className="w-full h-full object-cover transition-transform duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-black-30 backdrop-blur-slim" />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm font-semibold tracking-fancy uppercase mb-4 opacity-80"
        >
          Artigianato Italiano dal 1980
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="premium-title text-white mb-8"
        >
          L'Anima del Legno, <br />
          <span className="text-cream">Scolpita a Mano.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            ESPLORA COLLEZIONE
          </button>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-white-30 backdrop-blur-md rounded-full font-semibold bg-white-10:hover transition-all text-white"
          >
            SCOPRI DI PIÙ
          </button>
        </motion.div>
      </div>

      <div 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-half translate-x-half animate-bounce opacity-50 cursor-pointer"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  )
}
