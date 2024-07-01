import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Link from "next/link"
  import React from 'react'
  
  function ProfilePopover({child}) {
    return (
        <Popover>
        <PopoverTrigger>{child}</PopoverTrigger>
        <PopoverContent className='w-full py-2 px-1'>
            <ul className="divide-y place-items-center">
                <li className="hover:shadow-xl hover:border-gray-300   p-2">
                    <Link href='/my_orders'  >
                    <h1>my orders</h1>
                    </Link>
                </li>
                <li className="hover:shadow-xl hover:border-gray-300 text-center  p-2">
                    <Link href='/my_payments'  >
                    <h1>my payments</h1>
                    </Link>
                </li>
                <li className="hover:shadow-xl hover:border-gray-300 text-center   p-2">
                    <Link href='/profile'  >
                    <h1>profile</h1>
                    </Link>
                </li>
                <li className="hover:shadow-xl hover:border-gray-300 text-center  p-2">
                    <Link href='/signin'  >
                    <h1>logout</h1>
                    </Link>
                </li>
            </ul>
        </PopoverContent>
      </Popover>
      
    )
  }
  
  export default ProfilePopover