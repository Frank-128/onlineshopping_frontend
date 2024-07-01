"use client"

import Badge from "../Badge";
import { Card, CardContent, CardHeader } from "../ui/card";

   
  const TABLE_HEAD = ["Product ID", "Name", "Email", "Amount", "Date","Status"];
   
  const TABLE_ROWS = [
    {
      product_id: "1234",
      name: "Spotify",
      email: "keffline@gmail.com",
      amount: "$2,500",
      date: "Wed 3:00pm",
      status: "paid",
    },
    {
      product_id: "1234",
      name: "Amazon",
      email: "keffline@gmail.com",
      amount: "$5,000",
      date: "Wed 1:00pm",
      status: "paid",
    },
    {
      product_id: "1234",
      name: "Pinterest",
      email: "keffline@gmail.com",
      amount: "$3,400",
      date: "Mon 7:40pm",
      status: "pending",
    },
    {
      product_id: "1234",
      name: "Google",
      email: "keffline@gmail.com",
      amount: "$1,000",
      date: "Wed 5:00pm",
      status: "paid",
    },
    {
      product_id: "1234",
      name: "netflix",
      email: "keffline@gmail.com",
      amount: "$14,000",
      date: "Wed 3:30am",
      status: "cancelled",
    },
    {
        product_id: "1234",
        name: "netflix",
        email: "keffline@gmail.com",
        amount: "$14,000",
        date: "Wed 3:30am",
        status: "cancelled",
      },
      {
        product_id: "1234",
        name: "netflix",
        email: "keffline@gmail.com",
        amount: "$14,000",
        date: "Wed 3:30am",
        status: "cancelled",
      },
      {
        product_id: "1234",
        name: "netflix",
        email: "keffline@gmail.com",
        amount: "$14,000",
        date: "Wed 3:30am",
        status: "cancelled",
      },
      {
        product_id: "1234",
        name: "netflix",
        email: "keffline@gmail.com",
        amount: "$14,000",
        date: "Wed 3:30am",
        status: "cancelled",
      },
      {
        product_id: "1234",
        name: "netflix",
        email: "keffline@gmail.com",
        amount: "$14,000",
        date: "Wed 3:30am",
        status: "cancelled",
      },
      {
        product_id: "1234",
        name: "netflix",
        email: "keffline@gmail.com",
        amount: "$14,000",
        date: "Wed 3:30am",
        status: "cancelled",
      },
  ]; 

export default function ProductTransaction() {
    return (
      <Card className="z-0 lg:w-2/3 w-11/12  rounded">
       
        <CardContent className="overflow-scroll  h-[350px]  hideScroll px-0 ">
         <div className="text-gray-600 p-2">
          Latest orders
         </div>
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <span
                     
                      className="font-normal leading-none opacity-70 text-xs"
                    >
                      {head}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                (
                  {
                   
                    name,
                    amount,
                    date,
                    status,
                    email,
                    product_id,
                  },
                  index,
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
   
                  return (
                    <tr key={index}>
                      <td className={classes}>
                       
                          <span
                            className="font-bold text-gray-500 text-xs"
                          >
                            {product_id}
                          </span>
                       
                      </td>
                      <td className={classes}>
                       
                       <span
                         className="font-bold text-xs text-gray-500"
                       >
                         {name}
                       </span>
                    
                   </td>
                   <td className={classes}>
                       
                       <span
                         className="font-bold text-xs text-gray-500"
                       >
                         {email}
                       </span>
                    
                   </td>
                      <td className={classes}>
                        <span
                          
                          className="font-normal text-xs text-gray-500"
                        >
                          {amount}
                        </span>
                      </td>
                     
                      <td className={classes}>
                        <div className="w-max">
                          <Badge
                            
                            variant={
                              status === "paid"
                                ? "success"
                                : status === "pending"
                                ? "warning"
                                : "error"
                            }
                          >
                            {status}
                            </Badge>
                        </div>
                      </td>
                      <td className={classes}>
                        <span
                          className="font-normal text-xs text-gray-500"
                        >
                          {date}
                        </span>
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