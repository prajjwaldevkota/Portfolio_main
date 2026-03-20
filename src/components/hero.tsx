"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const roles = ["Full-Stack Developer", "IT Systems Analyst", "Cloud Enthusiast", "Cybersecurity Enthusiast"]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="max-w-2xl space-y-8">
          {/* Avatar + Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-white/10">
              <Image
                src="/memoji.png"
                alt="Prajjwal Devkota"
                fill
                className="object-cover"
                priority
                sizes="64px"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                {/* <span className="text-sm text-zinc-400">Available for new opportunities</span> */}
              </div>
              <a
                href="mailto:devkota.prj@gmail.com"
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors font-mono"
              >
                devkota.prj@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Name & Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100">
              Prajjwal Devkota
            </h1>

            {/* Rotating role */}
            <div className="h-7 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg text-zinc-400 font-mono"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-base text-zinc-500 leading-relaxed max-w-xl">
              Building interactive web apps and managing IT infrastructure
              with TypeScript, React, Next.js, Python, and PowerShell.
              Focused on full-stack development and cloud infrastructure.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 text-sm font-medium text-zinc-300 rounded-lg hover:bg-white/5 hover:border-white/20 transition-all"
            >
              Contact
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 pt-2"
          >
            {[
              { href: "https://github.com/prajjwaldevkota", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/prajjwaldevkota", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:devkota.prj@gmail.com", icon: Mail, label: "Email" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2.5 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all duration-200"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
