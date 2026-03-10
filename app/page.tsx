'use client'

import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Preventivo from '@/components/Preventivo'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Preventivo />
      <Footer />
    </main>
  )
}
