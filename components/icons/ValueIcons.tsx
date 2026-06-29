type IconProps = {
  className?: string
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** Martello da falegname */
export function IconArtigianato({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path {...stroke} d="M10 20V9" />
      <path {...stroke} d="M6 9h8l2-5H8l2 5z" />
      <path {...stroke} d="M16 4l3-3 2 2-3 3" />
      <path {...stroke} d="M6 9l-2 3" />
    </svg>
  )
}

/** Sezione legno — venature */
export function IconMateriali({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <ellipse {...stroke} cx="12" cy="11" rx="7.5" ry="5" />
      <path {...stroke} d="M4.5 11c0-2.8 3.4-5 7.5-5s7.5 2.2 7.5 5" />
      <path {...stroke} d="M7 11c0-1.6 2.2-2.8 5-2.8s5 1.2 5 2.8" />
      <path {...stroke} d="M9.5 11c0-.8 1.1-1.4 2.5-1.4s2.5.6 2.5 1.4" />
    </svg>
  )
}

/** Squadra da falegname */
export function IconSuMisura({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path {...stroke} d="M5 19V5l14 14H5z" />
      <path {...stroke} d="M8.5 15.5l5-5" />
      <path {...stroke} d="M13 8.5l2.5 2.5" />
      <path {...stroke} d="M7 17.5l1.5-1.5" />
    </svg>
  )
}

/** Colline lombarde e radici */
export function IconTerritorio({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path {...stroke} d="M3 17h18" />
      <path {...stroke} d="M5 17l3.5-6 2.5 4 2-3 3 5 2.5-4.5 3 4.5" />
      <path {...stroke} d="M10 20v-1.5M12 20v-2M14 20v-1.5" />
      <circle {...stroke} cx="17" cy="6" r="1.75" />
    </svg>
  )
}

/** Giunzione a coda di rondine — dettaglio */
export function IconDettaglio({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path {...stroke} d="M4 12h6l2-4 2 4h6" />
      <path {...stroke} d="M10 12v5M14 12v5" />
      <path {...stroke} d="M8 17h8" />
      <circle {...stroke} cx="12" cy="8" r="1.25" />
    </svg>
  )
}

/** Generazioni — durata nel tempo */
export function IconDurata({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path {...stroke} d="M12 4v3" />
      <circle {...stroke} cx="12" cy="13" r="7" />
      <path {...stroke} d="M12 13V9" />
      <path {...stroke} d="M8 20c1.5 1 2.8 1.5 4 1.5s2.5-.5 4-1.5" />
    </svg>
  )
}
