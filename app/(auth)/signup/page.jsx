"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

function SignUp() {
  return (
    <div className="w-full h-full  flex-col flex items-center  justify-center">
          <div className="font-extrabold text-transparent text-3xl bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600 md:hidden">Online shopping</div>

      <div className="shadow-md md:shadow-none p-2 border-slate-200 flex flex-col gap-4  border-[0.5px] h-3/4 w-2/3 rounded-md">
        <h2 className="text-center text-2xl text-gray-800 font-bold">
          Sign Up
        </h2>
        <h2 className="text-center text-gray-600">already have an account? <Link href="/signin" className="text-blue-900 italic hover:opacity-30 animate duration-75">signin</Link></h2>
        <Input label="name" className="p-2" size="lg" />
        
        <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="Name" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="c_password">Confirm Password</Label>
        <Input type="password" id="c_password" placeholder="Password" />
        </div>

        <Button className="w-full bg-blue-900">Sign Up</Button>
        <div>
            
            <p className='text-xs text-gray-500'>By creating an account, you agree to onlineshopping&apos;s <Link href={"#"} className='text-blue-900'>Conditions of Use</Link> and <Link className='text-blue-900' href={"#"}>Privacy Notice</Link></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp