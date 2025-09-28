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
            <Link key={project.title} href={project.url}>
              <Card className="pt-0 overflow-hidden h-full gap-2">
                <div className="relative aspect-7/4">
                  <Image
                    src={project.imageLink}
                    alt={project.title}
                    fill
                    className="object-cover"
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
                    <Link href="#Projects" suppressHydrationWarning>
                      Live
                    </Link>{" "}
                    <span>• </span>
                    <Link href="#Projects" suppressHydrationWarning>
                      Code
                    </Link>
                  </CardAction>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
