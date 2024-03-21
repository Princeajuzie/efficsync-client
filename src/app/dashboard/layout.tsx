"use client";
import React, { useState } from "react";
import { Navbar, Sidebar, BottomNav } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [Timer, setTimer] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 2000);
  }, []);

  return (
    <div className="relative">
      <main
        className={`flex flex-col lg:flex-row w-full  h-full scrolltrack ${
          Timer ? "fixed" : ""
        }  `}
      >
        <Sidebar />

        <div className="w-full">
          <Navbar />
          <div className=" ">{children}</div>
          <div className=" w-full ">
            <BottomNav />
          </div>
        </div>
      </main>
    </div>
  );
}
