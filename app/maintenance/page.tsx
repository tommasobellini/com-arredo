'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Construction, Mail, MapPin, X } from 'lucide-react'
import { loginToMaintenance } from './actions'

export default function MaintenancePage() {
  const [showLogin, setShowLogin] = useState(false)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const result = await loginToMaintenance(password)
      if (result.success) {
        window.location.href = '/'
      } else {
        setError(result.error || 'Password errata')
        setLoading(false)
      }
    } catch (err) {
      setError('Errore di connessione')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-antracite text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/portfolio-1.png" 
          alt="Artigianato" 
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-antracite-90 via-antracite-85 to-antracite" />
      </div>

      <motion.main 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-6 max-w-4xl flex flex-col items-center py-20"
      >
        <span className="text-accent text-10px font-bold tracking-3em uppercase block mb-6">
          ECCELLENZA DAL 1991
        </span>

        <div className="mb-10 flex items-center gap-2 bg-white-5 border border-white-10 px-4 py-2 rounded-full">
          <Construction size={14} className="text-accent" />
          <span className="uppercase text-9px font-bold tracking-widest text-accent">Lavori in corso</span>
        </div>

        <h1 className="serif text-5xl mb-4 text-white leading-tight">
          COM-ARREDO <span className="text-accent">S.R.L.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white-50 font-light mb-16 leading-relaxed max-w-2xl italic serif">
          "La tua casa su misura"
        </p>
        
        {/* Info Grid */}
        <div className="grid grid-cols-1 grid-cols-3-md gap-6 mb-16 w-full max-w-3xl">
          {[
            { icon: MapPin, title: 'Sede Operativa', content: 'VIA GIOSUÈ CARDUCCI 28 — 24050 CORTENUOVA (BG)' },
            { icon: Mail, title: 'Contatti', content: 'info@comarredo.com' },
            { icon: Lock, title: 'Dati Legali', content: 'P.IVA: 02113340166' }
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 border-white-5 hover-border-accent transition-all group">
              <item.icon size={20} className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
              <p className="text-10px uppercase font-bold tracking-widest mb-2 text-accent">{item.title}</p>
              <p className="text-12px text-white-70 font-medium">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <a href="mailto:info@comarredo.com" className="btn-primary min-w-240">
            Richiedi un Preventivo
          </a>
          <a 
            href="https://maps.google.com/?q=VIA+GIOSUE+CARDUCCI+28+24050+CORTENUOVA+BG" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary min-w-240"
          >
            Trova la Sede
          </a>
        </div>
      </motion.main>

      {/* Admin Login Trigger */}
      <div className="fixed bottom-8 right-8 z-50">
        <AnimatePresence mode="wait">
          {!showLogin ? (
            <motion.button
              key="lock-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              whileHover={{ opacity: 1 }}
              onClick={() => setShowLogin(true)}
              className="p-3 text-white-20 hover-text-white transition-all"
            >
              <Lock size={12} />
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-antracite-95 blur-md z-100 flex items-center justify-center p-6"
              onClick={(e) => e.target === e.currentTarget && setShowLogin(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="glass-card p-12 w-full max-w-sm space-y-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="serif text-2xl text-white">Accesso</h3>
                    <p className="text-10px uppercase tracking-widest text-accent font-bold">Gestione Piattaforma</p>
                  </div>
                  <button onClick={() => setShowLogin(false)} className="text-white-40 hover-text-white"><X size={20} /></button>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-4">
                  <input
                    type="password"
                    placeholder="Password di sistema"
                    autoFocus
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field text-center tracking-widest"
                  />
                  <button 
                    type="submit"
                    disabled={loading || !password}
                    className="btn-primary w-full"
                  >
                    {loading ? "Verifica..." : "Sblocca"}
                  </button>
                  {error && <p className="bg-red-500 text-10px text-center">{error}</p>}
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="fixed bottom-8 left-1-2 translate-x-1-2-neg text-white-20 text-9px uppercase tracking-4em">
        COM-ARREDO S.R.L. &bull; P.IVA 02113340166 &bull; ARTIGIANATO ITALIANO
      </footer>
    </div>
  )
}
