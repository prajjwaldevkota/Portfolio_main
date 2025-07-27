import { GlassCard, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Learn more about my background, interests, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&apos;m a passionate full-stack developer with over 3 years of experience building scalable web
                applications. I specialize in React, Node.js, and modern web technologies, with a focus on creating
                intuitive user experiences.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open source projects,
                or sharing knowledge with the developer community through writing and mentoring.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <GlassCard>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
                </CardContent>
              </GlassCard>
              <GlassCard>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-foreground mb-1">3+</div>
                  <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                </CardContent>
              </GlassCard>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-1">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="About me"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
