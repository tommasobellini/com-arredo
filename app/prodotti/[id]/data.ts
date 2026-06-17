import { images } from '@/lib/images'

export interface ProductData {
  title: string
  description: string
  image: string
  features: string[]
  category: string
}

export const productsData: Record<string, ProductData> = {
  'cucina-artigianale': {
    title: 'Cucina Artigianale in Noce',
    description:
      'Una cucina che unisce la tradizione del noce massello con la modernità del design contemporaneo. Ogni cassetto è assemblato con incastri a coda di rondine, garantendo stabilità eterna e un\'estetica senza compromessi.',
    image: images.portfolio.cucina,
    category: 'Cucine',
    features: ['Noce Massello', 'Piani in Pietra', 'Incastri Manuali', 'Finitura Naturale'],
  },
  'soggiorno-su-misura': {
    title: 'Soggiorno Minimal su Misura',
    description:
      'Linee pulite e volumi geometrici definiscono questo spazio living. Realizzato in rovere sbiancato, integra moduli a scomparsa e illuminazione LED radiale per un\'esperienza di comfort totale.',
    image: images.portfolio.soggiorno,
    category: 'Soggiorni',
    features: ['Rovere Sbiancato', 'Sistema Push-Pull', 'Illuminazione Integrata', 'Design Modulare'],
  },
  'camera-da-letto-premium': {
    title: 'Suite Padronale Premium',
    description:
      'La zona notte interpretata come un santuario di relax. Letto in frassino tinto ebano con testiera imbottita in pelle nubuck, completato da armadiature a tutta altezza con ante scorrevoli complanari.',
    image: images.portfolio.camera,
    category: 'Camere',
    features: ['Frassino Ebano', 'Pelle Nubuck', 'Hardware Soft-Close', 'Vano Segreto'],
  },
  'infissi-su-misura': {
    title: 'Infissi in Legno su Misura',
    description:
      'Finestre e portefinestre realizzate in essenze selezionate con doppio vetro e ferramenta di precisione. Isolamento, estetica e durata nel tempo per abitazioni di pregio.',
    image: images.portfolio.infissi,
    category: 'Infissi',
    features: ['Doppio Vetro', 'Essenze Certificate', 'Posa Professionale', 'Finitura Olio'],
  },
}

export const productSlugs = Object.keys(productsData)
