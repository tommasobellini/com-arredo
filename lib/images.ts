/** Percorsi immagini — preferenza asset locali, fallback Unsplash */
const u = (id: string, w = 1920) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=85&w=${w}`

export const images = {
  hero: '/hero.png',
  about: '/about.png',
  workshop: '/detail.png',
  woodGrain: '/detail.png',
  og: '/hero.png',

  portfolio: {
    cucina: '/portfolio-1.png',
    soggiorno: '/portfolio-2.png',
    camera: '/portfolio-3.png',
    infissi: '/portfolio-4.png',
    tavolo: '/portfolio-1.png',
    dettaglio: '/detail.png',
  },

  produzione: {
    cucine: '/portfolio-1.png',
    infissi: '/portfolio-4.png',
    camere: '/portfolio-3.png',
    soggiorni: '/portfolio-2.png',
    tavoli: '/detail.png',
    librerie: '/portfolio-2.png',
  },

  /** Fallback remoti se asset locali assenti */
  remote: {
    hero: u('photo-1453904306672-f338fe87f830'),
    about: u('photo-1504148455328-c376907d081c'),
    cucina: u('photo-1556911220-bff31c812dba', 800),
    soggiorno: u('photo-1616486338812-3dadae4b4ace', 800),
    camera: u('photo-1615529328331-f8917597711f', 800),
    infissi: u('photo-1600585154340-be6161a56a0c', 800),
  },
} as const
