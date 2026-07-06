export type ProjectStatus = "live" | "in-development";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  featured: boolean;
  links?: {
    live?: string;
    code?: string;
    caseStudy?: string;
  };
  /** Bullets shown on in-development cards to give the teaser substance */
  highlights?: string[];
  /** Short label shown on the card, e.g. "AI · Environmental" */
  kicker?: string;
};

export const projects: Project[] = [
  {
    slug: "machinist",
    name: "machinist",
    kicker: "AI · Agentic Systems",
    tagline: "One-paragraph request → adversarially reviewed, tested PR",
    description:
      "A GitHub-native multi-agent pipeline: a spec flow files a validated issue, and one approval label later an implementer, four specialist reviewers, an adversarial challenger, a fixer, and a deterministic test gate take it to a ready-for-review pull request — autonomously, in a Docker sandbox on GitHub Actions. Labels are the state machine; issue threads are the audit trail.",
    tech: ["Multi-agent", "Claude Code", "Python", "GitHub Actions", "Docker"],
    status: "live",
    featured: true,
    links: {
      code: "https://github.com/Cristian-Chiorescu/machinist",
      caseStudy: "/projects/machinist",
    },
  },
  {
    slug: "envirolens",
    name: "EnviroLens",
    kicker: "AI · Environmental Intelligence",
    tagline: "AI-powered environmental intelligence",
    description:
      "A full-stack platform that pairs live Calgary air-quality data with an OpenAI compliance assistant aware of current conditions — surfacing the right institutional knowledge at the moment a decision gets made.",
    tech: ["Next.js", "OpenAI", "TypeScript", "Recharts"],
    status: "live",
    featured: true,
    links: {
      live: "https://envirolens.vercel.app",
      code: "https://github.com/Cristian-Chiorescu/envirolens",
      caseStudy: "/projects/envirolens",
    },
  },
  {
    slug: "gitvaluation",
    name: "gitvaluation",
    kicker: "AI · Developer Tooling",
    tagline: "LLM-powered code & PR analysis",
    description:
      "Point it at any GitHub repo: it pulls recent merged PRs, runs the diffs through an LLM with a structured-output prompt, and returns per-contributor impact analysis — confidence, complexity, and net code value. A demo of GitHub API integration, prompt engineering, and JSON-mode structured output.",
    tech: ["Next.js", "OpenAI (JSON mode)", "GitHub API", "TypeScript"],
    status: "live",
    featured: true,
    links: {
      live: "https://gitvaluation.vercel.app",
      code: "https://github.com/Cristian-Chiorescu/gitvaluation",
      caseStudy: "/projects/gitvaluation",
    },
  },
];

export type OtherProject = {
  name: string;
  description: string;
  tech: string[];
  links: { live?: string; code?: string };
};

export const otherWork: OtherProject[] = [
  {
    name: "Field Operations Monitor",
    description:
      "Real-time operations dashboard turning Open-Meteo data into a per-site safety index, with a resilient data layer and clean, responsive UI.",
    tech: ["Next.js", "TypeScript", "Open-Meteo API"],
    links: {
      live: "https://corvus-field-operations-monitor.vercel.app",
      code: "https://github.com/Cristian-Chiorescu/corvus-field-operations-monitor",
    },
  },
  {
    name: "BlushBowl",
    description:
      "Recipe-discovery platform with shareable filters, built on TanStack Query and Zod-validated data.",
    tech: ["Next.js", "TanStack Query", "Zod"],
    links: {
      code: "https://github.com/Cristian-Chiorescu/blushbowl",
    },
  },
  {
    name: "Stock Dashboard",
    description:
      "Live-markets dashboard with Chart.js visualizations and a resilient multi-provider serverless data layer.",
    tech: ["React", "Node.js", "Chart.js"],
    links: {
      code: "https://github.com/Cristian-Chiorescu/stock-dashboard-app",
    },
  },
];
