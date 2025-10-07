import { FadeIn } from "../ui/fade-in";

import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function PortfolioLinkSection() {
  return (
    <section id="Portfolio">
      <FadeIn delay={0.5}>
        <div className="text-center space-y-4 mt-20">
          <p className="text-lg">Looking for other web development services?</p>

          <Button className="text-lg p-6" asChild>
            <Link href="/" className="">
              Explore My Portfolio <ExternalLink></ExternalLink>
            </Link>
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
