"use client"
import ProductCard from '@/components/customer/ProductCard'
import { StoredCookie } from '@/constants/functions';
import axios from 'axios';

import React, { useEffect, useState } from 'react'

function Products() {
  const { getToken } = StoredCookie();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      axios
        .get("https://shopping-whv7.onrender.com/api/v1/search/items", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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