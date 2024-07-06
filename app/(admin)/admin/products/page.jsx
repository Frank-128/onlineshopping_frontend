"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

function Products() {

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

  console.log(products)

  return (
    <div>
      <div>
        <div className="w-full justify-between flex px-4 md:px-8">
          <Button variant="outline">
            <Link
              href={"/admin/products/add_product"}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-xs"
            >
              Add new product
            </Link>
          </Button>

        </div>
        <div class="relative mt-2 flex flex-col w-full h-[450px] overflow-scroll text-gray-700 bg-white shadow-md bg-clip-border rounded-none">
         { products && <table class="w-full text-left table-auto min-w-max">
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
                    Colors
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
              {products.length == 0 ? (
                <tr>
                  <td colSpan={5} className="p-4">
                    No products yet
                  </td>
                </tr>
              ) : (
                products.map((i, index) => (
                  <tr key={index} class="even:bg-blue-gray-50/50">
                    <td class="p-4">
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {i.itemNo}
                      </p>
                    </td>
                    <td class="p-4">
                      <div className="flex gap-3 items-center">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          {i?.itemName}
                        </p>
                        <Image
                          src={
                            i.imageUrl
                              ? "http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/images/" + i?.imageUrl
                              : "/shopping_cart.png"
                          }
                          width={500}
                          height={500}
                          alt={i.imageUrl}
                          className="object-contain h-10 w-10"
                        />
                      </div>
                    </td>
                    <td class="p-4">
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {i?.category?.map((item, ind) => (
                          <span key={ind}>{item},</span>
                        ))}
                      </p>
                    </td>
                    <td class="p-4">
                      <p class="space-x-6 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {i?.colors?.map((item, ind) => (
                          <span style={{backgroundColor:item}} className="min-h-5 min-w-5 absolute" key={ind}></span>
                        ))}
                      </p>
                    </td>
                    <td class="p-4">
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {i.datePublished}
                      </p>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>}
        </div>
      </div>
    </div>
  );
}

export default Products;

function AddCategory() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FaPlus />
          <span>category</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add new category</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Input placeholder="category" />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Add
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
