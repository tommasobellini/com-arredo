'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState, type CSSProperties } from 'react'
import {
  type ThemeId,
  themes,
  themeLabels,
  themeShortLabels,
  themeSwatches,
} from '@/lib/theme'

type ThemeToggleProps = {
  className?: string
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const active = (theme as ThemeId) || 'dark'

  return (
    <div
      className={`theme-toggle ${className}`.trim()}
      role="group"
      aria-label="Selezione tema colore"
    >
      <span className="theme-toggle-heading" aria-hidden>
        Tema
      </span>
      <div className="theme-toggle-swatches">
        {mounted ? (
          themes.map((id) => {
            const swatch = themeSwatches[id]
            const isActive = active === id
            return (
              <button
                key={id}
                type="button"
                data-theme-swatch={id}
                className={`theme-swatch ${isActive ? 'theme-swatch--active' : ''}`}
                onClick={() => setTheme(id)}
                aria-label={themeLabels[id]}
                aria-pressed={isActive}
                title={themeShortLabels[id]}
                style={
                  {
                    '--swatch-bg': swatch.bg,
                    '--swatch-ring': swatch.ring,
                  } as CSSProperties
                }
              >
                <span className="theme-swatch-label">{themeShortLabels[id]}</span>
              </button>
            )
          })
        ) : (
          themes.map((id) => (
            <span key={id} className="theme-swatch theme-swatch--placeholder" aria-hidden />
          ))
        )}
      </div>
    </div>
  )
}
