// app/pdp-demo/page.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDP Conversion Pack — 60-sec before/after demo",
  description:
    "Shopify/Headless PDP speed demo: LCP 12s → 0.7s, TBT 570ms → 0ms, CLS 0.139 → 0.00.",
  // Use an OG image for reliable shares on LinkedIn/Twitter:
  openGraph: {
    title: "PDP speed demo — before/after (Core Web Vitals)",
    description:
      "Watch the 60-sec demo: LCP 12s → 0.7s, TBT 570ms → 0ms, CLS 0.139 → 0.00.",
    url: "https://cristianchiorescu.com/pdp-demo",
    images: ["/Fix Slow PDPs without face badge.png"], // see step 3 for a file-based option
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 min-h-dvh translate-y-[10dvh] flex flex-col flex-1">
      <h1 className="text-3xl font-semibold">PDP Conversion Pack — demo</h1>
      <p className="mt-2 text-muted-foreground">
        Full demo with clear before/after performance improvements using Core
        Web Vitals.
      </p>

      <div className="mt-6 aspect-video overflow-hidden rounded-2xl ring-1 ring-border bg-black">
        <video
          className="h-full w-full"
          controls
          playsInline
          preload="metadata"
          poster="/Fix Slow PDPs with face badge.png"
          // for iOS to show the first frame:
          src="/PDP Conversion Pack Video (No Background).webm"
          controlsList="nodownload"
        >
          {/* Captions (highly recommended for accessibility & silent viewers) */}
          <track
            kind="captions"
            srcLang="en"
            src="/Optimizing Your Website for Better Performance and Sales 🚀.srt"
            label="English"
            default
          />
        </video>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Having trouble playing?{" "}
        <a
          className="underline"
          href="/PDP Conversion Pack Video (No Background).mp4
        "
        >
          Download the MP4
        </a>
        .
      </p>

      <div className="mt-8">
        <Button
          asChild
          className="inline-flex items-center rounded-md text-xl p-6"
        >
          <Link href="/#Services">Get a fixed price</Link>
        </Button>
      </div>

      {/* Optional: JSON-LD to help Google understand the video
      <script
        type="application/ld+json"
        // Minimal VideoObject—add duration/thumbnailUrl/datePublished if you have them
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "PDP Conversion Pack — demo",
            description:
              "Before/after Core Web Vitals on a product page (LCP, TBT/INP proxy, CLS).",
            contentUrl: "https://cristianchiorescu.com/videos/pdp-demo-720p.mp4",
            thumbnailUrl: ["https://cristianchiorescu.com/images/pdp-thumb.png"],
            uploadDate: "2025-10-04",
          }),
        }}
      /> */}
    </main>
  );
}
