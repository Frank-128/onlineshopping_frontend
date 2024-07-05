"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StoredCookie } from "@/constants/functions";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";

function SignIn() {
  const router = useRouter();
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const {saveToken} = StoredCookie()


  const {register,handleSubmit,formState:{errors}} = useForm()

  const submitData = ({email,password})=>{
    setLoading(true)
    axios.post('http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/api/v1/base/authenticate',{email:email,password:password}).then((res)=>{
      saveToken(res.data.token)
      const user = jwtDecode(res.data.token)
      console.log(user)
      if(user.role[0].authority === 'ADMIN'){

        return router.push('/admin')
      }
      return router.push('/')
    }).catch((err)=>{
      console.log(err)
      setLoading(false)
      if(err?.response?.status === 401){
        return setError("email or password provided is incorrect")
      }
      return setError('Network error please try again later')
    })
    
    
  }
   

    
  
  

  useEffect(()=>{


    return ()=>{
      setLoading(false)
      setError(null)
    }
  },[])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="font-extrabold mb-8 text-transparent text-3xl bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600 md:hidden">
        Online shopping
      </div>
      <form onSubmit={handleSubmit(submitData)} className=" h-fit p-2 shadow-md md:shadow-none border-slate-200 items-center flex flex-col md:gap-8 gap-5 pt-6 md:pt-10  border-[0.5px] md:h-4/5  w-5/6 md:w-2/3 rounded-md">
        <span className="text-center text-2xl text-gray-800 font-bold">
          Sign In
        </span>
        <span className="text-center text-gray-600">
          dont have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-900 italic hover:opacity-30 "
          >
            signup
          </Link>
        </span>
        {
          error && 
          <span className="text-red-500 font-sans text-xs">{error}</span>
        }
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
         
          {...register("email",{
            required:"Please input your email"
          })} type="email" id="email" placeholder="Email" />
           {errors.email && <span className="text-red-500 font-sans text-xs">
            {errors.email.message}
          </span> }
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input {...register("password",{
            required:"Please input your password"
          })} type="password" id="password" placeholder="Password" />
          {errors.password && <span className="text-red-500 font-sans text-xs">
            {errors.password.message}
          </span> }
        </div>
        <Button

          type="submit"
          className={`max-w-sm w-full p-2 bg-blue-900 ${loading ? "opacity-50 cursor-not-allowed":""}`}
        >
          {!loading?"Sign in":"Signing in ..."}
        </Button>
        <span className="text-center text-gray-600">
          <Link
            href="/reset_password"
            className="text-blue-900 italic hover:opacity-30 "
          >
            forgot password?
          </Link>
        </span>
      </form>
    </div>
  );
}

export default SignIn;
