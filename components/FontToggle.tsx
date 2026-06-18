'use client'

import {
  fontPreviewClasses,
  fontThemeLabels,
  fontThemeShortLabels,
  fontThemes,
} from '@/lib/fonts'
import { useFontTheme } from '@/components/FontProvider'

type FontToggleProps = {
  className?: string
}

export default function FontToggle({ className = '' }: FontToggleProps) {
  const { font, setFont, mounted } = useFontTheme()

  return (
    <div
      className={`font-toggle ${className}`.trim()}
      role="group"
      aria-label="Selezione tipografia"
    >
      <span className="font-toggle-heading" aria-hidden>
        Font
      </span>
      <div className="font-toggle-swatches">
        {mounted ? (
          fontThemes.map((id) => {
            const isActive = font === id
            return (
              <button
                key={id}
                type="button"
                className={`font-swatch ${isActive ? 'font-swatch--active' : ''}`}
                onClick={() => setFont(id)}
                aria-label={fontThemeLabels[id]}
                aria-pressed={isActive}
                title={fontThemeLabels[id]}
              >
                <span className={`font-swatch-preview ${fontPreviewClasses[id]}`} aria-hidden>
                  Aa
                </span>
                <span className="font-swatch-label">{fontThemeShortLabels[id]}</span>
              </button>
            )
          })
        ) : (
          fontThemes.map((id) => (
            <span key={id} className="font-swatch font-swatch--placeholder" aria-hidden />
          ))
        )}
      </div>
    </div>
  )
}
