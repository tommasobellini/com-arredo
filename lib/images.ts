/** Percorsi immagini — asset locali + Unsplash temporaneo per portfolio */
const u = (id: string, w = 1920) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=85&w=${w}`

export const ogImage = '/hero.png'

export const images = {
  hero: '/hero.png',
  about: '/about.png',
  workshop: '/detail.png',
  woodGrain: '/detail.png',
  og: ogImage,

  portfolio: {
    cucina: u('photo-1556911220-bff31c812dba', 800),
    soggiorno: u('photo-1616486338812-3dadae4b4ace', 800),
    camera: u('photo-1615529328331-f8917597711f', 800),
    infissi: u('photo-1600585154340-be6161a56a0c', 800),
    tavolo: u('photo-1556911220-bff31c812dba', 800),
    dettaglio: '/detail.png',
  },

  produzione: {
    cucine: u('photo-1556911220-bff31c812dba', 800),
    infissi: u('photo-1600585154340-be6161a56a0c', 800),
    camere: u('photo-1615529328331-f8917597711f', 800),
    soggiorni: u('photo-1616486338812-3dadae4b4ace', 800),
    tavoli: '/detail.png',
    librerie: u('photo-1616486338812-3dadae4b4ace', 800),
  },
} as const
