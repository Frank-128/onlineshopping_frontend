"use client";
import AddToCartCard from "@/components/customer/AddToCartCard";
import { products } from "@/constants/products";
import { useCart } from "@/context/cart";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useEffect, useRef, useState } from "react";

function Product({ params }) {
  const selectedCartItem = useCart((state) => state.selectedItem);
  const [selectedColors, setSelectedColors] = useState(
    selectedCartItem?.selectedColors || []
  );
  const [selectedSizes, setSelectedSizes] = useState(
    selectedCartItem?.selectedSizes || []
  );
  const colors = useRef(selectedColors);
  const sizes = useRef(selectedSizes);
  

  useEffect(() => {
    colors.current = selectedColors;
    sizes.current = selectedSizes;
  }, [selectedColors, selectedSizes]);

  const product = products.find((p) => p.id == params.id);

  return (
    <div className="flex p-20 gap-4 justify-around md:flex-row flex-col">
      <div>
        <Image
          width={500}
          height={500}
          alt={product.image}
          src={product.image}
          className="w-72 h-72 object-contain"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <b>{product.title}</b>
        <span className="font-bold">{product.price}</span>
        <div>
          <span>Color</span>
          <div className="flex gap-x-2">
            {product.colors.map((itm, index) => (
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
                style={{ backgroundColor: itm }}
              ></span>
            ))}
          </div>
        </div>
        <div>
          <span>Size</span>
          <div className="flex gap-x-2">
            {product.sizes.map((itm, index) => (
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
  );
}

export default Product;