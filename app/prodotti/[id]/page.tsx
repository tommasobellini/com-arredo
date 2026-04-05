import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import ProductDetailClient from './ProductDetailClient'
import { productsData, productSlugs } from './data'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return productSlugs.map((id) => ({ id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const data = productsData[id]

  if (!data) {
    return {
      title: 'Prodotto non trovato',
      robots: { index: false },
    }
  }

  const title = `${data.title} | Falegnameria Artigianale`
  const description = `${data.description} Realizzato da Com-Arredo S.R.L., falegnameria artigianale italiana dal 1991 a Cortenuova (BG).`

  return {
    title,
    description,
    alternates: {
      canonical: `https://comarredo.com/prodotti/${id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://comarredo.com/prodotti/${id}`,
      images: [{ url: data.image, width: 1200, height: 800, alt: data.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [data.image],
    },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params

  if (!productsData[id]) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productsData[id].title,
    description: productsData[id].description,
    image: `https://comarredo.com${productsData[id].image}`,
    brand: {
      '@type': 'Brand',
      name: 'Com-Arredo',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Com-Arredo S.R.L.',
      url: 'https://comarredo.com',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
      seller: { '@type': 'Organization', name: 'Com-Arredo S.R.L.' },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ProductDetailClient id={id} />
    </>
  )
}
