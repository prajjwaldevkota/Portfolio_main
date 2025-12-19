"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-zinc-400 via-zinc-500 to-zinc-600 dark:from-zinc-500 dark:via-zinc-400 dark:to-zinc-300 transition-all duration-150 ease-out shadow-lg"
        style={{ width: `${scrollProgress}%` }}
      />
      {/* Glow effect */}
      <div
        className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-zinc-500 dark:from-zinc-400 to-transparent opacity-60 blur-sm"
        style={{
          transform: `translateX(${scrollProgress - 100}%)`,
          transition: 'transform 150ms ease-out'
        }}
      />
    </div>
  )
}
