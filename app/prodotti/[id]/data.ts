export interface ProductData {
  title: string
  description: string
  image: string
  features: string[]
}

export const productsData: Record<string, ProductData> = {
  'cucina-artigianale': {
    title: 'Cucina Artigianale in Noce',
    description:
      'Una cucina che unisce la tradizione del noce massello con la modernità del design contemporaneo. Ogni cassetto è assemblato con incastri a coda di rondine, garantendo stabilità eterna e un\'estetica senza compromessi.',
    image: '/portfolio-1.png',
    features: ['Noce Massello', 'Piani in Pietra', 'Incastri Manuali', 'Finitura Naturale'],
  },
  'soggiorno-su-misura': {
    title: 'Soggiorno Minimal su Misura',
    description:
      'Linee pulite e volumi geometrici definiscono questo spazio living. Realizzato in rovere sbiancato, integra moduli a scomparsa e illuminazione LED radiale per un\'esperienza di comfort totale.',
    image: '/portfolio-2.png',
    features: ['Rovere Sbiancato', 'Sistema Push-Pull', 'Illuminazione Integrata', 'Design Modulare'],
  },
  'camera-da-letto-premium': {
    title: 'Suite Padronale Premium',
    description:
      'La zona notte interpretata come un santuario di relax. Letto in frassino tinto ebano con testiera imbottita in pelle nubuck, completato da armadiature a tutta altezza con ante scorrevoli complanari.',
    image: '/portfolio-3.png',
    features: ['Frassino Ebano', 'Pelle Nubuck', 'Hardware Soft-Close', 'Vano Segreto'],
  },
}

export const productSlugs = Object.keys(productsData)
