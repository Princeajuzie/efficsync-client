"use client";
import { Herosection, HomeKanban, WhatsOnYourMind } from "@/components";
import Kabantest from "@/components/test/Kabantest";
import React from "react";

export default function page() {
  return (
    <div className="h-auto w-full ">
      <Herosection />
      <div className="w-full h-full  lg:px-4  mx-auto  lg:justify-center items-center lg:flex lg:flex-col max-w-[1280px]">
        <WhatsOnYourMind />
        <div className=" w-full h-auto">
          <Kabantest />
        </div>
      </div>
    </div>
  );
}
