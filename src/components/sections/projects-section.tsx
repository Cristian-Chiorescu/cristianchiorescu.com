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

export default function ProjectsSection() {
  return (
    <section id="Projects" className="flex flex-col max-w-7xl w-full gap-8">
      <div className="flex justify-between">
        <h2 className="font-heading text-3xl font-bold">Selected Projects</h2>
        <Link href="#Projects">More on GitHub →</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsList.map((project) => {
          return (
            <Card key={project.title} className="justify-between">
              <div className="flex gap-4 px-4">
                {project.tags.map((tag) => {
                  return (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  );
                })}
              </div>
              <CardContent className="flex flex-col gap-4">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-md">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <CardAction>
                  <Link href="#Projects">Live</Link> <span>• </span>
                  <Link href="#Projects">Code</Link>
                </CardAction>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
