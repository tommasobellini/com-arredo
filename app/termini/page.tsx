import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LegalContent from '@/components/LegalContent'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Termini e Condizioni',
  alternates: { canonical: 'https://comarredo.com/termini' },
}

export default function TerminiPage() {
  return (
    <>
      <Navbar />
      <LegalContent title="Termini e Condizioni">
        <p className="mb-6">
          L&apos;utilizzo del sito comarredo.com implica l&apos;accettazione dei presenti termini.
          I contenuti (testi, immagini, progetti) sono di proprietà di {site.name} salvo diversa indicazione.
        </p>
        <h2 className="serif text-xl text-white mt-10 mb-4">Preventivi</h2>
        <p className="mb-6">
          Le richieste inviate tramite form non costituiscono ordine vincolante. Ogni preventivo è valido
          salvo diversa scrittura e soggetto a sopralluogo e disponibilità materiali.
        </p>
        <h2 className="serif text-xl text-white mt-10 mb-4">Proprietà intellettuale</h2>
        <p className="mb-6">
          È vietata la riproduzione non autorizzata di progetti, rendering e fotografie presenti sul sito.
        </p>
        <h2 className="serif text-xl text-white mt-10 mb-4">Legge applicabile</h2>
        <p className="mb-6">
          Per ogni controversia è competente il foro di Bergamo. Legge italiana applicabile.
        </p>
      </LegalContent>
      <Footer />
    </>
  )
}
