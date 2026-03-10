import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Com Arredo | Artigianato in Legno Premium',
  description: 'Mobili su misura, infissi e arredamenti d\'interni artigianali. L\'eccellenza del legno fatta a mano.',
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
