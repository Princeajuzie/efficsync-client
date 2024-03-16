import Image from "next/image";
import Link from "next/link";
import { Navbar, Sidebar } from "@/components";
import Kabantest from "@/components/test/Kabantest";
export default function Home() {
  return (
    <main className="flex item-center flex-col justify-center mx-auto h-screen items-center">
      <Kabantest />
      <div className=" ">{/* <Navbar /> */}</div>

      {/* <div className="">
        <Sidebar />
      </div> */}
    </main>
  );
}
