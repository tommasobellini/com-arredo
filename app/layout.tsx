import type { Metadata, Viewport } from 'next'
import { Fraunces, Outfit } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#c29a75',
}

const BASE_URL = 'https://comarredo.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Com-Arredo | Falegnameria Artigianale dal 1991 — Cortenuova, Bergamo',
    template: '%s | Com-Arredo',
  },
  description:
    'Com-Arredo S.R.L. — Falegnameria artigianale dal 1991 a Cortenuova (BG). Mobili su misura, infissi in legno, cucine e arredi d\'interni di lusso realizzati a mano con essenze pregiate certificate.',
  keywords: [
    'falegnameria artigianale',
    'mobili su misura',
    'mobili legno artigianali',
    'infissi legno su misura',
    'cucine in legno massello',
    'arredamento su misura Bergamo',
    'falegname Cortenuova',
    'falegnameria BG',
    'legno pregiato',
    'artigianato italiano legno',
    'design d\'interni legno',
    'noce massello',
    'rovere su misura',
    'Com-Arredo',
  ],
  authors: [{ name: 'Com-Arredo S.R.L.', url: BASE_URL }],
  creator: 'Com-Arredo S.R.L.',
  publisher: 'Com-Arredo S.R.L.',
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
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: BASE_URL,
    siteName: 'Com-Arredo',
    title: 'Com-Arredo | Falegnameria Artigianale dal 1991',
    description:
      'Mobili su misura, infissi e arredi d\'interni di lusso realizzati a mano a Cortenuova (BG). L\'eccellenza del legno artigianale italiano dal 1991.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Com-Arredo — Falegnameria Artigianale Italiana dal 1991',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Com-Arredo | Falegnameria Artigianale dal 1991',
    description:
      'Mobili su misura, infissi e arredi d\'interni di lusso realizzati a mano. L\'eccellenza del legno artigianale italiano.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'it-IT': BASE_URL,
    },
  },
  category: 'Artigianato e Design d\'interni',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
