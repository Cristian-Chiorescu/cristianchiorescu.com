import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import ServicesSection from "@/components/sections/services-section";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="font-sans grid grid-cols-1 items-center justify-items-center px-20 mb-[20dvh] gap-[20dvh]">
      <HeroSection></HeroSection>
      <ProjectsSection></ProjectsSection>
      <ServicesSection></ServicesSection>
      <AboutSection></AboutSection>
      <ContactSection></ContactSection>
    </div>
  );
}
