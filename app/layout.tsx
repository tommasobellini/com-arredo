import type { Metadata, Viewport } from 'next'
import {
  Bitter,
  DM_Sans,
  Karla,
  Mulish,
  Petrona,
  Vollkorn,
} from 'next/font/google'
import Providers from '@/components/Providers'
import { defaultFontTheme } from '@/lib/fonts'
import { siteUrl } from '@/lib/seo'
import { ogImage } from '@/lib/images'
import './globals.css'

const petrona = Petrona({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-petrona',
})

const karla = Karla({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-karla',
})

const bitter = Bitter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-bitter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const vollkorn = Vollkorn({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-vollkorn',
})

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-mulish',
})

const fontVariableClasses = [
  petrona.variable,
  karla.variable,
  bitter.variable,
  dmSans.variable,
  vollkorn.variable,
  mulish.variable,
].join(' ')

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#348059',
}

const BASE_URL = siteUrl

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: [
      { url: '/logo/COMARREDO-ICONA-VERDE.svg', type: 'image/svg+xml' },
      { url: '/logo/COMARREDO-ICONA-VERDE.png', type: 'image/png' },
    ],
    apple: '/logo/COMARREDO-ICONA-VERDE.png',
    shortcut: '/logo/COMARREDO-ICONA-VERDE.png',
  },
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
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Com-Arredo — Falegnameria Artigianale Italiana dal 1991',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Com-Arredo | Falegnameria Artigianale dal 1991',
    description:
      'Mobili su misura, infissi e arredi d\'interni di lusso realizzati a mano. L\'eccellenza del legno artigianale italiano.',
    images: [ogImage],
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
    <html
      lang="it"
      className={fontVariableClasses}
      suppressHydrationWarning
      data-theme="dark"
      data-font={defaultFontTheme}
    >
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var f=localStorage.getItem('comarredo-font');if(f)document.documentElement.setAttribute('data-font',f)}catch(e){}})();`,
          }}
        />
        <a href="#main-content" className="skip-link">
          Vai al contenuto
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
