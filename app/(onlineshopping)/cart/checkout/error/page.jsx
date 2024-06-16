"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import {  MdOutlineClose } from 'react-icons/md'

function PaymentError() {
    const router = useRouter()
  return (
    <div className='bg-red-500/20 w-full max-md:h-screen h-[calc(100vh-80px)] items-center justify-center flex flex-col'>
        <MdOutlineClose className='text-white bg-red-700 rounded-full  md:text-9xl text-[5rem]'  />
        <div className='text-center'>
            <p className='text-red-700 text-5xl font-bold '>Payment Error</p>
            <p className='text-red-500 text-2xl'>Ooops payment failed, credit card error</p>
            <p className='text-gray-500 text-xl'>Your payment has been declined the credit card provided has no enough balance</p>
            <p onClick={()=>router.back()} className='text-teal-800 cursor-pointer text-md underline'>Retry payment</p>
        </div>
    </div>
  )
}

export default PaymentError