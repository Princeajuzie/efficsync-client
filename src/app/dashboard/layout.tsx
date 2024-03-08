import React from 'react'
import { Navbar, Sidebar, BottomNav } from "@/components";
export default function layout({children} : {children:React.ReactNode}) {
  return (
    <div className='relative'>

    <main className="flex flex-col lg:flex-row w-screen overflow-hidden h-screen">
        <Sidebar />
        
      <div className="">
        <Navbar />
        <div className=" bg-red-600 w-[100%] flex flex-col  lg:overflow-y-auto lg:max-h-[calc(100vh-71px)] max-h-[calc(100vh-139px)] md:max-h-[calc(100vh-145px)] overflow-y-auto ">
       {children}
        </div>
   <div className='z-20'>

   <BottomNav />
   </div>
      </div>
   
    </main>
    </div>
  )
}
