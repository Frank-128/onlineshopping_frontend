"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { payment_types } from "@/constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/cart";
import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Checkout() {
  const cart = useCart((state) => state.items);
  const [chosenValue,setChosenValue] = useState("");
  const router = useRouter();


  const handlePayment = ()=>{
    console.log(chosenValue)

    if(chosenValue == ""){
      return 
    }
    else if(chosenValue === "MPesa"){
      return router.push('/cart/checkout/error')
    }else{
      return router.push('/cart/checkout/success')
    }
  }

  const totalQuantity = ()=>{
    let total = 0;

    cart.forEach(cartElement => {
        total += cartElement.quantity;
    });

    return total
}

  const calculateTotalAmount = () => {
    let total = 0;

    cart.forEach((cartElement) => {
      total += cartElement.quantity * cartElement.item.price;
    });

    return total;
  };

  const quantity = totalQuantity();
  const amount = calculateTotalAmount().toFixed(2);

  return (
    <div className="px-10 flex md:flex-row gap-y-2 flex-col py-4">
      <div className="flex items-center flex-col md:basis-4/6">
        <div className="text-2xl  text-gray-500 text-center">
          Shipping address
        </div>
        <form className="border-gray-200 border-[0.6px] min-md:w-full px-2 flex flex-col md:px-10 py-5 shadow-sm md:items-center gap-y-4 md:justify-between ">
          <div className="flex gap-x-5 flex-col md:flex-row justify-between w-full">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input name="email" />
            </div>
            <div>
              <Label htmlFor="email">Phone number</Label>
              <Input name="email" />
            </div>
          </div>
          <div className="flex gap-x-5 flex-col md:flex-row justify-between w-full">
            <div>
              <Label htmlFor="email">First Name</Label>
              <Input name="email" />
            </div>
            <div>
              <Label htmlFor="email">Last Name</Label>
              <Input name="email" />
            </div>
          </div>
          <div className="flex gap-x-5 flex-col md:flex-row justify-between w-full">
            <div>
              <Label htmlFor="email">Country</Label>
              <Input name="email" />
            </div>
            <div>
              <Label htmlFor="email">Province</Label>
              <Input name="email" />
            </div>
          </div>
          <div className="flex gap-x-5 flex-col md:flex-row justify-between w-full">
            <div>
              <Label htmlFor="email">Street</Label>
              <Input name="email" />
            </div>
            <div>
              <Label htmlFor="email">House Number</Label>
              <Input name="email" />
            </div>
          </div>
        </form>
        <div className="text-2xl  text-gray-500 text-center">
          Payment method
        </div>
        <div>
          <Select onValueChange={(e)=>setChosenValue(e)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Payment Method" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {payment_types.map((item, index) => (
                  <SelectItem  key={index} value={item.name}>
                    <div className="flex justify-between items-center w-full gap-x-4">
                      <Image
                        src={item.img}
                        className="w-8 h-8 object-contain"
                        width={100}
                        height={100}
                        alt="payment"
                      />
                      <h1>{item.name}</h1>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Card className="px-4 py-2 basis-2/6">
        <h1 className="text-center text-gray-700 text-2xl">Order summary</h1>
        {cart.map(({ item, quantity }, index) => {
          return (
            <div key={index} className="flex justify-between w-full">
              <span className="font-semibold text-gray-700">{item.title}</span>
              <span>{item.price * quantity}</span>
            </div>
          );
        })}
        <CardFooter className="flex flex-col">
          <div className="flex justify-between gap-x-10 items-center">
          <h1 className="font-bold text-md">Total Amount</h1>
          <h1 className="text-2xl font-bold text-gray-400">{amount}/=</h1>
          </div>
          <div className="flex justify-between gap-x-10 items-center">
          <h1 className="font-bold text-md">Total Number of items</h1>
          <h1 className="text-2xl font-bold text-gray-400">{quantity}/=</h1>
          </div>
          <Button onClick={handlePayment} className="bg-blue-900">Make Payment</Button>
          </CardFooter>
      </Card>
    </div>
  );
}

export default Checkout;
