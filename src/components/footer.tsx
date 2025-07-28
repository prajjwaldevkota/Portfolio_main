import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-white/20 bg-white/10 backdrop-blur-md rounded-t-2xl shadow-lg dark:bg-black/20 dark:border-white/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Mail className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-center space-y-2">
            <p className="text-muted-foreground flex items-center justify-center gap-1">
              © 2025 Prajjwal Devkota.            </p>
            <p className="text-sm text-muted-foreground/60">Built with Next.js, Tailwind CSS, and shadcn/ui</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
