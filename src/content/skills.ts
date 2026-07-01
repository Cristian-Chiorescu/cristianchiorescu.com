export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Agentic Systems",
    skills: [
      "Claude / Claude Code",
      "Model Context Protocol (MCP)",
      "Multi-agent pipelines",
      "LLM integration",
      "Agentic dev tooling",
      "Prompt engineering",
      "Playwright MCP",
      "AI-driven automation",
    ],
  },
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend & Data",
    skills: [
      "Node.js",
      "REST APIs",
      "Serverless functions",
      "PostgreSQL",
      "TanStack Query",
      "Zod",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    skills: [
      "Azure",
      "Azure Kubernetes Service (AKS)",
      "Docker",
      "Kubernetes",
      "CI/CD (GitHub Actions)",
      "SAST & container scanning",
      "Observability",
    ],
  },
  {
    title: "Cloud",
    skills: ["Azure", "AWS (familiar)"],
  },
];
