import { NextResponse } from 'next/server'
import { site } from '@/lib/site'

const rateLimit = new Map<string, { count: number; resetAt: number }>()
const WINDOW_MS = 60_000
const MAX_REQUESTS = 5

function isRateLimited(ip: string) {
  const now = Date.now()
  const entry = rateLimit.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  if (entry.count >= MAX_REQUESTS) return true

  entry.count += 1
  return false
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Troppe richieste. Riprova tra un minuto.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const nome = String(body.nome || '').trim()
    const cognome = String(body.cognome || '').trim()
    const email = String(body.email || '').trim()
    const telefono = String(body.telefono || '').trim()
    const messaggio = String(body.messaggio || '').trim()
    const essenza = String(body.essenza || '').trim()
    const finitura = String(body.finitura || '').trim()

    if (!nome || !cognome || !email || !messaggio) {
      return NextResponse.json({ error: 'Compila tutti i campi obbligatori.' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email non valida.' }, { status: 400 })
    }

    const MAX_NAME = 120
    const MAX_MESSAGE = 5000
    if ([nome, cognome, email, telefono, essenza, finitura].some((v) => v.length > MAX_NAME)) {
      return NextResponse.json({ error: 'Uno o più campi superano la lunghezza massima.' }, { status: 400 })
    }
    if (messaggio.length > MAX_MESSAGE) {
      return NextResponse.json({ error: 'Il messaggio è troppo lungo.' }, { status: 400 })
    }

    const payload = { nome, cognome, email, telefono, messaggio, essenza, finitura, at: new Date().toISOString() }

    const resendKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_EMAIL || site.email

    const isProd = process.env.NODE_ENV === 'production'

    if (!resendKey) {
      if (isProd) {
        console.error('[preventivo] RESEND_API_KEY non configurata in produzione')
        return NextResponse.json(
          { error: 'Servizio temporaneamente non disponibile. Contattaci via email.' },
          { status: 503 }
        )
      }
      console.info('[preventivo] dev mode — email non inviata:', payload)
      return NextResponse.json({
        success: true,
        message:
          'Richiesta registrata in locale (email non inviata: configura RESEND_API_KEY).',
        devWarning: true,
      })
    }

    {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || 'Com-Arredo <onboarding@resend.dev>',
          to: [to],
          reply_to: email,
          subject: `Nuovo preventivo — ${nome} ${cognome}`,
          text: [
            `Nome: ${nome} ${cognome}`,
            `Email: ${email}`,
            `Telefono: ${telefono || '—'}`,
            essenza ? `Essenza: ${essenza}` : null,
            finitura ? `Finitura: ${finitura}` : null,
            '',
            messaggio,
          ]
            .filter(Boolean)
            .join('\n'),
        }),
      })
      if (!res.ok) {
        console.error('Resend error', await res.text())
        return NextResponse.json({ error: 'Invio email non riuscito.' }, { status: 502 })
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Grazie! Ti risponderemo entro 24 ore lavorative.',
    })
  } catch {
    return NextResponse.json({ error: 'Errore del server.' }, { status: 500 })
  }
}
