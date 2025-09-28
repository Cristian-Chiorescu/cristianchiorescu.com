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

export default function AboutSection() {
  return (
    <section
      id="About"
      className="max-w-4xl grid grid-cols-5 gap-8 items-center"
    >
      <div className="relative rounded-full overflow-hidden col-span-1 aspect-square">
        <Image
          src="/linkedin-profile-image.png"
          alt="Profile Image"
          fill
          className="object-cover"
        ></Image>
      </div>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle className="font-heading text-2xl">About me</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            My journey as a developer began not with a line of code, but with a
            customer. As the founder of my own e-commerce brand, I learned
            firsthand that a great product is inseparable from a great user
            experience, sparking a passion to build those experiences myself.
            Through dedicated self-study, I transitioned from a business owner
            to a builder and am now a Full Stack Developer specializing in
            React, TypeScript, Next.js, and Node.js. I believe this unique path
            gives me a powerful, user-first perspective on building technology
            that solves real problems.
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  );
}
