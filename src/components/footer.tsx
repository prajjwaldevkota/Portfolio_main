"use client"

import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <footer className="border-t border-zinc-800/50 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Prajjwal Devkota.
        </p>

        <div className="flex items-center gap-6 text-sm text-zinc-600">
          <a href="#about" className="hover:text-zinc-300 transition-colors">About</a>
          <a href="#projects" className="hover:text-zinc-300 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-zinc-300 transition-colors">Contact</a>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  )
}
