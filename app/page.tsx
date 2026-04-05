import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Preventivo from '@/components/Preventivo'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Com-Arredo | Falegnameria Artigianale dal 1991 — Cortenuova, Bergamo',
  description:
    'Com-Arredo S.R.L. realizza mobili su misura, infissi in legno, cucine e arredamenti d\'interni di lusso. Artigianato italiano del legno dal 1991 a Cortenuova (BG). Richiedi un preventivo gratuito.',
  alternates: {
    canonical: 'https://comarredo.com',
  },
  openGraph: {
    title: 'Com-Arredo | Falegnameria Artigianale dal 1991',
    description:
      'Mobili su misura, infissi e arredi d\'interni di lusso realizzati a mano. Dal 1980 l\'eccellenza dell\'artigianato italiano del legno.',
    url: 'https://comarredo.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://comarredo.com/#business',
      name: 'Com-Arredo S.R.L.',
      alternateName: 'Com Arredo',
      description:
        'Falegnameria artigianale dal 1991. Mobili su misura, infissi in legno, cucine e arredamenti d\'interni di lusso realizzati a mano a Cortenuova, Bergamo.',
      url: 'https://comarredo.com',
      email: 'info@comarredo.com',
      foundingDate: '1991',
      priceRange: '€€€',
      image: 'https://comarredo.com/og-image.jpg',
      logo: 'https://comarredo.com/og-image.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Carducci 28',
        addressLocality: 'Cortenuova',
        addressRegion: 'BG',
        postalCode: '24050',
        addressCountry: 'IT',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 45.5833,
        longitude: 9.8167,
      },
      areaServed: [
        { '@type': 'Place', name: 'Bergamo' },
        { '@type': 'Place', name: 'Milano' },
        { '@type': 'Place', name: 'Lombardia' },
        { '@type': 'Place', name: 'Italia' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Prodotti e Servizi Com-Arredo',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobili su Misura in Legno Massello' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infissi in Legno su Misura' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cucine Artigianali in Legno' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Arredamento d\'Interni di Lusso' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Camere da Letto su Misura' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Soggiorni e Librerie in Legno' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://comarredo.com/#website',
      url: 'https://comarredo.com',
      name: 'Com-Arredo',
      description: 'Falegnameria artigianale italiana dal 1991',
      publisher: { '@id': 'https://comarredo.com/#business' },
      inLanguage: 'it-IT',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://comarredo.com' },
        { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://comarredo.com/portfolio' },
        { '@type': 'ListItem', position: 3, name: 'Contatti', item: 'https://comarredo.com/contatti' },
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Preventivo />
        <Footer />
      </main>
    </>
  )
}
