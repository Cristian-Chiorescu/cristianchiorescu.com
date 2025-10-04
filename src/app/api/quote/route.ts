import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs"; // ensure Node runtime
export const dynamic = "force-dynamic";

const QuoteSchema = z.object({
  pkg: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email(),
  storeUrl: z.string().url(),
  platform: z.string().min(1),
  access: z.enum(["can_grant", "no_access"]),
  issues: z.array(z.string()).min(1),
  timeline: z.string().min(1),
  budget: z.string().min(1),
  notes: z.string().optional(),
  company: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  try {
    const raw = await req.json().catch(() => null);
    const parsed = QuoteSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
    const data = parsed.data;

    // Honeypot: drop bots silently
    if (data.company?.trim()) return NextResponse.json({ ok: true });

    const API_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.QUOTE_TO;
    const FROM = process.env.QUOTE_FROM || "Quotes <onboarding@resend.dev>";
    if (!API_KEY || !TO) {
      console.log("QUOTE REQUEST (email not configured)", data);
      return NextResponse.json({ ok: true });
    }

    const subject = `New quote • ${data.pkg} • ${data.storeUrl}`;
    const lines = [
      `Package: ${data.pkg}`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Store URL: ${data.storeUrl}`,
      `Platform: ${data.platform}`,
      `Access: ${data.access}`,
      `Issues: ${data.issues.join(", ")}`,
      `Timeline: ${data.timeline}`,
      `Budget: ${data.budget}`,
      `Notes: ${data.notes ?? "-"}`,
    ];

    const payload = {
      from: FROM,
      to: TO,
      subject,
      text: lines.join("\n"),
      html: `
        <h2 style="margin:0 0 12px 0">${subject}</h2>
        <table cellpadding="6" style="font-family:ui-sans-serif,system-ui,-apple-system; border-collapse:collapse">
          ${lines
            .map(
              (l) =>
                `<tr><td style="border-bottom:1px solid #eee">${l.replace(
                  ":",
                  ":</td><td style='border-bottom:1px solid #eee'>"
                )}</td></tr>`
            )
            .join("")}
        </table>
      `,
    };

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const err = await resp.text();
      console.error("Resend error", resp.status, err);
      return NextResponse.json({ error: "Send failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
