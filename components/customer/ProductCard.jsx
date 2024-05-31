"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { Card } from '../ui/card'

function ProductCard({item}) {
    const router = useRouter()
  return (
    <Card onClick={()=>router.push('/product/'+item.id)} className='relative w-72 cursor-pointer'>
    <span className=' rounded-lg  p-2 w-18 text-center  text-xs font-bold text-[#E79951] '>{item.title}/=</span>
        <div>
            <img src={item.image} alt={item.name} className='w-full h-48 object-contain'  />
        </div>
        <span className='absolute bottom-2 rounded-lg left-2 p-2 w-18 text-center shadow-md text-xs font-bold text-white bg-blue-900'>{item.price}/=</span>
        
    </Card>
  )
}

export default ProductCard