"use client"
import { orders } from '@/constants'
import { Chip } from '@material-tailwind/react'
import React from 'react'

function Orders() {
  return (
    <div>
    <div>
     
      <div
class="relative flex flex-col w-full h-[450px] overflow-scroll text-gray-700 bg-white shadow-md bg-clip-border rounded-none">
<table class="w-full text-left table-auto min-w-max">
  <thead>
    <tr>
      <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
        <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
         Order ID
        </p>
      </th>
      <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
        <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
          Customer Name
        </p>
      </th>
      <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
        <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
          Status
        </p>
      </th>
      <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
        <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
          Created At
        </p>
      </th>
      
    </tr>
  </thead>
  <tbody>
 { orders.map((i,index) =>  <tr key={index} class="even:bg-blue-gray-50/50">
      <td class="p-4">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          {i.order_id}
        </p>
      </td>
      <td class="p-4">
        <div className='flex flex-col gap-1 items-start'>
        <p class="font-sans text-sm antialiased font-normal  leading-normal text-blue-gray-900">
          {i.customer_name}
        </p>
        <p className='text-xs'>{i.email}</p>
        </div>
      </td>
      <td class="p-4">
        
        <Chip
                          size="sm"
                          variant="ghost"
                          value={i.status}
                          color={
                            i.status === "Delivered"
                              ? "green"
                              : i.status === "Shipped"
                              ? "purple"
                              : i.status === "Processing"
                              ? "amber"
                              : "red"
                          }
                        />
      </td>
      <td class="p-4">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
         {i.created_at}
        </p>
      </td>
     
    </tr>
   )}
   
  </tbody>
</table>
</div>
    </div>
  </div>
  )
}

export default Orders

