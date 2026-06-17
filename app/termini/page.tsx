import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LegalContent from '@/components/LegalContent'
import { site } from '@/lib/site'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Termini e Condizioni',
  description:
    'Termini e condizioni d\'uso del sito Com-Arredo S.R.L.: preventivi, proprietà intellettuale e legge applicabile.',
  path: '/termini',
})

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
