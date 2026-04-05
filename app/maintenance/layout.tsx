import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sito in Manutenzione | Com-Arredo',
  description: 'Il sito Com-Arredo è temporaneamente in manutenzione. Torna presto.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
