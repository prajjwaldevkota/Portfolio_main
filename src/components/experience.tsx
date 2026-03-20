"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Help Desk Analyst",
    company: "Bond Brand Loyalty",
    location: "Toronto, Ontario",
    type: "Full-Time",
    period: "Sept 2025 - Present",
    description:
      "Providing technical support and resolving issues for internal employees, managing tickets, and ensuring smooth IT operations.",
    highlights: [
      "Providing Tier 1/2 technical support across the organization",
      "Managing and resolving IT service tickets efficiently using Ivanti",
    ],
  },
  {
    title: "IT Support Analyst",
    company: "EMCO Corporation",
    location: "London, Ontario",
    type: "Co-op",
    period: "May 2024 - Aug 2024",
    description:
      "Provided Tier 1/2 technical support to a hybrid workforce of 500+ users across multiple branches. Diagnosed and resolved hardware, software, and connectivity issues in a Microsoft 365 environment.",
    highlights: [
      "Deployed and configured devices using Intune and Autopilot",
      "Automated compliance tasks with PowerShell scripting",
      "Created and maintained internal SOPs and knowledge base articles",
    ],
  },
  {
    title: "IT Support Assistant",
    company: "Ministry of Solicitor General",
    location: "London, Ontario",
    type: "Co-op",
    period: "Jan 2023 - May 2023",
    description:
      "Delivered frontline technical support to staff across multiple departments, resolving day-to-day issues including user access, printer troubleshooting, and system imaging.",
    highlights: [
      "Managed device setup and imaging, account provisioning via Active Directory",
      "Supported patching and security enforcement through Intune",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label mb-12">EXPERIENCE</p>

        <div className="max-w-3xl relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-800" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-zinc-700 bg-black z-10" />

                {/* Card */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-4">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100">{exp.title}</h3>
                      <p className="text-sm text-zinc-400">
                        {exp.company}
                        <span className="text-zinc-600 mx-2">·</span>
                        {exp.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-500 border border-zinc-700/50">
                        {exp.type}
                      </span>
                      <span className="text-sm text-zinc-500 font-mono">{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {exp.highlights.map((highlight, hi) => (
                      <li key={hi} className="flex items-start gap-2 text-sm text-zinc-400">
                        <span className="text-zinc-600 mt-1.5 shrink-0">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
