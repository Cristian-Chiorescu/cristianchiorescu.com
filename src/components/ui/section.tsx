import { cn } from "@/lib/utils";
import { Container } from "./container";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 md:py-28", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <p className="mb-3 font-mono text-sm font-medium tracking-wide text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
