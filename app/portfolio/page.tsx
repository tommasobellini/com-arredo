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
    'Progetti realizzati da Com-Arredo: cucine, soggiorni, camere e infissi in legno su misura. Falegnameria artigianale Bergamo.',
  path: '/portfolio',
  image: images.portfolio.soggiorno,
  imageAlt: 'Soggiorno su misura Com-Arredo — portfolio falegnameria',
})

export default function PortfolioPage() {
  return (
    <main>
      <JsonLd
        data={jsonLdBreadcrumb([
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
        ])}
      />
      <Navbar />
      <PageHero
        eyebrow="I NOSTRI LAVORI"
        title="Portfolio"
        highlight="Selezione"
        subtitle="Ogni progetto racconta la nostra bottega: materiali nobili, giunzioni a mano e finiture che rispettano il legno."
        image={images.portfolio.soggiorno}
      />

      <section className="py-24 bg-granite">
        <div className="container">
          <div className="portfolio-grid">
            {productSlugs.map((slug) => {
              const item = productsData[slug]
              return (
                <Link key={slug} href={`/prodotti/${slug}`} className="portfolio-grid-item wood-frame group">
                  <div className="relative aspect-4-3 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="portfolio-grid-overlay">
                      <span className="text-accent text-10px font-bold tracking-widest uppercase">{item.category}</span>
                      <h2 className="serif text-xl text-white mt-2 group-hover:text-accent transition-colors">{item.title}</h2>
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

      <Footer />
    </main>
  )
}
