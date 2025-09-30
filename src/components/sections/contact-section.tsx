import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../ui/fade-in";

export default function ContactSection() {
  return (
    <section id="Contact" className="items-center my-[10dvh]">
      <FadeIn delay={0.2}>
        <Card className="grid grid-cols-4 items-center px-10">
          <FadeIn delay={0.5}>
            <div className="relative rounded-full overflow-hidden col-span-1 aspect-square shadow-xl border-6">
              <Image
                src="/linkedin-profile-image.png"
                alt="Profile Image"
                fill
                className="object-cover"
              ></Image>
            </div>
          </FadeIn>
          <FadeIn delay={1.2} className="col-span-3">
            <CardContent className="space-y-4">
              <CardTitle className="font-heading text-3xl font-bold tracking-tighter">
                About me
              </CardTitle>

              <CardDescription className="mt-4">
                My journey as a developer began not with a line of code, but
                with a customer. As the founder of my own e-commerce brand, I
                learned firsthand that a great product is inseparable from a
                great user experience. Through dedicated self-study, I
                transitioned from a business owner to a builder and am now a
                Full Stack Developer specializing in React, TypeScript, and
                Next.js.
              </CardDescription>

              <CardTitle className="font-heading font-bold tracking-tighter text-2xl pt-4">
                Let's work together
              </CardTitle>

              <CardDescription className="mt-4">
                Have a project in mind or just want to connect? Feel free to
                reach out.
              </CardDescription>

              <CardAction className="flex mt-6 gap-4 w-full">
                <FadeIn delay={2.4}>
                  <Button asChild>
                    <Link href="mailto:cristian.chiores@gmail.com">
                      <Mail className="mr-2 h-4 w-4" /> Email Me
                    </Link>
                  </Button>
                </FadeIn>
                <FadeIn delay={2.9}>
                  <Button asChild variant="outline">
                    <Link
                      href="https://www.linkedin.com/in/cristianchiorescu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </Link>
                  </Button>
                </FadeIn>
                <FadeIn delay={3.4}>
                  <Button asChild variant="outline">
                    <Link
                      href="https://github.com/Cristian-Chiorescu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                </FadeIn>
              </CardAction>
            </CardContent>
          </FadeIn>
        </Card>
      </FadeIn>
    </section>
  );
}
