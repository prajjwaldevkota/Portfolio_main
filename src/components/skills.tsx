"use client"

import { motion } from "framer-motion"

const categories = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", color: "#3178C6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Python", color: "#3776AB" },
      { name: "PowerShell", color: "#5391FE" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#ffffff" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "GraphQL", color: "#E10098" },
    ],
  },
  {
    label: "Backend & Data",
    items: [
      { name: "Node.js", color: "#339933" },
      { name: "FastAPI", color: "#009688" },
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Redis", color: "#DC382D" },
    ],
  },
  {
    label: "DevOps & Cloud",
    items: [
      { name: "Docker", color: "#2496ED" },
      { name: "Git", color: "#F05032" },
      { name: "Azure AD", color: "#0078D4" },
      { name: "Cybersecurity", color: "#00D4AA" },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label mb-10">TECH STACK</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((cat) => (
            <div key={cat.label} className="space-y-4">
              <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {cat.label}
              </h3>
              <div className="space-y-2">
                {cat.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg border border-zinc-800/60 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-800/40 transition-colors duration-200"
                  >
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: tech.color }}
                    />
                    <span className="text-sm text-zinc-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
