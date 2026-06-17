import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Preventivo from '@/components/Preventivo'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { createPageMetadata, jsonLdHomeGraph } from '@/lib/seo'
import { ogImage } from '@/lib/images'

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
