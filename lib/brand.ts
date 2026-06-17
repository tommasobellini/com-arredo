import type { ThemeId } from '@/lib/theme'

export const brandLogos = {
  fullWhite: '/logo/COMARREDO-BIANCO.svg',
  fullPrimary: '/logo/COMARREDO-PRIMARY.svg',
  iconWhite: '/logo/COMARREDO-ICONA-BIANCA.svg',
} as const

export const brandLogosByTheme: Record<ThemeId, string> = {
  dark: brandLogos.fullWhite,
  light: brandLogos.fullPrimary,
  forest: brandLogos.fullWhite,
}

export const brandAlt = 'Com-Arredo — Falegnameria artigianale'

export const brandDimensions = {
  full: { width: 300, height: 60 },
  icon: { width: 48, height: 48 },
} as const
