'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Preventivo() {
  return (
    <section id="preventivo" className="bg-ivory text-black py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {}
            }}
          >
            <motion.p variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }} className="text-accent font-bold tracking-widest uppercase text-xs mb-4">Inizia il tuo Progetto</motion.p>
            <motion.h2 variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }} className="text-4xl md:text-5xl font-black mb-6 leading-tight text-gray-900">
              Richiedi un <br />
              <span className="text-accent underline underline-offset-8" style={{ textDecorationColor: 'rgba(0,0,0,0.1)' }}>Preventivo.</span>
            </motion.h2>
            <motion.p variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }} className="text-gray-600 mb-8 max-w-md leading-relaxed">
              Raccontaci la tua idea. Dal design iniziale alla realizzazione finale, i nostri artigiani trasformeranno la tua visione in realtà.
            </motion.p>
            
            <div className="space-y-6">
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <span className="text-accent text-xl font-bold">01</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-widest uppercase">Consultazione</h3>
                  <p className="text-xs text-gray-500">Analisi del progetto e fattibilità</p>
                </div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <span className="text-accent text-xl font-bold">02</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-widest uppercase">Progettazione</h3>
                  <p className="text-xs text-gray-500">Costruzione e scelta materiali</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="bg-[#111] text-white p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative z-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-[10px] font-bold tracking-widest text-gray-400 mb-2 uppercase">Nome</label>
                  <input 
                    id="nome"
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-accent text-white transition-colors"
                    placeholder="Il tuo nome"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold tracking-widest text-gray-400 mb-2 uppercase">Email</label>
                  <input 
                    id="email"
                    type="email" 
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-accent text-white transition-colors"
                    placeholder="La tua email"
                    aria-required="true"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="dettagli" className="block text-[10px] font-bold tracking-widest text-gray-400 mb-2 uppercase">Dettagli Progetto</label>
                <textarea 
                  id="dettagli"
                  rows={4} 
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-accent text-white transition-colors resize-none"
                  placeholder="Descrivi brevemente cosa vorresti realizzare"
                  aria-required="true"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-accent hover:brightness-110 text-white font-black tracking-[0.2em] uppercase py-4 mt-4 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(139,69,19,0.5)] flex items-center justify-center gap-3"
              >
                Invia Richiesta <Send size={18} />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
