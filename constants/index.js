import { TfiDashboard } from "react-icons/tfi";
import { FiUsers } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegListAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

export const admin_nav_links = [
    {
        name:"dashboard",
        link : "/admin",
        icon:()=><TfiDashboard size={30}/>
    },
    {
        name:"users",
        link : "/admin/users",
        icon:()=><FiUsers size={30} />
    },
    {
        name:"products",
        link : "/admin/products",
        icon:()=><AiOutlineProduct size={30} />
    },
    {
        name:"orders",
        link : "/admin/orders",
        icon:()=><FaRegListAlt size={30}/>
    },
    {
        name:"payments",
        link : "/admin/payments",
         icon:()=><MdPayment size={30}/>
    },

]


export const customer_links = [
  {
    name:"dashboard",
    link : "/",
    icon:()=><TfiDashboard size={30}/>
},
{
    name:"products",
    link : "/products",
    icon:()=><AiOutlineProduct size={30} />
},
{
    name:"My orders",
    link : "/orders",
    icon:()=><FaRegListAlt size={30}/>
},
{
    name:"My payments",
    link : "/payments",
     icon:()=><MdPayment size={30}/>
},
]


export const products = [
    {
      "id": "345523",
      "name": "Trousers",
      "categories": "Clothes,Men,Fashion",
      "date": "23/04/18",
      "img": "/shirt.png"
    },
    {
      "id": "345524",
      "name": "Shirt",
      "categories": "Clothes,Men,Fashion",
      "date": "23/05/18",
      "img": "/shirt.png"
    },
    {
      "id": "345525",
      "name": "Laptop",
      "categories": "Electronics,Computers,Technology",
      "date": "23/06/18",
      "img": "/shirt.png"
    },
    {
      "id": "345526",
      "name": "Smartphone",
      "categories": "Electronics,Mobile,Technology",
      "date": "23/07/18",
      "img": "/shirt.png"
    },
    {
      "id": "345527",
      "name": "Sofa",
      "categories": "Furniture,Living Room,Home",
      "date": "23/08/18",
      "img": "/trousers.png"
    },
    {
      "id": "345528",
      "name": "Dining Table",
      "categories": "Furniture,Dining Room,Home",
      "date": "23/09/18",
      "img": "/trousers.png"
    },
    {
      "id": "345529",
      "name": "Headphones",
      "categories": "Electronics,Audio,Technology",
      "date": "23/10/18",
      "img": "/shirt.png"
    },
    {
      "id": "345530",
      "name": "Watch",
      "categories": "Accessories,Men,Fashion",
      "date": "23/11/18",
      "img": "/shirt.png"
    },
    {
      "id": "345531",
      "name": "Sneakers",
      "categories": "Footwear,Men,Fashion",
      "date": "23/12/18",
      "img": "/shirt.png"
    },
    {
      "id": "345532",
      "name": "Backpack",
      "categories": "Accessories,Bags,Fashion",
      "date": "23/01/19",
      "img": "/trousers.png"
    }
  ]
  

  export const orders = 
  [
    {
      "order_id": "789001",
      "status": "Processing",
      "customer_name": "David Ally",
      "email": "davidally@example.com",
      "created_at": "2023-05-01"
    },
    {
      "order_id": "789002",
      "status": "Shipped",
      "customer_name": "Fatima Hussein",
      "email": "fatimahussein@example.com",
      "created_at": "2023-05-02"
    },
    {
      "order_id": "789003",
      "status": "Delivered",
      "customer_name": "Carlos Mwakasege",
      "email": "carlosmwakasege@example.com",
      "created_at": "2023-05-03"
    },
    {
      "order_id": "789004",
      "status": "Cancelled",
      "customer_name": "Amina Juma",
      "email": "aminajuma@example.com",
      "created_at": "2023-05-04"
    },
    {
      "order_id": "789005",
      "status": "Processing",
      "customer_name": "Hassan Mohamed",
      "email": "hassanmohamed@example.com",
      "created_at": "2023-05-05"
    },
    {
      "order_id": "789006",
      "status": "Shipped",
      "customer_name": "Zainab Abdallah",
      "email": "zainababdallah@example.com",
      "created_at": "2023-05-06"
    },
    {
      "order_id": "789007",
      "status": "Delivered",
      "customer_name": "Juma Mwinyi",
      "email": "jumamwinyi@example.com",
      "created_at": "2023-05-07"
    },
    {
      "order_id": "789008",
      "status": "Cancelled",
      "customer_name": "Rehema John",
      "email": "rehemajohn@example.com",
      "created_at": "2023-05-08"
    },
    {
      "order_id": "789009",
      "status": "Processing",
      "customer_name": "Amos Kimaro",
      "email": "amoskimaro@example.com",
      "created_at": "2023-05-09"
    },
    {
      "order_id": "789010",
      "status": "Shipped",
      "customer_name": "Halima Omari",
      "email": "halimaomari@example.com",
      "created_at": "2023-05-10"
    }
  ]
  

  export const payments = [
    {
      "order_id": "789001",
      "payment_type": "Visa",
      "amount": 150.00,
      "payment_number": "1234 5678 9012 3456",
      "created_at": "2023-05-01",
      "status": "Completed"
    },
    {
      "order_id": "789002",
      "payment_type": "Mpesa",
      "amount": 75.50,
      "payment_number": "0765 4321 0987 6543",
      "created_at": "2023-05-02",
      "status": "Pending"
    },
    {
      "order_id": "789003",
      "payment_type": "Halopesa",
      "amount": 200.00,
      "payment_number": "0876 5432 1098 7654",
      "created_at": "2023-05-03",
      "status": "Failed"
    },
    {
      "order_id": "789004",
      "payment_type": "Mastercard",
      "amount": 99.99,
      "payment_number": "5432 1098 7654 3210",
      "created_at": "2023-05-04",
      "status": "Completed"
    },
    {
      "order_id": "789005",
      "payment_type": "Airtel Money",
      "amount": 45.75,
      "payment_number": "0689 4321 0987 6543",
      "created_at": "2023-05-05",
      "status": "Pending"
    },
    {
      "order_id": "789006",
      "payment_type": "Tigo Pesa",
      "amount": 120.50,
      "payment_number": "0754 3210 9876 5432",
      "created_at": "2023-05-06",
      "status": "Completed"
    },
    {
      "order_id": "789007",
      "payment_type": "Mpesa",
      "amount": 60.00,
      "payment_number": "0978 6543 2109 8765",
      "created_at": "2023-05-07",
      "status": "Pending"
    },
    {
      "order_id": "789008",
      "payment_type": "Visa",
      "amount": 180.25,
      "payment_number": "1029 8765 4321 0987",
      "created_at": "2023-05-08",
      "status": "Failed"
    },
    {
      "order_id": "789009",
      "payment_type": "Halopesa",
      "amount": 150.00,
      "payment_number": "0987 6543 2109 8765",
      "created_at": "2023-05-09",
      "status": "Completed"
    },
    {
      "order_id": "789010",
      "payment_type": "Airtel Money",
      "amount": 85.00,
      "payment_number": "0765 4321 0987 6543",
      "created_at": "2023-05-10",
      "status": "Pending"
    }
  ]
  
  