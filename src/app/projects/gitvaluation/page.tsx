import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "gitvaluation — LLM-Powered Code & PR Analysis",
  description:
    "Case study: point it at a GitHub repo and it scores each contributor's impact by running merged-PR diffs through an LLM with JSON-mode structured output.",
};

const stack = [
  "Next.js (App Router)",
  "TypeScript",
  "Server Actions",
  "OpenAI API (JSON mode)",
  "GitHub REST API",
  "Tailwind CSS",
];

const architecture = [
  "A server action parses the repo URL and pulls recent merged PRs — with their diffs, additions, deletions, and changed-file counts — from the GitHub REST API.",
  "Commits are grouped by author and each diff is truncated to keep the prompt bounded before it's sent to the model.",
  "OpenAI runs in JSON mode against a fixed schema, scoring each contributor on confidence, complexity, and net code value, and assigning an archetype.",
  "The scores are aggregated per contributor and rendered as a ranked dashboard.",
];

const decisions = [
  {
    title: "JSON-mode structured output",
    body: "LLMs are unreliable at free-form JSON. Running the model in JSON mode against an explicit schema means the response parses deterministically — no brittle regex clean-up, and the UI can trust the shape of what comes back.",
  },
  {
    title: "Bounded prompts via diff truncation",
    body: "Real PRs can be enormous. Truncating each diff to a fixed budget keeps token cost and latency predictable while preserving the signal that actually drives the score.",
  },
  {
    title: "A keyless demo via mock mode",
    body: "Without API keys the app serves a realistic mock analysis, so the live demo works for anyone without spending tokens or requiring setup — a small decision that makes the project genuinely try-able.",
  },
];

export default function GitvaluationCaseStudy() {
  return (
    <article className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to work
        </Link>

        <header className="mt-8">
          <p className="font-mono text-sm text-accent">AI · Developer Tooling</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            gitvaluation
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Point it at any public GitHub repo; it pulls recent merged PRs, runs
            the diffs through an LLM with a structured-output prompt, and returns
            a per-contributor impact breakdown — a demo of GitHub API
            integration, prompt engineering, and JSON-mode structured output.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://gitvaluation.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "primary", size: "sm" })}
            >
              <ArrowUpRight className="size-4" />
              Live demo
            </a>
            <a
              href="https://github.com/Cristian-Chiorescu/gitvaluation"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <GithubIcon className="size-4" />
              Source
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </header>

        <div className="mt-12 space-y-12">
          <Block title="The idea">
            <p>
              Line counts and commit totals say almost nothing about the quality
              of a contribution — deleting 400 lines of dead code can be worth
              more than adding 400. gitvaluation is a small experiment in using
              an LLM to read the actual diffs and reason about impact:
              confidence (does a change fix the root cause or just a symptom?),
              complexity, and net code value.
            </p>
          </Block>

          <Block title="How it works">
            <ul className="space-y-3">
              {architecture.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Decisions worth calling out">
            <div className="space-y-6">
              {decisions.map((d) => (
                <div key={d.title}>
                  <h3 className="font-semibold text-foreground">{d.title}</h3>
                  <p className="mt-1">{d.body}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block title="What it demonstrates">
            <p>
              The interesting part isn&rsquo;t the scores themselves — it&rsquo;s
              the plumbing: pulling structured data from a third-party API,
              shaping it into a bounded prompt, and getting reliable, typed
              output back from a model that a UI can render without guesswork.
              That&rsquo;s the same pattern most production LLM features come
              down to.
            </p>
          </Block>
        </div>

        <div className="mt-16 rounded-lg border border-border bg-card p-8 text-center">
          <p className="text-lg font-medium text-foreground">
            Want to talk about building AI features like this?
          </p>
          <Link
            href="/#contact"
            className={`mt-4 ${buttonVariants({ variant: "primary" })}`}
          >
            Get in touch
          </Link>
        </div>
      </Container>
    </article>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
