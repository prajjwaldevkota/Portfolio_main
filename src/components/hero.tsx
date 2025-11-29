"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

const NAME = "Prajjwal Devkota";
const TYPING_SPEED = 80; // ms per character

export function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const startTyping = useCallback(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(NAME.slice(0, i + 1));
      i++;
      if (i === NAME.length) {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, TYPING_SPEED);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanup = startTyping();
    // Trigger loading animation after a short delay
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => {
      cleanup();
      clearTimeout(timer);
    };
  }, [startTyping]);

  const socialLinks = useMemo(() => [
    {
      href: "https://github.com/prajjwaldevkota",
      icon: <Github className="h-5 w-5" />,
      label: "GitHub"
    },
    {
      href: "https://linkedin.com/in/prajjwaldevkota",
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn"
    },
    {
      href: "mailto:devkota.prj@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      label: "Email"
    }
  ], []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 dark:bg-primary/10 rounded-[100%] blur-[100px] opacity-50 pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="text-center space-y-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-white/10 shadow-2xl"
          >
            <Image
              src="/memoji.png"
              alt="Profile"
              fill
              className="object-cover"
              priority
              sizes="96px"
            />
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-white/5 text-xs font-medium text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for new projects
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight font-display text-foreground">
                Hi, I&apos;m{" "}
                <span className="text-foreground">
                  {displayed}
                </span>
                <span className="animate-blink ml-1 text-primary/50 font-light">|</span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                Full Stack Developer crafting <span className="text-foreground font-medium">exceptional</span> digital experiences.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-base font-medium bg-foreground text-background hover:bg-foreground/90 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all duration-300"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="View my projects"
            >
              View Projects
            </Button>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full hover:bg-foreground/5"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        .font-display {
          font-family: var(--font-outfit), sans-serif;
        }
      `}</style>
    </section>
  );
}
