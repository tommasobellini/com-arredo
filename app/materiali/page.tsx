import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import SectionDivider from '@/components/SectionDivider'
import JsonLd from '@/components/JsonLd'
import { images } from '@/lib/images'
import { createPageMetadata, jsonLdBreadcrumb } from '@/lib/seo'

const MaterialExplorer = dynamic(() => import('@/components/MaterialExplorer'), {
  loading: () => <div className="section-loading" aria-hidden />,
})

export const metadata: Metadata = createPageMetadata({
  title: 'Materiali — Essenze e finiture',
  description:
    'Esplora essenze e finiture Com-Arredo: rovere, noce, frassino e castagno con olio, cerato e tinte naturali. Campionature falegnameria artigianale Bergamo.',
  path: '/materiali',
  image: images.materials.noceOlio,
  imageAlt: 'Campionatura noce olio naturale — Com-Arredo falegnameria',
})

export default function MaterialiPage() {
  return (
    <main id="main-content">
      <JsonLd
        data={jsonLdBreadcrumb([
          { name: 'Home', path: '/' },
          { name: 'Materiali', path: '/materiali' },
        ])}
      />
      <Navbar />
      <PageHero
        eyebrow="ESSENZE E FINITURE"
        title="Materiali"
        highlight="su misura"
        subtitle="Rovere, noce, frassino e castagno: ogni essenza racconta una storia. Scegli la finitura che valorizza il tuo progetto — in bottega ti mostriamo i campioni reali."
        image={images.materials.noceOlio}
        dividerTo="surface"
      />

      <MaterialExplorer />

      <SectionDivider from="surface" to="elevated" />

      <section className="py-16 bg-antracite">
        <div className="container text-center">
          <p className="text-white-60 text-sm max-w-lg mx-auto">
            Ogni commessa è unica e realizzata su misura in bottega a Cortenuova. Raccontaci il
            tuo progetto e ricevi una valutazione senza impegno.
          </p>
          <div className="section-actions section-actions--center">
            <Link href="/contatti" className="btn-primary">
              Richiedi preventivo
            </Link>
            <Link href="/produzione" className="btn-secondary">
              I nostri servizi
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
