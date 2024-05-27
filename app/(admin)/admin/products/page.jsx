import { products } from '@/constants'
import Image from 'next/image'
import React from 'react'

function Products() {
  return (
    <div>
      <div>
        <button className='bg-[#9e8484] p-1 my-1 text-white font-bold rounded shadow-md'>Add new product</button>
        <div
  class="relative flex flex-col w-full h-[450px] overflow-scroll text-gray-700 bg-white shadow-md bg-clip-border rounded-none">
  <table class="w-full text-left table-auto min-w-max">
    <thead>
      <tr>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Product ID
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Product Name
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Category
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Created At
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
        </th>
      </tr>
    </thead>
    <tbody>
   { products.map((i,index) =>  <tr key={index} class="even:bg-blue-gray-50/50">
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {i.id}
          </p>
        </td>
        <td class="p-4">
          <div className='flex gap-3 items-center'>
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {i.name}
          </p>
          <img src={i.img} className='object-cover h-10 w-10'/>
          </div>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
           {i.categories}
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
           {i.date}
          </p>
        </td>
        <td class="p-4">
          <a href="#" class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">Edit</a>
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

export default Products