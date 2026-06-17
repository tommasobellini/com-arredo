import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LegalContent from '@/components/LegalContent'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Cookie Policy',
  description:
    'Informativa sui cookie utilizzati dal sito Com-Arredo: cookie tecnici necessari e gestione delle preferenze di navigazione.',
  path: '/cookies',
})

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <LegalContent title="Cookie Policy">
        <p className="mb-6">
          Questo sito utilizza cookie tecnici necessari al funzionamento (es. sessione manutenzione) e,
          previo consenso, strumenti di analisi per migliorare l&apos;esperienza di navigazione.
        </p>
        <h2 className="serif text-xl text-white mt-10 mb-4">Cookie tecnici</h2>
        <p className="mb-6">
          Il cookie <code className="text-accent">maintenance_bypass</code> consente l&apos;accesso al sito durante
          la fase di aggiornamento, se autorizzato. Non richiede consenso.
        </p>
        <h2 className="serif text-xl text-white mt-10 mb-4">Gestione delle preferenze</h2>
        <p className="mb-6">
          Puoi disabilitare i cookie dalle impostazioni del browser. La disabilitazione dei cookie tecnici
          potrebbe limitare alcune funzionalità del sito.
        </p>
      </LegalContent>
      <Footer dividerFrom="base" />
    </>
  )
}
