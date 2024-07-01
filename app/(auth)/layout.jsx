import { Inter } from "next/font/google";
import "../globals.css";
import AuthAnimation from "@/components/AuthAnimation";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Onlineshopping",
  description: "Shop with us at fair price",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"h-screen w-screen flex"}>
       
       <AuthAnimation />
        <section className="md:basis-1/2 flex-1">

        {children}
        </section>
        <Toaster/>
        </body>
    </html>
  );
}
