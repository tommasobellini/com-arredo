'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-antracite text-white flex flex-col items-center justify-center px-6 py-32 text-center">
        <span className="text-accent text-10px font-bold tracking-3em uppercase mb-6">
          Errore
        </span>
        <h1 className="serif text-4xl mb-4">Qualcosa è andato storto</h1>
        <p className="text-white-60 max-w-md mb-10">
          Si è verificato un problema imprevisto. Puoi riprovare o tornare alla home.
        </p>
        <div className="section-actions section-actions--center">
          <button type="button" onClick={reset} className="btn-primary">
            Riprova
          </button>
          <Link href="/" className="btn-secondary">
            Torna alla home
          </Link>
        </div>
      </main>
      <Footer dividerFrom="base" />
    </>
  )
}
