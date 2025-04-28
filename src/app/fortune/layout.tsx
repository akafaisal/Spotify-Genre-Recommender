import { NavigationBar } from "@/components/navigation-bar";
import { Breadcrumbs } from "@/components/bread-crumb";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="">
        <NavigationBar />
      </div>
      <div className="flex justify-starts ml-4 mb-5 ">
        <Breadcrumbs />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
