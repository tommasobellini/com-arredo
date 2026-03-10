'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { title: 'Tavoli Minimalisti', category: 'Living', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800' },
  { title: 'Infilaggi a Coda di Rondine', category: 'Tecnica', img: 'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=800' },
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

        <motion.div 
          className="grid-portfolio"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="portfolio-item group cursor-pointer"
            >
              <div className="relative w-full h-full min-h-[400px]">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 md:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                
                {/* Text Area - Solid Glassmorphism Box */}
                <div className="absolute left-6 bottom-6 right-6 p-6 bg-black/70 backdrop-blur-md rounded-2xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 translate-y-4 md:group-hover:translate-y-0">
                   <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">{project.category}</p>
                   <h3 className="text-2xl font-black text-white leading-tight whitespace-nowrap overflow-hidden text-ellipsis">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
