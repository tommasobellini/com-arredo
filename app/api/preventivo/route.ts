import { NextResponse } from 'next/server'
import { site } from '@/lib/site'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const nome = String(body.nome || '').trim()
    const cognome = String(body.cognome || '').trim()
    const email = String(body.email || '').trim()
    const telefono = String(body.telefono || '').trim()
    const messaggio = String(body.messaggio || '').trim()

    if (!nome || !cognome || !email || !messaggio) {
      return NextResponse.json({ error: 'Compila tutti i campi obbligatori.' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email non valida.' }, { status: 400 })
    }

    const payload = { nome, cognome, email, telefono, messaggio, at: new Date().toISOString() }

    const resendKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_EMAIL || site.email

    if (resendKey) {
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
            '',
            messaggio,
          ].join('\n'),
        }),
      })
      if (!res.ok) {
        console.error('Resend error', await res.text())
        return NextResponse.json({ error: 'Invio email non riuscito.' }, { status: 502 })
      }
    } else {
      console.info('[preventivo]', payload)
    }

    return NextResponse.json({
      success: true,
      message: 'Grazie! Ti risponderemo entro 24 ore lavorative.',
    })
  } catch {
    return NextResponse.json({ error: 'Errore del server.' }, { status: 500 })
  }
}
