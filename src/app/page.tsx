import Image from "next/image";
import Link from "next/link";
import { Navbar, Sidebar } from "@/components";
export default function Home() {
  return (
    <main className="grid  grid-rows-2">
      <Navbar />

      <aside>
        <Sidebar />
      </aside>
    </main>
  );
}
