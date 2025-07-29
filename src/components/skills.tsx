"use client"
import { GlassCard, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([])
  const skillRefs = useRef<(HTMLDivElement | null)[]>([])

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "Vue.js"],
      gradient: "from-blue-500/10 to-cyan-500/10",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Backend & Scripting",
      icon: <Code className="h-5 w-5" />,
      skills: ["Node.js", "Python", "PowerShell", "REST APIs", "Fast API", "GraphQL"],
      gradient: "from-green-500/10 to-emerald-500/10",
      color: "text-green-600 dark:text-green-400",
    },
    {
      title: "Database & Cloud",
      icon: <Database className="h-5 w-5" />,
      skills: ["PostgreSQL", "MySQL", "Intune", "Azure Active Directory", "SCCM", "Microsoft 365"],
      gradient: "from-purple-500/10 to-violet-500/10",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Systems & Tools",
      icon: <Smartphone className="h-5 w-5" />,
      skills: ["Windows 10/11", "macOS", "Virtual Desktops", "ServiceNow", "Jira", "Zoom", "Autopilot", "Intune", "SCCM", "Microsoft 365"],
      gradient: "from-orange-500/10 to-red-500/10",
      color: "text-orange-600 dark:text-orange-400",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = skillRefs.current.findIndex(ref => ref === entry.target)
          if (entry.isIntersecting && index !== -1) {
            setVisibleSkills(prev => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    skillRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])
  

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => {
                skillRefs.current[index] = el;
              }}
              className={`transition-all duration-700 ease-out ${
                visibleSkills.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <GlassCard
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full group"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-3 p-3 bg-gradient-to-br ${category.gradient} rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <div className={category.color}>
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs font-medium hover:scale-105 transition-transform duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
