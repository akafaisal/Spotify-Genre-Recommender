import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "./ui/navigation-menu"; // or "@/components/ui/navigation-menu" if alias is set

export const NavigationBar = () => {
  return (
    <NavigationMenu className=" ">
      <NavigationMenuList className="   ">
        {/* next item */}
        <NavigationMenuItem className=" m-3 rounded outline-2  outline-black lg:p-1 lg:m-4">
          <NavigationMenuTrigger className="">
            Getting Started
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className="w-screen" href="/fortune/api">
              THIS IS MY LAST RESORT
            </NavigationMenuLink>
            <NavigationMenuLink className="w-screen" href="/">
              AM GONNA RESORT
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* next item */}
        <NavigationMenuItem className=" m-3 rounded outline-2  outline-black lg:p-1 lg:m-4">
          <NavigationMenuTrigger className="">
            Getting Started
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className="w-screen" href="/fortune/api">
              THIS IS MY LAST RESORT
            </NavigationMenuLink>
            <NavigationMenuLink className="w-screen" href="/">
              AM GONNA RESORT
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
