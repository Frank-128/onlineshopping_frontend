"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { admin_nav_links, customer_links } from "@/constants"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaRegCircleQuestion } from "react-icons/fa6"

export default function CustomerNavbar() {
    const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
          <Menu/>
      </SheetTrigger>
      <SheetContent side="left" className='font-sans bg-[#062451]'>
        <SheetHeader>
          <SheetTitle > 
          <div className="font-extrabold mb-8 text-transparent text-xl bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600 md:hidden">
        Online shopping
      </div>
          </SheetTitle>
        </SheetHeader>
        <ul>
       {
          customer_links.map((item,index)=> 
          <Link  key={index} href={item.link} className="flex items-center text-gray-600 gap-4">
          <li className={pathname == item.link ? 'bg-[#062451] text-white rounded px-2 py-1 flex justify-start gap-4 items-center w-48':'px-2 py-1 flex justify-start gap-4 items-center w-48'}>
              <span>
              {React.createElement(item.icon)}
              </span>
              <span className="font-sans">
              {item.name}
              </span>
     
            </li>
            </Link>
          )
      }
         
        </ul>
        <div className="flex items-center absolute bottom-5 w-full  justify-center mb-10 text-gray-400 gap-2">
      <FaRegCircleQuestion />
    <p className="font-sans">Support Service</p>
    </div>
        
      </SheetContent>
    </Sheet>
  )
}
