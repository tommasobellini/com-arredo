'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { productsData, ProductData } from './data'

export default function ProductDetailClient({ id }: { id: string }) {
  const data: ProductData = productsData[id] || productsData['cucina-artigianale']
  const type = id.split('-')[0].charAt(0).toUpperCase() + id.split('-')[0].slice(1)

  return (
    <div className="min-h-screen bg-antracite text-white pt-40 pb-24">
      <div className="container">

        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center gap-2 text-white-40 text-xs uppercase tracking-widest" aria-label="Breadcrumb">
          <Link href="/" className="hover-text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/portfolio" className="hover-text-white transition-colors">Portfolio</Link>
          <span>/</span>
          <span className="text-accent">{data.title}</span>
        </nav>

        <div className="grid grid-cols-1 grid-cols-2-md gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="wood-frame"
          >
            <div className="relative overflow-hidden" style={{ height: '600px' }}>
              <Image
                src={data.image}
                alt={`${data.title} — Com-Arredo falegnameria artigianale`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <span className="text-accent text-10px font-bold tracking-3em uppercase block mb-4">
                PRODUZIONE ARTIGIANALE
              </span>
              <h1 className="serif text-5xl leading-tight mb-2">
                {data.title}
              </h1>
              {type && (
                <span className="block text-xl text-accent mt-2 italic serif opacity-70">/ {type}</span>
              )}
            </div>

            <p className="text-white-60 text-lg leading-relaxed mb-12 max-w-xl">
              {data.description}
            </p>

            <div className="grid grid-cols-1 grid-cols-2-md gap-x-8 gap-y-6 mb-12">
              {data.features.map((feature: string) => (
                <div key={feature} className="flex items-center gap-4 border-l border-accent-30 pl-4 py-1">
                  <span className="font-bold text-10px tracking-widest uppercase text-white-80">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              <Link href="/#preventivo" className="btn-primary min-w-240">
                PREVENTIVO PERSONALIZZATO
              </Link>
              <button className="btn-secondary">
                DATI TECNICI
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
