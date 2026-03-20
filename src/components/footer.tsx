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

<<<<<<< HEAD
        <div className="flex items-center gap-6 text-sm text-zinc-600">
          <a href="#about" className="hover:text-zinc-300 transition-colors">About</a>
          <a href="#projects" className="hover:text-zinc-300 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-zinc-300 transition-colors">Contact</a>
=======
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center space-y-12">
          {/* Main content */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Let&apos;s Connect
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 justify-center">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl ${link.color}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.icon}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Navigation</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#about" className="block hover:text-primary transition-colors duration-200">About</a>
                <a href="#skills" className="block hover:text-primary transition-colors duration-200">Skills</a>
                <a href="#projects" className="block hover:text-primary transition-colors duration-200">Projects</a>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Work</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#experience" className="block hover:text-primary transition-colors duration-200">Experience</a>
                <a href="#contact" className="block hover:text-primary transition-colors duration-200">Contact</a>
                <a href="/Resume.pdf" target="_blank" className="block hover:text-primary transition-colors duration-200 flex items-center justify-center gap-1">
                  Resume <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Projects</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="https://flight-pricetracker.vercel.app/" target="_blank" className="block hover:text-primary transition-colors duration-200">Flight Tracker</a>
                <a href="https://expressentrytracker.netlify.app" target="_blank" className="block hover:text-primary transition-colors duration-200">Express Entry</a>
                <a href="https://github.com/prajjwaldevkota" target="_blank" className="block hover:text-primary transition-colors duration-200">GitHub</a>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Tech Stack</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <span className="block">React & Next.js</span>
                <span className="block">TypeScript</span>
                <span className="block">Tailwind CSS</span>
                <span className="block">Node.js & Python</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-4 pt-8 border-t border-border/30 w-full">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © 2026 Prajjwal Devkota. All rights reserved.
            </p>
          </div>
>>>>>>> c95aa7bd11d869aa872e73c7aebbdd3ef0701eec
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
