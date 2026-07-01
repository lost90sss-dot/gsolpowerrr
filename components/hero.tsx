'use client'

import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/island%20%281%29-MJPVSCi06hpCUu3tpC8jMF5FbpDqQS.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />



      {/* Center Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 max-w-4xl text-balance">
          Capturing <span className="text-primary">Brilliance</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl">
          Lighting the Way to Sustainability
        </p>

        {/* Scroll Down Button */}
        <button
          onClick={scrollToNext}
          className="animate-bounce text-primary hover:text-primary/80 transition"
          aria-label="Scroll down"
        >
          <ChevronDown size={40} />
        </button>
      </div>
    </section>
  )
}
