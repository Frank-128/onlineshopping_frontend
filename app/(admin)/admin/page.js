"use client"
import DashboardCard from "@/components/admin/DashboardCard";
import ProductTransaction from "@/components/admin/ProductTransaction";
import SalesChart from "@/components/admin/SalesChart";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Admin() {
  const [totals,setTotals] = useState({products:null,users:null,orders:null})

  useEffect(()=>{
    axios.get("http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/admin/all-orders").then((res)=>{
      setTotals(prev=>({...prev,orders:res.data.content.length}));
    }).catch(err=>console.log(err))

    axios.get("http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/admin/total-sales").then((res)=>{

        setTotals(prev=>({...prev,sales:res.data}));
    }).catch(err=>console.log(err))

    axios.get("http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/admin/all-users").then((res)=>{
        setTotals(prev=>({...prev,users:res.data.content.length}));

    }).catch(err=>console.log(err))
  },[])

  return (
    <main className="space-y-4">
      <div className="flex py-2 px-4 flex-1 gap-2 justify-between hideScroll overflow-x-scroll">
        <DashboardCard title={"Total sales"} value={totals.sales || "loading..."} link="/admin/payments" />
        <DashboardCard title={"Total users"} value={totals.users || "loading..."} link="/admin/users" />
        <DashboardCard title={"Total orders"} value={totals.orders || "loading..."} link="/admin/orders" />
      </div>
      <div className="flex-col items-center  flex gap-2">
      <ProductTransaction/>
      <SalesChart />
      </div>
    </main>
  );
}



