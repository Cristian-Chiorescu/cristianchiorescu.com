import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projectsList = [
  {
    title: "EnviroLens — AI Powered Environmental Intelligence",
    description:
      "Full-stack consulting platform integrating real-time Calgary air quality data. OpenAI-powered compliance assistant.",
    tags: ["Next.js", "OpenAI", "TypeScript"],
    imageLink: "/envirolens-screenshot.png",
    url: "https://envirolens.vercel.app/",
    github: "https://github.com/Cristian-Chiorescu/envirolens",
  },
  {
    title: "BlushBowl — Recipe Discovery",
    description:
      "Full-stack Next.js app with TanStack Query, Zod, and Framer Motion. Clean UX, shareable filters, deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "React"],
    imageLink: "/blushbowl-og-image.png",
    url: "https://blushbowl.vercel.app/",
    github: "https://github.com/Cristian-Chiorescu/blushbowl",
  },
  {
    title: "Stock Dashboard — Live Markets",
    description:
      "React + Node serverless backend, Chart.js visualizations, resilient multi-provider fallback, ~95% faster intial load.",
    tags: ["React", "TypeScript", "Node.js"],
    imageLink: "/stock-portfolio-screenshot.png",
    url: "https://cc-stock-dashboard.netlify.app/",
    github: "https://github.com/Cristian-Chiorescu/stock-dashboard-app",
  },
  // {
  //   title: "League of Legends Skin Randomizer",
  //   description:
  //     "Next.js tool integrating Riot Games API, dynamic routing and SEO-friendly pages, responsive grid UI.",
  //   tags: ["Next.js", "TypeScript", "API"],
  //   imageLink: "/lol-skin-randomizer-screenshot.png",
  //   url: "https://lol-skin-randomizer-cristian-chiorescu.vercel.app/",
  //   github: "https://github.com/Cristian-Chiorescu/lol-skin-randomizer",
  // },
];
