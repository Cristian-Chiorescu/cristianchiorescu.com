import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/providers/theme-provider";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Analytics } from "@vercel/analytics/next";

const fontInter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cristian Chiorescu | Next.js • React • TypeScript",
  description:
    "Web Developer focused on Next.js & TypeScript. I build fast, accessible, and elegant user interfaces.",
  openGraph: {
    title: "Cristian Chiorescu | Next.js • React • TypeScript",
    description:
      "Web Developer focused on Next.js & TypeScript. I build fast, accessible, and elegant user interfaces.",
    url: "https://www.cristianchiorescu.com/",
    siteName: "Cristian Chiorescu",
    images: [
      {
        url: "https://www.cristianchiorescu.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontInter.variable} ${fontJakarta.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header></Header>
          {children}
          <Footer></Footer>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
