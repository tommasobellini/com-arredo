import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ComponentType } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import SectionDivider from '@/components/SectionDivider'
import JsonLd from '@/components/JsonLd'
import {
  IconArtigianato,
  IconDettaglio,
  IconDurata,
  IconMateriali,
  IconSuMisura,
  IconTerritorio,
} from '@/components/icons/ValueIcons'
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

const values: {
  title: string
  text: string
  icon: ComponentType<{ className?: string }>
}[] = [
  {
    title: 'Artigianato',
    text: 'Ogni pezzo è lavorato in bottega, senza produzione industriale di serie.',
    icon: IconArtigianato,
  },
  {
    title: 'Materiali',
    text: 'Essenze pregiate da filiere certificate, finiture naturali e durature.',
    icon: IconMateriali,
  },
  {
    title: 'Su misura',
    text: 'Progetti personalizzati in dialogo diretto con il cliente.',
    icon: IconSuMisura,
  },
  {
    title: 'Territorio',
    text: 'Radicati in Lombardia, operativi su Bergamo, Milano e tutta Italia.',
    icon: IconTerritorio,
  },
  {
    title: 'Dettaglio',
    text: 'Giunzioni, finiture e incastri controllati a mano in ogni fase della lavorazione.',
    icon: IconDettaglio,
  },
  {
    title: 'Durata',
    text: 'Arredi solidi e senza compromessi, pensati per accompagnare le famiglie nel tempo.',
    icon: IconDurata,
  },
]

export default function ChiSiamoPage() {
  return (
    <main id="main-content">
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

      <section className="py-24 bg-granite values-section">
        <div className="container">
          <header className="values-header">
            <span className="values-eyebrow">LA NOSTRA FILOSOFIA</span>
            <h2 className="serif text-3xl text-white">I nostri valori</h2>
            <p className="values-intro text-white-60">
              Sei principi che guidano ogni commessa, dalla prima idea alla posa in casa tua.
            </p>
          </header>
          <div className="values-grid">
            {values.map((v, index) => {
              const Icon = v.icon
              const num = String(index + 1).padStart(2, '0')
              return (
                <article key={v.title} className="value-card">
                  <span className="value-card__index" aria-hidden>
                    {num}
                  </span>
                  <div className="value-card__shine" aria-hidden />
                  <div className="value-icon" aria-hidden>
                    <Icon className="value-icon__svg" />
                  </div>
                  <h3 className="value-card__title serif">{v.title}</h3>
                  <p className="value-card__text">{v.text}</p>
                  <span className="value-card__accent-line" aria-hidden />
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <Footer dividerFrom="surface" />
    </main>
  )
}
