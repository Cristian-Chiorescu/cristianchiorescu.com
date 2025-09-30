import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { projectsList } from "@/lib/utils";
import { Briefcase, MapPin, FileText } from "lucide-react";
import { FadeIn } from "../ui/fade-in";

export default function HeroSection() {
  const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "Node.js",
    "TanStack Query",
    "Zod",
    "Motion",
  ];

  return (
    <section id="Home" className="w-full min-h-dvh flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20">
        <div className="flex flex-col gap-4 md:gap-6 text-center items-center md:text-left md:items-start">
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tighter ">
              Web Developer focused on
              <span className="text-primary"> Next.js & TypeScript</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="text-xs md:text-sm text-muted-foreground max-w-prose">
              I build fast, accessible, and elegant user interfaces. Recently: a
              recipe discovery platform, a live market dashboard, and a Riot API
              tool.
            </p>
          </FadeIn>
          <div className="flex flex-wrap gap-1 md:gap-2 justify-center md:justify-start">
            {techStack.map((tech, i) => {
              return (
                <FadeIn key={tech} delay={i * 0.1 + 0.8}>
                  <Badge
                    variant="outline"
                    className="bg-card px-3 py-1 text-xs md:text-sm text-secondary-foreground"
                  >
                    {tech}
                  </Badge>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn delay={1.7}>
            <div className="flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-1 md:gap-y-2 pt-2 text-sm text-secondary-foreground justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <Briefcase size={16}></Briefcase>
                <span>Available for new projects</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16}></MapPin>
                <span>Calgary, AB</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText size={16}></FileText>
                <Link
                  href="/Cristian Chiorescu - Resume - Full Stack Engineer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  Resume
                </Link>
              </div>
            </div>
          </FadeIn>
          <div className="flex gap-4 pt-2">
            <FadeIn delay={2.2}>
              <Link href="#Projects">
                <Button
                  variant="default"
                  className="text-base md:text-lg p-4 md:p-6"
                >
                  View Projects
                </Button>
              </Link>
            </FadeIn>
            <FadeIn delay={2.6}>
              <Link href="#Contact">
                <Button
                  variant="outline"
                  className="text-base md:text-lg p-4 md:p-6 border-input"
                >
                  Get in Touch
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>

        <div className="hidden md:block">
          <FadeIn delay={3} className="h-full">
            <Card className="items-center text-center justify-center p-6 h-full bg-black/5 dark:bg-white/5 backdrop-blur-sm">
              <CardDescription className="text-sm md:text-lg">
                Featured Project
              </CardDescription>
              <CardContent className="flex flex-col items-center gap-2 md:gap-4">
                <CardTitle className="font-heading text-xl md:text-3xl">
                  {projectsList[0].title}
                </CardTitle>
                <CardDescription>
                  A polished, responsive Next.js app with shareable filters and
                  motion.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Link
                  href={projectsList[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default">Live</Button>
                </Link>
                <Link
                  href={projectsList[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-input">
                    Code
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
