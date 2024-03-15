"use client";
import { Herosection, HomeKanban, WhatsOnYourMind } from "@/components";
import React from "react";

export default function page() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <Herosection />
      <div className="w-full h-full  lg:px-16 px-4 pt-4  lg:justify-center  lg:items-center lg:flex lg:flex-col">
        <WhatsOnYourMind />
        <HomeKanban />
      </div>
    </div>
  );
}
