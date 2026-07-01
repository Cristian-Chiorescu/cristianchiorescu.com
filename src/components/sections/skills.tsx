import { Section, SectionHeading } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border">
      <SectionHeading eyebrow="03 / Skills" title="What I work with" />

      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <li key={s}>
                  <Badge>{s}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
