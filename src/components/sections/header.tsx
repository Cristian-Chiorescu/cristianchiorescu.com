import { ThemeToggle } from "../ui/theme-toggle";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";

export default function Header() {
  return (
    <div className="w-full fixed top-0 bg-black/10 dark:bg-white/10 backdrop-blur-sm max-h-20 z-10">
      <div className="flex justify-between p-4 max-w-7xl mx-auto">
        <a href="#Home">
          <div className="font-heading font-bold text-2xl">
            Cristian Chiorescu
          </div>
        </a>

        <div className="flex gap-4 items-center">
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="#Projects">Projects</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="#Services">Services</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="#About">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="#Contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle></ThemeToggle>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="default"
                className="relative aspect-square bg-transparent px-0 text-center text-3xl text-foreground hover:text-background md:hidden"
              >
                ☰
              </Button>
            </SheetTrigger>
            <SheetTitle className="hidden">Mobile Navigation</SheetTitle>
            <SheetContent side="top" className="h-1/2">
              <div className="flex justify-center h-full w-full">
                <NavigationMenu>
                  <NavigationMenuList className="flex flex-col">
                    <NavigationMenuItem>
                      <SheetClose asChild>
                        <NavigationMenuLink
                          asChild
                          className={`${navigationMenuTriggerStyle()} text-3xl p-10`}
                        >
                          <Link href="#Projects">Projects</Link>
                        </NavigationMenuLink>
                      </SheetClose>
                      <Separator></Separator>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <SheetClose asChild>
                        <NavigationMenuLink
                          asChild
                          className={`${navigationMenuTriggerStyle()} text-3xl p-10`}
                        >
                          <Link href="#Services">Services</Link>
                        </NavigationMenuLink>
                      </SheetClose>
                      <Separator></Separator>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <SheetClose asChild>
                        <NavigationMenuLink
                          asChild
                          className={`${navigationMenuTriggerStyle()} text-3xl p-10`}
                        >
                          <Link href="#About">About</Link>
                        </NavigationMenuLink>
                      </SheetClose>
                      <Separator></Separator>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <SheetClose asChild>
                        <NavigationMenuLink
                          asChild
                          className={`${navigationMenuTriggerStyle()} text-3xl p-10`}
                        >
                          <Link href="#Contact">Contact</Link>
                        </NavigationMenuLink>
                      </SheetClose>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
