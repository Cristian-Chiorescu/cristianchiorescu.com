import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import HeroSection from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-dvh p-8 pb-20 gap-16 sm:p-20">
      <HeroSection></HeroSection>
    </div>
  );
}
