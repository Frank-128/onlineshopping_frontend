"use client";
import { Button, Input, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

function SignIn() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
     <div className="font-extrabold mb-8 text-transparent text-3xl bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600 md:hidden">Online shopping</div>
      <div className=" p-2 shadow-md md:shadow-none border-slate-200 flex flex-col md:gap-8 gap-5 pt-6 md:pt-10  border-[0.5px] md:h-3/4 h-fit w-5/6 md:w-2/3 rounded-md">
        <Typography className="text-center text-2xl text-gray-800 font-bold">
          Sign In
        </Typography>
        <Typography className="text-center text-gray-600">dont have an account? <Link href="/signup" className="text-blue-900 italic hover:opacity-30 ">signup</Link></Typography>
        <Input label="email" className="p-2" size="lg" />
        <Input label="password" className="p-2" size="lg" />
        <Button className="w-full bg-blue-900">Sign in</Button>
        <Typography className="text-center text-gray-600"><Link href="/signup" className="text-blue-900 italic hover:opacity-30 ">forgot password?</Link></Typography>
      </div>
    </div>
  );
}

export default SignIn;
