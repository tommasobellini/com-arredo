export const fontThemes = ['organico', 'massello', 'venatura'] as const
export type FontThemeId = (typeof fontThemes)[number]

export const fontThemeLabels: Record<FontThemeId, string> = {
  organico: 'Organico — Petrona & Karla',
  massello: 'Massello — Bitter & DM Sans',
  venatura: 'Venatura — Vollkorn & Mulish',
}

export const fontThemeShortLabels: Record<FontThemeId, string> = {
  organico: 'Organico',
  massello: 'Massello',
  venatura: 'Venatura',
}

export const defaultFontTheme: FontThemeId = 'organico'
export const fontStorageKey = 'comarredo-font'

/** Classi anteprima serif per ogni swatch del toggle */
export const fontPreviewClasses: Record<FontThemeId, string> = {
  organico: 'font-preview-organico',
  massello: 'font-preview-massello',
  venatura: 'font-preview-venatura',
}
