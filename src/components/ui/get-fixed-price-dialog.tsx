"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

/* ---------------------------------- */
/* Package config                      */
/* ---------------------------------- */
export type PackageKey = "audit" | "pdp" | "headless";

const PACKAGE_CONFIG: Record<
  PackageKey,
  {
    label: string;
    subtitle: string;
    priceHint: string; // shown under header
    budgetLocked?: boolean; // audit is fixed price
    defaults: {
      platform: FormValues["platform"];
      access: FormValues["access"];
      budget: FormValues["budget"];
      issues: FormValues["issues"];
      timeline: FormValues["timeline"];
    };
  }
> = {
  audit: {
    label: "Comprehensive PDP Audit",
    subtitle:
      "Deep findings with dev-ready snippets and JSON-LD check. 10-min Loom. Best if you can’t grant code access.",
    priceHint: "Fixed price: $600 USD · 2–3 day turnaround",
    budgetLocked: true,
    defaults: {
      platform: "woocommerce",
      access: "no_access",
      budget: "lt800", // still sent; UI shows fixed price
      issues: ["speed", "cls"],
      timeline: "this_month",
    },
  },
  pdp: {
    label: "PDP Conversion Pack (Audit + Implementation)",
    subtitle:
      "3–5 day sprint. Images, fonts, scripts; CLS fixes; Product/Review JSON-LD. Before/after report + Loom.",
    priceHint: "Most projects land around ~$950 · Range: $900–$1,200 USD",
    defaults: {
      platform: "shopify_theme",
      access: "can_grant",
      budget: "800_1200",
      issues: ["speed", "cls"],
      timeline: "this_month",
    },
  },
  headless: {
    label: "Headless Starter",
    subtitle:
      "Next.js storefront connected to the Shopify API. 5–7 core pages, globals, basic analytics + handover.",
    priceHint: "Typical range: $1,800–$3,500 USD · ~2 weeks",
    defaults: {
      platform: "nextjs",
      access: "can_grant",
      budget: "1200_2k",
      issues: ["speed", "interactivity"],
      timeline: "next_month",
    },
  },
};

/* ---------------------------------- */
/* Schema                              */
/* ---------------------------------- */
const schema = z.object({
  pkg: z.string().min(1),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  storeUrl: z.string().url("Enter a valid URL (https://...)"),
  platform: z.enum([
    "shopify_theme",
    "shopify_hydrogen",
    "woocommerce",
    "nextjs",
    "webflow",
    "other",
  ]),
  access: z.enum(["can_grant", "no_access"]),
  issues: z
    .array(z.enum(["speed", "cls", "interactivity", "seo", "apps", "other"]))
    .min(1, "Pick at least one"),
  timeline: z.enum(["rush", "this_week", "this_month", "next_month"]),
  budget: z.enum(["lt800", "800_1200", "1200_2k", "gt2k", "not_sure"]),
  notes: z.string().optional(),
  company: z.string().optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

const ISSUE_LABELS: Record<FormValues["issues"][number], string> = {
  speed: "Speed (LCP)",
  cls: "Layout shift (CLS)",
  interactivity: "Interactivity (INP/TBT)",
  seo: "SEO / Schema",
  apps: "App / script bloat",
  other: "Other",
};

export function GetFixedPriceDialog({
  triggerText = "Get a Fixed Price",
  presetKey = "pdp",
}: {
  triggerText?: string;
  /** "audit" | "pdp" | "headless" */
  presetKey?: PackageKey;
}) {
  const cfg = PACKAGE_CONFIG[presetKey];
  const [open, setOpen] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      pkg: cfg.label,
      name: "",
      email: "",
      storeUrl: "",
      platform: cfg.defaults.platform,
      access: cfg.defaults.access,
      issues: cfg.defaults.issues,
      timeline: cfg.defaults.timeline,
      budget: cfg.defaults.budget,
      notes: "",
      company: "", // honeypot
    },
  });

  // if the dialog opens for a different presetKey on the same page,
  // sync a few defaults when it opens.
  React.useEffect(() => {
    if (open) {
      form.reset({
        ...form.getValues(),
        pkg: cfg.label,
        platform: cfg.defaults.platform,
        access: cfg.defaults.access,
        issues: cfg.defaults.issues,
        timeline: cfg.defaults.timeline,
        budget: cfg.defaults.budget,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, presetKey]);

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(await res.text());
      toast("Thanks! 🎉", {
        description: "I’ll reply with a 2-minute plan within 24–48 hours.",
      });
      form.reset({
        ...form.getValues(),
        name: "",
        email: "",
        storeUrl: "",
        notes: "",
      });
      setOpen(false);
    } catch {
      toast("Something went wrong", { description: "Please try again." });
    }
  };

  const pending = form.formState.isSubmitting;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="w-full transition group-hover:bg-primary group-hover:text-primary-foreground hover:bg-primary/80"
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full p-0">
        <div className="flex max-h-[85dvh] flex-col overflow-hidden w-full">
          <DialogHeader className="sticky top-0 bg-background z-10 mt-10 mx-6 mb-4">
            <DialogTitle>Get a fixed price — {cfg.label}</DialogTitle>
            <DialogDescription>{cfg.subtitle}</DialogDescription>
            <p className="text-xs text-muted-foreground mt-1">
              {cfg.priceHint}
            </p>
          </DialogHeader>

          <div
            className="overflow-y-auto overscroll-contain scrollbar-gutter-stable p-6"
            style={{ scrollbarGutter: "stable" }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Honeypot */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  {...form.register("company")}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@brand.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="storeUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Store URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://yourstore.com/product/..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="platform"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Platform</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select platform" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="shopify_theme">
                              Shopify (Theme / Liquid)
                            </SelectItem>
                            <SelectItem value="shopify_hydrogen">
                              Shopify Hydrogen/Remix
                            </SelectItem>
                            <SelectItem value="woocommerce">
                              WordPress / WooCommerce
                            </SelectItem>
                            <SelectItem value="nextjs">
                              Next.js (Headless)
                            </SelectItem>
                            <SelectItem value="webflow">
                              Webflow / Builder
                            </SelectItem>
                            <SelectItem value="other">
                              Other / Not sure
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-xs">
                          {presetKey === "audit"
                            ? "Code access not required for the audit."
                            : "Theme/repo access speeds up implementation."}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="access"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Access{presetKey === "audit" ? " (optional)" : ""}
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            className="flex flex-col gap-2"
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <div className="flex items-center space-x-2 rounded-md border px-3 py-2">
                              <RadioGroupItem value="can_grant" id="acc-yes" />
                              <Label
                                htmlFor="acc-yes"
                                className="font-normal text-xs"
                              >
                                I can grant theme/repo access
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 rounded-md border px-3 py-2">
                              <RadioGroupItem value="no_access" id="acc-no" />
                              <Label
                                htmlFor="acc-no"
                                className="font-normal text-xs"
                              >
                                No code access (audit & instructions)
                              </Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="issues"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Biggest issues (choose 1–3)</FormLabel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {Object.entries(ISSUE_LABELS).map(([val, label]) => {
                          const v = val as FormValues["issues"][number];
                          const checked = field.value?.includes(v);
                          return (
                            <label
                              key={v}
                              className="flex items-center gap-2 rounded-md border px-3 py-2"
                            >
                              <Checkbox
                                checked={checked}
                                onCheckedChange={(c) => {
                                  const next = new Set(field.value ?? []);
                                  c ? next.add(v) : next.delete(v);
                                  field.onChange(Array.from(next));
                                }}
                              />
                              <span className="text-sm">{label}</span>
                            </label>
                          );
                        })}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Timeline</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="When do you need this?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="rush">
                              Rush (&lt; 72h)
                            </SelectItem>
                            <SelectItem value="this_week">This week</SelectItem>
                            <SelectItem value="this_month">
                              This month
                            </SelectItem>
                            <SelectItem value="next_month">
                              Next month
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget (USD)</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={cfg.budgetLocked}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={
                                  cfg.budgetLocked
                                    ? "Fixed at $600"
                                    : "Pick a range"
                                }
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="lt800">&lt; $800</SelectItem>
                            <SelectItem value="800_1200">
                              $800–$1,200
                            </SelectItem>
                            <SelectItem value="1200_2k">
                              $1,200–$2,000
                            </SelectItem>
                            <SelectItem value="gt2k">$2k+</SelectItem>
                            <SelectItem value="not_sure">Not sure</SelectItem>
                          </SelectContent>
                        </Select>
                        {cfg.budgetLocked && (
                          <FormDescription className="text-xs">
                            Comprehensive audit is a fixed **$600**.
                          </FormDescription>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes (optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Anything else I should know?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Package name (read-only) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="pkg"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Package</FormLabel>
                        <FormControl>
                          <Input {...field} readOnly className="bg-muted/40" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <DialogFooter className="gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpen(false)}
                    disabled={pending}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={pending}
                    className="inline-flex items-center gap-2"
                  >
                    {pending && <Loader2 className="h-4 w-4 animate-spin" />}{" "}
                    Send request
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
