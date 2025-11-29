"use client";
import { Github, Linkedin, Mail, Heart, ExternalLink, ArrowUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      href: "https://github.com/prajjwaldevkota",
      icon: <Github className="h-4 w-4" />,
      label: "GitHub",
      color: "hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900"
    },
    {
      href: "https://linkedin.com/in/prajjwaldevkota",
      icon: <Linkedin className="h-4 w-4" />,
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      href: "mailto:devkota.prj@gmail.com",
      icon: <Mail className="h-4 w-4" />,
      label: "Email",
      color: "hover:bg-red-500 hover:text-white"
    }
  ];

  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-md rounded-t-2xl shadow-lg dark:border-white/10 dark:bg-black/20 py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center space-y-12">
          {/* Main content */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Let&apos;s Connect
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 justify-center">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl ${link.color}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.icon}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Navigation</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#about" className="block hover:text-primary transition-colors duration-200">About</a>
                <a href="#skills" className="block hover:text-primary transition-colors duration-200">Skills</a>
                <a href="#projects" className="block hover:text-primary transition-colors duration-200">Projects</a>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Work</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#experience" className="block hover:text-primary transition-colors duration-200">Experience</a>
                <a href="#contact" className="block hover:text-primary transition-colors duration-200">Contact</a>
                <a href="/Resume.pdf" target="_blank" className="block hover:text-primary transition-colors duration-200 flex items-center justify-center gap-1">
                  Resume <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Projects</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="https://flight-pricetracker.vercel.app/" target="_blank" className="block hover:text-primary transition-colors duration-200">Flight Tracker</a>
                <a href="https://expressentrytracker.netlify.app" target="_blank" className="block hover:text-primary transition-colors duration-200">Express Entry</a>
                <a href="https://github.com/prajjwaldevkota" target="_blank" className="block hover:text-primary transition-colors duration-200">GitHub</a>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Tech Stack</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <span className="block">React & Next.js</span>
                <span className="block">TypeScript</span>
                <span className="block">Tailwind CSS</span>
                <span className="block">Node.js & Python</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-4 pt-8 border-t border-border/30 w-full">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © 2025 Prajjwal Devkota. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/60 flex items-center justify-center gap-2">
              Built with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> using Next.js, Tailwind CSS, and shadcn/ui
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className={`fixed bottom-8 right-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white ${
          showScrollTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </footer>
  );
}
