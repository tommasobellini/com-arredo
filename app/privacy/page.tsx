import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LegalContent from '@/components/LegalContent'
import { site } from '@/lib/site'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy',
  description:
    'Informativa privacy di Com-Arredo S.R.L. sul trattamento dei dati personali raccolti tramite il sito, in conformità al GDPR.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <LegalContent title="Privacy Policy">
        <p className="mb-6">
          La presente informativa descrive le modalità di trattamento dei dati personali raccolti tramite il sito
          comarredo.com, in conformità al Regolamento UE 2016/679 (GDPR).
        </p>
        <h2 className="serif text-xl text-white mt-10 mb-4">Titolare del trattamento</h2>
        <p className="mb-6">
          {site.name} — {site.address.full} — Email: {site.email} — P.IVA {site.piva}
        </p>
        <h2 className="serif text-xl text-white mt-10 mb-4">Dati raccolti</h2>
        <p className="mb-6">
          Tramite il form preventivo raccogliamo nome, cognome, email, telefono (facoltativo) e messaggio.
          I dati di navigazione (log tecnici) possono essere trattati per sicurezza e statistiche aggregate.
        </p>
        <h2 className="serif text-xl text-white mt-10 mb-4">Finalità e base giuridica</h2>
        <p className="mb-6">
          I dati sono utilizzati per rispondere alle richieste di preventivo e per adempiere a obblighi legali.
          La base giuridica è l&apos;esecuzione di misure precontrattuali su richiesta dell&apos;interessato (art. 6.1.b GDPR)
          e il legittimo interesse del titolare (art. 6.1.f GDPR).
        </p>
        <h2 className="serif text-xl text-white mt-10 mb-4">Diritti dell&apos;interessato</h2>
        <p className="mb-6">
          Puoi richiedere accesso, rettifica, cancellazione, limitazione o opposizione al trattamento scrivendo a{' '}
          <a href={`mailto:${site.email}`} className="text-accent">{site.email}</a>.
        </p>
      </LegalContent>
      <Footer />
    </>
  )
}
