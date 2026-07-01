import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { GithubIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { projects, otherWork } from "@/content/projects";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const [lead, ...rest] = featured;

  return (
    <Section id="work">
      <SectionHeading
        eyebrow="02 / Selected work"
        title="Independent AI projects"
      />

      <div className="space-y-6">
        {lead && <ProjectCard project={lead} />}
        {rest.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        )}
      </div>

      <details className="group mt-12 rounded-lg border border-border">
        <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
          <span>
            Other work
            <span className="ml-2 font-normal text-muted-foreground">
              earlier full-stack &amp; data projects
            </span>
          </span>
          <ChevronDown className="size-4 text-muted-foreground transition-transform group-open:rotate-180" />
        </summary>
        <div className="grid gap-px border-t border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {otherWork.map((p) => (
            <div key={p.name} className="bg-card p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-foreground">{p.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} live`}
                      className="transition-colors hover:text-accent"
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}
                  {p.links.code && (
                    <a
                      href={p.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} code`}
                      className="transition-colors hover:text-accent"
                    >
                      <GithubIcon className="size-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </details>
    </Section>
  );
}
