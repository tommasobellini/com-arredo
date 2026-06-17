import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pagina non trovata',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-antracite text-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-md">
          <p className="text-accent text-10px font-bold tracking-3em uppercase mb-4">Errore 404</p>
          <h1 className="serif text-4xl text-5xl-md mb-4">Pagina non trovata</h1>
          <p className="text-white-60 mb-8 leading-relaxed">
            La pagina che cerchi non esiste o è stata spostata.
          </p>
          <div className="section-actions section-actions--center">
            <Link href="/" className="btn-primary">
              Torna alla home
            </Link>
            <Link href="/contatti" className="btn-secondary">
              Contattaci
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
