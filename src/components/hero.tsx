import Image from "next/image"
import { ArrowDown, ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section aria-labelledby="intro-heading" className="hero">
      <div className="flex items-center gap-3 mb-8">
        <Image src="/memoji.png" alt="" width={48} height={48} priority className="rounded-full bg-surface" />
        <p className="text-sm text-body">Toronto, Canada</p>
      </div>
      <h1 id="intro-heading">Prajjwal Devkota<span className="text-muted">.</span></h1>
      <p className="mt-4 text-lg sm:text-xl text-secondary">Full-stack developer & IT systems analyst</p>
      <p className="mt-5 max-w-xl text-body leading-relaxed">
        I build web applications and keep IT systems running.
        Working with React, TypeScript, Python, and the occasional PowerShell script.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm">
        <a href="#projects" className="primary-link">
          View my work <ArrowDown size={15} aria-hidden="true" />
        </a>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-link">
          Résumé <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
