
"use client"
import { Button } from "@/components/ui/button"
import React from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { admin_nav_links } from "@/constants"
import { Menu } from "lucide-react"
import Link from "next/link"
import {usePathname, useRouter} from "next/navigation"
import { FaRegCircleQuestion } from "react-icons/fa6"
import {FaSignOutAlt} from "react-icons/fa";
import {useCookies} from "react-cookie";
import {useAuth} from "@/context/auth";

export default function SmallScreenSidebar() {
    const pathname = usePathname()
  const [ cookies,setCookie,removeCookie] = useCookies(["token"]);
  const { setToken, setUser } = useAuth();
  const router = useRouter()



  const removeToken = () => {
    removeCookie("token", { path: "/" });
    setUser(null);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className='p-2'>
          <Menu/>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className='font-sans'>
        <SheetHeader>
          <SheetTitle> Onlineshopping</SheetTitle>
        </SheetHeader>
        <ul>
          {
            admin_nav_links.map((item, index) =>
                <Link key={index} href={item.link} className="flex items-center gap-4">
                  <li className={pathname == item.link ? 'bg-[#9e8282] text-white rounded px-2 py-1 flex justify-start gap-4 items-center w-48' : 'px-2 py-1 flex justify-start gap-4 items-center w-48'}>
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
          <li onClick={() => {
            removeToken();
            router.push('/signin')
          }}
              className=" px-2 py-1 flex justify-start gap-4 items-center w-48">
            <div className={'flex items-center gap-4'}>
              <FaSignOutAlt/>
              <span>Logout</span>
            </div>


          </li>
        </ul>
        <div className="flex items-center absolute bottom-5 w-full  justify-center mb-10 text-gray-400 gap-2">
          <FaRegCircleQuestion/>
          <p className="font-sans">Support Service</p>
        </div>

      </SheetContent>
    </Sheet>
  )
}
