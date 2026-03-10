'use client'

export default function Footer() {
  return (
    <footer id="contatti" className="bg-antracite text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-two">
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
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">CONTATTI</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Via della Falegnameria, 12</li>
              <li>00100 Roma (RM), Italia</li>
              <li><a href="mailto:info@comarredo.it" className="hover:text-accent transition-colors">info@comarredo.it</a></li>
              <li><a href="tel:+39061234567" className="hover:text-accent transition-colors">+39 06 123 4567</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">ORARI</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Lun - Ven: 08:30 - 18:30</li>
              <li>Sab: 09:00 - 13:00</li>
              <li>Dom: Chiuso</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
          <p>© 2024 COM ARREDO. TUTTI I DIRITTI RISERVATI.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
