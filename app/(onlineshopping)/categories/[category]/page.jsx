"use client"
import BackButton from "@/components/customer/BackButton";
import ProductCard from "@/components/customer/ProductCard";
import { StoredCookie } from "@/constants/functions";
import axios from "axios";
// import { products } from "@/constants/products";
import React, { useEffect, useState } from "react";

function Category({ params }) {
  const { getToken } = StoredCookie();
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
  const category_products = products?.filter((item) =>
    item?.category?.includes(params.category)
  );
  console.log(params,"is the value")
  return <div className="h-full relative">
   <div className="flex items-center bg-white z-50 px-20 h-16 fixed w-screen border-b-[0.2px] border-gray-300 py-2 justify-between">
   <BackButton/>
   <p className="text-center self-center text-gray-700 md:text-2xl text-md">{params.category} &apos;s category</p>
   <div/>
   </div>
    <div className='grid absolute mt-16 w-full my-4 place-items-center md:grid-cols-3 sm:grid-cols-3 grid-cols-1 space-y-3  py-10'>
        {!products?"loading...": category_products?.length === 0 ?<EmptyCategoryProducts/> :category_products?.map((item,index) =><ProductCard key={index} item={item} />)}
    </div>
  </div>;
}

export default Category;


const EmptyCategoryProducts = ()=>{
    return (
        <div>
            No products in this category yet!!
        </div>
    )
}