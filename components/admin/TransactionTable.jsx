"use client"
import { payments } from "@/constants";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { FaDownload, FaSearch } from "react-icons/fa";
 
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
            <Typography variant="h5" color="blue-gray">
              Recent Transactions
            </Typography>
           
          </div>
          <div className="flex w-full shrink-0 gap-2 flex-col-reverse md:flex-row  md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<FaSearch/>}
              />
            </div>
            <Button className="flex items-center gap-3" size="sm">
             <FaDownload/> Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll h-[350px] px-0">
        <table className="w-full min-w-max  table-auto text-left">
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
                      
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {i.order_id}
                        </Typography>
                      
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {i.amount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {i.created_at}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={i.status}
                          color={
                            i.status === "Completed"
                              ? "green"
                              : i.status === "Pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                          <Avatar
                            src={
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
                            }
                            size="sm"
                            alt={i.payment_type}
                            variant="circle"
                            className="h-full w-full object-cover p-1"
                          />
                        </div>
                        <div className="flex flex-col">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {i.payment_type}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal capitalize"
                          >
                            {i.payment_number}
                          </Typography>
                          
                        </div>
                      </div>
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