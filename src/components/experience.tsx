import { GlassCard, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "IT Support Analyst",
      company: "EMCO",
      location: "London, Ontario, Canada",
      period: "2024 May - 2024 August",
      description:
        "I was responsible for providing technical support to the employees of EMCO. I was also responsible for the maintenance of the company's network and hardware.",
      technologies: ["Windows", "Linux", "Network", "Hardware", "ITIL", "SCCM", "Active Directory", "Entra ID"],
    },
    {
      title: "IT Support Assistant",
      company: "Ministry of Solicitor General",
      location: "London, Ontario, Canada",
      period: "2023 Jan - 2023 May",
      description:
        "I was responsible for providing technical support to the employees of the Ministry of Solicitor General. I was also responsible for the maintenance of the company's network and hardware.",
      technologies: ["Windows", "AV", "Network", "Hardware", "SCCM", "Active Directory", "Entra ID", "Office 365"],
    },
    
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((experience, index) => (
            <GlassCard key={index}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{experience.company}</CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
