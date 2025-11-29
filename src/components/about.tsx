import { GlassCard, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Learn more about my background, interests, and what drives me as a passionate technologist and developer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&apos;m Prajjwal, a full-stack developer and IT systems analyst with a solid foundation in both backend infrastructure and frontend development. My experience spans across enterprise-level service desk support and hands-on web development projects.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&apos;ve worked with teams at EMCO Corporation and the Ministry of the Solicitor General, where I provided end-to-end IT support, automated system tasks with PowerShell, and helped streamline device lifecycle management with tools like Intune, SCCM, and Autopilot.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                On the dev side, I&apos;m always building. From React-based dashboards to automation scripts, my GitHub showcases a variety of personal and collaborative projects reflecting my growth and curiosity in full-stack development and cloud infrastructure.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&apos;m currently pursuing my advanced diploma in Computer Programming and Analysis and actively expanding my skillset through certifications in cybersecurity, networking, and cloud computing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <GlassCard className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center relative z-10">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground font-medium">Projects on GitHub</div>
                </CardContent>
              </GlassCard>
              <GlassCard className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center relative z-10">
                  <div className="text-4xl font-bold text-secondary-foreground mb-2">1</div>
                  <div className="text-sm text-muted-foreground font-medium">Year of Experience</div>
                </CardContent>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
