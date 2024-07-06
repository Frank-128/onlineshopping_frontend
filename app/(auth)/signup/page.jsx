"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    watch,
    formState: { errors },
  } = useForm();

  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const submitData = (data) => {
    setLoading(true);
    clearErrors(); //fix this error clearing logic
    axios
      .post("http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/api/v1/base/signup", {
        ...data,
        role: "CUSTOMER",
      })
      .then((res) => {

        toast({
          title: "Registered",
          className: "bg-green-500 text-white absolute",
          description: "you have been registered succesfully",
        });
        return router.push("/signin");
      })
      .catch((err) => {
        if (
          err?.response?.status === 400 &&
          err?.response?.data.token === "Already user with same email exists"
        ) {
          return setError("email", {
            type: "400",
            message: "This email is already taken",
          });
        }

        console.log(err)

        return setError("networkError", {
          type: "400",
          message: "Network error please try again later",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="w-full h-full  flex-col flex items-center  justify-center">
      <div className="font-extrabold text-transparent text-3xl bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600 md:hidden">
        Online shopping
      </div>

      <form
        method="post"
        onSubmit={handleSubmit(submitData)}
        className="shadow-md md:shadow-none p-2 border-slate-200 flex flex-col gap-4  border-[0.5px] h-fit md:w-2/3 w-[90%] rounded-md"
      >
        <h2 className="text-center text-2xl text-gray-800 font-bold">
          Sign Up
        </h2>
        <h2 className="text-center text-gray-600">
          already have an account?{" "}
          <Link
            href="/signin"
            className="text-blue-900 italic hover:opacity-30 animate duration-75"
          >
            signin
          </Link>
        </h2>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-600 text-xs">{errors.name.message}</span>
          )}
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-600 text-xs">{errors.email.message}</span>
          )}
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="mobile">Phone number</Label>
          <Input
            type="text"
            id="mobile"
            placeholder="Phone number"
            {...register("mobile", {
              required: "Phone number is required",
              validate: (value) => {
                const tanzaniaPhoneNumberRegex = /^\+255[67]\d{8}$/;
                return (
                  tanzaniaPhoneNumberRegex.test(value) ||
                  "Invalid  phone number, it should start with +255XXXXXX"
                );
              },
              minLength: {value:13,message:'Phone number should not be less than 13 charactes'},
              maxLength: {value:13,message:'Phone number should not be more than 13 charactes'},
            })}
          />
          {errors.mobile && (
            <span className="text-red-600 text-xs">
              {errors.mobile.message}
            </span>
          )}
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-red-600 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="c_password">Confirm Password</Label>
          <Input
            type="password"
            id="c_password"
            placeholder="Password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password ||
                "Password and confirm password does not match",
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-600 text-xs">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        {errors.networkError && (
          <span className="text-xs text-red-600 ">
            {errors.networkError.message}
          </span>
        )}

        <Button
          className={`${loading ? " opacity-35" : ""}  w-full bg-blue-900`}
          disabled={loading}
          type="submit"
        >
          {!loading ? "Sign Up" : "Signing up..."}
        </Button>
        <div>
          <p className="text-xs text-gray-500">
            By creating an account, you agree to onlineshopping&apos;s{" "}
            <Link href={"#"} className="text-blue-900">
              Conditions of Use
            </Link>{" "}
            and{" "}
            <Link className="text-blue-900" href={"#"}>
              Privacy Notice
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
