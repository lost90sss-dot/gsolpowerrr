'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  containerClassName?: string
}

export default function LazyVideo({ src, containerClassName, className, ...props }: LazyVideoProps) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' } // Start loading a bit before it enters the viewport
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={videoRef} className={containerClassName}>
      {isIntersecting && (
        <video className={className} {...props}>
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  )
}
