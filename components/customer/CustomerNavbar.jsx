"use client"

import Link from 'next/link'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import CustomerDrawer from './CustomerDrawer'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { customer_links } from '@/constants'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import ProfilePopover from './ProfilePopover'
import { useCart } from '@/context/cart'


function CustomerNavbar() {
  const pathname = usePathname()
  const auth = true;
  const cartLength = useCart(state=>state.items).length
  


  return (
    <nav className="h-24 md:h-20 w-screen  bg-[#062451] z-50 fixed inset-0 md:flex-row flex flex-col   text-white justify-around md:px-5 items-center">
  <div className='flex px-4 py-1 md:px-0 justify-between w-screen md:w-fit'>
  <Image src={'/logo.png'} width={100} height={100} className='w-8 h-8' alt="logo" />
  <CustomerDrawer/>   
  </div>
  <div className='md:flex items-center justify-center gap-x-4 hidden'>
  {
          customer_links.map((item,index)=> 
          <Link  key={index} href={item.link} className="flex items-center text-gray-400 gap-2">
          <div className={pathname == item.link || (item.link !== '/' && pathname.includes(item.link)) ? 'text-gray-50':'text-gray-400'}>
             
              <span className="font-sans">
              {item.name}
              </span>
     
            </div>
            </Link>
          )
      }
  </div>
   
   <div className='flex  md:flex-row md:gap-x-5 items-center justify-between '>
   <div className='w-[300px] my-1  flex'>
    
    <div className="grid w-full max-w-sm items-center rounded-l-md gap-1.5">
      
      <Input type="text" placeholder="search product here" className=' outline-none rounded-none focus-visible:ring-none' />
    </div>
      <span className='bg-[#E79951] flex items-center px-2 cursor-pointer'>
        <FaSearch/>
      </span>
    </div>
    <Link href='/cart' className='relative ml-10 md:hidden'>
        <FaCartShopping id="cartIcon" size={20} />
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
        </Avatar>} /> :<Link href={'/signin'} className='text-white'>Sign in</Link>}
        </div>
       </div>
    
        
    </div>
   </div>
     
    </nav>
  )
}

export default CustomerNavbar

