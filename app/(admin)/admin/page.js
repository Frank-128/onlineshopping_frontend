import DashboardCard from "@/components/admin/DashboardCard";
import ProductTransaction from "@/components/admin/ProductTransaction";
import SalesChart from "@/components/admin/SalesChart";

export default function Home() {
  return (
    <main className="space-y-4">
      <div className="flex py-2 px-4 flex-1 gap-2 justify-between hideScroll overflow-x-scroll">
        <DashboardCard title={"Total products"} value={"120"} link="/admin/products" />
        <DashboardCard title={"Total users"} value={"20"} link="/admin/products" />
        <DashboardCard title={"Total orders"} value={"1200"} link="/admin/products" />
      </div>
      <div className="flex-col items-center md:flex-row flex gap-2">
      <ProductTransaction/>
      <SalesChart />
      </div>
    </main>
  );
}



