import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-md rounded-t-2xl shadow-lg dark:border-white/10 dark:bg-black/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex space-x-2">
            <a
              href="https://github.com/prajjwaldevkota"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 dark:hover:bg-primary/20"
              >
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/prajjwaldevkota"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 dark:hover:bg-primary/20"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
            <a
              href="mailto:devkota.prj@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 dark:hover:bg-primary/20"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-muted-foreground flex items-center justify-center gap-1">
              © 2025 Prajjwal Devkota.{" "}
            </p>
            <p className="text-sm text-muted-foreground/60">
              Built with Next.js, Tailwind CSS, and shadcn/ui
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
