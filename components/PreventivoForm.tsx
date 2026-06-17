'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, fadeRight, staggerContainer, viewportOptions } from '@/lib/animations'

interface PreventivoFormProps {
  compact?: boolean
}

export default function PreventivoForm({ compact = false }: PreventivoFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/preventivo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Invio non riuscito')
      setStatus('success')
      setMessage(json.message || 'Richiesta inviata con successo.')
      form.reset()
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Errore durante l\'invio.')
    }
  }

  return (
    <motion.form
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOptions}
      className={`space-y-6 ${compact ? '' : 'w-full'}`}
      onSubmit={handleSubmit}
    >
      <motion.div variants={fadeRight} className="grid grid-cols-1 grid-cols-2-md gap-6">
        <input type="text" name="nome" placeholder="Nome" required className="input-field" />
        <input type="text" name="cognome" placeholder="Cognome" required className="input-field" />
      </motion.div>
      <motion.div variants={fadeRight} className="grid grid-cols-1 grid-cols-2-md gap-6">
        <input type="email" name="email" placeholder="Email" required className="input-field" />
        <input type="tel" name="telefono" placeholder="Telefono" className="input-field" />
      </motion.div>
      <motion.div variants={fadeUp}>
        <textarea
          name="messaggio"
          placeholder="Descrivi il tuo progetto (cucina, infissi, arredi...)"
          rows={5}
          required
          className="input-field"
        />
      </motion.div>
      <motion.div variants={fadeUp} className="form-submit-actions">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary w-full form-accent-shadow"
        >
          {status === 'loading' ? 'INVIO IN CORSO...' : 'INVIA RICHIESTA'}
        </button>
      </motion.div>
      {message && (
        <p
          className={`text-sm text-center ${status === 'error' ? 'text-red-400' : 'text-accent'}`}
          role="status"
        >
          {message}
        </p>
      )}
    </motion.form>
  )
}
