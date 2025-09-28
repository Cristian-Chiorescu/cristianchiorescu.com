import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center px-20 mb-10 gap-16">
      <HeroSection></HeroSection>
      <ProjectsSection></ProjectsSection>
    </div>
  );
}
