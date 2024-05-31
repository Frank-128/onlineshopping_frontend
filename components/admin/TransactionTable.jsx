"use client"
import { payments } from "@/constants";

import { FaDownload, FaSearch } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
 
const TABLE_HEAD = ["Order ID", "Amount", "Date", "Status", "Payment method"];
 
const TABLE_ROWS = [
  {
   
    
    amount: "2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
   
    
    amount: "5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
   
    
    amount: "3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "M-PESA",
    accountNumber: "255745884098",
    expiry: "06/2026",
  },
  {
   
    
    amount: "1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "AirtelMoney",
    accountNumber: "255787665544",
    expiry: "06/2026",
  },
  {
   
    
    amount: "14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];
 
export function TransactionsTable() {
  return (
    <Card className="h-full w-full rounded-none">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="text-gray-600">
              Recent Transactions
            </span>
           
          </div>
          <div className="flex w-full shrink-0 gap-2 flex-col-reverse md:flex-row  md:w-max">
            <div className="w-full md:w-72">
              <Input
                placeholder="Search"
                icon={<FaSearch/>}
              />
            </div>
            <Button className="flex items-center gap-3" size="sm">
             <FaDownload/> Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="overflow-scroll h-[350px] px-0">
        <table className="w-full min-w-max  table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <span
                   
                    className="font-normal leading-none opacity-70 text-xs text-gray-500"
                  >
                    {head}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {payments.map(
              (
               i,
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={index}>
                    <td className={classes}>
                      
                        <span
                          className="font-bold text-xs text-gray-500"
                        >
                          {i.order_id}
                        </span>
                      
                    </td>
                    <td className={classes}>
                      <span
                        
                        className="font-normal text-xs text-gray-500"
                      >
                        {i.amount}
                      </span>
                    </td>
                    <td className={classes}>
                      <span
                        
                        className="font-normal text-xs text-gray-500"
                      >
                        {i.created_at}
                      </span>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Badge
                          
                          
                          value={i.status}
                          className={
                            i.status === "Completed"
                              ? "bg-green-300 text-green-700"
                              : i.status === "Pending"
                              ? "bg-amber-300 text-amber-800"
                              : "bg-red-300 text-red-900"
                          }
                        >
                          {i.status}
                          </Badge>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        
                        
                          <Avatar>
      <AvatarImage  src={
                              i.payment_type === "Visa"
                                ? "/payments/visa.jpeg"
                                : i.payment_type === "Mastercard" ?
                                "/payments/mastercard.png"
                                : i.payment_type === "Mpesa" ?
                                "/payments/mpesa.jpeg"
                                : i.payment_type === "Tigo Pesa" ?
                                "/payments/tigo.png"
                                : i.payment_type === "Halopesa" ?
                                "/payments/halopesa.png"
                                : "/payments/airtel.jpg"
                            } alt={i.payment_type} 
                            
                            className="object-cover"
                            />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
                        
                        <div className="flex flex-col">
                        <span
                           
                            className="font-normal text-xs text-gray-400 opacity-70"
                          >
                            {i.payment_type}
                          </span>
                          <span
                           
                            className="font-normal text-gray-600 capitalize"
                          >
                            {i.payment_number}
                          </span>
                          
                        </div>
                      </div>
                    </td>
                  
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardContent>
     
    </Card>
  );
}