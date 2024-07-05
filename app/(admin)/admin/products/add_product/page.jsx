
"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StoredCookie } from "@/constants/functions";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

function AddProduct() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectValues, setSelectValues] = useState({
    category: null,
    ratings: null,
  });

  const { getToken } = StoredCookie();

  const router = useRouter()
  
    
  

  const colors = ["blue", "green", "red", "orange", "yellow", "black", "white"];

  const sizes = ["xxl", "xl", "lg", "md", "sm", "xs"];
  const categories = ["men", "women", "gadgets", "electronics", "furniture"];

  const submitData = (data) => {
    console.log(data, selectValues);
    const { itemName, imageUrl } = data;
    const { category, ratings } = selectValues;
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "imageUrl") {
        formData.append(key, value[0]); // If the key is imageUrl, append the file
      } else {
        formData.append(key, value); // Otherwise, append the value as is
      }
    });
  
    // Append additional values from selectValues
    // formData.append("category", category);
    formData.append("ratings", ratings);
    const token = getToken();
    axios
      .post("http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/api/v1/user/publish-product",formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        router.push('/admin/products')
      })
      .catch((err) => {
        console.log(err);
      });
  
    }
  

  return (
    <div>
      <div className="text-3xl text-gray-400 text-center">Add New Product</div>

      <Card className="p-4">
        <form
          onSubmit={handleSubmit(submitData)}
          className="flex flex-col gap-4 items-center"
        >
          <div className="w-full">
            <Label htmlFor="product_name">Product Name</Label>
            <Input 
              placeholder="Product name" 
              {...register("itemName", { required: "Product name is required" })} 
            />
            {errors.itemName && <span className="text-red-600 text-xs">{errors.itemName.message}</span>}
          </div>
          <div className="w-full">
            <Label htmlFor="stoke_quantity">Stoke Quantity</Label>
            <Input
              placeholder="Stoke quantity"
              {...register("stokeQuantity", { required: "Stoke quantity is required" })}
            />
            {errors.stokeQuantity && <span className="text-red-600 text-xs">{errors.stokeQuantity.message}</span>}
          </div>
          <div className="w-full">
            <Label htmlFor="actual_price">Actual Price</Label>
            <Input 
              placeholder="Actual Price" 
              {...register("actualPrice", { required: "Actual price is required" })} 
            />
            {errors.actualPrice && <span className="text-red-600 text-xs">{errors.actualPrice.message}</span>}
          </div>
          <div className="w-full">
            <Label htmlFor="discount_price">Discount Price</Label>
            <Input
              placeholder="Discount Price"
              {...register("discountPrice", { required: "Discount price is required" })}
            />
            {errors.discountPrice && <span className="text-red-600 text-xs">{errors.discountPrice.message}</span>}
          </div>
          <div className="w-full">
            <Select
              onValueChange={(e) =>
                setSelectValues((prev) => ({ ...prev, ratings: e }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose product ratings" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Choose Rating</SelectLabel>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {!selectValues.ratings && <span className="text-red-600 text-xs">Ratings are required</span>}
          </div>
          <div className="flex flex-col justify-start w-full">
            <Label htmlFor="#">Category</Label>
            <div className="w-full flex gap-3 ">
            
              <Controller
              name="category"
              control={control}
              defaultValue={[]}
              rules={{ required: "At least one category is required" }}
              render={({ field }) => (
                <>
              {categories.map((item, ind) => (
                <div
                  key={ind}
                  className="gap-2 flex items-center justify-center"
                >
                  <input type="checkbox" value={item} 
                  checked={field.value.includes(item)}
                  onChange={(e) => {
                    const newValue = [...field.value];
                    if (e.target.checked) {
                      newValue.push(e.target.value);
                    } else {
                      const index = newValue.indexOf(e.target.value);
                      newValue.splice(index, 1);
                    }
                    field.onChange(newValue);
                  }}
                  />
                  <span>{item}</span>
                </div>
              ))}
              </>
              )}
              />
            </div>
            {errors.category && <span className="text-red-600 text-xs">{errors.category.message}</span>}
          </div>
        
          <div className="flex flex-col justify-start w-full">
            <Label htmlFor="#">Colors</Label>
            <div className="w-full flex gap-3 ">
            <Controller
              name="colors"
              control={control}
              defaultValue={[]}
              rules={{ required: "At least one color is required" }}
              render={({ field }) => (
                <>
              {colors.map((item, ind) => (
                <div
                  key={ind}
                  className="gap-2 flex items-center justify-center"
                >
                  <input type="checkbox" value={item} 
                  checked={field.value.includes(item)}
                  onChange={(e) => {
                    const newValue = [...field.value];
                    if (e.target.checked) {
                      newValue.push(e.target.value);
                    } else {
                      const index = newValue.indexOf(e.target.value);
                      newValue.splice(index, 1);
                    }
                    field.onChange(newValue);
                  }}
                  />
                  <span>{item}</span>
                </div>
              ))}
              </>
              )}
              />
            </div>
            {errors.colors && <span className="text-red-600 text-xs">{errors.colors.message}</span>}
          </div>
          <div className="flex flex-col justify-start w-full">
            <Label htmlFor="#">Sizes</Label>
            <div className="w-full flex gap-3 ">
            
              <Controller
              name="sizes"
              control={control}
              defaultValue={[]}
              rules={{ required: "At least one size is required" }}
              render={({ field }) => (
                <>
              {sizes.map((item, ind) => (
                <div
                  key={ind}
                  className="gap-2 flex items-center justify-center"
                >
                  <input type="checkbox" value={item} 
                  checked={field.value.includes(item)}
                  onChange={(e) => {
                    const newValue = [...field.value];
                    if (e.target.checked) {
                      newValue.push(e.target.value);
                    } else {
                      const index = newValue.indexOf(e.target.value);
                      newValue.splice(index, 1);
                    }
                    field.onChange(newValue);
                  }}
                  />
                  <span>{item}</span>
                </div>
              ))}
              </>
              )}
              />
            </div>
            {errors.sizes && <span className="text-red-600 text-xs">{errors.sizes.message}</span>}
          </div>
          <div className="w-full">
            <Label htmlFor="product_image">Product Image</Label>
            <Input id="picture" type="file" {...register("imageUrl",{required:"Please include an image for the product"})} />
          {
            errors.imageUrl && <span className="text-red-600 text-xs">{errors.imageUrl.message}</span>
          }
          </div>

          <Button className="" type="submit">
            Add Product
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddProduct;
