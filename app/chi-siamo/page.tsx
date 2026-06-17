import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import SectionDivider from '@/components/SectionDivider'
import JsonLd from '@/components/JsonLd'
import { images } from '@/lib/images'
import { site } from '@/lib/site'
import { createPageMetadata, jsonLdBreadcrumb } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Chi Siamo',
  description: `Storia e valori di Com-Arredo: falegnameria artigianale a ${site.address.city} dal ${site.founded}. Tradizione, legno certificato e design su misura.`,
  path: '/chi-siamo',
  image: images.about,
  imageAlt: 'Bottega Com-Arredo — falegnameria artigianale dal 1991',
})

const values = [
  { title: 'Artigianato', text: 'Ogni pezzo è lavorato in bottega, senza produzione industriale di serie.' },
  { title: 'Materiali', text: 'Essenze pregiate da filiere certificate, finiture naturali e durature.' },
  { title: 'Su misura', text: 'Progetti personalizzati in dialogo diretto con il cliente.' },
  { title: 'Territorio', text: 'Radicati in Lombardia, operativi su Bergamo, Milano e tutta Italia.' },
]

export default function ChiSiamoPage() {
  return (
    <main>
      <JsonLd
        data={jsonLdBreadcrumb([
          { name: 'Home', path: '/' },
          { name: 'Chi Siamo', path: '/chi-siamo' },
        ])}
      />
      <Navbar />
      <PageHero
        eyebrow="DAL 1991"
        title="Chi"
        highlight="Siamo"
        subtitle="Com-Arredo è falegnameria artigianale: trasformiamo il legno in arredi che accompagnano le famiglie per generazioni."
        image={images.about}
        dividerTo="elevated"
      />

      <section className="py-24 bg-antracite">
        <div className="container grid grid-cols-1 grid-cols-2-md gap-16 items-center">
          <div>
            <h2 className="serif text-3xl text-5xl-md text-white mb-8 leading-tight">
              La bottega di <span className="text-accent">Cortenuova</span>
            </h2>
            <p className="text-white-60 text-lg leading-relaxed mb-6">
              Fondata nel {site.founded}, Com-Arredo S.R.L. unisce la manualità della falegnameria classica
              alla precisione del design contemporaneo. La nostra sede in {site.address.full} è il cuore
              operativo dove nascono cucine, infissi, camere e arredi completi.
            </p>
            <p className="text-white-60 text-lg leading-relaxed">
              Collaboriamo con architetti e privati che cercano soluzioni uniche: dal primo schizzo alla posa,
              seguiamo ogni fase con la stessa cura per i dettagli.
            </p>
            <div className="section-actions">
              <Link href="/produzione" className="btn-primary">
                Scopri la produzione
              </Link>
            </div>
          </div>
          <div className="wood-frame relative aspect-4-3">
            <Image
              src={images.workshop}
              alt="Dettaglio lavorazione legno in bottega Com-Arredo"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <SectionDivider from="elevated" to="surface" />

      <section className="py-24 bg-granite">
        <div className="container">
          <h2 className="serif text-3xl text-white text-center mb-16">I nostri valori</h2>
          <div className="grid grid-cols-1 grid-cols-2-md gap-8">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-8 border-white-5">
                <h3 className="serif text-xl text-accent mb-4">{v.title}</h3>
                <p className="text-white-60 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer dividerFrom="surface" />
    </main>
  )
}
