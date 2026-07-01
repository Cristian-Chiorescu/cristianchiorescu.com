"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, site } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 md:px-8"
      >
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          CC<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "ml-2")}
          >
            Résumé
          </a>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-muted"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
