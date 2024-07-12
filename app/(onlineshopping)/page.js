"use client";
import DashboardSlider from "@/components/customer/DashboardSlider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter()

  const ShoppingButton = ({ text, bg,...other }) => {
    return (
      <Button {...other} className={`${bg} rounded-2xl drop-shadow-xl  text-bold`}>
        <p className="text-white">{text}</p>
        <ArrowRight color="white" />
      </Button>
    );
  };

  return (
    <main className="min-h-[calc(100vh-80px)] w-full flex lg:flex-row items-center flex-col xl:justify-between bg-blue-800/20 px-2 lg:px-10 py-5">

        <div className="max-lg:hidden flex items-center justify-center w-full bg-[#062451] my-2 py-2 rounded-sm shadow-2xl">
          <div className=" flex items-center flex-col">
            <p className="mt-14 text-white">Featured Products</p>
            <DashboardSlider />
            <div className="space-x-2">
              <ShoppingButton onClick={()=>router.push('/products')}  text={"Start shopping"} bg={"bg-[#d0f0c0]/50"} />
              <ShoppingButton onClick={()=>router.push('/categories')} text={"View categories"} bg={"bg-[#d0f0c0]/70"} />
            </div>
          </div>
        </div>


      <Image
        src={"/dashboard_pic.png"}
        width={600}
        height={600}
        alt="logo"
        className="w-[20rem] h-[20rem] sm:w-[15rem] sm:h-[15rem] md:w-[30rem] md:h-[30rem] lg:w-[40rem] lg:h-[40rem] object-cover"
      />
       <div className="lg:hidden flex items-center justify-center w-full bg-[#062451] my-2 py-2 rounded-sm shadow">
          <div className=" flex items-center flex-col">
            <p className="mt-14 text-white">Featured Products</p>
            <DashboardSlider />
            <div className="space-x-2">
              <ShoppingButton text={"Start shopping"} bg={"bg-[#d0f0c0]/50"} />
              <ShoppingButton text={"View categories"} bg={"bg-[#d0f0c0]/70"} />
            </div>
          </div>
        </div>
    </main>
  );
}
