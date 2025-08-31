"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BlurFade } from "../magicui/blur-fade";
import { CgMenuRightAlt } from "react-icons/cg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ThemeToggle from "../ThemeToggle";
import { BLUR_FADE_DELAY, ROUTES } from "@/constants";

const routes = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "About",
    path: "/about",
  },
];

function Navbar() {
  const pathname = usePathname();
  const isActive = (routePath: string) => {
    if (routePath === "/") return pathname === "/";
    return pathname.startsWith(routePath);
  };
  return (
    <BlurFade
      delay={BLUR_FADE_DELAY}
      className="sticky top-0 z-10 bg-[#ffffff] dark:bg-[#0a0a0a]"
    >
      <nav className="flex items-center justify-between px-4 py-3 lg:py-6">
        {/* logo */}
        <div>
          <Link href={"/"}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="cursor-pointer">
                  <span className="text-xl font-extrabold lg:text-3xl">
                    RCOM363
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <span className="font-bold">⚡Conqueror of Miseries</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </div>
        <div className="flex items-center justify-end gap-2 font-semibold">
          {/* ────── Desktop navigation ────── */}
          <div className="hidden items-center gap-2 md:flex lg:flex">
            {ROUTES.map((route) => (
              <Link
                href={route.path}
                className={`${
                  isActive(route.path)
                    ? "text-black dark:text-white"
                    : "text-black/60 dark:text-white/60"
                } transition-colors`}
                key={route.name}
              >
                {route.name}
              </Link>
            ))}
          </div>
          {/* ────── Mobile navigation ────── */}
          <Dialog>
            <DialogTrigger className="md:hidden lg:hidden">
              <CgMenuRightAlt size={25} />
            </DialogTrigger>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <DialogContent className="w-[95vw]">
                <DialogTitle></DialogTitle>
                <div className="flex flex-col items-start gap-4 divide-y text-2xl font-semibold">
                  {routes.map((route, index: number) => (
                    <BlurFade
                      key={route.name}
                      delay={BLUR_FADE_DELAY * 2 + index * 0.05}
                      className="w-full"
                    >
                      <DialogClose className="w-full p-2" asChild>
                        <Link
                          href={route.path}
                          className={`${
                            pathname === route.path
                              ? "text-black dark:text-white"
                              : "text-black/60 dark:text-white/60"
                          } transition-colors`}
                          key={route.name}
                        >
                          {route.name}
                        </Link>
                      </DialogClose>
                    </BlurFade>
                  ))}
                </div>
              </DialogContent>
            </BlurFade>
          </Dialog>
          {/* ────── Theme toggle ────── */}
          <ThemeToggle />
        </div>
      </nav>
    </BlurFade>
  );
}

export default Navbar;
