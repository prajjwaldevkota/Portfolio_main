"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

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
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-blue-500/5 animate-pulse opacity-50" />
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link 
            href="/" 
            className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent hover:from-violet-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 dark:from-violet-400 dark:to-blue-400"
          >
            Prajjwal Devkota
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300",
                  "hover:text-foreground hover:bg-white/10 hover:backdrop-blur-sm rounded-lg",
                  "dark:hover:bg-white/5 dark:hover:border-white/10",
                  "hover:shadow-lg hover:shadow-violet-500/10 hover:scale-105",
                  "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-violet-500/10 before:to-blue-500/10",
                  "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
                  "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5",
                  "after:bg-gradient-to-r after:from-violet-500 after:to-blue-500 after:transition-all after:duration-300",
                  "hover:after:w-3/4"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
            <div className="ml-6 p-1 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="p-0.5 rounded-md bg-white/5 backdrop-blur-sm border border-white/10 dark:bg-white/5 dark:border-white/10">
              <div className="w-8 h-8 flex items-center justify-center">
                <ThemeToggle />
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "relative w-8 h-8 p-0 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20",
                "dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10",
                "transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/20",
                "dark:hover:shadow-violet-500/10",
                isMenuOpen && "rotate-90"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300" />
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
          isMenuOpen ? "max-h-80 opacity-100 pb-4" : "max-h-0 opacity-0"
        )}>
          <nav className="mx-2 mt-2 border-t border-white/10 bg-background/30 backdrop-blur-md rounded-b-xl dark:border-white/10 dark:bg-black/30">
            <div className="space-y-1 p-3">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300",
                    "hover:text-foreground hover:bg-white/10 rounded-lg hover:backdrop-blur-sm",
                    "dark:hover:bg-white/5 dark:hover:border-white/10",
                    "hover:shadow-md hover:shadow-violet-500/10 hover:translate-x-1",
                    "border-l-2 border-transparent hover:border-violet-500/50",
                    "active:scale-95 active:bg-white/15 dark:active:bg-white/10"
                  )}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
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
        
        /* Ensure theme toggle icons are properly sized on mobile */
        @media (max-width: 768px) {
          :global(.theme-toggle button) {
            width: 32px !important;
            height: 32px !important;
            padding: 6px !important;
          }
          
          :global(.theme-toggle svg) {
            width: 16px !important;
            height: 16px !important;
          }
        }
      `}</style>
    </header>
  )
}