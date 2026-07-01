import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "EnviroLens — AI-Powered Environmental Intelligence",
  description:
    "Case study: a full-stack platform pairing live Calgary air-quality data with an OpenAI compliance assistant that surfaces relevant institutional knowledge in context.",
};

const stack = [
  "Next.js (App Router)",
  "TypeScript",
  "OpenAI API",
  "AQICN API",
  "Recharts",
  "Vercel",
];

const architecture = [
  "Server-side API routes keep the OpenAI and air-quality API keys off the client.",
  "A /air-quality route fetches and normalizes live Calgary AQI data with server-side caching.",
  "A /ai-assistant route composes the current conditions, the relevant project context, and conversation history into a single grounded prompt.",
  "Cached revalidation keeps the dashboard fast while staying reasonably fresh.",
];

const features = [
  {
    title: "Real-time air-quality dashboard",
    body: "Live AQI with pollutant breakdowns (PM2.5, PM10, NO₂, O₃, CO), 24-hour trends, and health-risk indicators, visualized with Recharts.",
  },
  {
    title: "Context-aware AI assistant",
    body: "A chat assistant that knows the current air-quality conditions and explains the relevant Alberta regulations — grounded, not a generic chatbot.",
  },
  {
    title: "Contextual knowledge base",
    body: "Past project records are surfaced automatically when they're relevant to the current conditions, demonstrating a lightweight retrieval pattern.",
  },
];

export default function EnviroLensCaseStudy() {
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
          <p className="font-mono text-sm text-accent">
            AI · Environmental Intelligence
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            EnviroLens
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A full-stack platform that pairs live Calgary air-quality data with
            an OpenAI compliance assistant — built to show how AI can surface the
            right institutional knowledge at the moment a decision gets made.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://envirolens.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "primary", size: "sm" })}
            >
              <ArrowUpRight className="size-4" />
              Live demo
            </a>
            <a
              href="https://github.com/Cristian-Chiorescu/envirolens"
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
          <Block title="The problem">
            <p>
              Environmental consulting knowledge tends to live in scattered
              reports and individual memories. When conditions change or a new
              compliance question comes up, the relevant past work is hard to
              recall on demand — so it often goes unused.
            </p>
          </Block>

          <Block title="The approach">
            <p>
              EnviroLens connects three things that are usually separate: the
              current environmental conditions, the regulatory context that
              explains what they mean, and the past project experience that shows
              how a similar situation was handled. The AI assistant sits on top,
              grounded in all three, so its answers are specific rather than
              generic.
            </p>
          </Block>

          <Block title="How it's built">
            <ul className="space-y-3">
              {architecture.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Key features">
            <div className="space-y-6">
              {features.map((f) => (
                <div key={f.title}>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1">{f.body}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block title="Outcome">
            <p>
              A responsive, deployed product with server-side data caching and
              graceful fallbacks (mock data when an upstream API is unavailable),
              scoring 95+ on Lighthouse performance. More importantly, it&rsquo;s
              a concrete demonstration of an idea I care about: AI is most useful
              when it&rsquo;s wired into the real system and the real context, not
              bolted on beside it.
            </p>
          </Block>
        </div>

        <div className="mt-16 rounded-lg border border-border bg-card p-8 text-center">
          <p className="text-lg font-medium text-foreground">
            Want to talk about building something like this?
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
