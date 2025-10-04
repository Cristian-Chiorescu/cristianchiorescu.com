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
    <div className="w-full fixed top-0 bg-black/10 dark:bg-white/10 backdrop-blur-sm max-h-[10dvh] z-10 border-b border-foreground/10 ">
      <div className="flex justify-between p-4 max-w-[1140px] mx-auto max-h-[10dvh]">
        <Link href="/#Home" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background">
            <span className="text-sm font-heading">CC</span>
          </div>
          <div className="font-heading font-bold text-xl md:text-2xl">
            Cristian Chiorescu
          </div>
        </Link>

        <div className="flex gap-4 items-center">
          <nav className="hidden md:flex items-center gap-2 text-base">
            <Link
              href="/#Projects"
              className="rounded-md px-3 py-2 transition hover:text-primary underline-offset-4 hover:underline "
            >
              Projects
            </Link>
            <Link
              href="/#Services"
              className="rounded-md px-3 py-2 transition hover:text-primary underline-offset-4 hover:underline"
            >
              Services
            </Link>
            <Link
              href="/#Contact"
              className="rounded-md px-3 py-2 transition hover:text-primary underline-offset-4 hover:underline"
            >
              Contact
            </Link>
          </nav>
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
                <nav className="flex flex-col items-center gap-4 justify-center w-1/2">
                  <SheetClose asChild>
                    <Link
                      href="/#Projects"
                      className="rounded-md px-3 py-2 transition hover:text-primary text-3xl"
                    >
                      Projects
                    </Link>
                  </SheetClose>
                  <Separator></Separator>
                  <SheetClose asChild>
                    <Link
                      href="/#Services"
                      className="rounded-md px-3 py-2 transition hover:text-primary text-3xl"
                    >
                      Services
                    </Link>
                  </SheetClose>
                  <Separator></Separator>
                  <SheetClose asChild>
                    <Link
                      href="/#Contact"
                      className="rounded-md px-3 py-2 transition hover:text-primary text-3xl"
                    >
                      Contact
                    </Link>
                  </SheetClose>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
