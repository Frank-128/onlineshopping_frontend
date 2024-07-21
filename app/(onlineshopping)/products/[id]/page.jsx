"use client";
import AddToCartCard from "@/components/customer/AddToCartCard";
import { useCart } from "@/context/cart";
import axios from "axios";
import Image from "next/image";


import React, { useEffect, useRef, useState } from "react";
import {useRouter} from "next/navigation";

function Product({ params }) {
  const selectedCartItem = useCart((state) => state.selectedItem);
  const router = useRouter()
  const [selectedColors, setSelectedColors] = useState(
    selectedCartItem?.selectedColors || []
  );
  const [selectedSizes, setSelectedSizes] = useState(
    selectedCartItem?.selectedSizes || []
  );
  const colors = useRef(selectedColors);
  const sizes = useRef(selectedSizes);

  const [product, setProduct] = useState(null);

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


  useEffect(() => {
    colors.current = selectedColors;
    sizes.current = selectedSizes;
  }, [selectedColors, selectedSizes]);



  const relatedProducts = products?.filter((item)=>item.category?.some(itm => product?.categories.includes(itm))  && item.type === product?.type && item.itemNo !== product?.itemNo);

  useEffect(() => {

      axios
        .get("http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/api/v1/search/item-product?queryStr="+params.id)
        .then((res) => {

          setProduct(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

  }, []);

  console.log(relatedProducts)

  return (
      <div className={'flex-col'}>
        {
          product == null ? "loading..." :
              <div className="flex p-20 gap-4 justify-around md:flex-row flex-col">
                <div>
                  <Image
                      width={500}
                      height={500}
                      alt={product?.imageUrl}
                      src={"http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/images/" + product?.imageUrl}
                      className="w-72 h-72 object-cover"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <b>{product?.itemName}</b>
                  <span className="font-bold">{product?.actualPrice}</span>
                  <div>
                    <span>Color</span>
                    <div className="flex gap-x-2">
                      {product?.colors.map((itm, index) => (
                          <span
                              onClick={() =>
                                  setSelectedColors((prev) => {
                                    if (prev.includes(itm)) {
                                      return prev.filter((item) => item != itm);
                                    } else {
                                      return [...prev, itm];
                                    }
                                  })
                              }
                              key={index}
                              className={`w-12 border-[1px] rounded cursor-pointer  border-gray-200 h-12 ${
                                  selectedColors.includes(itm)
                                      ? "ring-1 ring-green-300 scale-105 shadow-xl"
                                      : ""
                              }`}
                              style={{backgroundColor: itm}}
                          ></span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span>Size</span>
                    <div className="flex gap-x-2">
                      {product?.sizes.map((itm, index) => (
                          <span
                              key={index}
                              onClick={() =>
                                  setSelectedSizes((prev) => {
                                    if (prev.includes(itm)) {
                                      return selectedSizes.filter((item) => item !== itm);
                                    } else {
                                      return [...prev, itm];
                                    }
                                  })
                              }
                              className={`bg-gray-200 w-14 h-14 rounded cursor-pointer text-center place-content-center ${
                                  selectedSizes.includes(itm)
                                      ? "ring-1 ring-green-300 scale-105 shadow-lg"
                                      : ""
                              }`}
                          >
                {itm}
              </span>
                      ))}
                    </div>
                  </div>
                </div>
                <AddToCartCard
                    selectedColors={selectedColors}
                    selectedSizes={selectedSizes}
                    item={product}
                />


              </div>
        }
        <div className={'text-center'}>You might also like</div>
        <div className={'flex my-5 gap-x-3  md:gap-5 items-center justify-center'}>

          {
            relatedProducts?.map((item, index) => (
                <div onClick={()=>router.push('/products/'+item.itemNo)} className={'flex gap-5 rounded shadow-2xl cursor-pointer'} key={index}>
                  <Image
                      width={300}
                      height={300}
                      alt={item?.imageUrl}
                      src={"http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/images/" + item?.imageUrl}
                      className="md:w-36 md:h-36 w-24 h-24 object-cover hover:object-contain"
                  />

                </div>
            ))

          }
        </div>
      </div>
  );
}

export default Product;
