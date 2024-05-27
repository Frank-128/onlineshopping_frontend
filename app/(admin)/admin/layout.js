import { Inter } from "next/font/google";
import "../../globals.css";
import Navbar from "@/components/admin/Navbar";
import React from "react";
import Sidebar from "@/components/admin/Sidebar";
import DashboardCard from "@/components/admin/DashboardCard";
import DrawerWithNavigation from "@/components/admin/SmallScreenSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "admin",
  description: "online shopping shop with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"h-screen w-screen flex  bg-gray-100 "}>

        {/* sidebar and navbar */}
        <Navbar />
        
        <main className="md:mt-20 mt-24 w-full">
       <Sidebar/>
        <section className="md:ml-[240px]  ml-0 p-2 text-gray-500   rounded h-fit md:h-[calc(100vh-90px)]  w-screen md:w-[calc(100vw-250px)]">{children}</section>
        </main>
        <DrawerWithNavigation/>
        
      </body>
    </html>
  );
}
