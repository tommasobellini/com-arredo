import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a1a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://comarredo.it'), // URL placeholder per produzione
  title: {
    default: 'Com Arredo | Artigianato in Legno Premium a Roma',
    template: '%s | Com Arredo'
  },
  description: 'Falegnameria artigianale a Roma. Realizzazione di mobili su misura, infissi, cucine e arredamenti d\'interni di lusso. L\'eccellenza del legno fatta a mano.',
  keywords: ['falegnameria', 'arredamento su misura', 'mobili artigianali', 'infissi legno', 'roma', 'artigianato legno', 'design d\'interni'],
  authors: [{ name: 'Com Arredo' }],
  creator: 'Com Arredo',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://comarredo.it',
    siteName: 'Com Arredo',
    title: 'Com Arredo | Artigianato in Legno Premium',
    description: 'Mobili su misura e arredamenti d\'interni artigianali. L\'eccellenza del legno fatta a mano.',
    images: [
      {
        url: '/og-image.jpg', // Da creare in public/ in futuro
        width: 1200,
        height: 630,
        alt: 'Com Arredo Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Com Arredo | Artigianato in Legno',
    description: 'Mobili su misura e arredamenti d\'interni artigianali.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
