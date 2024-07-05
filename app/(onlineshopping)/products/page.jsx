"use client"
import ProductCard from '@/components/customer/ProductCard'
import { StoredCookie } from '@/constants/functions';
import axios from 'axios';

import React, { useEffect, useState } from 'react'

function Products() {

  const [products, setProducts] = useState(null);

  useEffect(() => {

      axios
        .get("http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/api/v1/search/items")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

  }, []);
    
  return (
    <div className='grid place-items-center md:grid-cols-3 sm:grid-cols-3 grid-cols-1 space-y-3  py-10'>
        {
        !products?"loading...":
        products.length === 0 ? "Products not available yet":products?.map((item,index) =><ProductCard key={index} item={item} />)}
    </div>
  )
}

export default Products