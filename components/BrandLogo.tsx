'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { brandAlt, brandDimensions, brandLogos, brandLogosByTheme } from '@/lib/brand'
import type { ThemeId } from '@/lib/theme'

type BrandLogoProps = {
  variant?: 'full' | 'icon'
  className?: string
  priority?: boolean
}

export default function BrandLogo({ variant = 'full', className = '', priority = false }: BrandLogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const { width, height } = brandDimensions[variant]
  const src =
    variant === 'icon'
      ? brandLogos.iconWhite
      : mounted && theme
        ? brandLogosByTheme[(theme as ThemeId) || 'dark']
        : brandLogos.fullWhite

  return (
    <Image
      src={src}
      alt={brandAlt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={{ width: 'auto', height: '100%', maxWidth: '100%' }}
    />
  )
}
