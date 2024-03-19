"use client";
import { Herosection, HomeKanban, WhatsOnYourMind } from "@/components";
import Kabantest from "@/components/test/Kabantest";
import React from "react";

export default function page() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <Herosection />
      <div className="w-full h-full  lg:px-4 px-4 pt-4  lg:justify-center  lg:items-center lg:flex lg:flex-col">
        <WhatsOnYourMind />
        <div className=" w-full ">
          <Kabantest />
        </div>
      </div>
    </div>
  );
}
