import { GlassCard, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      title: "Backend",
      icon: <Code className="h-5 w-5" />,
      skills: ["Node.js", "Python", "Express", "FastAPI", "REST APIs"],
      gradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      title: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"],
      gradient: "from-purple-500/10 to-violet-500/10",
    },
    {
      title: "Mobile",
      icon: <Smartphone className="h-5 w-5" />,
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo"],
      gradient: "from-orange-500/10 to-red-500/10",
    },
  ]

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
            <GlassCard
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 bg-background/80 rounded-xl w-fit shadow-sm">{category.icon}</div>
                <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs font-medium">
                      {skill}
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
