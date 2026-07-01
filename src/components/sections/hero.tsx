import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 -z-10"
      />
      <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24">
        <div className="max-w-3xl animate-fade-up">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-sm text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {site.availability}
          </span>

          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 font-mono text-lg text-accent sm:text-xl">
            {site.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {site.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className={buttonVariants({ variant: "primary" })}>
              View work
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              <FileText className="size-4" />
              Résumé
            </a>
            <a href="#contact" className={buttonVariants({ variant: "ghost" })}>
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <SocialLink href={site.socials.github} label="GitHub">
              <GithubIcon className="size-5" />
            </SocialLink>
            <SocialLink href={site.socials.linkedin} label="LinkedIn">
              <LinkedinIcon className="size-5" />
            </SocialLink>
            <SocialLink href={`mailto:${site.email}`} label="Email">
              <Mail className="size-5" />
            </SocialLink>
            <span className="text-sm text-muted-foreground/70">
              {site.location}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn("transition-colors hover:text-foreground")}
    >
      {children}
    </a>
  );
}
