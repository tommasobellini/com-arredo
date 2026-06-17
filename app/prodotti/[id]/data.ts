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
      'Realizziamo cucine su misura unendo la tradizione del noce massello al design contemporaneo. Ogni cassetto è assemblato con incastri a coda di rondine, per stabilità e un\'estetica senza compromessi.',
    image: images.portfolio.cucina,
    category: 'Cucine',
    features: ['Noce Massello', 'Piani in Pietra', 'Incastri Manuali', 'Finitura Naturale'],
  },
  'soggiorno-su-misura': {
    title: 'Soggiorno Minimal su Misura',
    description:
      'Progettiamo living con linee pulite e volumi geometrici. In rovere sbiancato, con moduli a scomparsa e illuminazione integrata per un comfort totale.',
    image: images.portfolio.soggiorno,
    category: 'Soggiorni',
    features: ['Rovere Sbiancato', 'Sistema Push-Pull', 'Illuminazione Integrata', 'Design Modulare'],
  },
  'camera-da-letto-premium': {
    title: 'Suite Padronale Premium',
    description:
      'Interpretiamo la zona notte come un santuario di relax: letti in frassino tinto ebano, testiere su misura e armadiature a tutta altezza con ante scorrevoli complanari.',
    image: images.portfolio.camera,
    category: 'Camere',
    features: ['Frassino Ebano', 'Pelle Nubuck', 'Hardware Soft-Close', 'Vano Segreto'],
  },
  'infissi-su-misura': {
    title: 'Infissi in Legno su Misura',
    description:
      'Produciamo finestre e portefinestre in essenze selezionate con doppio vetro e ferramenta di precisione. Isolamento, estetica e durata per abitazioni di pregio.',
    image: images.portfolio.infissi,
    category: 'Infissi',
    features: ['Doppio Vetro', 'Essenze Certificate', 'Posa Professionale', 'Finitura Olio'],
  },
}

export const productSlugs = Object.keys(productsData)
