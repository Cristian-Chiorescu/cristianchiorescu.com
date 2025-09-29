import { Button } from "../ui/button";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";

export default function ContactSection() {
  return (
    <section id="Contact" className="max-w-4xl w-full">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-3xl">
            Let's work together
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-md">
            Email me at cristian.chiores@gmail.com or reach out on LinkedIn.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <CardAction className="flex gap-4 flex-wrap">
            <Link href="#Contact">
              <Button variant="default">Email</Button>
            </Link>
            <Link href="#Contact">
              <Button variant="outline">LinkedIn</Button>
            </Link>
            <Link href="#Contact">
              <Button variant="outline">GitHub</Button>
            </Link>
          </CardAction>
        </CardFooter>
      </Card>
    </section>
  );
}
