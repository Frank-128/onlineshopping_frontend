"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { MdArrowBack } from 'react-icons/md'

function BackButton() {
    const router = useRouter()
  return (
    <MdArrowBack className="bg-gray-200 w-8 h-8 shadow-md rounded-full p-2" onClick={()=>router.back()} />
  )
}

export default BackButton