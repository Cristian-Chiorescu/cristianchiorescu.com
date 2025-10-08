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
import { GetFixedPriceDialog } from "../ui/get-fixed-price-dialog";
import { Check } from "lucide-react";
import type { PackageKey } from "../ui/get-fixed-price-dialog";

type EcomPackage = {
  title: String;
  key: PackageKey;
  description: String;
  price: String;
  timeline: String;
  features: String[];
};

export default function EcommercePackagesSection() {
  const ecomPackagesList: ReadonlyArray<EcomPackage> = [
    {
      title: "Comprehensive Performance Audit",
      key: "audit",
      description:
        "Best for WordPress / WooCommerce / Webflow or teams with in-house devs.",
      price: "$600",
      timeline: "3 days",
      features: [
        "Core Web Vitals audit & quick-wins list",
        "Prioritized action plan with dev-ready snippets",
        "10-minute Loom video explaining the findings",
      ],
    },
    {
      title: "PDP Conversion Pack (Audit + Implementation)",
      key: "pdp",
      description: "Best for Shopify / headless Next.js with theme access.",
      price: "$900 – $1,200",
      timeline: "3-5 days",
      features: [
        "Everything in the Comprehensive Audit",
        "Hands-on implementation of all fixes",
        "Final 'Before & After' report proving the results",
        "10-minute Loom walkthrough",
      ],
    },
    {
      title: "Headless Starter",
      key: "headless",
      description: "Modern Next.js storefront without a full rebuild.",
      price: "$1,800 – $3,500",
      timeline: "2 weeks",
      features: [
        "Next.js app connected to Shopify API",
        "5-7 core pages (Home, PLP, PDP, etc.)",
        "Global components (header, cart, etc.)",
        "SEO setup, analytics, & handover doc",
      ],
    },
  ];

  return (
    <section id="Packages">
      <FadeIn delay={0.3}>
        <h2 className="font-heading text-3xl font-bold">Packages</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {ecomPackagesList.map((ecomPackage, i) => {
          return (
            <FadeIn key={i} delay={i * 0.5 + 0.5}>
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
                      {ecomPackage.features.map((feature, i) => {
                        return (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary"></Check>
                            <span className="text-foreground">{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </CardContent>
                <CardAction className="w-full px-6 mt-4">
                  <GetFixedPriceDialog
                    presetKey={ecomPackage.key}
                  ></GetFixedPriceDialog>
                </CardAction>
              </Card>
            </FadeIn>
          );
        })}
      </div>
      <FadeIn delay={0.5}>
        <div className="text-center w-full pt-6 text-xs md:text-sm text-muted-foreground font-normal">
          Calgary-based • 50/50 terms • Stripe invoicing • 24–48h reply •
          Satisfaction guarantee
        </div>
      </FadeIn>
    </section>
  );
}
