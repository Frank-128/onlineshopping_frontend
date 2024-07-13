"use client"
import Badge from "@/components/Badge";
// import { orders } from '@/constants'
import React, {useEffect, useState} from 'react'
import axios from "axios";

function Orders() {
  const [orders,setOrders] = useState(null);

  useEffect(() => {
    axios.get("http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/admin/all-orders").then((res)=>{
      const result =   res.data.content.map(([orderID,name, email, price, status, timestamp]) => ({
        orderID,
        name,
        email,
        price,
        status,
        timestamp,

      }))
      setOrders(result)
    }).catch(err=>console.log(err))
  }, []);
  return (
    <div>
    <div>

      { !orders ?
          <div>
            <p>Loading...</p>
          </div> :
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
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                Action
             </th>

          </tr>
          </thead>
          <tbody>
          {orders.map((i, index) => <tr key={index} class="even:bg-blue-gray-50/50">
                <td class="p-4">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {i.orderID}
                  </p>
                </td>
                <td class="p-4">
                  <div className='flex flex-col gap-1 items-start'>
                    <p class="font-sans text-sm antialiased font-normal  leading-normal text-blue-gray-900">
                      {i.name}
                    </p>
                    <p className='text-xs'>{i.email}</p>
                  </div>
                </td>
                <td class="p-4">

                  <Badge

                      variant={
                        i.status === "Delivered"
                            ? "success"
                            : i.status === "Shipped"
                                ? "primary"
                                : i.status === "ongoing"
                                    ? "warning"
                                    : "red"
                      }
                  >
                    {i.status}
                  </Badge>
                </td>
                <td class="p-4">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {i.timestamp}
                  </p>
                </td>
                <td className='p-4'>
                    <button className='bg-green-100 p-1 text-xs text-green-600'>
                        Confirm
                        </button>

                  </td>

              </tr>
          )}

          </tbody>
        </table>
      </div>}
        </div>
  </div>
  )
}

export default Orders

