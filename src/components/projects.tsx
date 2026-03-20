"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Flight Price Tracker",
    description:
      "A full-stack web app that aggregates and compares flight prices from multiple providers in real-time. Features intelligent airport autocomplete, multi-passenger support, and async processing with caching.",
    image: "/flighttracker.svg",
    technologies: ["React", "FastAPI", "Python", "Tailwind", "GCP"],
    liveUrl: "https://flight-pricetracker.vercel.app/",
    githubUrl: "https://github.com/prajjwaldevkota/FlightTracker",
  },
  {
    title: "Express Entry Tracker",
    description:
      "A modern web application displaying historical data for Canada's Express Entry draws with filtering, sorting, trend visualizations, and English/French localization.",
    image: "/expressentry.png",
    technologies: ["React", "Node.js", "REST API", "Tailwind", "i18n"],
    liveUrl: "https://expressentrytracker.netlify.app",
    githubUrl: "https://github.com/prajjwaldevkota/ExpressEntryTracker",
  },
  {
    title: "YouTube Video to Audio Converter",
    description:
      "A dockerized web application for converting YouTube videos to audio using YT-DLP and FFMPEG for audio processing and format conversion.",
    image: "/youtube.svg",
    technologies: ["Vite", "Flask", "FFmpeg", "Docker", "YT-DLP"],
    liveUrl: "https://github.com/prajjwaldevkota/Video2AudioConverter",
    githubUrl: "https://github.com/prajjwaldevkota/Video2AudioConverter",
  },
]

export function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label mb-12">FEATURED PROJECTS</p>

        {/* Featured Project — Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="rounded-xl border border-zinc-800 bg-zinc-900/30 overflow-hidden hover:border-zinc-700 transition-colors duration-300 mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="aspect-video md:aspect-auto relative overflow-hidden bg-zinc-900">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col justify-center space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-zinc-100">{featured.title}</h3>
                <div className="flex items-center gap-2">
                  {featured.githubUrl && (
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-zinc-500 hover:text-zinc-200 transition-colors"
                      aria-label={`${featured.title} GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {featured.liveUrl && (
                    <a
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-zinc-500 hover:text-zinc-200 transition-colors"
                      aria-label={`${featured.title} Live`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-zinc-500 leading-relaxed">
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {featured.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Remaining Projects — 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/30 overflow-hidden hover:border-zinc-700 transition-colors duration-300"
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-zinc-500 hover:text-zinc-200 transition-colors"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-zinc-500 hover:text-zinc-200 transition-colors"
                        aria-label={`${project.title} Live`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
