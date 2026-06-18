import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Footer from '@/components/Footer'
import SectionDivider from '@/components/SectionDivider'
import JsonLd from '@/components/JsonLd'
import { createPageMetadata, jsonLdHomeGraph } from '@/lib/seo'
import { ogImage } from '@/lib/images'

const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => <div className="section-loading" aria-hidden />,
})

const Preventivo = dynamic(() => import('@/components/Preventivo'), {
  loading: () => <div className="section-loading" aria-hidden />,
})

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Falegnameria Artigianale dal 1991 — Cortenuova, Bergamo',
    description:
      'Com-Arredo S.R.L. realizza mobili su misura, infissi in legno, cucine e arredamenti d\'interni di lusso. Artigianato italiano del legno dal 1991 a Cortenuova (BG). Richiedi un preventivo gratuito.',
    path: '/',
    image: ogImage,
  }),
  title: 'Com-Arredo | Falegnameria Artigianale dal 1991 — Cortenuova, Bergamo',
}

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLdHomeGraph()} />
      <main id="main-content">
        <Navbar />
        <Hero />
        <SectionDivider from="elevated" to="base" />
        <About />
        <SectionDivider from="base" to="surface" />
        <Portfolio />
        <SectionDivider from="surface" to="elevated" />
        <Preventivo />
        <Footer />
      </main>
    </>
  )
}
