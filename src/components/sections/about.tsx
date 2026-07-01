import { Section, SectionHeading } from "@/components/ui/section";
import { aboutParagraphs, impactMetrics } from "@/content/about";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="01 / About" title="From builder to forward-deployed" />

      <div className="grid gap-14 md:grid-cols-5">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-3">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="md:col-span-2">
          <p className="mb-5 font-mono text-sm text-accent">Impact</p>
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1">
            {impactMetrics.map((m) => (
              <div key={m.label} className="border-l-2 border-accent/40 pl-4">
                <dt className="text-2xl font-semibold tracking-tight text-foreground">
                  {m.value}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-muted-foreground">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
