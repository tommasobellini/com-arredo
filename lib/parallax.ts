'use client'

import { useRef } from 'react'
import {
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'

type Unit = number | string

function staticRange(reduce: boolean | null, from: Unit, to: Unit): [Unit, Unit] {
  return reduce ? [0, 0] : [from, to]
}

export function useSectionScroll(offset: ['start end', 'end start'] | ['start start', 'end end'] = ['start end', 'end start']) {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  return { ref, scrollYProgress, reduceMotion }
}

export function useHeroParallax() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    staticRange(reduceMotion, '0%', '50%'),
  )
  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    staticRange(reduceMotion, 1, 1.18),
  )
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    staticRange(reduceMotion, 0, 180),
  )
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    reduceMotion ? [1, 1] : [1, 0],
  )

  return { ref, bgY, bgScale, contentY, contentOpacity }
}

export function useStickyImageParallax() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    staticRange(reduceMotion, '-8%', '28%'),
  )
  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    staticRange(reduceMotion, 1.08, 1.22),
  )
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    staticRange(reduceMotion, 120, -80),
  )

  return { ref, bgY, bgScale, contentY }
}

export function useImageParallax(
  scrollYProgress: MotionValue<number>,
  reduceMotion: boolean | null,
  from: Unit = '12%',
  to: Unit = '-12%',
) {
  return useTransform(scrollYProgress, [0, 1], staticRange(reduceMotion, from, to))
}

export function useContentParallax(
  scrollYProgress: MotionValue<number>,
  reduceMotion: boolean | null,
  from = 36,
  to = -36,
) {
  return useTransform(scrollYProgress, [0, 1], staticRange(reduceMotion, from, to))
}

export function useLayerParallax(
  scrollYProgress: MotionValue<number>,
  reduceMotion: boolean | null,
  from: number,
  to: number,
) {
  return useTransform(scrollYProgress, [0, 1], staticRange(reduceMotion, from, to))
}
