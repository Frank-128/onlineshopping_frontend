import { Inter } from "next/font/google";
import "../globals.css";
import CustomerNavbar from "@/components/customer/CustomerNavbar";
import { Toaster } from "@/components/ui/toaster";


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
        <section className="md:mt-20 mt-24">
        {children}
        <Toaster />
        </section>
       
        </body>
    </html>
  );
}
