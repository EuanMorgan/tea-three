"use client";
import { NavigationMenuList } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

import { Icons } from "~/components/icons";
import { ThemeToggle } from "~/components/theme/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="fixed w-full  bg-background py-4 text-foreground shadow-sm shadow-muted">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Icons.logo className="mr-6" />
          </Link>
          <LoggedInNavigationMenu />
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export function LoggedInNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */}
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
