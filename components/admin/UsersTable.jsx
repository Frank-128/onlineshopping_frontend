"use client";

import { AiOutlineUserAdd } from "react-icons/ai";
import { FaEdit, FaSearch } from "react-icons/fa";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useEffect } from "react";
import axios from "axios";
import { StoredCookie } from "@/constants/functions";

const TABS = [
  {
    label: "Customers",
    value: "customers",
  },
  {
    label: "Sellers",
    value: "sellers",
  },
  {
    label: "Managers",
    value: "managers",
  },
];

const TABLE_HEAD = [
  "Name",
  "Email",
  "Phonenumber",
  "Location",
  "created_at",
  "",
];

const TABLE_ROWS = [
  {
    name: "John Michael",
    email: "john@creative-tim.com",
    phoneNumber: "255745884099",
    role: "Manager",
    location: "Dar es salaam",
    created_at: "23/04/18",
  },
  {
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    phoneNumber: "255745884099",
    role: "Programator",
    location: "Mbeya",
    created_at: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    phoneNumber: "255745884099",
    role: "Executive",
    location: "Arusha",
    created_at: "19/09/17",
  },
  {
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    phoneNumber: "255745884099",
    role: "Programator",
    location: "Mwanza",
    created_at: "24/12/08",
  },
  {
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    phoneNumber: "255745884099",
    role: "Manager",
    location: "Dar es salaam",
    created_at: "04/10/21",
  },
];



export default function UsersTable() {

  const {getToken} = StoredCookie()

  

  useEffect(()=>{
    const token = getToken();
    axios
        .post("https://shopping-whv7.onrender.com/admin/all-users",{
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
         ).then((res)=>{
          console.log(res.data)
         }).catch((err)=>{
          console.log(err)
         })
      
  },[])
  return (
    <Card className="rounded-none z-0 h-fit md:h-[calc(100vh-120px)] overflow-y-scroll hideScroll w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex md:flex-row flex-col-reverse items-center justify-between gap-8">
          <div className="flex md:gap-5 items-center">
            <span variant="h5" color="blue-gray" className="hidden md:block">
              User list
            </span>
            <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="customer">Customers</TabsTrigger>
        <TabsTrigger value="entrepreneur">Entrepreneurs</TabsTrigger>
      </TabsList>

      </Tabs>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button className="flex items-center gap-3" size="sm">
              <AiOutlineUserAdd strokeWidth={2} className="h-4 w-4" /> Add user
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row"></div>
      </CardHeader>
      <CardContent className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <span
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ name, email, location, phoneNumber, created_at }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <span
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </span>
                    </td>
                    <td className={classes}>
                      <span
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {email}
                      </span>
                    </td>
                    <td className={classes}>
                      <span
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {phoneNumber}
                      </span>
                    </td>
                    <td className={classes}>
                      <span
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {location}
                      </span>
                    </td>
                    <td className={classes}>
                      <span
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {created_at}
                      </span>
                    </td>
                    <td className={classes}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline">
                              {" "}
                              <FaEdit className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Edit user</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <span variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </span>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
