import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { projectsList } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { FadeIn } from "../ui/fade-in";

export default function ProjectsSection() {
  return (
    <FadeIn delay={0.2}>
      <section id="Projects" className="flex flex-col w-full gap-8">
        <div className="flex justify-between items-center">
          <h2 className="font-heading text-3xl font-bold">Selected Projects</h2>

          <FadeIn delay={2.3}>
            <Link
              href="https://github.com/Cristian-Chiorescu"
              className="text-sm text-right underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              More on GitHub →
            </Link>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((project, i) => {
            return (
              <FadeIn key={project.title} delay={i * 0.5 + 0.5}>
                <Card className="group pt-0 overflow-hidden h-full gap-2 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-7/4">
                    <Image
                      src={project.imageLink}
                      alt={project.title}
                      fill
                      className="object-cover brightness-80 group-hover:brightness-100 transition"
                    ></Image>
                  </div>
                  <div className="flex gap-2 px-6 py-2">
                    {project.tags.map((tag) => {
                      return (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      );
                    })}
                  </div>
                  <CardContent className="flex flex-col gap-2 flex-1">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <CardAction className="text-sm">
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        Live Site
                      </Link>{" "}
                      <span>• </span>
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        View Code
                      </Link>
                    </CardAction>
                  </CardFooter>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </FadeIn>
  );
}
