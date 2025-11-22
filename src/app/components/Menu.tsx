"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChartColumnIncreasing,
  SquareMenu,
  Github,
  Coffee,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import OrderCoffee from "./OrderCoffee";

const Menu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#menu") {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    // Run once on page load
    handleHashChange();

    // Listen for hash or navigation changes
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  return (
    <div className="fixed z-10 right-0 mr-[-10] bottom-1/3  ">
      <div className="flex flex-col w-full items-center  rounded-2xl bg-white/30 ">
        {/* Home Button */}
        <Link href="/#features">
          <Image
            className="hover:scale-105 transition-transform"
            src="/logo.png"
            alt="Home button"
            width={70}
            height={70}
          ></Image>
        </Link>
        {/* Menu Button */}
        <Link href="#menu" scroll={false}>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <div className="cursor-pointer flex flex-col items-center rounded-2xl px-4 py-3 text-black transition-all hover:scale-105">
                <SquareMenu className="w-10 h-10 lg:w-12 lg:h-12" />
                <div className="font-honk -mt-2 lg:-mt-1">Menu</div>
              </div>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-white/30 border-black rounded-bl-2xl h-1/3 w-1/2 md:w-1/4 lg:w-1/6 "
            >
              <SheetHeader className=" flex flex-col gap-4">
                <SheetTitle className="font-honk text-2xl hover:scale-103 transition-transform">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </SheetTitle>

                <SheetTitle className="font-honk text-2xl hover:scale-103 transition-transform">
                  <Link href="/contact">Contact Us</Link>
                </SheetTitle>

                <SheetTitle className="">
                  <a
                    href="https://github.com/akafaisal/Spotify-Genre-Recommender"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 justify-center p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 shadow-sm"
                  >
                    <Github className="w-5 h-5 text-white" />
                    <div className=" font-honk">My Github</div>
                  </a>
                </SheetTitle>
                <SheetTitle id="order-coffee">
                  <div className="flex w-fit p-2  items-center bg-zinc-900 gap-2 cursor-pointer hover:bg-zinc-800 transition-all duration-300 shadow-sm rounded-xl">
                    <div className="">
                      <Coffee className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-honk">
                      <OrderCoffee />
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </Link>

        {/* Analytics Button */}
        <Link href="/analytics">
          <div className="cursor-pointer flex flex-col items-center px-4 py-3 text-black transition-all hover:scale-105">
            <ChartColumnIncreasing className="w-10 h-10 lg:w-12 lg:h-12" />
            <div className="font-honk -mt-2 lg:-mt-1">Analytics</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
