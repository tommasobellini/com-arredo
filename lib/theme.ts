export const themes = ['dark', 'light', 'forest'] as const
export type ThemeId = (typeof themes)[number]

export const themeLabels: Record<ThemeId, string> = {
  dark: 'Tema scuro — Bottega',
  light: 'Tema chiaro — Galleria',
  forest: 'Tema verde — Natura',
}

export const themeShortLabels: Record<ThemeId, string> = {
  dark: 'Scuro',
  light: 'Chiaro',
  forest: 'Verde',
}

/** Colori anteprima per ogni swatch del toggle */
export const themeSwatches: Record<ThemeId, { bg: string; ring: string }> = {
  dark: { bg: '#0a0a0a', ring: '#348059' },
  light: { bg: '#f8f8f6', ring: '#348059' },
  forest: { bg: '#1a2e24', ring: '#5ca87a' },
}

export const themeColors: Record<ThemeId, string> = {
  dark: '#348059',
  light: '#348059',
  forest: '#348059',
}

export const defaultTheme: ThemeId = 'dark'
export const themeStorageKey = 'comarredo-theme'
