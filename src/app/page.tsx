import Image from "next/image";
import Link from "next/link";
import { Navbar, Sidebar } from "@/components";
import Kabantest from "@/components/test/Kabantest";
export default function Home() {
  return (
    <main className="grid  grid-cols-1">
      <div className=" ">
        <Navbar />
      {/* <Kabantest /> */}
      </div>

      <div className="">
        <Sidebar />
      </div>
    </main>
  );
}
