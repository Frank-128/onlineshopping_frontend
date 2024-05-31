import AddToCartCard from '@/components/customer/AddToCartCard'
import { products } from '@/constants/products'
import Image from 'next/image'

import React from 'react'

function Product({params}) {

    const product = products.find(p=>p.id == params.id)
    
    

  return (
    <div className='flex p-20 gap-4 justify-around md:flex-row flex-col'>
        <div>
            <Image width={500} height={500} alt={product.image} src={product.image} className='w-72 h-72' />
        </div>
        <div className='flex flex-col gap-y-2'>
            <b>{product.title}</b>
            <span className='font-bold'>{product.price}</span>
            <div>
                <span>Color</span>
               <div className='flex gap-x-2'>
               {product.colors.map((itm,index)=>
                <span key={index} className={`${itm == "black" || itm == "white" ? 'bg-'+itm : "bg-"+itm+"-500"+" border" }  w-12 h-12`}></span>
                )}
               </div>
            </div>
            <div>
            <span>Size</span>
               <div className='flex gap-x-2'>
               {product.sizes.map((itm,index)=>
                <span key={index} className={"bg-gray-200 w-14 h-12 text-center place-content-center"}>{itm}</span>
                )}
               </div>
            </div>
        </div>
        <AddToCartCard title={product.title} price={product.price} />
        
    </div>
  )
}

export default Product