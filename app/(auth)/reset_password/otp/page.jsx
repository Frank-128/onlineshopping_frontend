"use client";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import Link from "next/link";
import React from "react";

function OTP() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
     <div className="font-extrabold mb-8 text-transparent text-3xl bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600 md:hidden">Online shopping</div>
      <div className=" p-2 shadow-md md:shadow-none border-slate-200 flex flex-col md:gap-8 gap-5 pt-6 md:pt-10  border-[0.5px] md:h-3/4 h-fit w-5/6 md:w-2/3 rounded-md">
        <span className="text-center text-2xl text-gray-800 font-bold">
          Verification is necessary
        </span>
        <span className="text-center text-gray-600">
        To continue,complete this verification
step.We have sent one time password
(OTP) to the mail.please enter it
        </span>
        <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        
        
      </InputOTPGroup>
    </InputOTP>
        
        <Link href="/reset_password/new_password" className="w-full text-center p-2 text-white bg-blue-900 rounded text-xs font-semibold">Continue</Link>
        {/* change to button onclick function */}
        <span className="text-blue-900 text-center">Resend OTP</span>
      </div>
    </div>
  );
}

export default OTP;
