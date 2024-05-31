import ProductCard from '@/components/customer/ProductCard'
import { products } from '@/constants/products'
import React from 'react'

function Products() {
    
  return (
    <div className='grid place-items-center md:grid-cols-3 sm:grid-cols-3 grid-cols-1 space-y-3  py-10'>
        {products.map((item,index) =><ProductCard key={index} item={item} />)}
    </div>
  )
}

export default Products