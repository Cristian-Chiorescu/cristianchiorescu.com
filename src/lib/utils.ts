import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projectsList = [
  {
    title: "BlushBowl — Recipe Discovery",
    description:
      "Full-stack Next.js app with TanStack Query, Zod, and Framer Motion. Clean UX, shareable filters, deployed on Vercel",
    tags: ["Next.js", "TypeScript", "React"],
  },
  {
    title: "Stock Dashboard — Live Markets",
    description:
      "React + Node serverless backend, Chart.js visualizations, resilient multi-provider fallback, ~95% faster intial load.",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "League of Legends Skin Randomizer",
    description:
      "Next.js tool integrating Riot Games API, dynamic routing and SEO-friendly pages, responsive grid UI",
    tags: ["Next.js", "TypeScript", "API"],
  },
];
