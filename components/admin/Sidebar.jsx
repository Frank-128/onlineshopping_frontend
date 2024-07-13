"use client"
import { admin_nav_links } from '@/constants'
import { usePathname } from 'next/navigation'
import { FaRegCircleQuestion } from "react-icons/fa6";
import React from 'react'
import Link from 'next/link';
import {useRouter} from "next/navigation";
import {useCookies} from "react-cookie";
import {useAuth} from "@/context/auth";
import {FaSignOutAlt} from "react-icons/fa";

function Sidebar() {

    const pathname = usePathname()
  const [ cookies,setCookie,removeCookie] = useCookies(["token"]);
  const { setToken, setUser } = useAuth();
  const router = useRouter()



  const removeToken = () => {
    removeCookie("token", { path: "/" });
    setUser(null);
  };

  return (
    <aside className="h-[calc(100vh-80px)] py-2 md:flex hidden flex-col border-r-[0.5px] border-gray-400  items-center justify-between fixed w-[240px] ">
    <ul className="space-y-4 px-5 text-gray-500">
      {
        admin_nav_links.map((item,index)=><li key={index} className={pathname == item.link ? 'bg-[#9e8282] text-white rounded px-2 py-1':'px-2 py-1'}>
          <Link href={item.link} className="flex items-center gap-2">

        {React.createElement(item.icon)}
          <span>{item.name}</span>
          </Link>
          </li>)
      }
      <li onClick={()=>{
        removeToken();
        router.push('/signin')
      }}
      className=" px-2 py-1 cursor-pointer">
      <div className={'flex items-center gap-2 '}>
        <FaSignOutAlt />
        <span>Logout</span>
      </div>


    </li>
    </ul>

    <div className="flex items-center mb-10 text-gray-400 gap-2">
      <FaRegCircleQuestion />
    <span>Support Service</span>
    </div>
  </aside>
  )
}

export default Sidebar
