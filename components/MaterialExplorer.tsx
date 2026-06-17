'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  allEssences,
  essenceLabels,
  materialSamples,
  type WoodEssence,
} from '@/lib/materials'

export default function MaterialExplorer() {
  const [essenceFilter, setEssenceFilter] = useState<WoodEssence | 'all'>('all')
  const [activeId, setActiveId] = useState(materialSamples[0].id)

  const filtered = useMemo(
    () =>
      essenceFilter === 'all'
        ? materialSamples
        : materialSamples.filter((s) => s.essence === essenceFilter),
    [essenceFilter],
  )

  const active =
    filtered.find((s) => s.id === activeId) ?? filtered[0] ?? materialSamples[0]

  const handleFilter = (essence: WoodEssence | 'all') => {
    setEssenceFilter(essence)
    const next =
      essence === 'all'
        ? materialSamples[0]
        : materialSamples.find((s) => s.essence === essence)
    if (next) setActiveId(next.id)
  }

  return (
    <section className="materials-section py-24 bg-granite">
      <div className="container">
        <p className="materials-disclaimer">
          Le campionature sono riferimenti visivi di essenze e finiture. In bottega potrai
          toccare i campioni fisici e scegliere insieme a noi la combinazione ideale.
        </p>

        <div className="materials-filters" role="tablist" aria-label="Filtra per essenza">
          <button
            type="button"
            role="tab"
            aria-selected={essenceFilter === 'all'}
            className={`materials-filter-btn${essenceFilter === 'all' ? ' materials-filter-btn--active' : ''}`}
            onClick={() => handleFilter('all')}
          >
            Tutte
          </button>
          {allEssences.map((essence) => (
            <button
              key={essence}
              type="button"
              role="tab"
              aria-selected={essenceFilter === essence}
              className={`materials-filter-btn${essenceFilter === essence ? ' materials-filter-btn--active' : ''}`}
              onClick={() => handleFilter(essence)}
            >
              {essenceLabels[essence]}
            </button>
          ))}
        </div>

        <div className="materials-layout">
          <div className="materials-preview wood-frame">
            <div className="materials-preview-image-wrap">
              <Image
                key={active.id}
                src={active.image}
                alt={`${active.label} — esempio illustrativo Com-Arredo`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover materials-preview-image"
                priority
              />
              <div
                className="materials-preview-accent"
                style={{ backgroundColor: active.hue }}
                aria-hidden
              />
            </div>
            <div className="materials-preview-meta">
              <span className="materials-preview-essence">{active.label}</span>
              <p className="materials-preview-desc">{active.description}</p>
              <p className="materials-preview-maint">
                <strong>Manutenzione:</strong> {active.maintenance}
              </p>
              <Link
                href={`/contatti?essenza=${active.essence}&finitura=${active.finish}`}
                className="btn-primary materials-cta"
              >
                Richiedi campioni
              </Link>
            </div>
          </div>

          <div className="materials-grid" role="listbox" aria-label="Campionature disponibili">
            {filtered.map((sample) => (
              <button
                key={sample.id}
                type="button"
                role="option"
                aria-selected={active.id === sample.id}
                className={`materials-swatch wood-frame${active.id === sample.id ? ' materials-swatch--active' : ''}`}
                onClick={() => setActiveId(sample.id)}
              >
                <div className="materials-swatch-image">
                  <Image
                    src={sample.image}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover"
                    aria-hidden
                  />
                </div>
                <span className="materials-swatch-label">{sample.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )

}
