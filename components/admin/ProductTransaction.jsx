"use client"
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    Chip,
    
  } from "@material-tailwind/react";
   
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
      <Card className="z-0 md:w-2/3 w-11/12 h-[350px]   rounded">
       <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="h-16">
        Latest orders
        </div>
       </CardHeader>
        <CardBody className="overflow-scroll hideScroll px-0 ">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
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
                       
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {product_id}
                          </Typography>
                       
                      </td>
                      <td className={classes}>
                       
                       <Typography
                         variant="small"
                         color="blue-gray"
                         className="font-bold"
                       >
                         {name}
                       </Typography>
                    
                   </td>
                   <td className={classes}>
                       
                       <Typography
                         variant="small"
                         color="blue-gray"
                         className="font-bold"
                       >
                         {email}
                       </Typography>
                    
                   </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {amount}
                        </Typography>
                      </td>
                     
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={status}
                            color={
                              status === "paid"
                                ? "green"
                                : status === "pending"
                                ? "amber"
                                : "red"
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                     
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </CardBody>
        
      </Card>
    );
  }