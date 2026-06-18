'use client'

import ThemeProvider from '@/components/ThemeProvider'
import { FontProvider } from '@/components/FontProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <FontProvider>{children}</FontProvider>
    </ThemeProvider>
  )
}
