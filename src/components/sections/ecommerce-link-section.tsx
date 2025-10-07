import { FadeIn } from "../ui/fade-in";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function EcommerceLinkSection() {
  return (
    <section id="Ecommerce">
      <FadeIn delay={0.3}>
        <div className="text-center space-y-4 mt-20">
          <p className="text-lg">
            Looking for specialized e-commerce development?
          </p>

          <Button className="text-lg p-6" asChild>
            <Link href="/ecommerce" className="">
              Explore E-commerce Solutions <ExternalLink></ExternalLink>
            </Link>
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
