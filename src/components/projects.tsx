"use client"
import { GlassCard, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ExternalLink, Github, Search, Filter, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all")
  const [showFilters, setShowFilters] = useState(false)

  const projects = [
    {
      title: "Flight Price Tracker",
      description:
        "A full-stack web application that aggregates and compares flight prices from multiple providers in real-time. Built with React 19, FastAPI, and integrated with Amadeus and Kiwi APIs, the app features intelligent airport autocomplete, multi-passenger support, and responsive design with dark/light mode. The backend implements async processing, intelligent caching, and rate limiting for optimal performance.",
      image: "/flighttracker.svg",
      technologies: ["React", "Tailwind", "FastAPI", "Python", "Amadeus API", "RapidAPI", "Google Cloud Platform", "Vercel"],
      liveUrl: "https://flight-pricetracker.vercel.app/",
      githubUrl: "https://github.com/prajjwaldevkota/FlightTracker",
      category: "Full-Stack",
      difficulty: "Advanced",
      featured: true
    },
    {
      title: "Express Entry Tracker",
      description:
        "Express Entry Tracker is a modern, responsive web application that displays historical data for Canada's Express Entry draws. This frontend project uses an external API to provide the latest Express Entry draw information, a complete draw history with filtering and sorting options, and trend visualizations and has localization for English and French.",
      image: "/expressentry.png",
      technologies: ["React", "Node.js", "Rest API", "Tailwind", "i18n", "Netlify"],
      liveUrl: "https://expressentrytracker.netlify.app",
      githubUrl: "https://github.com/prajjwaldevkota/ExpressEntryTracker",
      category: "Frontend",
      difficulty: "Intermediate",
      featured: true
    },
    {
      title: "Youtube Video to Audio Converter",
      description: "A dockerized web application that allows users to convert Youtube videos to audio using the YT-DLP along with FFMPEG for audio processing and conversion to higher format.",
      image: "/youtube.svg",
      technologies: ["Vite", "JavaScript", "Tailwind", "FFmepg", "YT-DLP", "Docker", "Flask"],
      liveUrl: "https://github.com/prajjwaldevkota/Video2AudioConverter",
      githubUrl: "https://github.com/prajjwaldevkota/Video2AudioConverter",
      category: "Backend",
      difficulty: "Intermediate",
      featured: false
    },
  ]

  const categories = ["all", ...Array.from(new Set(projects.map(p => p.category)))]
  const difficulties = ["all", ...Array.from(new Set(projects.map(p => p.difficulty)))]

  // Filter projects based on search and filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === "all" || project.difficulty === selectedDifficulty

      return matchesSearch && matchesCategory && matchesDifficulty
    })
  }, [searchTerm, selectedCategory, selectedDifficulty])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedDifficulty("all")
  }

  const hasActiveFilters = searchTerm || selectedCategory !== "all" || selectedDifficulty !== "all"

  return (
    <section id="projects" className="py-24 bg-secondary/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search projects by name, description, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg rounded-xl border-2 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-200 bg-background/50 backdrop-blur-sm"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 rounded-xl"
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
                Clear All
              </Button>
            )}
          </div>

          {/* Filter Options */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-center gap-4 p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Category:</span>
                    <div className="flex gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                          className="rounded-full text-xs capitalize"
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Difficulty:</span>
                    <div className="flex gap-2">
                      {difficulties.map((difficulty) => (
                        <Button
                          key={difficulty}
                          variant={selectedDifficulty === difficulty ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedDifficulty(difficulty)}
                          className="rounded-full text-xs capitalize"
                        >
                          {difficulty}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-card border border-zinc-200 dark:border-white/10 rounded-xl overflow-hidden hover:border-zinc-300 dark:hover:border-white/20 transition-colors duration-300"
            >
              {/* Image Area */}
              <div className="aspect-video relative overflow-hidden bg-secondary/20">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="rounded-full bg-white text-black hover:bg-white/90"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full border-white/20 text-white hover:bg-white/10"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    aria-label={`View source code of ${project.title}`}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tag) => ( // Changed from project.tags to project.technologies
                    <Badge key={tag} variant="secondary" className="bg-secondary/50 text-xs font-normal text-muted-foreground border-0">
                      {tag}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && ( // Changed from project.tags to project.technologies
                    <Badge variant="secondary" className="bg-secondary/50 text-xs font-normal text-muted-foreground border-0">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
          <Button
            variant="link"
            onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}
            className="mt-2 text-foreground"
          >
            Clear filters
          </Button>
        </div>
      )}
    </section>
  )
}
