import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "machinist — A Multi-Agent Spec-to-PR Pipeline",
  description:
    "Case study: a GitHub-native pipeline where an implementer, four specialist reviewers, an adversarial challenger, a fixer, and a deterministic test gate turn an approved spec into a ready-for-review pull request — autonomously.",
};

const stack = [
  "Python",
  "Claude Code (headless)",
  "GitHub Actions",
  "GitHub Issues & Labels",
  "Docker",
  "pytest · mypy · ruff",
];

const architecture = [
  "An interactive /spec flow turns a one-paragraph request into a validated spec — testable acceptance criteria, non-goals, a self-review checklist — filed as a GitHub issue with priority and effort labels.",
  "A human applies the approval label; that single label event (verified to come from a write-access user) triggers a GitHub Actions run that drives every remaining stage inside a non-root Docker sandbox.",
  "An implementer agent builds the change on a branch and opens a draft PR; four read-only specialist reviewers — correctness, security, tests, style — then critique the diff in parallel.",
  "An adversarial challenger tries to refute every finding they raise. Only confirmed blocker-level findings send the code back to a fixer; the loop escalates to a human after three strikes.",
  "The orchestrator itself runs the test suite — the gate is exit-code truth, never an agent's claim — and a scribe writes the final PR description before the draft flips to ready.",
  "Every control-flow decision lives in a pure, exhaustively unit-tested state machine over the issue's labels. Agents produce artifacts; they never decide what happens next.",
];

const decisions = [
  {
    title: "An agent whose only job is killing false positives",
    body: "Reviewer findings are claims, not facts. The challenger must refute each one with proof or confirm it — and its silence counts as confirmation. In the pipeline's first fully autonomous run it did both jobs in one pass: confirmed a subtle real defect and struck down a plausible-sounding finding as out of spec.",
  },
  {
    title: "GitHub is the database",
    body: "Labels hold the state machine, issue threads hold the audit trail, structured comment blocks carry findings between stages, and Actions is the runtime. There is no orchestration server, no queue, no store to operate — and every pipeline decision is publicly inspectable after the fact.",
  },
  {
    title: "Deterministic gates wherever possible",
    body: "The test gate is the orchestrator running the suite and reading the exit code. Agents are reserved for judgment calls — what to build, whether a finding is real — while everything checkable by a machine is checked by a machine, including format, types, lint, and workflow hygiene on the pipeline's own repo.",
  },
  {
    title: "Bounded autonomy",
    body: "Nothing runs until a person applies the approval label, and the pipeline never merges its own PRs. Strike-limited fix loops, per-agent tool allowlists and turn caps, a job timeout, and a read-only sandbox mount bound what an unattended run can do.",
  },
];

export default function MachinistCaseStudy() {
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
          <p className="font-mono text-sm text-accent">AI · Agentic Systems</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            machinist
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A GitHub-native multi-agent pipeline that turns a one-paragraph
            request into a spec&rsquo;d, implemented, adversarially reviewed,
            tested pull request. A human approves the spec and merges the PR;
            everything in between is autonomous.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/Cristian-Chiorescu/machinist"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "primary", size: "sm" })}
            >
              <GithubIcon className="size-4" />
              Source
            </a>
            <a
              href="https://github.com/Cristian-Chiorescu/machinist/issues/12"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <ArrowUpRight className="size-4" />
              A real run, end to end
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </header>

        <figure className="mt-12">
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <video className="block w-full" controls playsInline preload="metadata">
              <source src="/machinist-demo-full.mp4" type="video/mp4" />
            </video>
          </div>
          <figcaption className="mt-3 text-center text-sm text-muted-foreground">
            A real run, unattended: one approval label in, a reviewed and
            tested pull request out.
          </figcaption>
        </figure>

        <div className="mt-12 space-y-12">
          <Block title="The idea">
            <p>
              Agents are good at producing code and bad at judging their own
              output. machinist splits those concerns: agents propose — code,
              review findings, verdicts, prose — while a deterministic
              orchestrator disposes, deciding every stage transition through a
              pure, exhaustively tested state machine. The result is a pipeline
              autonomous enough to ship a pull request unattended, and
              accountable enough that every decision it made is readable in the
              issue thread afterwards.
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

          <Block title="The run that proves it">
            <p>
              <a
                href="https://github.com/Cristian-Chiorescu/machinist/issues/12"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                Issue #12
              </a>{" "}
              — a tagging feature for the demo API — ran unattended on GitHub
              Actions for just under nine minutes. The implementer built the
              feature; the review panel&rsquo;s test specialist caught that the
              tag-filter test couldn&rsquo;t distinguish exact matching from
              substring or case-insensitive matching — precisely the behaviors
              the spec ruled out — and the challenger confirmed it. Strike one.
              The fixer added near-miss fixtures to pin the behavior down. In
              round two, a security finding about unbounded tag counts was
              struck down by the challenger as out of spec. The test gate
              passed, and the scribe flipped{" "}
              <a
                href="https://github.com/Cristian-Chiorescu/machinist/pull/13"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                PR #13
              </a>{" "}
              to ready with the whole honest history in its description — one
              real defect caught, one false positive killed, in the same run.
            </p>
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
              Multi-agent orchestration where the orchestration itself is
              boring, testable code; adversarial review as a first-class
              mechanism rather than a prompt suggestion; and the discipline of
              deterministic gates around probabilistic workers. The pipeline
              was also debugged in production against the real world —
              headless-CLI deadlocks, Windows argv mangling, GitHub&rsquo;s
              bot-identity restrictions — and each incident is documented in
              the repo&rsquo;s history with a regression test attached.
            </p>
          </Block>
        </div>

        <div className="mt-16 rounded-lg border border-border bg-card p-8 text-center">
          <p className="text-lg font-medium text-foreground">
            Want to talk about building agentic systems like this?
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
