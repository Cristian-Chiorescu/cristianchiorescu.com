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
    <div id="Home" className="grid grid-cols-2 gap-20 w-full max-w-7xl">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-heading font-bold">
          Web Developer focused on Next.js React & TypeScript
        </h1>
        <p>
          I build fast, accessible, and elegant user interfaces. Recently: a
          recipe discovery platform, a live market dashboard, and a Riot API
          tool.
        </p>
        <div className="flex flex-wrap gap-4">
          {techStack.map((tech) => {
            return (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            );
          })}
        </div>
      </div>
      <div className="p-10">
        <Card className="items-center text-center p-10">
          <CardDescription className="text-lg">Featured</CardDescription>
          <CardContent className="flex flex-col items-center gap-4">
            <CardTitle className="font-heading text-3xl">
              BlushBowl - Recipe Discovery
            </CardTitle>
            <CardDescription>
              A polished, responsive Next.js app with shareable filters and
              motion.
            </CardDescription>
          </CardContent>
          <CardFooter className="flex gap-4">
            <Button>Live</Button>
            <Button>Code</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
