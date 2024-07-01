import CategoryCard from '@/components/customer/CategoryCard'
import React from 'react'

function Categories() {
  return (
    <div className='w-full h-full'>
        <h1 className='text-center text-gray-400 text-3xl'>Shop by category and discover our latest products</h1>
        <div className='px-2 w-full place-items-center space-y-4 place-content-center grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
            <CategoryCard img={'/trousers.png'} title={"men"} color={"bg-red-500/20"} />
            <CategoryCard img={'/trousers.png'} title={"women"} color={"bg-green-500/20"} />
            <CategoryCard img={'/iphone.png'} title={"electronics"} color={"bg-purple-500/20"} />
            <CategoryCard img={'/watch.png'} title={"gadgets"} color={"bg-amber-500/20"} />
        </div>
    </div>
  )
}

export default Categories