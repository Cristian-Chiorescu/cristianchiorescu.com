export const aboutParagraphs = [
  "I'm a forward-deployed AI engineer. Most recently I was embedded on the AI Business Transformation team at Volaris Group (an operating group of Constellation Software), doing two things at once: building the agentic systems and tooling that make AI production-ready, and getting real teams to actually adopt them — autonomous multi-agent dev pipelines, MCP (Model Context Protocol) integrations, internal AI developer tooling, and running the developer track of an enterprise “AI Accelerator” across a 240+ company software portfolio.",
  "“Forward-deployed” is the part I care about: being in the room where the AI meets the messy real system and the people who have to trust it.",
  "I came to it the long way — self-taught, first as an e-commerce founder, then full-stack (Next.js / React / TypeScript), before going deep on agentic AI over the last year. Calgary-based, open to remote or relocation.",
];

export type Metric = {
  value: string;
  label: string;
};

export const impactMetrics: Metric[] = [
  {
    value: "100+",
    label: "developers guided across 50+ software businesses",
  },
  {
    value: "4",
    label: "in-person AI Accelerators — Denver · Oxford · Toronto · London",
  },
  {
    value: "10–15",
    label: "embedded AI coaches led per event (Volaris, Microsoft, AWS)",
  },
  {
    value: "months → a week",
    label: "teams shipping in a week what used to take months",
  },
];
