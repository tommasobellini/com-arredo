import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Com-Arredo — Falegnameria Artigianale',
    short_name: 'Com-Arredo',
    description: 'Falegnameria artigianale dal 1991. Mobili su misura, infissi e arredi d\'interni a Cortenuova (BG).',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#348059',
    lang: 'it',
    icons: [
      {
        src: '/logo/COMARREDO-ICONA-VERDE.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
