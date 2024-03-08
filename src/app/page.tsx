import Image from "next/image";
import Link from "next/link";
import { Navbar, Sidebar } from "@/components";
export default function Home() {
  return (
    <main className="grid  grid-cols-1">
      <div className=" ">
        <Navbar />
        <div className="h-screen bg-red-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          porro eius quis doloribus sapiente recusandae temporibus accusamus
          amet eaque ex autem dicta dolorem aperiam, doloremque ab harum
          distinctio! Vitae incidunt, corporis asperiores voluptate reiciendis
          laboriosam sit numquam itaque veniam rerum odio aliquid obcaecati.
          Corporis quo, iste nemo cum deserunt accusamus modi illo nostrum?
          Atque pariatur earum temporibus repudiandae reiciendis nam a
          asperiores saepe quidem ea? Ducimus totam vel sed sunt cumque corporis
          fuga? Culpa, repellendus assumenda quas veniam accusamus fugit.
          Pariatur eos, quo laboriosam, dolore modi non id illo sunt ullam dolor
          totam voluptates minima neque asperiores esse eum? Illo quos nulla,
          libero natus, esse quam quasi veniam fugiat, dolorum atque architecto
          eaque mollitia recusandae dolores eius. Perspiciatis iste aspernatur
          eveniet. Similique obcaecati inventore voluptate maxime incidunt earum
          magni veritatis? Reiciendis similique quidem aperiam suscipit numquam
          illo nisi ad dolor doloribus obcaecati cupiditate laboriosam, adipisci
          aliquam, vitae, cum nam quibusdam recusandae. Fugit libero nemo hic
          velit veritatis perferendis quos obcaecati dolorem consequatur iure
          odio itaque, delectus vitae tenetur dicta repellendus accusantium a
          magni, eum eaque ducimus! Accusamus, harum at. Libero minus hic quam
          repellendus, unde itaque error omnis? At error exercitationem earum
          quod eaque voluptates maxime, cupiditate quibusdam minima repellendus!
        </div>
      </div>

      <div className="">
        <Sidebar />
      </div>
    </main>
  );
}
