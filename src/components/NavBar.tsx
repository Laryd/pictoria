"use client";
import { MouseEvent, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button, buttonVariants } from "./ui/button";
import { ArrowRight, Menu, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#goals",
    label: "Pricing",
  },
  {
    href: "#schedule",
    label: "Contact Us",
  },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const modifiedLabel = id.replace("#", "");
    const element = document.getElementById(modifiedLabel);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
    setIsOpen(false);
  };
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto my-1">
        <NavigationMenuList className="container h-20 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link href="/" className="ml-2 mb-2 font-bold text-xl flex">
              <Image src="/logo1.svg" alt="logo" width={145} height={45} />
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                ></Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    <Link href="/" className="ml-2 mt-5 font-bold text-xl flex">
                      <Image
                        src="/logo1.svg"
                        alt="logo"
                        width={187}
                        height={74}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-start items-left gap-3 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      key={label}
                      href={`/${href}`}
                      onClick={() => setIsOpen(false)}
                      className={`buttonVariants({ variant: "ghost" })`}
                    >
                      {label}
                    </Link>
                  ))}
                  <Button className="bg-blue-500 hover:bg-blue-500/90">
                    <a href="/#join">Log in</a>
                  </Button>
                  <Button className="bg-blue-500 hover:bg-blue-500/90">
                    <a href="/signup">Sign Up</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                href={`/${route.href}`}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
                onClick={(e) => handleClick(e, route.href)}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-10">
            <Button>
              <a href="/login">Log in</a>
            </Button>
            <Button>
              <a href="/signup">Sign Up</a>
            </Button>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
