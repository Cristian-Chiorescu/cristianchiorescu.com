import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import ServicesSection from "@/components/sections/services-section";
import ContactSection from "@/components/sections/contact-section";

import Header from "@/components/sections/header";
import EcommerceLinkSection from "@/components/sections/ecommerce-link-section";

export default function Home() {
  const headerTags = [
    {
      name: "Projects",
      link: "/#Projects",
    },
    {
      name: "Services",
      link: "/#Services",
    },
    {
      name: "E-commerce",
      link: "/#Ecommerce",
    },
    {
      name: "Contact",
      link: "/#Contact",
    },
  ];

  return (
    <div>
      <Header headerTags={headerTags}></Header>
      <div className="font-sans grid grid-cols-1  px-10 md:px-20 mb-[10dvh] gap-[14dvh] mx-auto max-w-[1140px]">
        <HeroSection></HeroSection>
        <ProjectsSection></ProjectsSection>

        <ServicesSection></ServicesSection>
        <EcommerceLinkSection></EcommerceLinkSection>

        <ContactSection></ContactSection>
      </div>
    </div>
  );
}
