"use client";

import { useState } from "react";

import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FadeIn } from "../ui/fade-in";
import Link from "next/link";

import { AppWindow, Code, BarChart, Check } from "lucide-react";

export default function EcommerceSection() {
  const [isOpen, setIsOpen] = useState(false);

  const ecomPackagesList = [
    {
      title: "PDP Conversion Pack",
      description:
        "For Shopify stores that feel slow or don't convert on product pages.",
      price: "$600 – $1,200",
      timeline: "3-5 days",
      features: [
        "Core Web Vitals audit & quick-wins list",
        "Image, font, & script optimization",
        "Structured data & SEO schema fixes",
        "Before/after report & 10-min Loom walkthrough",
      ],
    },
    {
      title: "Headless Starter",
      description:
        "For brands that want a modern, fast storefront without a giant rebuild.",
      price: "$1,800 – $3,500",
      timeline: "~2 weeks",
      features: [
        "Next.js app connected to Shopify API",
        "5-7 core pages (Home, PLP, PDP, etc.)",
        "Global components (header, cart, etc.)",
        "SEO setup, analytics, & handover doc",
      ],
    },
    {
      title: "Migration Sprint",
      description:
        "Move to Next.js from an old theme without losing rankings or URLs.",
      price: "$3,500 – $7,500",
      timeline: "3-4 weeks",
      features: [
        "Full migration plan (risk list, URL mapping)",
        "Next.js storefront build",
        "Redirects & complete SEO parity",
        "Launch checklist & 7-day post-launch support",
      ],
    },
  ];

  return (
    <section className="flex flex-col w-full mt-10 md:mt-16">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex flex-col gap-20 items-center"
      >
        <FadeIn delay={2}>
          <div className="text-center space-y-4">
            <p className="text-lg">
              Looking for specialized e-commerce development?
            </p>
            <CollapsibleTrigger asChild>
              <Button className="text-lg p-6">
                <a href="#Ecommerce">Explore E-commerce Solutions</a>
              </Button>
            </CollapsibleTrigger>
          </div>
        </FadeIn>
        <CollapsibleContent id="Ecommerce" className="mt-6">
          <FadeIn delay={0.3}>
            <div className="text-center space-y-2 font-bold font-heading">
              <p className="text-base text-primary">FREELANCE SERVICES</p>
              <h2 className="text-3xl max-w-prose mb-8">
                I Build Faster Shopify & Next.js Storefronts That Convert.
              </h2>
              <p className="text-base font-normal max-w-prose mx-auto text-muted-foreground">
                As a former Shopify store owner, I don&apos;t just write code—I
                build experiences that solve real business problems, measured by
                Core Web Vitals and real revenue growth.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {ecomPackagesList.map((ecomPackage, i) => {
              return (
                <FadeIn key={ecomPackage.title} delay={i * 0.5 + 1}>
                  <Card className="group gap-2 h-full flex flex-col ring-primary transition hover:-translate-y-1 hover:ring-2 ">
                    <CardHeader className="flex items-center gap-4">
                      <CardTitle className="text-lg">
                        {ecomPackage.title}
                        <p className="text-sm text-muted-foreground font-normal mt-2">
                          {ecomPackage.description}
                        </p>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 mt-2">
                      <span className="font-bold text-[1.8rem]">
                        {ecomPackage.price}
                      </span>
                      <p className="text-sm text-muted-foreground">USD</p>
                      <div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Timeline: {ecomPackage.timeline}
                        </p>
                        <ul className="space-y-4 text-sm text-muted-foreground mt-6">
                          {ecomPackage.features.map((feature) => {
                            return (
                              <li
                                key={feature}
                                className="flex items-start gap-2"
                              >
                                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary"></Check>
                                <span className="text-foreground">
                                  {feature}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </CardContent>
                    <CardAction className="w-full px-6 mt-4">
                      <Button
                        asChild
                        className="transition group-hover:bg-primary group-hover:text-primary-foreground hover:bg-primary/80"
                      >
                        <Link
                          href="mailto:cristian.chiores@gmail.com"
                          className="w-full"
                        >
                          Get Started
                        </Link>
                      </Button>
                    </CardAction>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn delay={1.5}>
            <div className="text-center w-full pt-6 text-sm text-muted-foreground">
              Calgary-based • 50/50 terms • Stripe invoicing • 24–48h reply •
              Satisfaction guarantee
            </div>
          </FadeIn>
        </CollapsibleContent>
      </Collapsible>
    </section>
  );
}
