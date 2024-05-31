"use client"

import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { Card, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';

function AddToCartCard({title,price,}) {
    const quantity = 10;

    return (
        <Card className='place-items-center'>
       
        <CardContent className='place-items-center'>
        <p>Buy Now</p>
        <b className='text-4xl text-gray-800'>{price}</b>
        <div className='flex flex-col gap-4'>
        <span className=''>
           <h2 className='text-blue-900'>Free delivery on Sunday</h2>
           or fastest delivery on wednesday 

        </span>
        <span>
            Order within <span className='text-blue-900'>6 hours 32 minutes</span>
        </span>
        </div>
        <div>
            
        </div>
        </CardContent>
        <CardFooter className='flex flex-col gap-y-4'>
        <div>
                <span>
                    Instock
                </span>
                <span className='flex bg-gray-200 gap-2 p-2 text-gray-700 rounded justify-between w-[13rem] items-center'>
                    <FaMinus className='shadow-lg px-2 w-fit'/>
                    <b>quantity : {quantity}</b>
                    <FaPlus className='shadow-lg px-2 w-fit'/>
                </span>
                
            </div>
        <Button className='w-[13rem] bg-blue-900'>Add to cart</Button>
        </CardFooter>
    </Card>
  )
}

export default AddToCartCard