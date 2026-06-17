import type { ReactNode } from 'react'

interface LegalContentProps {
  title: string
  children: ReactNode
}

export default function LegalContent({ title, children }: LegalContentProps) {
  return (
    <article className="legal-prose container py-32 pt-40 max-w-3xl mx-auto text-white-60 leading-relaxed">
      <h1 className="serif text-4xl text-white mb-12">{title}</h1>
      {children}
    </article>
  )
}
