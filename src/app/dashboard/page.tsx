"use client"
import { Herosection, HomeKanban } from "@/components";
import React from "react";



export default function page() {
  return (
    <div className="h-full w-full">
      <Herosection />
      <HomeKanban />
    </div>
  );
}
