"use client"
import { GlassCard, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Code, Database, Globe, Smartphone, Search, Filter, X } from "lucide-react"
import { useState, useEffect, useRef, useMemo } from "react"

export function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [showFilters, setShowFilters] = useState(false)
  const skillRefs = useRef<(HTMLDivElement | null)[]>([])

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "Vue.js", "Next.js", "HTML/CSS", "JavaScript", "Redux"],
      gradient: "from-blue-500/10 to-cyan-500/10",
      color: "text-blue-600 dark:text-blue-400",
      description: "Modern frontend technologies and frameworks"
    },
    {
      title: "Backend & Scripting",
      icon: <Code className="h-5 w-5" />,
      skills: ["Node.js", "Python", "PowerShell", "REST APIs", "Fast API", "GraphQL", "Express.js", "Django"],
      gradient: "from-green-500/10 to-emerald-500/10",
      color: "text-green-600 dark:text-green-400",
      description: "Server-side development and automation"
    },
    {
      title: "Database & Cloud",
      icon: <Database className="h-5 w-5" />,
      skills: ["PostgreSQL", "MySQL", "Intune", "Azure Active Directory", "SCCM", "Microsoft 365", "MongoDB", "Redis"],
      gradient: "from-purple-500/10 to-violet-500/10",
      color: "text-purple-600 dark:text-purple-400",
      description: "Data management and cloud infrastructure"
    },
    {
      title: "Systems & Tools",
      icon: <Smartphone className="h-5 w-5" />,
      skills: ["Windows 10/11", "macOS", "Virtual Desktops", "ServiceNow", "Jira", "Zoom", "Autopilot", "Intune", "SCCM", "Microsoft 365", "Docker", "Git"],
      gradient: "from-orange-500/10 to-red-500/10",
      color: "text-orange-600 dark:text-orange-400",
      description: "System administration and development tools"
    },
  ]

  const categories = ["all", ...skillCategories.map(cat => cat.title)]

  // Filter skills based on search and category
  const filteredCategories = useMemo(() => {
    return skillCategories.filter(category => {
      const matchesCategory = selectedCategory === "all" || category.title === selectedCategory
      const matchesSearch = searchTerm === "" ||
        category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))

      return matchesCategory && matchesSearch
    })
  }, [searchTerm, selectedCategory])

  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)
  const visibleSkillsCount = filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0)

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

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
  }

  const hasActiveFilters = searchTerm || selectedCategory !== "all"

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search skills or categories..."
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
              Categories
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
            <div className="flex flex-wrap items-center justify-center gap-4 p-4 bg-background rounded-xl border">
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
          )}

          {/* Results Count */}
          <div className="text-center text-muted-foreground">
            Showing {visibleSkillsCount} of {totalSkills} skills
          </div>
        </div>

        {/* Skills Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {filteredCategories.map((category, index) => (
              <div
                key={index}
                ref={(el) => {
                  skillRefs.current[index] = el;
                }}
                className={`transition-all duration-700 ease-out ${visibleSkills.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <GlassCard
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full group relative overflow-hidden cursor-pointer"
                >
                  <CardHeader className="text-center pb-4 relative z-10">
                    <div className={`mx-auto mb-3 p-3 bg-gradient-to-br ${category.gradient} rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <div className={category.color}>
                        {category.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{category.title}</CardTitle>
                    <p className="text-xs text-muted-foreground mt-2">{category.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0 relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs font-medium bg-white/50 hover:bg-white dark:bg-transparent dark:hover:bg-white/10 hover:scale-105 transition-all duration-200 hover:border-primary/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  {/* Enhanced hover state with subtle glow */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 rounded-lg`} />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg" />
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No skills found</h3>
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
