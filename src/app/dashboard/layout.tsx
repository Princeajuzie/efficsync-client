import React from "react";
import { Navbar, Sidebar, BottomNav } from "@/components";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <main className="flex flex-col lg:flex-row w-full  h-full">
        <Sidebar />

        <div className="">
          <Navbar />
          <div className=" bg-red-600 w-[100%] flex flex-col  lg:overflow-y-auto lg:h-[auto] h-[calc(100svh-135px)] overflow-y-auto ">
            {children}
          </div>
          <div className="z-20">
            <BottomNav />
          </div>
        </div>
      </main>
    </div>
  );
}
