import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="site-header page-width">
      <a href="#top" className="wordmark" aria-label="Prajjwal Devkota, back to top">
        prajjwal<span className="text-muted">.dev</span>
      </a>
      <nav aria-label="Main navigation" className="flex items-center gap-5 sm:gap-7 text-sm">
        <a href="#projects">Work</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <ThemeToggle />
      </nav>
    </header>
  )
}
