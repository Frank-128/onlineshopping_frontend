import { Inter } from "next/font/google";
import "../globals.css";
import CustomerNavbar from "@/components/customer/CustomerNavbar";
import { Toaster } from "@/components/ui/toaster";
import MainCustomer from "@/components/customer/MainCustomer";
import LoadingPage from "@/components/Loading";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Onlineshopping",
  description: "Shop with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomerNavbar/>
        <MainCustomer>
        {children}
          </MainCustomer>

        </body>
    </html>
  );
}
