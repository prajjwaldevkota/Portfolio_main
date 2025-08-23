"use client"
import { GlassCard, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ExternalLink, Github, Search, Filter, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef, useMemo } from "react"

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all")
  const [showFilters, setShowFilters] = useState(false)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

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
      technologies: ["React", "Node.js", "Rest API", "Tailwind", "i18n" ,"Netlify"],
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = projectRefs.current.findIndex(ref => ref === entry.target)
          if (entry.isIntersecting && index !== -1) {
            setVisibleProjects(prev => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    setHoveredProject(null)
  }

  const handleMouseEnter = (index: number) => {
    setHoveredProject(index)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedDifficulty("all")
  }

  const hasActiveFilters = searchTerm || selectedCategory !== "all" || selectedDifficulty !== "all"

  return (
    <section id="projects" className="py-24 bg-white dark:bg-transparent relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
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
              className="pl-10 pr-4 py-3 text-lg rounded-xl border-2 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-200"
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
          {showFilters && (
            <div className="flex flex-wrap items-center justify-center gap-4 p-4 bg-muted/30 rounded-xl border">
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
          )}

          {/* Results Count */}
          <div className="text-center text-muted-foreground">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                className={`transition-all duration-700 ease-out ${
                  visibleProjects.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <GlassCard
                  className="group overflow-hidden h-full cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`transition-transform duration-500 group-hover:scale-110 ${
                        project.image?.endsWith('.svg') ? 'object-contain' : 'object-cover'
                      }`}
                      loading={visibleProjects.includes(index) ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Project category and difficulty badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <Badge className="bg-primary/90 text-white border-0 text-xs font-medium">
                        {project.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs font-medium bg-background/80 backdrop-blur-sm">
                        {project.difficulty}
                      </Badge>
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white border-0 text-xs font-medium">
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Hover overlay with project info */}
                    <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-500 ${
                      hoveredProject === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="text-center text-white p-6">
                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                        <p className="text-sm text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                        <div className="flex gap-2 justify-center">
                          <Button size="sm" variant="secondary" className="rounded-full">
                            <ExternalLink className="h-3 w-3 mr-2" />
                            Live Demo
                          </Button>
                          <Button size="sm" variant="outline" className="rounded-full bg-transparent text-white border-white hover:bg-white hover:text-black">
                            <Github className="h-3 w-3 mr-2" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs hover:bg-primary/10 hover:border-primary/30 transition-colors duration-200">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className="flex-1 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105" 
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 rounded-full bg-transparent hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105" 
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-3 w-3 mr-2" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </GlassCard>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or filters
            </p>
            <Button onClick={clearFilters} variant="outline" className="rounded-full">
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
