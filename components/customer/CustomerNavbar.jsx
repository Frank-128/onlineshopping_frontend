"use client"

import Link from 'next/link'
import React,{useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import CustomerDrawer from './CustomerDrawer'
import { Input } from '../ui/input'
import {customer_links, products} from '@/constants'
import {usePathname, useRouter} from 'next/navigation'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import ProfilePopover from './ProfilePopover'
import { useCart } from '@/context/cart'
import { useAuth } from '@/context/auth'
import {globalVariables} from "@/context/global";



function CustomerNavbar() {
  const pathname = usePathname()
const [showSearch,setShowSearch] = useState(false)
    const [searchTerm,setSearchTerm] = useState("");
    const allProducts = globalVariables(state => state.allProducts)?.filter((item)=>item.itemName.toLowerCase().includes(searchTerm.toLowerCase()));
  const auth = useAuth(state=>state.user)
  const cartLength = useCart(state=>state.items).length
  const router = useRouter();


  return (
    <nav className="h-24 md:h-20 w-screen   bg-[#062451] z-50 fixed inset-0 md:flex-row flex flex-col   text-white justify-around md:px-5 items-center">
  <div className='flex px-4 py-1 md:px-0 justify-between w-screen md:w-fit'>
  <Image src={'/logo.png'} width={100} height={100} className='w-8 h-8' alt="logo" />
  <CustomerDrawer/>
  </div>
  <div className='md:flex items-center justify-center gap-x-4 hidden'>
  {
          customer_links.map((item,index)=>
          <Link  key={index} href={item.link} className="flex items-center text-gray-400 gap-2">
          <div className={pathname === item.link || (item.link !== '/' && pathname.includes(item.link)) ? 'text-gray-50':'text-gray-400'}>

              <span className="font-sans">
              {item.name}
              </span>

            </div>
            </Link>
          )
      }
  </div>

   <div className='flex w-full md:w-fit px-5 md:px-0 md:flex-row md:gap-x-5 items-center justify-between '>
       <div className='relative w-[230px] md:w-[300px] my-1  flex'>

           <div className="grid w-full max-w-sm items-center rounded-l-md gap-1.5">

               <Input type="text" placeholder="search product here"
                      className=' outline-none rounded-none focus-visible:ring-none'
                onFocus={()=>setShowSearch(true)}
                onBlur={()=>
                setTimeout(()=>{
                    setShowSearch(false)
                },500)
               }
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}

               />
           </div>
           <span className='bg-[#E79951] flex items-center px-2 cursor-pointer'>
        <FaSearch/>
      </span>
           <div className={`absolute top-12 flex flex-col ${!showSearch && 'hidden'}   rounded max-h-32 overflow-y-scroll text-slate-300  bg-white w-full border-gray-100 drop-shadow-lg`}>

               {
                   !allProducts ? <div className={'p-2'}>Loading...</div> : allProducts.length === 0 ? <div className={'p-2'}> No products for your search query </div> : searchTerm.trim() === "" ?
                       <div className={'p-2'}> Enter your search query </div> : allProducts?.map((item, index) => <div
                           className={'flex p-1 gap-3 items-center  border-b-[0.2px] border-gray-400 hover:bg-blue-50 cursor-pointer'} key={index}
                       onClick={()=> {
                           router.push('/products/' + item.itemNo);
                           setSearchTerm("")
                       }}
                       >
                           <Image
                               src={"http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/images/" + item.imageUrl}
                               alt={'img'} width={50} height={50} className={'md:w-12 md:h-12 w-8 h-8 object-contain'}/>
                           <span>{item.itemName}</span>
                       </div>)
               }
           </div>
       </div>

       <Link href='/cart' className='relative ml-10 md:hidden'>
           <FaCartShopping id="cartIcon" size={20}/>
           <span className={`${cartLength < 1 && 'hidden'} absolute w-4 h-4 rounded-full -top-2 text-center text-xs -right-2 text-white bg-red-800`}>{cartLength}</span>
        </Link>
    <div className='md:flex hidden  md:flex-row md:w-fit  justify-between  px-8 md:px-0 flex-row-reverse gap-x-4 items-end'>
       <div className='flex items-center justify-center gap-x-5'>
        <Link href='/cart' className='relative'>
        <FaCartShopping id="cartIcon" size={20} />
        <span className={`${cartLength < 1 && 'hidden'} absolute w-4 h-4 rounded-full -top-2 text-center text-xs -right-2 text-white bg-red-800`}>{cartLength}</span>
        </Link>
       <div className='md:flex hidden '>
       {auth ? <ProfilePopover child={<Avatar>
          <AvatarImage src="/male_avatar.webp" className='bg-gray-200' alt="male_avatar" />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>} /> :<Link  href={'/signin'} className='text-white'>Sign in</Link>}
        </div>
       </div>


    </div>
   </div>

    </nav>
  )
}

export default CustomerNavbar

