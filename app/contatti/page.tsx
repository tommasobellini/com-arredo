import type { Metadata } from 'next'
import { Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import PreventivoForm from '@/components/PreventivoForm'
import { images } from '@/lib/images'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contatti',
  description:
    `Contatta Com-Arredo per preventivi gratuiti. ${site.address.full}. Email: ${site.email}. Falegnameria artigianale Bergamo.`,
  alternates: { canonical: 'https://comarredo.com/contatti' },
}

export default function ContattiPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="PARLIAMO DEL TUO PROGETTO"
        title="Contatti"
        subtitle="Compila il modulo o scrivici: ti rispondiamo entro 24 ore lavorative con una prima valutazione senza impegno."
        image={images.woodGrain}
      />

      <section className="py-24 bg-antracite">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="serif text-3xl text-white">Sede e recapiti</h2>

            <div className="flex items-start gap-4 text-white-60">
              <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium mb-1">{site.name}</p>
                <p>{site.address.full}</p>
                <Link href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-accent text-sm mt-2 inline-block">
                  Apri in Google Maps
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 text-white-60">
              <Mail size={20} className="text-accent flex-shrink-0" />
              <a href={`mailto:${site.email}`} className="hover-text-white transition-colors">{site.email}</a>
            </div>

            <div className="flex items-start gap-4 text-white-60">
              <Clock size={20} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium mb-1">Orari</p>
                <p>Lun-Ven: 8:00 - 18:00</p>
                <p className="text-white-40 text-sm mt-1">Su appuntamento anche il sabato mattina</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-white-10 aspect-video w-full">
              <iframe
                title="Mappa Com-Arredo Cortenuova"
                src="https://maps.google.com/maps?q=Via+Giosue+Carducci+28+Cortenuova+BG&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className="serif text-3xl text-white mb-8">Richiedi preventivo</h2>
            <PreventivoForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

