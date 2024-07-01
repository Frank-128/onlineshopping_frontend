"use client"
import { useCart } from '@/context/cart'
import Image from 'next/image'
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { FaEye, FaTrash } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import EmptyCart from '@/components/customer/EmptyCart'

  
function Cart() {
    const cart = useCart((state)=>state.items)
    const removeItem = useCart(state=>state.removeFromCart)
    const setItem = useCart(state=>state.setUpdateCartItem)
    const router = useRouter()

    const totalQuantity = ()=>{
        let total = 0;

        cart.forEach(cartElement => {
            total += cartElement.quantity;
        });

        return total
    }

   

    const calculateTotalAmount = ()=>{
        let total = 0;

        cart.forEach(cartElement => {
            total += (cartElement.quantity * cartElement.item.actualPrice);
        });

        return total
    }

    const quantity = totalQuantity()
    const amount = calculateTotalAmount().toFixed(2)
    console.log(quantity+"__"+amount)
   
  return (
    <div>
        {
            cart.length === 0 ? <div className='w-full h-full flex items-center justify-center flex-col'>
                <Image src={'/empty_cart.webp'} width={500} height={500} className='w-72 h-72' alt='no image' /> 
                <h1 className='md:text-3xl text-lg text-gray-400'>Your cart is empty</h1>
                </div> : 
              <div className='flex md:flex-row flex-col'>
                  <Table className='basis-8/12'>
                
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Product</TableHead>
                    <TableHead>Colors</TableHead>
                    <TableHead>Sizes</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">Total Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                 {cart.map(({item,selectedColors,selectedSizes,quantity},index)=> <TableRow key={index}>
                    <TableCell className="font-medium flex gap-x-2 flex-col md:flex-row ">
                        <Image src={"https://shopping-whv7.onrender.com/images/"+item.imageUrl} width={100} height={100} className='w-16 h-16 object-contain' alt='pid' />
                        <div className='flex flex-col gap-y-1'>
                            <h1 className='text-gray-700  text-sm max-sm:hidden'>{item.title}</h1>
                            <h2 className='text-gray-400 text-xs'>itemId: {item.id}</h2>
                            <div className='flex gap-x-4 items-center'>
                                <button onClick={()=>{setItem({selectedColors,selectedSizes,quantity,index});router.push('/products/'+item.id)}}>
                                    <FaEye className='text-blue-500'/>
                                </button>
                                <button onClick={()=>removeItem(index)}>
                                    <FaTrash className='text-red-500'/>
                                </button>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell >
                        <div className='flex gap-x-2'>

                        {selectedColors.map((col,ind)=><span key={ind} className={`md:min-w-16 md:min-h-16 w-4 h-4  outline-double outline-green-500 rounded-full `} style={{backgroundColor:col}}></span>)}
                        </div>
                        </TableCell>
                    <TableCell>{selectedSizes.map((size,ind)=><span key={ind}>{size}, </span>)}</TableCell>
                    <TableCell>{item.actualPrice}</TableCell>
                    <TableCell>{quantity}</TableCell>
                    <TableCell className="text-right">{item.actualPrice * quantity}</TableCell>
                  </TableRow>)}
                </TableBody>
              </Table> 
                <div className='basis-4/12 border-gray-200 border-l-[0.4px]  md:min-h-[calc(100vh-80px)] md:max-h-[100vh-80px]'>
                    <div className='border-b-gray-200 border-[0.4px] mb-8 text-2xl text-gray-500 text-center'>
                        Shopping Cart Details
                    </div>
                    <div className='w-full'>
                        <div className='border-gray-200 border-b-[0.4px] px-2 text-gray-400 flex justify-between'>
                        <span>Items({quantity})</span>
                        <span>{amount}</span>
                        </div>
                        <div className='px-2 text-gray-400 flex justify-between'>
                        <span>Total</span>
                        <span>{amount}</span>
                        </div>
                        <div className='px-2 text-gray-400 flex justify-between'>
                        <span>VAT</span>
                        <span>0</span>
                        </div>
                        <div className='px-2 text-gray-400 flex justify-between'>
                        <span>Total including VAT</span>
                        <span>{amount}</span>
                        </div>
                    </div>
                   <EmptyCart/>
                    <div className='px-2 text-gray-400 flex justify-between'>
                        <Button onClick={()=>router.push('/cart/checkout')} className='bg-blue-900 text-white'>Proceed to checkout</Button>
                        </div>
                </div>
              </div>
              
                
        }
    </div>
  )
}

export default Cart