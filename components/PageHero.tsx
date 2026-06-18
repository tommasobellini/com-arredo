import Image from 'next/image'
import SectionDivider, { type SectionTone } from '@/components/SectionDivider'

interface PageHeroProps {
  eyebrow: string
  title: string
  highlight?: string
  subtitle?: string
  image?: string
  dividerTo?: SectionTone
}

export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  image = '/detail.png',
  dividerTo,
}: PageHeroProps) {
  return (
    <>
      <section className="relative page-hero-section pt-40 pb-24 overflow-hidden bg-antracite">
        <div className="absolute inset-0 z-0 page-hero-bg">
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
            aria-hidden
          />
          <div className="absolute inset-0 page-hero-overlay" />
        </div>

        <div className="container relative z-10 text-center max-w-3xl mx-auto page-hero-content">
          <span className="text-accent text-10px font-bold tracking-3em uppercase block mb-6">
            {eyebrow}
          </span>
          <h1 className="serif text-4xl text-6xl-md text-white leading-tight mb-6">
            {title}
            {highlight && (
              <>
                {' '}
                <span className="text-accent">{highlight}</span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className="text-white-60 text-lg leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      </section>
      {dividerTo && <SectionDivider from="elevated" to={dividerTo} />}
    </>
  )
}
