"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto link is the fallback */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy email address"
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground",
      )}
    >
      {copied ? (
        <Check className="size-4 text-accent" />
      ) : (
        <Copy className="size-4" />
      )}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
