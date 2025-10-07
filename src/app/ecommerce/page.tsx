import Header from "@/components/sections/header";
import EcommerceHeroSection from "@/components/sections/ecommerce-hero-section";
import EcommercePackagesSection from "@/components/sections/ecommerce-packages-section";
import EcommerceFAQSection from "@/components/sections/ecommerce-faq-section";
import PortfolioLinkSection from "@/components/sections/portfolio-link-section";

export default function Ecommerce() {
  const headerTags = [
    {
      name: "Demo",
      link: "#Demo",
    },
    {
      name: "Packages",
      link: "#Packages",
    },
    {
      name: "FAQ",
      link: "#FAQ",
    },
    {
      name: "Portfolio",
      link: "#Portfolio",
    },
  ];

  return (
    <div>
      <Header headerTags={headerTags}></Header>
      <div className="min-h-dvh font-sans grid grid-cols-1 px-10 md:px-20 mb-[20dvh] gap-[14dvh] mx-auto max-w-[1140px]">
        <EcommerceHeroSection></EcommerceHeroSection>
        <EcommercePackagesSection></EcommercePackagesSection>
        <EcommerceFAQSection></EcommerceFAQSection>
        <PortfolioLinkSection></PortfolioLinkSection>
      </div>
    </div>
  );
}
