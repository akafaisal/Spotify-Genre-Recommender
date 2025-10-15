import React from "react";
import Link from "next/link";

import { SquareMenu, Github } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <>
      <div className="ml-16">
        <Sheet>
          <SheetTrigger>
            <div className="cursor-pointer rounded-2xl bg-white/30 px-2 py-3 text-black transition-all   ">
              <SquareMenu className="w-12 h-12 lg:w-16 lg:h-16" />
              <div className="font-honk -mt-3 lg:-mt-2">Menu</div>
            </div>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-white/30 border-black rounded-tl-lg h-full w-[50%] md:w-1/4 lg:w-1/6 mt-4"
          >
            <SheetHeader className="mt-6 flex flex-col gap-4">
              <SheetTitle className="font-honk text-2xl hover:scale-103 transition-transform">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </SheetTitle>

              <SheetTitle className="font-honk text-2xl hover:scale-103 transition-transform">
                <Link href="/about">About Us</Link>
              </SheetTitle>

              <SheetTitle className="font-honk text-2xl hover:scale-103 transition-transform">
                <Link href="/contact">Contact Us</Link>
              </SheetTitle>

              <SheetTitle className="mt-3">
                <a
                  href="https://github.com/akafaisal/Spotify-Genre-Recommender"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 shadow-sm"
                  title="View on GitHub"
                >
                  <Github className="w-5 h-5 text-white" />
                  <div className="pl-2 font-honk">Github</div>
                </a>
              </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Menu;
