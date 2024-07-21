"use client";

import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart";
import { gsap, Power4 } from "gsap";

function AddToCartCard({ selectedColors, selectedSizes, item }) {
  const selectedCartItem = useCart((state) => state.selectedItem);
  const updateCart = useCart(state=>state.updateCart);
  const [quantity, setQuantity] = useState(selectedCartItem?.quantity || 0);
  const router = useRouter();
  const { toast } = useToast();
  const addToCart = useCart((state) => state.addToCart);

  const handleSubmit = (type) => {

    if (selectedColors.length === 0 && selectedSizes.length !== 0) {

      return toast({
        title: "Oops",
        variant: "destructive",
        description: "Please select the color in order to proceed",
      });
    } else if (selectedColors.length !== 0 && selectedSizes.length === 0) {
      return toast({
        title: "Oops",
        variant: "destructive",
        description: "Please select the sizes in order to proceed",
      });
    } else if (selectedColors.length === 0 && selectedSizes.length === 0) {
      return toast({
        title: "Oops",
        variant: "destructive",
        description: "Please select the sizes and colors in order to proceed",
      });
    } else if (quantity === 0) {
      return toast({
        title: "Oops",
        variant: "destructive",
        description: "Choose your desired quantity",
      });
    } else {
      if(type === 0){addToCart({ item, selectedColors, selectedSizes, quantity });
      router.push("/products");
      animateIcon();
      return toast({
        title: "Success",
        description: "Order added to cart successfully",
        className: "bg-green-500 text-white",
        duration:3000,
      });

    }

      else
      {
        const updatedItem={ item, selectedColors, selectedSizes, quantity }
        updateCart(selectedCartItem.index,updatedItem)
        router.push("/cart");
        animateIcon();
        return toast({
          title: "Success",
          description: "Order updated  successfully",
          className: "bg-blue-500 text-white",
          duration:3000,
        });
      }

    }
  };
  const animateIcon = () => {
    const icon = "#cartIcon";

    const tl = gsap.timeline();

    tl.to(icon, {
      x: "-=2", // Move left
      duration: 0.1,
      ease: Power4.easeOut,
    })
      .to(icon, {
        x: "+=4", // Move right
        duration: 0.2,
        ease: Power4.easeInOut,
      })
      .to(icon, {
        x: "-=4", // Move left
        duration: 0.2,
        ease: Power4.easeInOut,
      })
      .to(icon, {
        x: "+=2", // Move right to settle
        duration: 0.1,
        ease: Power4.easeIn,
      });

    tl.play();
  };

  return (
    <Card className="place-items-center w-fit">
      <CardContent className="place-items-center">
        <p>Buy Now</p>
        <b className="text-4xl text-gray-800">{item?.actualPrice}</b>
        <div className="flex flex-col gap-4">
          <span className="">
            <h2 className="text-blue-900">Free delivery on Sunday</h2>
            or fastest delivery on wednesday
          </span>
          <span>
            Order within{" "}
            <span className="text-blue-900">6 hours 32 minutes</span>
          </span>
        </div>
        <div></div>
      </CardContent>
      <CardFooter className="flex flex-col gap-y-4">
        <div>
          <span>Instock</span>
          <span className="flex bg-gray-200 gap-2 p-2 text-gray-700 rounded justify-between w-[13rem] items-center">
            <button
              disabled={quantity < 1}
              onClick={() => {
                quantity > 0 && setQuantity(quantity - 1);
              }}
            >
              <FaMinus className="shadow-lg px-2 w-10 " />
            </button>
            <b>quantity : {quantity}</b>
            <button onClick={() => setQuantity(quantity + 1)}>
              <FaPlus className="shadow-lg px-2 w-10 " />
            </button>
          </span>
        </div>
        {selectedCartItem === null ?<Button onClick={()=>handleSubmit(0)} className="w-[13rem] bg-blue-900">
          Add to cart
        </Button>:
        <Button onClick={()=>handleSubmit(1)} className="w-[13rem] bg-blue-900">
        Update
      </Button>
        }
      </CardFooter>
    </Card>
  );
}

export default AddToCartCard;
