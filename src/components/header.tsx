"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100
      
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
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-out",
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-black/10 dark:shadow-black/30" 
          : "bg-gradient-to-b from-background/20 to-transparent backdrop-blur-sm",
      )}
    >
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 animate-pulse opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          <Link 
            href="/" 
            className="text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent hover:from-emerald-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 dark:from-emerald-400 dark:to-blue-400"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Prajjwal Devkota
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300",
                  "hover:bg-white/10 hover:backdrop-blur-sm rounded-lg",
                  "dark:hover:bg-white/5 dark:hover:border-white/10",
                  "hover:shadow-lg hover:shadow-emerald-500/10 hover:scale-105",
                  "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-emerald-500/10 before:to-blue-500/10",
                  "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
                  "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5",
                  "after:bg-gradient-to-r after:from-emerald-500 after:to-blue-500 after:transition-all after:duration-300",
                  "hover:after:w-3/4",
                  activeSection === item.id 
                    ? "text-foreground bg-white/10 shadow-lg shadow-emerald-500/20 after:w-3/4" 
                    : "text-muted-foreground"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
              </Button>
            ))}
            <div className="ml-6 p-1 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle - Smaller and cleaner */}
            <div className="rounded-md bg-white/10 backdrop-blur-sm border border-white/20 dark:bg-white/5 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
              <ThemeToggle />
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "relative h-9 w-9 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20",
                "dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10",
                "transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20",
                "dark:hover:shadow-emerald-500/10",
                isMenuOpen && "rotate-90"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300" />
              {isMenuOpen ? (
                <X className="h-4 w-4 relative z-10 transition-transform duration-300" />
              ) : (
                <Menu className="h-4 w-4 relative z-10 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-out",
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}>
          <nav className="py-4 border-t border-white/10 bg-background/20 backdrop-blur-md rounded-b-xl mx-2 mb-2 dark:border-white/10 dark:bg-black/20">
            <div className="space-y-2 px-4">
              {navItems.map((item, index) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start px-4 py-3 text-sm font-medium transition-all duration-300",
                    "hover:bg-white/10 rounded-lg hover:backdrop-blur-sm",
                    "dark:hover:bg-white/5 dark:hover:border-white/10",
                    "hover:shadow-md hover:shadow-emerald-500/10 hover:translate-x-2",
                    "border-l-2 border-transparent hover:border-emerald-500/50",
                    activeSection === item.id 
                      ? "text-foreground bg-white/10 border-emerald-500/50 shadow-md shadow-emerald-500/10" 
                      : "text-muted-foreground"
                  )}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                  }}
                  onClick={() => {
                    scrollToSection(item.href)
                    setIsMenuOpen(false)
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <ChevronDown className="h-4 w-4 ml-auto animate-bounce" />
                  )}
                </Button>
              ))}
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  )
}