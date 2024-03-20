import React from "react";

import Logo from "@/resources/svg/logo.svg";
import Image from "next/image";

export function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-4 ease-in-out">
      <div className="h-fit bg-black rounded-md items-start w-24  ">
        <Image src={Logo} width={100} height={100} alt="logo" draggable={false} />
      </div>
      <p className=" w-96 text-center animate-fade-from-bottom text-dark ">
        Good morning, Prince! Coffee or tea to start your day?
      </p>
    </div>
  );
}

export default WelcomePage;
