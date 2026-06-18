'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import {
  type FontThemeId,
  defaultFontTheme,
  fontStorageKey,
  fontThemes,
} from '@/lib/fonts'

type FontContextValue = {
  font: FontThemeId
  setFont: (id: FontThemeId) => void
  mounted: boolean
}

const FontContext = createContext<FontContextValue | null>(null)

function applyFont(id: FontThemeId) {
  document.documentElement.setAttribute('data-font', id)
}

export function FontProvider({ children }: { children: React.ReactNode }) {
  const [font, setFontState] = useState<FontThemeId>(defaultFontTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(fontStorageKey) as FontThemeId | null
    const initial = stored && fontThemes.includes(stored) ? stored : defaultFontTheme
    setFontState(initial)
    applyFont(initial)
    setMounted(true)
  }, [])

  const setFont = useCallback((id: FontThemeId) => {
    setFontState(id)
    applyFont(id)
    localStorage.setItem(fontStorageKey, id)
  }, [])

  return (
    <FontContext.Provider value={{ font, setFont, mounted }}>
      {children}
    </FontContext.Provider>
  )
}

export function useFontTheme() {
  const ctx = useContext(FontContext)
  if (!ctx) throw new Error('useFontTheme must be used within FontProvider')
  return ctx
}
