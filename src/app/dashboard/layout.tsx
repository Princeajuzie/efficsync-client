"use client";
import React, { useState } from "react";
import { Navbar, Sidebar, BottomNav, WelcomePage } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [Timer, setTimer] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 600);
  }, []);

  return (
    <div className="relative">

        <main className={`flex flex-col lg:flex-row w-full  h-full scrolltrack ${Timer?"fixed" : "relative"}  `}>
          <Sidebar />

          <div className="w-full">
            <Navbar />
            <div className="  w-[100%] flex flex-col  lg:overflow-hidden lg:h-[auto] h-[calc(100svh-136px)] overflow-y-auto ">
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
