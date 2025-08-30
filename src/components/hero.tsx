"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useCallback, useMemo } from "react";

const NAME = "Prajjwal Devkota";
const TYPING_SPEED = 80; // ms per character

export function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate consistent particle data to prevent hydration errors
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 4}s`
    }));
  }, []);

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
      icon: <Github className="h-4 w-4" />,
      label: "GitHub"
    },
    {
      href: "https://linkedin.com/in/prajjwaldevkota",
      icon: <Linkedin className="h-4 w-4" />,
      label: "LinkedIn"
    },
    {
      href: "mailto:devkota.prj@gmail.com",
      icon: <Mail className="h-4 w-4" />,
      label: "Email"
    }
  ], []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`} style={{ animationDelay: '0.5s' }} />
        <div className={`absolute bottom-20 right-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl transition-all duration-1000 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`} style={{ animationDelay: '1s' }} />
        <div className={`absolute top-1/2 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl transition-all duration-1000 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`} style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-float-slow ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className={`relative w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`} style={{ animationDelay: '0.2s' }}>
            <Image
              src="/memoji.png"
              alt="Profile"
              fill
              className="object-cover"
              priority
              sizes="112px"
            />
            {/* Floating animation */}
            <div className="absolute inset-0 animate-float" />
            
            {/* Sparkle effect */}
            <div className="absolute -top-2 -right-2 animate-ping">
              <Sparkles className="h-4 w-4 text-emerald-400" />
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.4s' }}>
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Welcome to my portfolio
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I&apos;m{" "}
                <span className="inline-block bg-gradient-to-r from-blue-400 via-emerald-600 to-teal-600 bg-clip-text text-transparent relative">
                  {displayed}
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-600 to-teal-600 blur-xl opacity-20 -z-10" />
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Full Stack Developer crafting exceptional digital experiences
                with modern technologies
              </p>
            </div>
          </div>

          <div className={`flex justify-center space-x-2 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.6s' }}>
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
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent hover:scale-110 transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{link.icon}</span>
                </Button>
              </a>
            ))}
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="rounded-full px-8 hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">View My Work</span>
            </Button>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 bg-transparent hover:scale-105 transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download className="h-4 w-4 mr-2 relative z-10" />
                <span className="relative z-10">Resume</span>
              </Button>
            </a>
          </div>

          <div className={`pt-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '1s' }}>
            <div className="animate-bounce">
              <ArrowDown className="h-5 w-5 mx-auto text-muted-foreground/60" />
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(20px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
        .animate-blink {
          animation: blink 1s steps(1) infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
