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

export default function HeroSection() {
  const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "Node.js",
    "TanStack Query",
    "Zod",
  ];

  return (
    <section
      id="Home"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 w-full max-w-7xl min-h-dvh items-center py-[15dvh] mt-[5dvh]"
    >
      <div className="flex flex-col gap-4 md:gap-10 text-center items-center md:text-left md:items-start">
        <h1 className="text-3xl md:text-5xl font-heading font-bold">
          Web Developer focused on
          <span className="text-primary"> Next.js React & TypeScript</span>
        </h1>
        <p className="text-sm md:text-md">
          I build fast, accessible, and elegant user interfaces. Recently: a
          recipe discovery platform, a live market dashboard, and a Riot API
          tool.
        </p>
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
          {techStack.map((tech) => {
            return (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            );
          })}
        </div>
        <div className="flex gap-4">
          <Link href="#Projects">
            <Button variant="default" className="text-sm md:text-lg p-3 md:p-6">
              View Projects
            </Button>
          </Link>
          <Link href="#Contact">
            <Button variant="outline" className="text-sm md:text-lg p-3 md:p-6">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
      <div className="md:p-10">
        <Card className="items-center text-center md:p-10">
          <CardDescription className="tex-sm md:text-lg">
            Featured
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
            <Button variant="default">Live</Button>
            <Button variant="outline">Code</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
