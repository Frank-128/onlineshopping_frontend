"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

function ResetPassword() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
     <div className="font-extrabold mb-8 text-transparent text-3xl bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600 md:hidden">Online shopping</div>
      <div className=" p-2 shadow-md md:shadow-none border-slate-200 flex flex-col md:gap-8 gap-5 pt-6 md:pt-10  border-[0.5px] md:h-3/4 h-fit w-5/6 md:w-2/3 rounded-md">
        <span className="text-center text-2xl text-gray-800 font-bold">
          Reset password
        </span>
        <span className="text-center text-gray-600">Enter the phonenumber or email associated with your account</span>
        <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email_phone">Email or phone</Label>
        <Input type="texr" id="email_phone" placeholder="Email or phone" />
        </div>
        
        <Link href={'/reset_password/otp'} className="w-full text-center p-2  text-white bg-blue-900 rounded text-xs font-semibold">CONTINUE</Link>
        {/* change to button onclick function */}
      </div>
    </div>
  );
}

export default ResetPassword;
