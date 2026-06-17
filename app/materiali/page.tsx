import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import MaterialExplorer from '@/components/MaterialExplorer'
import JsonLd from '@/components/JsonLd'
import { images } from '@/lib/images'
import { createPageMetadata, jsonLdBreadcrumb } from '@/lib/seo'

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
    <main>
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
      />

      <MaterialExplorer />

      <section className="py-16 bg-antracite border-t border-white-5">
        <div className="container section-cta-block section-cta-block--center">
          <p className="text-white-60 text-sm max-w-lg mx-auto">
            Ogni commessa è unica e realizzata su misura in bottega a Cortenuova. Raccontaci il
            tuo progetto e ricevi una valutazione senza impegno.
          </p>
          <div className="section-actions">
            <Link href="/contatti" className="btn-primary">
              Richiedi consulenza
            </Link>
            <Link href="/produzione" className="footer-cta-secondary">
              I nostri servizi
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
