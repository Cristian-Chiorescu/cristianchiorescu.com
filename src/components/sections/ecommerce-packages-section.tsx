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

export default function EcommercePackagesSection() {
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
    <section id="Packages">
      <FadeIn delay={0.3}>
        <h2 className="font-heading text-3xl font-bold">Packages</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {ecomPackagesList.map((ecomPackage, i) => {
          return (
            <FadeIn key={ecomPackage.title} delay={i * 0.3 + 0.5}>
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
                          <li key={feature} className="flex items-start gap-2">
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
                    presetPackage={ecomPackage.title}
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
