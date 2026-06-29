/** Percorsi immagini — asset locali + set generato per categorie e materiali */
const cat = (name: string) => `/generated/categories/${name}.png`
const mat = (name: string) => `/generated/materials/${name}.png`

export const ogImage = '/og.png'

export const heroFrames = [
  {
    src: '/generated/hero/hero-shavings.png',
    alt: 'Riccioli di legno alla luce dorata in bottega',
    position: '68% center',
  },
  {
    src: '/generated/hero/hero-lumber.png',
    alt: 'Assi di rovere e raggi di luce in atelier',
    position: '72% center',
  },
] as const

export const images = {
  hero: heroFrames[0].src,
  about: '/about.png',
  workshop: '/detail.png',
  woodGrain: '/detail.png',
  og: ogImage,

  portfolio: {
    cucina: cat('cucine'),
    soggiorno: cat('soggiorni'),
    camera: cat('camere'),
    infissi: cat('infissi'),
    tavolo: cat('tavoli'),
    dettaglio: '/generated/details/incastro-macro.png',
  },

  produzione: {
    cucine: cat('cucine'),
    infissi: cat('infissi'),
    camere: cat('camere'),
    soggiorni: cat('soggiorni'),
    tavoli: cat('tavoli'),
    librerie: cat('librerie'),
  },

  materials: {
    rovereOlio: mat('rovere-olio'),
    rovereCerato: mat('rovere-cerato'),
    noceOlio: mat('noce-olio'),
    noceNaturale: mat('noce-naturale'),
    frassinoEbano: mat('frassino-ebano'),
    rovereSbiancato: mat('rovere-sbiancato'),
    castagnoOlio: mat('castagno-olio'),
    castagnoCerato: mat('castagno-cerato'),
  },

  details: {
    incastro: '/generated/details/incastro-macro.png',
  },
} as const
