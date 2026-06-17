import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductDetailClient from './ProductDetailClient'
import JsonLd from '@/components/JsonLd'
import { productsData, productSlugs } from './data'
import { createPageMetadata, jsonLdProduct } from '@/lib/seo'

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

  return createPageMetadata({
    title: data.title,
    description: `${data.description} Realizzato da Com-Arredo S.R.L., falegnameria artigianale italiana dal 1991 a Cortenuova (BG).`,
    path: `/prodotti/${id}`,
    image: data.image,
    imageAlt: `${data.title} — Com-Arredo falegnameria artigianale`,
  })
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params

  if (!productsData[id]) notFound()

  const data = productsData[id]

  return (
    <>
      <JsonLd data={jsonLdProduct(id, data)} />
      <Navbar />
      <ProductDetailClient id={id} />
      <Footer />
    </>
  )
}
