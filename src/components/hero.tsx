"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useCallback, useMemo } from "react";

const NAME = "Prajjwal Devkota";
const TYPING_SPEED = 80; // ms per character

export function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

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
    return cleanup;
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
            <Image
              src="/memoji.png"
              alt="Profile"
              fill
              className="object-cover"
              priority
              sizes="112px"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I&apos;m{" "}
                <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-900 to-pink-900 bg-clip-text text-transparent">
                  {displayed}
                  <span className={`animate-blink ${isTypingComplete ? 'opacity-0' : 'opacity-100'}`}>|</span>
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Full Stack Developer crafting exceptional digital experiences
                with modern technologies
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent hover:scale-110 transition-transform duration-200"
                >
                  {link.icon}
                </Button>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 hover:scale-105 transition-transform duration-200">
              View My Work
            </Button>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 bg-transparent hover:scale-105 transition-transform duration-200"
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </a>
          </div>

          <div className="pt-8">
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
        .animate-blink {
          animation: blink 1s steps(1) infinite;
        }
      `}</style>
    </section>
  );
}
