import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import JsonLd from '@/components/JsonLd'
import { images } from '@/lib/images'
import { createPageMetadata, jsonLdBreadcrumb } from '@/lib/seo'
import { productsData, productSlugs } from '@/app/prodotti/[id]/data'

export const metadata: Metadata = createPageMetadata({
  title: 'Portfolio',
  description:
    'Esempi di finitura e ispirazioni su misura da Com-Arredo: cucine, soggiorni, camere e infissi in legno. Falegnameria artigianale Bergamo.',
  path: '/portfolio',
  image: images.portfolio.soggiorno,
  imageAlt: 'Esempio di finitura soggiorno su misura — Com-Arredo falegnameria',
})

export default function PortfolioPage() {
  return (
    <main id="main-content">
      <JsonLd
        data={jsonLdBreadcrumb([
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
        ])}
      />
      <Navbar />
      <PageHero
        eyebrow="ESEMPI DI FINITURA"
        title="Portfolio"
        highlight="Selezione"
        subtitle="Riferimenti di stile e finitura per cucine, soggiorni, camere e infissi. Ogni commessa è unica e realizzata su misura in bottega."
        image={images.portfolio.soggiorno}
        dividerTo="surface"
      />

      <section className="py-24 bg-granite">
        <div className="container">
          <p className="portfolio-disclaimer mb-8">
            Le immagini sono riferimenti di finitura e stile. Ogni commessa è unica e realizzata su
            misura in bottega.
          </p>
          <div className="portfolio-grid">
            {productSlugs.map((slug) => {
              const item = productsData[slug]
              return (
                <Link key={slug} href={`/prodotti/${slug}`} className="portfolio-grid-item wood-frame group">
                  <div className="relative aspect-4-3 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`Esempio di finitura — ${item.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="portfolio-grid-overlay">
                      <span className="portfolio-grid-category">{item.category}</span>
                      <h2 className="serif text-xl portfolio-card-title mt-2">{item.title}</h2>
                      <p className="portfolio-grid-description">{item.description}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="section-cta-block section-cta-block--center">
            <p className="text-white-60 text-sm max-w-md mx-auto">
              Ogni progetto nasce su misura. Raccontaci la tua idea e ricevi una valutazione senza impegno.
            </p>
            <div className="section-actions">
              <Link href="/contatti" className="btn-primary">
                Richiedi un progetto su misura
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer dividerFrom="surface" />
    </main>
  )
}
