import Header from '@/components/header'
import Hero from '@/components/hero'
import EnergyTabs from '@/components/energy-tabs'
import dynamic from 'next/dynamic'

const ProductShowcase = dynamic(() => import('@/components/product-showcase'), { ssr: true })
const WindEnergy = dynamic(() => import('@/components/wind-energy'), { ssr: true })
const HydroEnergy = dynamic(() => import('@/components/hydro-energy'), { ssr: true })
const GeothermalEnergy = dynamic(() => import('@/components/geothermal-energy'), { ssr: true })
const About = dynamic(() => import('@/components/about'), { ssr: true })
const Team = dynamic(() => import('@/components/team'), { ssr: true })
const Footer = dynamic(() => import('@/components/footer'), { ssr: true })

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <EnergyTabs />
      <ProductShowcase />
      <WindEnergy />
      <HydroEnergy />
      <GeothermalEnergy />
      <About />
      <Team />
      <Footer />
    </main>
  )
}
