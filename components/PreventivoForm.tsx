'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, fadeRight, staggerContainer, viewportOptions } from '@/lib/animations'

export interface PreventivoFormProps {
  defaultMessaggio?: string
  defaultEssenza?: string
  defaultFinitura?: string
}

export default function PreventivoForm({
  defaultMessaggio = '',
  defaultEssenza = '',
  defaultFinitura = '',
}: PreventivoFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!privacyAccepted) {
      setStatus('error')
      setMessage('Accetta l\'informativa privacy per inviare la richiesta.')
      return
    }

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
      setPrivacyAccepted(false)
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
      className="space-y-6 w-full"
      onSubmit={handleSubmit}
      aria-busy={status === 'loading'}
      noValidate
    >
      {defaultEssenza && <input type="hidden" name="essenza" value={defaultEssenza} />}
      {defaultFinitura && <input type="hidden" name="finitura" value={defaultFinitura} />}

      <motion.div variants={fadeRight} className="grid grid-cols-1 grid-cols-2-md gap-6">
        <div className="form-field">
          <label htmlFor="preventivo-nome" className="form-label">
            Nome
          </label>
          <input
            id="preventivo-nome"
            type="text"
            name="nome"
            autoComplete="given-name"
            required
            className="input-field"
          />
        </div>
        <div className="form-field">
          <label htmlFor="preventivo-cognome" className="form-label">
            Cognome
          </label>
          <input
            id="preventivo-cognome"
            type="text"
            name="cognome"
            autoComplete="family-name"
            required
            className="input-field"
          />
        </div>
      </motion.div>

      <motion.div variants={fadeRight} className="grid grid-cols-1 grid-cols-2-md gap-6">
        <div className="form-field">
          <label htmlFor="preventivo-email" className="form-label">
            Email
          </label>
          <input
            id="preventivo-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            className="input-field"
          />
        </div>
        <div className="form-field">
          <label htmlFor="preventivo-telefono" className="form-label">
            Telefono <span className="form-label-optional">(facoltativo)</span>
          </label>
          <input
            id="preventivo-telefono"
            type="tel"
            name="telefono"
            autoComplete="tel"
            className="input-field"
          />
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="form-field">
        <label htmlFor="preventivo-messaggio" className="form-label">
          Il tuo progetto
        </label>
        <textarea
          id="preventivo-messaggio"
          name="messaggio"
          rows={5}
          required
          defaultValue={defaultMessaggio}
          className="input-field"
          placeholder="Cucina, infissi, arredi su misura..."
        />
      </motion.div>

      <motion.div variants={fadeUp} className="form-privacy">
        <label className="form-privacy-label">
          <input
            type="checkbox"
            name="privacy"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            className="form-privacy-checkbox"
            required
          />
          <span>
            Ho letto l&apos;{' '}
            <Link href="/privacy" className="form-privacy-link">
              informativa privacy
            </Link>{' '}
            e acconsento al trattamento dei dati per rispondere alla mia richiesta.
          </span>
        </label>
      </motion.div>

      <motion.div variants={fadeUp} className="form-submit-actions">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary w-full form-accent-shadow"
        >
          {status === 'loading' ? 'INVIO IN CORSO...' : 'RICHIEDI PREVENTIVO'}
        </button>
      </motion.div>

      {message && (
        <p
          className={`text-sm text-center ${status === 'error' ? 'text-error' : 'text-accent'}`}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </motion.form>
  )
}
