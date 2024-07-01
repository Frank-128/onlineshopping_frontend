"use client"
import DashboardCard from "@/components/admin/DashboardCard";
import ProductTransaction from "@/components/admin/ProductTransaction";
import SalesChart from "@/components/admin/SalesChart";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Admin() {
  const [totals,setTotals] = useState({products:null,users:null,orders:null})

  useEffect(()=>{
    axios.get("localhost:8080/admin/total-orders").then((res)=>{
      setTotals(prev=>({...prev,orders:res}));
    }).catch(err=>console.log(err))

    axios.get("localhost:8080/admin/total-sales").then((res)=>{
      setTotals(prev=>({...prev,sales:res}));
    }).catch(err=>console.log(err))

    axios.get("localhost:8080/admin/total-orders").then((res)=>{
      setTotals(prev=>({...prev,orders:res}));
    }).catch(err=>console.log(err))
  },[])

  return (
    <main className="space-y-4">
      <div className="flex py-2 px-4 flex-1 gap-2 justify-between hideScroll overflow-x-scroll">
        <DashboardCard title={"Total products"} value={totals.products || "loading..."} link="/admin/products" />
        <DashboardCard title={"Total users"} value={totals.users || "loading..."} link="/admin/products" />
        <DashboardCard title={"Total orders"} value={totals.orders || "loading..."} link="/admin/products" />
      </div>
      <div className="flex-col items-center lg:flex-row flex gap-2">
      <ProductTransaction/>
      <SalesChart />
      </div>
    </main>
  );
}



