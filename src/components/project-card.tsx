import { ArrowUpRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const inDev = project.status === "in-development";

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-lg border bg-card p-6 transition-colors md:p-8",
        inDev
          ? "border-dashed border-border hover:border-accent/50"
          : "border-border hover:border-accent/50",
      )}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="font-mono text-xs tracking-wide text-accent">
          {project.kicker}
        </p>
        {inDev ? (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            In development
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Live
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
        {project.name}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>

      <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-sm">
        {inDev ? (
          <span className="text-muted-foreground">Case study coming soon</span>
        ) : (
          <>
            {project.links?.live && (
              <CardLink href={project.links.live}>
                <ArrowUpRight className="size-4" />
                Live
              </CardLink>
            )}
            {project.links?.code && (
              <CardLink href={project.links.code}>
                <GithubIcon className="size-4" />
                Code
              </CardLink>
            )}
            {project.links?.caseStudy && (
              <CardLink href={project.links.caseStudy} external={false}>
                <FileText className="size-4" />
                Case study
              </CardLink>
            )}
          </>
        )}
      </div>
    </article>
  );
}

function CardLink({
  href,
  external = true,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-accent"
    >
      {children}
    </a>
  );
}
