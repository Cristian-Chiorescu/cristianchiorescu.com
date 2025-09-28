import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { servicesList } from "@/lib/utils";

export default function ServicesSection() {
  return (
    <section id="Services" className="flex flex-col max-w-7xl gap-8">
      <h2 className="font-heading text-3xl font-bold">Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicesList.map((service) => {
          return (
            <Card key={service.title} className="gap-2 h-full">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
