'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background/80 border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-center">
        <Link href="/" className="flex items-center hover:opacity-80 transition">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gsol_logo-O1SdEguNPuQkGNZNrS2Zs50wn89JNJ.png"
            alt="GSOL Logo"
            width={50}
            height={50}
            className="w-12 h-12"
            priority
          />
        </Link>
      </div>
    </header>
  )
}
