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

export default function ContactSection() {
  return (
    <section id="Contact" className="items-center">
      <Card className="grid grid-cols-4 items-center px-10">
        <div className="relative rounded-full overflow-hidden col-span-1 aspect-square shadow-xl border-6">
          <Image
            src="/linkedin-profile-image.png"
            alt="Profile Image"
            fill
            className="object-cover"
          ></Image>
        </div>
        <CardContent className="col-span-3 space-y-4">
          <CardTitle className="font-heading text-3xl font-bold tracking-tighter">
            About me
          </CardTitle>

          <CardDescription>
            My journey as a developer began not with a line of code, but with a
            customer. As the founder of my own e-commerce brand, I learned
            firsthand that a great product is inseparable from a great user
            experience. Through dedicated self-study, I transitioned from a
            business owner to a builder and am now a Full Stack Developer
            specializing in React, TypeScript, and Next.js.
          </CardDescription>
          <CardTitle className="font-heading font-bold tracking-tighter text-2xl pt-4">
            Let's work together
          </CardTitle>

          <CardDescription>
            Have a project in mind or just want to connect? Feel free to reach
            out.
          </CardDescription>
          <CardAction className="flex mt-6 gap-4 w-full">
            <Button asChild>
              <Link href="mailto:cristian.chiores@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://www.linkedin.com/in/cristianchiorescu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://github.com/Cristian-Chiorescu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          </CardAction>
        </CardContent>
      </Card>
    </section>
  );
}
