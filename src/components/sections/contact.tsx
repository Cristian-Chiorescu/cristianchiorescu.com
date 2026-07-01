import { ArrowUpRight, Mail } from "lucide-react";
import { Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { CopyEmail } from "@/components/copy-email";
import { site } from "@/content/site";

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 font-mono text-sm font-medium tracking-wide text-accent">
          04 / Contact
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Let&apos;s build something
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          I&apos;m looking for forward-deployed / AI engineering roles where I
          can build agentic systems and help teams adopt them. If that sounds
          like your team, I&apos;d love to talk.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${site.email}`}
            className={buttonVariants({ variant: "primary" })}
          >
            <Mail className="size-4" />
            {site.email}
          </a>
          <CopyEmail email={site.email} />
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-sm">
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="size-4" />
            LinkedIn
            <ArrowUpRight className="size-3.5" />
          </a>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            GitHub
            <ArrowUpRight className="size-3.5" />
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            Résumé
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </Section>
  );
}
