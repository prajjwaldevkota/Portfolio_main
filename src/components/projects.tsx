import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Flight Price Tracker",
    description:
      "Compare flight prices across providers, with airport search, multi-passenger support, and cached results.",
    technologies: "React · FastAPI · Python · GCP",
    liveUrl: "https://flight-pricetracker.vercel.app/",
    githubUrl: "https://github.com/prajjwaldevkota/FlightTracker",
  },
  {
    title: "Express Entry Tracker",
    description:
      "Explore Canada’s Express Entry draws through filters, historical trends, and English and French views.",
    technologies: "React · Node.js · REST API · i18n",
    liveUrl: "https://expressentrytracker.netlify.app",
    githubUrl: "https://github.com/prajjwaldevkota/ExpressEntryTracker",
  },
  {
    title: "Video to Audio Converter",
    description:
      "A Docker-based app that extracts and converts audio from YouTube videos using yt-dlp and FFmpeg.",
    technologies: "Flask · FFmpeg · Docker · yt-dlp",
    liveUrl: null,
    githubUrl: "https://github.com/prajjwaldevkota/Video2AudioConverter",
  },
]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="section">
      <div className="section-heading-row">
        <h2 id="projects-heading" className="section-heading">Selected work</h2>
        <a href="https://github.com/prajjwaldevkota" target="_blank" rel="noopener noreferrer" className="text-link text-sm">
          GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
      <div className="divide-y divide-divider">
        {projects.map((project, index) => (
          <article key={project.title} className="grid grid-cols-[24px_1fr] gap-4 sm:gap-6 py-7 first:pt-0 last:pb-0">
            <span aria-hidden="true" className="font-mono text-xs text-muted pt-1.5">0{index + 1}</span>
            <div>
              <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-7 text-body">{project.description}</p>
              <p className="mt-3 text-xs leading-6 text-muted">{project.technologies}</p>
              <div className="mt-4 flex gap-5 text-sm">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`Visit ${project.title}`}>
                    Visit site <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`View ${project.title} source code`}>
                  Source <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
