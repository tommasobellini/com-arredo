export const site = {
  name: 'Com-Arredo S.R.L.',
  tagline: 'Falegnameria artigianale dal 1991',
  email: 'info@comarredo.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '',
  address: {
    street: 'Via Giosuè Carducci 28',
    city: 'Cortenuova',
    province: 'BG',
    cap: '24050',
    country: 'Italia',
    full: 'Via Giosuè Carducci 28 — 24050 Cortenuova (BG)',
  },
  piva: '02113340166',
  founded: '1991',
  mapsUrl:
    'https://maps.google.com/?q=Via+Giosuè+Carducci+28+24050+Cortenuova+BG',
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || '',
  },
} as const

export const services = [
  {
    id: 'cucine',
    title: 'Cucine su Misura',
    description:
      'Cucine in legno massello progettate intorno alle tue abitudini, con incastri artigianali e finiture naturali.',
    slug: 'cucina-artigianale',
    imageKey: 'cucine' as const,
  },
  {
    id: 'infissi',
    title: 'Infissi in Legno',
    description:
      'Finestre e porte su misura con isolamento termico, essenze selezionate e posa professionale.',
    slug: 'infissi-su-misura',
    imageKey: 'infissi' as const,
  },
  {
    id: 'camere',
    title: 'Camere da Letto',
    description:
      'Zone notte complete: letti, armadi a tutta altezza e complementi coordinati in essenze pregiate.',
    slug: 'camera-da-letto-premium',
    imageKey: 'camere' as const,
  },
  {
    id: 'soggiorni',
    title: 'Soggiorni e Librerie',
    description:
      'Living su misura con moduli nascosti, illuminazione integrata e design contemporaneo in legno.',
    slug: 'soggiorno-su-misura',
    imageKey: 'soggiorni' as const,
  },
  {
    id: 'tavoli',
    title: 'Tavoli e Sedute',
    description:
      'Tavoli in rovere e noce con giunzioni a mano, finiture olio e dimensioni personalizzate.',
    slug: null,
    imageKey: 'tavoli' as const,
  },
  {
    id: 'librerie',
    title: 'Arredi d\'Interni',
    description:
      'Librerie, boiserie e complementi che valorizzano gli spazi con la matericità del legno.',
    slug: null,
    imageKey: 'librerie' as const,
  },
]
