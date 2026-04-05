import type { Variants } from 'framer-motion'

export const viewportOptions = { once: true, margin: '-80px' }

// Contenitore che triggera i figli in sequenza
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.05,
    },
  },
}

// Elementi che salgono dal basso
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
}

// Elementi che entrano da sinistra
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
}

// Elementi che entrano da destra
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
}

// Linea decorativa che si allarga
export const expandWidth: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

// Cards del portfolio con effetto "libro" al contrario
export const bookFlipEntry: Variants = {
  hidden: { 
    opacity: 0, 
    rotateY: 90, 
    transformOrigin: 'right center',
    x: 20
  },
  show: {
    opacity: 1,
    rotateY: 0,
    x: 0,
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1] 
    },
  },
}
