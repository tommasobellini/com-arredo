import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import JsonLd from '@/components/JsonLd'
import { images } from '@/lib/images'
import { services } from '@/lib/site'
import ProcessSection from '@/components/ProcessSection'
import SectionDivider from '@/components/SectionDivider'
import { createPageMetadata, jsonLdBreadcrumb } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Produzione',
  description:
    'Cucine, infissi, camere e arredi su misura realizzati a mano da Com-Arredo. Falegnameria artigianale a Cortenuova (BG) dal 1991.',
  path: '/produzione',
  image: images.workshop,
  imageAlt: 'Bottega artigianale Com-Arredo — produzione su misura',
})

export default function ProduzionePage() {
  return (
    <main id="main-content">
      <JsonLd
        data={jsonLdBreadcrumb([
          { name: 'Home', path: '/' },
          { name: 'Produzione', path: '/produzione' },
        ])}
      />
      <Navbar />
      <PageHero
        eyebrow="I NOSTRI SERVIZI"
        title="Produzione"
        highlight="Artigianale"
        subtitle="Ogni commessa nasce in bottega: progettazione, lavorazione e posa seguono standard di eccellenza italiana."
        image={images.workshop}
        dividerTo="elevated"
      />

      <section className="py-24 bg-antracite">
        <div className="container">
          <div className="grid grid-cols-1 grid-cols-2-md gap-8">
            {services.map((service) => (
              <article
                key={service.id}
                className="glass-card overflow-hidden border-white-5 hover-border-accent transition-all group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={images.produzione[service.imageKey]}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-8">
                  <h2 className="serif text-2xl text-white mb-3">{service.title}</h2>
                  <p className="text-white-60 text-sm leading-relaxed">{service.description}</p>
                  <div className="section-actions section-actions--compact">
                    {service.slug ? (
                      <Link href={`/prodotti/${service.slug}`} className="text-accent text-xs font-bold tracking-widest uppercase">
                        Dettagli progetto →
                      </Link>
                    ) : (
                      <Link href="/contatti" className="text-accent text-xs font-bold tracking-widest uppercase">
                        Richiedi preventivo →
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta-block section-cta-block--center mt-12">
            <Link href="/materiali" className="text-accent text-xs font-bold tracking-widest uppercase">
              Esplora materiali e finiture →
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider from="elevated" to="surface" />

      <ProcessSection />

      <Footer dividerFrom="surface" />
    </main>
  )
}
