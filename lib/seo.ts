import type { Metadata } from 'next'
import { site } from '@/lib/site'
import { ogImage } from '@/lib/images'

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://comarredo.com'

export const siteName = 'Com-Arredo'

export function absoluteUrl(path = '') {
  if (!path || path === '/') return siteUrl
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  noIndex?: boolean
}

export function createPageMetadata({
  title,
  description,
  path,
  image = ogImage,
  imageAlt = 'Com-Arredo — Falegnameria Artigianale Italiana dal 1991',
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path)
  const imagePath = image.startsWith('http') ? image : image

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { 'it-IT': url },
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'website',
      locale: 'it_IT',
      url,
      siteName,
      title: `${title} | ${siteName}`,
      description,
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: imageAlt,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
      images: [imagePath],
    },
  }
}

export type BreadcrumbItem = { name: string; path: string }

export function jsonLdBreadcrumb(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function jsonLdLocalBusiness() {
  const sameAs = [site.social.instagram, site.social.facebook, site.social.youtube].filter(
    Boolean
  )

  return {
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#business`,
    name: site.name,
    alternateName: 'Com Arredo',
    description: `Falegnameria artigianale dal ${site.founded}. Mobili su misura, infissi in legno, cucine e arredamenti d'interni di lusso realizzati a mano a Cortenuova, Bergamo.`,
    url: siteUrl,
    email: site.email,
    ...(site.phone ? { telephone: site.phone } : {}),
    foundingDate: site.founded,
    priceRange: '€€€',
    image: absoluteUrl('/hero.png'),
    logo: absoluteUrl('/logo/COMARREDO-PRIMARY.png'),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      postalCode: site.address.cap,
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
  }
}

export function jsonLdWebSite() {
  return {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    description: `Falegnameria artigianale italiana dal ${site.founded}`,
    publisher: { '@id': `${siteUrl}/#business` },
    inLanguage: 'it-IT',
  }
}

export function jsonLdHomeGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [jsonLdLocalBusiness(), jsonLdWebSite()],
  }
}

export function jsonLdContactPage() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${absoluteUrl('/contatti')}#webpage`,
        url: absoluteUrl('/contatti'),
        name: 'Contatti — Com-Arredo',
        description: `Contatta Com-Arredo per preventivi gratuiti. ${site.address.full}.`,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#business` },
        inLanguage: 'it-IT',
      },
      jsonLdBreadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Contatti', path: '/contatti' },
      ]),
    ],
  }
}

export function jsonLdProduct(
  id: string,
  data: { title: string; description: string; image: string }
) {
  const productUrl = absoluteUrl(`/prodotti/${id}`)
  const imageUrl = data.image.startsWith('http') ? data.image : absoluteUrl(data.image)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: data.title,
        description: data.description,
        image: imageUrl,
        url: productUrl,
        brand: { '@type': 'Brand', name: 'Com-Arredo' },
        manufacturer: {
          '@type': 'Organization',
          name: site.name,
          url: siteUrl,
        },
        offers: {
          '@type': 'Offer',
          url: productUrl,
          availability: 'https://schema.org/InStock',
          price: 0,
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            price: 0,
            description: 'Prezzo su preventivo personalizzato',
          },
          seller: { '@type': 'Organization', name: site.name },
        },
      },
      jsonLdBreadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: data.title, path: `/prodotti/${id}` },
      ]),
    ],
  }
}
