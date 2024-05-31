"use client"

import Link from 'next/link'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import CustomerDrawer from './CustomerDrawer'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

function CustomerNavbar() {
  return (
    <nav className="h-20 w-screen  bg-[#062451] z-50 fixed inset-0 md:flex-row flex flex-col-reverse  text-white justify-between px-20 items-center">
   <div className='md:block hidden space-x-5'>
   <span className=''>Onlineshopping</span>
    <Link href="/products">
    <span>Products</span>
    </Link>
   </div>
   
    <div className='w-[300px] py-2  flex'>
    
    <div className="grid w-full max-w-sm items-center gap-1.5">
      
      <Input type="text" placeholder="search product here" className='rounded-none outline-none focus-visible:ring-none' />
    </div>
      <span className='bg-[#E79951] flex items-center px-2 cursor-pointer'>
        <FaSearch/>
      </span>
    </div>
    <div className='flex md:flex-row md:w-14 w-screen justify-between  px-8 md:px-0 flex-row-reverse gap-x-4 items-end'>
        <div className='md:flex hidden flex-col'>
        <span>Hellow</span>
        <Link href={'/signin'} className='text-white'>Sign in</Link>
        </div>
    <FaCartShopping size={20} />
        <CustomerDrawer/>   
    </div>
    </nav>
  )
}

export default CustomerNavbar

