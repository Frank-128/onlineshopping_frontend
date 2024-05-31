"use client";
import { admin_nav_links } from "@/constants";

import Image from "next/image";
import React from "react";
import { MdMenu } from "react-icons/md";
import { globalVariables } from "@/context/global";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import CustomerDrawer from "../customer/CustomerDrawer";
import SmallScreenSidebar from "./SmallScreenSidebar";

function Navbar() {
  const setOpenSidebar = globalVariables((state) => state.setOpenSidebar);

  return (
    <nav className="py-2 z-30 border-b-[0.5px] border-gray-400 px-10 fixed w-screen md:h-20  h-24  flex-col-reverse bg-gray-100 flex items-center md:flex-row justify-between">
      <div className="flex gap-1  items-center px-2 md:w-1/2 md:flex-row flex-col justify-between">
        <div className="w-screen md:w-4/5 px-2 py-2 flex  md:mt-0  justify-between">
          <Image
            src="/next.svg"
            width={100}
            height={100}
            className="w-8 h-8 object-contain"
            alt="logo"
          />
          <span className="md:hidden">
            <SmallScreenSidebar />
          </span>
        </div>
        <input
          type="text"
          className="focus:outline-indigo-500 w-[96%] md:w-full  text-gray-400 bg-[#f7f6f8]  focus:ring-1 border-gray-200 rounded p-2 border-[1px]"
          placeholder="search"
        />
      </div>

      <div className="md:flex items-center gap-2 w-full md:w-fit  justify-between md:justify-normal hidden">
        <Avatar>
          <AvatarImage src="/male_avatar.webp" alt="male_avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="md:flex flex-col hidden">
          <span className="text-sm text-gray-600">Rico Hernandes</span>
          <span className="text-xs text-gray-800">Marketing director</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
