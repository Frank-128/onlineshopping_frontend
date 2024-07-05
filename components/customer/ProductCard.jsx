"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { useCart } from '@/context/cart'

function ProductCard({item}) {
    const router = useRouter()
    const removeCartItem = useCart(state=>state.removeUpdateCartItem)
    const calculateRatings = (ratings)=>{
      let totalRatings = Array(5).fill("text-gray-300");
      
      for(let i = 0;i<ratings;i++){
        totalRatings[i] = "text-yellow-500"
      }
      return totalRatings;
    }

  return (
    <Card onClick={()=>{removeCartItem();router.push('/products/'+item.itemNo)}} className='relative w-64 h-64 cursor-pointer'>
    
        <div>
            <Image priority src={"http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/images/"+item?.imageUrl} width={500} height={500} alt={"product image"} className='w-full h-48 object-cover'  />
        </div>
        <span className='absolute top-2 rounded-lg left-2 p-2 w-18 text-center shadow-md text-xs font-bold text-white bg-blue-900'>{item.actualPrice}/=</span>
        <div className=''>
         <h1 className='text-xs px-2 font-bold'>{item.itemName}</h1>
         <div className='flex gap-x-1 px-2'>{
          calculateRatings(item.ratings).map((item,index)=><FaStar key={index} className={item} />)
}</div>
        </div>
    </Card>
  )
}

export default ProductCard