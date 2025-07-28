"use client"
import { GlassCard, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Flight Price Tracker",
      description:
        "A full-stack web application that aggregates and compares flight prices from multiple providers in real-time. Built with React 19, FastAPI, and integrated with Amadeus and Kiwi APIs, the app features intelligent airport autocomplete, multi-passenger support, and responsive design with dark/light mode. The backend implements async processing, intelligent caching, and rate limiting for optimal performance.",
      image: "/flighttracker.svg",
      technologies: ["React", "Tailwind", "FastAPI", "Python", "Amadeus API", "RapidAPI", "Google Cloud Platform", "Vercel"],
      liveUrl: "https://flight-pricetracker.vercel.app/",
      githubUrl: "https://github.com/prajjwaldevkota/FlightTracker",
    },
    {
      title: "Express Entry Tracker",
      description:
        "Express Entry Tracker is a modern, responsive web application that displays historical data for Canada’s Express Entry draws. This frontend project uses an external API to provide the latest Express Entry draw information, a complete draw history with filtering and sorting options, and trend visualizations and has localization for English and French.",
      image: "/expressentry.png",
      technologies: ["React", "Node.js", "Rest API", "Tailwind", "i18n" ,"Netlify"],
      liveUrl: "https://expressentrytracker.netlify.app",
      githubUrl: "https://github.com/prajjwaldevkota/ExpressEntryTracker",
    },
    {
      title: "Youtube Video to Audio Converter",
      description: "A dockerized web application that allows users to convert Youtube videos to audio using the YT-DLP along with FFMPEG for audio processing and conversion to higher format.",
      image: "/youtube.svg",
      technologies: ["Vite", "JavaScript", "Tailwind", "FFmepg", "YT-DLP", "Docker", "Flask"],
      liveUrl: "https://github.com/prajjwaldevkota/Video2AudioConverter",
      githubUrl: "https://github.com/prajjwaldevkota/Video2AudioConverter",
    },
  ]

  return (
    <section id="projects" className="py-24 bg-white dark:bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <GlassCard
              key={index}
              className="group overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className={`transition-transform duration-300 group-hover:scale-105 ${
                    project.image?.endsWith('.svg') ? 'object-contain' : 'object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 rounded-full" onClick={() => window.open(project.liveUrl, '_blank')}>
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 rounded-full bg-transparent" onClick={() => window.open(project.githubUrl, '_blank')}>
                    <Github className="h-3 w-3 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
