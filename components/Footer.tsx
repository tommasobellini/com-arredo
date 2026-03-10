'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contatti" className="bg-antracite text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-4 gap-12 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="col-span-two">
            <h2 className="text-4xl font-black mb-6 tracking-tighter">COM ARREDO</h2>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Trasformiamo l'essenza del legno in opere d'arte per la tua casa. Qualità, precisione e passione artigiana.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Visita il nostro profilo Instagram" className="w-12 h-12 rounded-full bg-white-5 flex items-center justify-center hover:bg-accent transition-colors cursor-pointer text-white no-underline text-xs uppercase font-bold">
                IG
              </a>
              <a href="#" aria-label="Visita il nostro profilo Facebook" className="w-12 h-12 rounded-full bg-white-5 flex items-center justify-center hover:bg-accent transition-colors cursor-pointer text-white no-underline text-xs uppercase font-bold">
                FB
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">CONTATTI</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center min-h-[32px]">Via della Falegnameria, 12</li>
              <li className="flex items-center min-h-[32px]">00100 Roma (RM), Italia</li>
              <li><a href="mailto:info@comarredo.it" className="inline-flex min-h-[48px] items-center hover:text-accent transition-colors">info@comarredo.it</a></li>
              <li><a href="tel:+39061234567" className="inline-flex min-h-[48px] items-center hover:text-accent transition-colors">+39 06 123 4567</a></li>
            </ul>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">ORARI</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Lun - Ven: 08:30 - 18:30</li>
              <li>Sab: 09:00 - 13:00</li>
              <li>Dom: Chiuso</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-10 border-t border-white-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-widest"
        >
          <p>© 2024 COM ARREDO. TUTTI I DIRITTI RISERVATI.</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-4 md:mt-0">
            <a href="#" className="inline-flex min-h-[48px] items-center hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="inline-flex min-h-[48px] items-center hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
