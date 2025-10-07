import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "../ui/fade-in";

export default function EcommerceFAQSection() {
  const faqList = [
    {
      question: "What exactly are Core Web Vitals and why do they matter?",
      answer:
        "Core Web Vitals (LCP, INP, CLS) are the specific speed and user experience metrics that Google uses to rank websites. They measure how fast your page loads, how quickly it responds to user interaction, and how stable the layout is. Improving these scores is critical because it directly impacts your SEO ranking and, more importantly, your conversion rate. A faster, more stable site leads to happier customers and more sales.",
    },
    {
      question: "What is 'headless ecommerce' and why would I need it?",
      answer:
        "Headless ecommerce is a modern approach where your storefront (the 'head') is separated from your e-commerce backend (like Shopify). I build these custom storefronts using Next.js, which results in a website that is significantly faster, more flexible, and more SEO-friendly than a traditional theme. You would consider going headless if you've hit the limits of your current theme and want a truly best-in-class, high-performance site.",
    },
    {
      question: "What platform is your 'PDP Conversion Pack' for?",
      answer:
        "My service is platform-agnostic, but the implementation differs. My specialty is *Shopify (Liquid themes) and headless (Next.js)*, where I can do a full audit and hands-on implementation. For other platforms like *WooCommerce, WordPress, or Webflow*, I provide my 'Audit & Action Plan' package — a detailed, expert blueprint with code snippets for your own developer to implement with confidence.",
    },
    {
      question: "What is your process like?",
      answer:
        "My process is designed to be simple and transparent. It starts with a *Baseline Audit* to identify the biggest performance issues. From there, I create a prioritized *Action Plan* for your approval. For my implementation packages, I then get to work on the *Hands-On Fixes*. Finally, I deliver a comprehensive *'Before & After' Report*, including a Loom video, to show you the measurable results.",
    },
    {
      question: "What kind of results can I expect?",
      answer:
        "Every site is different, but the goal is always a tangible improvement in your Core Web Vitals and a noticeably faster experience for your users. While I don't promise a specific score (as some factors may be outside my control, like slow third-party apps), I am committed to delivering a significant, measurable improvement, which I will prove with a clear data-driven report.",
    },
    {
      question: "What do you need from me to get started?",
      answer:
        "To begin, I just need two things: the URL of the page you want to improve and a brief description of your goals. If you proceed with an implementation package, I will need collaborator access to your site's backend or code repository. Feel free to fill out the PDP Conversion Pack form above and we can discuss the specifics on a brief, no-obligation discovery call.",
    },
    {
      question: "How do payments work?",
      answer:
        "All projects are billed on a fixed-price basis, so you know the full cost upfront. For most projects, I use a 50/50 payment structure: a 50% deposit to schedule the work and the final 50% upon successful delivery. I will send a professional invoice via Stripe, which you can pay securely online with a credit card.",
    },
  ];

  return (
    <section id="FAQ">
      <FadeIn delay={0.3}>
        <h2 className="font-heading text-3xl font-bold">FAQ</h2>
      </FadeIn>
      <Accordion type="single" collapsible className="mt-6">
        {faqList.map((faq, i) => {
          return (
            <FadeIn key={i} delay={i * 0.2 + 0.3}>
              <AccordionItem value={"item-" + i + 1}>
                <AccordionTrigger className="text-base md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </FadeIn>
          );
        })}
      </Accordion>
    </section>
  );
}
