import type { CSSProperties } from 'react'

export type SectionTone = 'base' | 'elevated' | 'surface' | 'footer' | 'transparent'

type SectionDividerProps = {
  from?: SectionTone
  to?: SectionTone
  /** Mostra il rombo centrale accent */
  mark?: boolean
}

export default function SectionDivider({
  from = 'elevated',
  to = 'surface',
  mark = true,
}: SectionDividerProps) {
  return (
    <div
      className={`section-divider${mark ? '' : ' section-divider--plain'}`}
      style={
        {
          '--divider-from': `var(--section-tone-${from})`,
          '--divider-to': `var(--section-tone-${to})`,
        } as CSSProperties
      }
      aria-hidden="true"
    >
      <div className="section-divider__glow" />
      <div className="section-divider__edge section-divider__edge--top" />
      <div className="section-divider__edge section-divider__edge--bottom" />
      {mark && (
        <div className="section-divider__ornament">
          <span className="section-divider__line section-divider__line--left" />
          <span className="section-divider__mark" />
          <span className="section-divider__line section-divider__line--right" />
        </div>
      )}
    </div>
  )
}
