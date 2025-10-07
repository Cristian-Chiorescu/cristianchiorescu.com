"use client";

import { useState } from "react";

import { useMediaQuery } from "../hooks/use-media-query";

import { FadeIn } from "../ui/fade-in";
import { Button } from "../ui/button";
import Link from "next/link";

export default function EcommerceHeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const idRef = isMobile ? "#Heading" : "#Video";

  return (
    <section
      id="Demo"
      className="flex flex-col w-full min-h-dvh justify-center"
    >
      <FadeIn delay={0.3}>
        <div className="md:text-center space-y-2 font-heading">
          <p className="text-base md:text-lg text-primary font-bold">
            FREELANCE SERVICES
          </p>
          <h2 className="text-2xl md:text-3xl max-w-prose mb-4 font-bold">
            I Build Faster Shopify & Next.js Storefronts That Convert.
          </h2>
          <FadeIn delay={0.8}>
            <p className="text-sm md:text-base font-sans max-w-prose mx-auto text-muted-foreground">
              As a former Shopify store owner, I don&apos;t just write code—I
              build experiences that solve real business problems, measured by
              Core Web Vitals and real revenue growth.
            </p>
          </FadeIn>
          <FadeIn delay={1.5}>
            <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl mt-8 ">
              <div className="relative aspect-[20/9] bg-transparent">
                <video
                  id="Video"
                  className="w-full h-full bg-transparent object-cover"
                  controls
                  preload="metadata"
                  poster="/Demo Thumbnail.png"
                >
                  <source src="/PDP Conversion Pack Demo (90s, Portfolio, Final).mp4" />
                  Sorry, your browser doesn&apos;t support embedded videos. You
                  can{" "}
                  <a href="/PDP Conversion Pack Demo (90s, Portfolio, Final).mp4">
                    download it here
                  </a>
                  .
                </video>
              </div>
            </div>
          </FadeIn>
          <div className="w-full flex justify-center">
            <FadeIn delay={2.3}>
              <Button
                asChild
                className="mt-6 md:mt-10 text-lg md:text-xl font-sans p-4 md:p-6"
              >
                <Link href="#Packages">Explore Options ↓</Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
