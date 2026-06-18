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
          Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali.
        </p>
        <h2 className="serif text-xl text-white mt-10 mb-4">Conservazione dei dati</h2>
        <p className="mb-6">
          I dati del form preventivo sono conservati per il tempo necessario a gestire la richiesta e per eventuali
          obblighi di legge, generalmente non oltre 24 mesi dall&apos;ultimo contatto, salvo avvio di un rapporto contrattuale.
        </p>
        <h2 className="serif text-xl text-white mt-10 mb-4">Responsabili e fornitori</h2>
        <p className="mb-6">
          Per l&apos;invio delle email di contatto utilizziamo Resend (fornitore di posta elettronica). I dati possono essere
          trattati su infrastrutture del provider di hosting del sito. I fornitori sono selezionati tra soggetti che
          offrono garanzie adeguate in conformità al GDPR.
        </p>
        <h2 className="serif text-xl text-white mt-10 mb-4">Cookie</h2>
        <p className="mb-6">
          Per i cookie tecnici e le preferenze di navigazione consulta la{' '}
          <a href="/cookies" className="text-accent">Cookie Policy</a>.
        </p>
      </LegalContent>
      <Footer dividerFrom="base" />
    </>
  )
}
