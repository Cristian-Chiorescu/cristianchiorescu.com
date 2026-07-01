import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Built with Next.js &
          Tailwind.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex size-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex size-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="inline-flex size-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
