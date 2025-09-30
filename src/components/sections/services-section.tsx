import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { FadeIn } from "../ui/fade-in";

import { AppWindow, Code, BarChart, Check } from "lucide-react";

export default function ServicesSection() {
  const servicesList = [
    {
      icon: <AppWindow size={24} />,
      title: "Web Apps & Dashboards",
      features: [
        "Modern React & Next.js development",
        "Data-rich frontends with API integrations",
        "State management with TanStack Query",
      ],
    },
    {
      icon: <Code size={24} />,
      title: "Landing Pages & Websites",
      features: [
        "High-converting, responsive marketing pages",
        "Optimized for speed and Core Web Vitals",
        "Built with modern, maintainable code",
      ],
    },
    {
      icon: <BarChart size={24} />,
      title: "Performance & UX Audits",
      features: [
        "Lighthouse and Core Web Vitals analysis",
        "Accessibility and SEO improvements",
        "Actionable reports for your team",
      ],
    },
  ];

  return (
    <FadeIn delay={0.2}>
      <section id="Services" className="flex flex-col w-full gap-8 ">
        <h2 className="font-heading text-3xl font-bold">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {servicesList.map((service, i) => {
            return (
              <FadeIn key={service.title} delay={i * 0.5 + 0.5}>
                <Card className="gap-2 h-full flex flex-col transition hover:-translate-y-1 ">
                  <CardHeader className="flex items-center gap-4">
                    <div>{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      {service.features.map((feature) => {
                        return (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary"></Check>
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </FadeIn>
  );
}
