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
import Link from "next/link";
import React from "react";

function AddProduct() {
  return (
    <div>

    <div className="text-3xl text-gray-400 text-center">Add New Product</div>

      <Card className="p-4">
        <form className="flex flex-col gap-4 items-center">
          <div className="w-full">
            <Label htmlFor="product_name">Product Name</Label>
            <Input placeholder="Product name" />
          </div>
          <div className="w-full">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Category</SelectLabel>
                  <SelectItem value="1">Women</SelectItem>
                  <SelectItem value="2">Men</SelectItem>
                  <SelectItem value="3">Children</SelectItem>
                  <SelectItem value="4">Electronics</SelectItem>
                  <SelectItem value="5">Toys</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
          <Select>
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
          </div>
          <div className="w-full">
            <Label htmlFor="product_name">Product Image</Label>
            <Input id="picture" type="file" />
          </div>
          <Button>
            <Link href="/admin/products">
            Add Product
            </Link>
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddProduct;
