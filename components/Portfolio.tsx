'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { title: 'Tavoli Minimalisti', category: 'Living', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800' },
  { title: 'Infilaggi a Coda di Rondine', category: 'Tecnica', img: 'https://images.unsplash.com/photo-1610505365743-4b66b1e60741?q=80&w=800' },
  { title: 'Infissi su Misura', category: 'Strutture', img: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800' },
  { title: 'Dettagli in Rovere', category: 'Mobili', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-accent font-bold tracking-widest uppercase text-xs mb-4">Le Nostre Opere</p>
            <h2 className="text-5xl font-black">Portfolio Selezione</h2>
          </div>
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:block text-sm font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors"
          >
            VEDI TUTTI I PROGETTI
          </button>
        </div>

        <div className="grid-portfolio">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-card rounded-3xl overflow-hidden mb-6">
                <Image 
                  src={index === 1 ? 'https://images.unsplash.com/photo-1590732158864-282c611488c0?q=80&w=1200' : project.img} 
                  alt={project.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black-20 group-hover:bg-black-0 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <p className="text-xs font-bold uppercase tracking-widest mb-1">{project.category}</p>
                   <p className="text-xl font-bold">{project.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
