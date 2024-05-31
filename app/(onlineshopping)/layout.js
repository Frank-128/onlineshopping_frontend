import { Inter } from "next/font/google";
import "../globals.css";
import CustomerNavbar from "@/components/customer/CustomerNavbar";


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
        <section className="mt-20">
        {children}
        </section>
       
        </body>
    </html>
  );
}
