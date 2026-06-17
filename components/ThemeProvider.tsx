'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { defaultTheme, themeStorageKey, themes } from '@/lib/theme'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme={defaultTheme}
      themes={[...themes]}
      storageKey={themeStorageKey}
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  )
}
