"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 300

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#contact", label: "Contact", id: "contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
        <div className="relative bg-white/70 dark:bg-black/60 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-full shadow-lg shadow-zinc-800/5 dark:shadow-black/20 p-2 flex items-center justify-between transition-all duration-300">
          {/* Inner glow for depth */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] pointer-events-none" />
          <Link
            href="/"
            className="relative z-10 px-4 font-bold tracking-tight text-zinc-900 dark:text-white hover:text-zinc-700 dark:hover:text-white/80 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Go to top"
          >
            PD
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 relative z-10">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                aria-label={`Navigate to ${item.label}`}
                className={cn(
                  "rounded-full px-4 text-sm font-medium transition-all duration-300",
                  activeSection === item.id
                    ? "bg-zinc-900 dark:bg-white/10 text-white shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5"
                )}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2 relative z-10">
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-full hover:bg-foreground/10 dark:hover:bg-white/10"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
            <div className="border-l border-border/40 dark:border-white/10 pl-2 ml-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden pt-24 px-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="lg"
                onClick={() => {
                  scrollToSection(item.href)
                  setIsMenuOpen(false)
                }}
                className={cn(
                  "w-full justify-start text-lg font-medium",
                  activeSection === item.id
                    ? "bg-white/10 text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}